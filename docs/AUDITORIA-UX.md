
# Auditoría UX de app-notas

## 1. Objetivo

Revisar y mejorar la aplicación de notas para que sea fácil de usar, comprensible y accesible desde una computadora o un celular.

## 2. Auditoría de las cinco heurísticas de Nielsen

| Heurística | Problema de la versión original | Solución aplicada |
|---|---|---|
| Visibilidad del estado del sistema | No se mostraba claramente el resultado de cada acción. | Se agregaron mensajes al agregar, editar y eliminar notas. |
| Coincidencia con el mundo real | Las acciones podían no ser suficientemente claras. | Se usaron textos sencillos como "Agregar nota" y "Eliminar". |
| Control y libertad del usuario | El usuario podía eliminar una nota por equivocación. | Se agregó confirmación antes de eliminar y una opción para deshacer. |
| Prevención de errores | Se podían intentar guardar notas sin contenido. | Se valida el título y el contenido antes de agregar una nota. |
| Reconocimiento en lugar de recordar | No siempre era fácil identificar qué dato escribir. | Se colocaron etiquetas visibles para el título y el contenido. |

## 3. Aplicación de las leyes de diseño

- **Ley de Fitts:** los botones tienen una altura mínima de 44 píxeles para facilitar su selección, especialmente en celulares.
- **Ley de Hick:** se presentan las acciones principales con nombres claros para facilitar la decisión del usuario.
- **Ley de Miller:** la información se organiza en título, contenido y lista de notas para mostrarla en partes comprensibles.

## 4. Accesibilidad

- Se agregó un label para cada campo.
- Se definieron colores mediante variables CSS en :root.
- Se agregó un indicador de foco visible para navegar con el teclado.
- Los botones tienen una altura mínima de 44 píxeles.
- Se usó un diseño adaptable a pantallas pequeñas.
- Se utilizaron mensajes de estado para informar el resultado de las acciones.

## 5. Evidencias de Lighthouse

- Puntaje de accesibilidad antes del rediseño: pendiente de medir.
- Captura del antes: pendiente de agregar.
- Puntaje de accesibilidad después del rediseño: pendiente de medir.
- Captura del después: pendiente de agregar.

## 6. Conclusión

Con este rediseño aprendí que una aplicación debe ser fácil de entender, prevenir errores y permitir que el usuario controle sus acciones. También comprendí la importancia de mejorar la accesibilidad para facilitar su uso desde diferentes dispositivos.
