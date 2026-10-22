# Tech: Checkout form en el carrito

Ver `spec.md` (mismo directorio) para reglas de negocio y flujo.

## Dependencias nuevas

- `react-hook-form@^7.90.0`: manejo del formulario.
- `zod@^4.6.7`: esquema de validación.
- `@hookform/resolvers@5.9.2`: puente RHF + zod. Pinneada a v5 porque la v6 exige peer `effect@^4` y el árbol del proyecto resuelve `effect@3` (conflicto ERESOLVE).

Justificación: no existía ninguna librería de formularios ni de validación en el proyecto.

## Archivos

| Archivo | Cambio |
|---|---|
| `app/store/store.ts` | Tipos `CheckoutStep` y `CheckoutData`; estado `checkoutStep`, `checkoutData` y acciones `setCheckoutStep` / `setCheckoutData` |
| `app/components/Cart/CheckoutForm.tsx` | Nuevo: formulario con RHF + zod, botón "Volver al carrito", alert de pago 50/50, botón "Pagar" |
| `app/components/Cart/Cart.tsx` | Conmutación de vista según `checkoutStep`, guard de carrito vacío, header dinámico, remoción de `console.log` residual |
| `app/components/Cart/Footer.tsx` | Botón pasa de "Pagar" a "Siguiente" (`setCheckoutStep("details")`); el alert de pago se movió a `CheckoutForm` |
| `app/globals.css` | Keyframes `slide-in-right` / `slide-in-left` en `@theme` |

## Decisiones técnicas

- **Vista activa**: `showCheckout = checkoutStep === "details" && cart.length > 0`. El render conmuta entre `CheckoutForm` y la vista de carrito; el desmonte/monte natural dispara las animaciones de entrada (no se animan salidas).
- **Persistencia del formulario**: suscripción a `watch()` de RHF que sincroniza los valores hacia `checkoutData` del store; `defaultValues` lee del store. Al enviar, se guardan los valores con trim.
- **Validación**: `zodResolver` con `mode: "onTouched"`; `isValid` de `formState` controla el `disabled` del botón "Pagar".
- **Estados del alert**: `showInstructions` es estado local de `CheckoutForm` (igual que estaba en `Footer`); los datos de WhatsApp (`WHATSAPP_NUMBER`, `WHATSAPP_MESSAGE`) se mantienen hardcodeados allí.
- **Accesibilidad**: labels con `htmlFor`, `aria-invalid`, `aria-describedby` para errores, `motion-reduce:animate-none` en las transiciones.
- **Next 16**: todo el cambio vive en componentes `"use client"` existentes; sin APIs nuevas del framework.

## Verificación

- `npm run lint`: 0 errores (1 warning conocido `react-hooks/incompatible-library` por `watch()` de RHF).
- `npm run build`: exitoso.
