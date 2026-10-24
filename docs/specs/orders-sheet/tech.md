# Tech: Registro de pedidos en la sheet

Ver `spec.md` (mismo directorio) para flujo y reglas.

## Cambios en la arquitectura existente

| Archivo | Cambio |
|---|---|
| `src/infrastructure/services/sheetsClient.ts` | Nuevo: cliente compartido de Sheets (auth por service account, `SPREADSHEET_ID`, `getSheets`). Scope elevado de `spreadsheets.readonly` a `spreadsheets` (lectura + escritura) |
| `src/infrastructure/services/products.ts` | Refactor: consume el cliente compartido (sin cambio de comportamiento) |
| `src/infrastructure/services/orders.ts` | Nuevo: `createOrder` (`spreadsheets.values.append` con `USER_ENTERED` / `INSERT_ROWS`); solo inserta la fila, sin crear pestaña ni headers |
| `src/domain/models/IOrder.ts` | Nuevo: `IOrder` (datos de contacto + `customizations?` + `items: Pick<IProduct, "title" \| "price">[]`) |
| `src/domain/repositories/orderRepository.ts` | Nuevo: interfaz `OrderRepository.createOrder` |
| `src/infrastructure/repositories/OrderRepositoryImpl.ts` | Nuevo: envuelve al service |
| `src/application/use-cases/orders.use-cases.ts` | Nuevo: `ordersUseCase` |
| `src/config/container.ts` | Wiring de `orderUseCaseImpl` |
| `app/api/orders/route.ts` | Nuevo `POST`: valida el body con zod (mismas reglas del form) y delega al use case. 400 por body inválido, 500 por fallo de Sheets |
| `app/components/Cart/CheckoutForm.tsx` | `onSubmit` ahora hace `fetch` a `/api/orders`; estados `idle/loading/success/error` en el botón |

## Decisiones técnicas

- **Cálculo server-side**: total, abono y restante se calculan en el service, no en el cliente (el cliente solo muestra los mismos montos con `formatPrice`).
- **Solo inserción**: `createOrder` únicamente hace `append` de la fila; la pestaña `pedidos` y sus headers se asumen preexistentes y los gestiona la vendedora en el spreadsheet (la app no crea ni modifica la estructura de la sheet).
- **Campo opcional**: `customizations` se acepta en el body sin `.min()` para no romper clientes antiguos que no lo envían.
- **Riesgo de montos divergentes**: el abono se calcula con la misma fórmula (`ceil(total/2)`) en cliente y server; ambos usan el mismo total derivado de los items del carrito.
- **Retries**: no hay reintentos automáticos; el usuario reintenta manualmente desde el botón. Duplicados solo posibles si el usuario paga dos veces con éxito (mitigado deshabilitando el botón tras éxito).
- **Next 16**: route handler estándar (`Request` / `Response.json`), sin caching aplicable al POST.

## Verificación

- `npm run lint`: 0 errores (1 warning conocido de RHF).
- `npm run build`: exitoso; ruta `ƒ /api/orders` presente.
- Prueba E2E real requiere: (1) sheet compartida como Editor con la service account, (2) `npm run dev` y pagar con el form.
