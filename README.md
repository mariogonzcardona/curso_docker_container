# Curso Docker Container y Docker Compose.

```markdown
# Curso de Docker Container

Este repositorio contiene ejemplos y material didáctico para un curso de Docker Container. Aquí encontrarás instrucciones básicas y estándar para ejecutar un Dockerfile y un docker-compose.yaml. Este repositorio está elaborado para practicar con la tecnología de Docker.

## Instrucciones básicas

### Ejecutar un Dockerfile

Para ejecutar un Dockerfile, sigue estos pasos:

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/mariogonzcardona/curso_docker_container.git
   ```

2. Navega al directorio donde se encuentra el Dockerfile:

   ```bash
   cd carpeta_donde_se_encuentra_el_Dockerfile
   ```

3. Construye la imagen Docker:

   ```bash
   docker build -t NOMBRE_IMAGEN .
   ```

4. Ejecuta el contenedor:

   ```bash
   docker run -d --name NOMBRE_CONTENEDOR NOMBRE_IMAGEN
   ```

### Ejecutar un docker-compose.yaml

Para ejecutar un `docker-compose.yaml`, sigue estos pasos:

1. Clona este repositorio en tu máquina local (si no lo has hecho aún):

   ```bash
   git clone https://github.com/mariogonzcardona/curso_docker_container.git
   ```

2. Navega al directorio donde se encuentra el `docker-compose.yaml`:

   ```bash
   cd carpeta_donde_se_encuentra_el_docker_compose_yaml
   ```

3. Ejecuta el comando `docker-compose up` para iniciar los servicios definidos en el archivo `docker-compose.yaml`:

   ```bash
   docker-compose up
   ```

   Este comando creará y ejecutará los contenedores según las especificaciones del archivo `docker-compose.yaml`.

---

Este repositorio está elaborado para practicar con la tecnología de Docker. ¡Disfruta aprendiendo Docker Container!
```