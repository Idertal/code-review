# Code Review - Generation México

Este repositorio contiene mis ejercicios de revisión de código realizados durante el bootcamp Fullstack de Generation México (Cohorte 55).

## 📂 Ejercicios incluidos:

---

### 1. `code-review-1`
Revisión de un proyecto que consume la API de GitHub para mostrar datos de usuario.

**Cambios realizados:**
- Corrección de uso incorrecto de `await` fuera de `async`.
- Arreglo de interpolaciones mal escritas.
- Corrección de selectores del DOM (`.name`, `.blog`).
- Creación dinámica del campo `.location`.

---

### 2. `code-review-2`
Formulario que valida nombre, edad y nacionalidad para agregar invitados a una lista visual en el DOM.

**Cambios realizados:**
- Se corrigió el selector del formulario (`#form` por `.formulario`).
- Se reemplazó `.prevent()` por `.preventDefault()` en el evento submit.
- Se renombró la variable `e` para evitar pisar el objeto de evento.
- Se corrigió `.classList.added()` por `.add()`.
- Se agregó el `id="lista-de-invitados"` al HTML.

---

## 👤 Autor:
**Arath Ramírez**  
Cohorte 55 · Generation México
