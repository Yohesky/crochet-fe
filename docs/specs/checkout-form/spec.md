# Spec: Checkout form en el carrito

## Problema

El carrito solo permite pagar directamente, sin capturar los datos de contacto y entrega del comprador. La vendedora no recibe esa información y el mensaje de pago no aclara el esquema de pago dividido.

## Objetivo

Agregar un paso de checkout dentro del drawer del carrito: formulario de datos personales antes del pago, con validaciones estrictas y foco en el esquema de pago 50/50.

## Flujo de usuario

1. **Carrito**: el botón principal es "Siguiente" (disabled solo si el carrito está vacío).
2. **Click en "Siguiente"** -> el contenido del drawer se reemplaza por el formulario (items y footer se ocultan). Incluye botón "Volver al carrito".
3. **Formulario**: nombre, apellido, teléfono de contacto y dirección. El botón "Pagar" nace `disabled` y solo se habilita cuando el formulario es válido.
4. **Click en "Pagar"** -> se muestra el alert de instrucciones de pago (transferencia + comprobante por WhatsApp), con foco en el abono del 50% por adelantado y el 50% restante al finalizar el producto.

## Reglas de negocio

- Todos los campos son obligatorios; el botón "Pagar" permanece `disabled` mientras haya campos vacíos o inválidos.
- El monto del abono es `ceil(total / 2)` y el restante `total - abono`, ambos mostrados en pesos (formato es-CO).
- El mensaje prellenado de WhatsApp y el número de contacto NO cambian respecto al flujo anterior.
- Los datos del formulario persisten en el store: si el usuario vuelve al carrito y regresa, no los vuelve a escribir.
- Si el carrito se vacía estando en el formulario, la vista vuelve automáticamente al paso carrito.

## Validaciones

| Campo | Regla | Mensaje |
|---|---|---|
| Nombre | min 2 caracteres (post-trim) | "Ingresa tu nombre" |
| Apellido | min 2 caracteres (post-trim) | "Ingresa tu apellido" |
| Teléfono | se descartan espacios, `+`, guiones y paréntesis; quedan 7 a 15 dígitos | "Ingresa un teléfono válido (entre 7 y 15 dígitos)" |
| Dirección | min 5 caracteres (post-trim) | "Ingresa tu dirección completa" |

## Transiciones

Animación tipo wizard horizontal entre pasos: al avanzar el formulario entra desde la derecha (`slide-in-right`); al volver, el carrito entra desde la izquierda (`slide-in-left`), con fade, ~300ms `ease-out`. Se desactivan con `prefers-reduced-motion`.

## Alcance

- Solo frontend. No hay pasarela de pago ni llamadas a API; el flujo sigue siendo manual (transferencia + WhatsApp).
- Retrocompatible: el flujo de agregar/quitar productos no cambia.

Fuera de alcance: persistencia del carrito al recargar, cantidades por producto, envío del formulario a un backend.
