# Spec: Registro de pedidos en la sheet

## Problema

Al pagar, los datos del checkout (contacto, entrega e items) se pierden: no queda registro del pedido para la vendedora.

## Objetivo

Persistir cada pedido como una fila en la pestaña `pedidos` del mismo spreadsheet del catálogo, al momento de hacer click en "Pagar".

## Flujo

1. Click en "Pagar" (form válido) -> `POST /api/orders` con nombre, apellido, teléfono, dirección e items.
2. El server valida, calcula total / abono 50% / restante y agrega la fila.
3. Si el registro es exitoso -> se muestra el alert de instrucciones de pago (50% por adelantado). Si falla -> mensaje de error y se permite reintentar.

## Columnas de la pestaña `pedidos`

`Fecha | Nombre | Apellido | Teléfono | Dirección | Items | Total | Abono 50% | Restante`

- Fecha: `dd/aa/yyyy hh:mm` (locale es-CO, generada en el server).
- Items: títulos de los productos separados por coma (una fila por pedido, los repetidos aparecen repetidos).
- Total / Abono / Restante: calculados en el server (abono = `ceil(total / 2)`).
- La pestaña se crea automáticamente (con headers) en el primer pedido si no existe.

## Reglas

- La escritura pasa siempre por la API propia; el cliente nunca habla directo con Google.
- El body del POST se valida con zod: campos obligatorios y al menos un item; si es inválido, 400.
- Si falla la escritura (ej. service account sin permiso de editor), el endpoint responde 500 y el usuario puede reintentar.
- El botón "Pagar" queda deshabilitado tras un registro exitoso para evitar filas duplicadas.

## Requisitos de configuración (manuales, fuera del código)

- Compartir el spreadsheet con el email de la service account como **Editor** (sin esto la API rechaza la escritura con 403).
- No se requiere crear la pestaña `pedidos` a mano: la app la crea sola.

## Alcance

- Solo escritura de pedidos. No hay confirmación de pago, estados de pedido ni lectura de pedidos desde la UI.

Fuera de alcance: numeración de pedidos, actualización de pedidos existentes, notificaciones push.
