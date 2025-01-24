# Exam2
## Creación de Ramas en GitHub Web

Para crear y gestionar ramas en GitHub Web, sigue estos pasos:

1. **Navegar al Repositorio**:
    - Abre tu navegador y ve al repositorio en GitHub donde deseas crear una nueva rama.

2. **Seleccionar el Menú de Ramas**:
    - En la página principal del repositorio, haz clic en el menú desplegable que muestra la rama actual (generalmente `main` o `master`).

3. **Crear una Nueva Rama**:
    - Escribe el nombre de la nueva rama en el campo de texto que aparece en el menú desplegable.
    - Haz clic en "Create branch" o presiona `Enter` para crear la nueva rama.

4. **Confirmar la Creación**:
    - Verifica que la nueva rama ha sido creada y seleccionada. Deberías ver el nombre de la nueva rama en el menú desplegable.

5. **Realizar Cambios en la Nueva Rama**:
    - Puedes realizar cambios en los archivos del repositorio y estos cambios se guardarán en la nueva rama.

6. **Crear un Pull Request**:
    - Una vez que hayas realizado los cambios necesarios, puedes crear un Pull Request para fusionar los cambios de la nueva rama a la rama principal.
    - Ve a la pestaña "Pull requests" y haz clic en "New pull request".
    - Selecciona la rama que deseas fusionar y sigue las instrucciones para completar el Pull Request.

Siguiendo estos pasos, podrás gestionar ramas en GitHub Web de manera efectiva.

7. **Actualizar tu Rama con Cambios de la Rama Principal**:
    - Para asegurarte de que tu rama tiene los cambios más recientes de la rama principal, ejecuta el siguiente comando en tu terminal:
    ```bash
    git pull origin main
    ```
    - Esto clonará los cambios de la rama principal (`main`) a tu rama actual.