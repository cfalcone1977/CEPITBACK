## Administrador de Datos de Películas (Backend)
Este proyecto es un servicio backend desarrollado con Node.js y TypeScript que permite 
gestionar una colección de datos de películas. Proporciona una API RESTful para realizar 
operaciones CRUD (Crear, Leer, Actualizar, Eliminar) y filtrar películas por varios criterios.
La persistencia de los datos se realiza en un archivo JSON local (movies.json).


### Características

* **API RESTful:** Interfaz clara para la gestión de películas.
* **Operaciones CRUD:** Soporte completo para agregar, obtener, modificar y eliminar películas.
* **Búsqueda y Filtrado Avanzado:** Permite buscar películas por ID, posición (índice), año, título, director y género.
* **Persistencia de Datos:** Almacena y recupera datos de películas desde un archivo JSON local.
* **Soporte CORS:** Habilitado para permitir solicitudes desde aplicaciones frontend en diferentes orígenes.
* **Desarrollado con TypeScript:** Proporciona tipado estático para una mayor robustez y mantenibilidad del código. 
* **Arquitectura:** capas (rutas, Controlador, Servicio, Repositorio) para una mejor organización y mantenimiento.


### Tecnologías Utilizadas

* **Node.js:** Entorno de ejecución de JavaScript.
* **Express.js:** Framework web para Node.js.
* **TypeScript:** Lenguaje de programación.
* **CORS:** Middleware de Express.
* **fs (Node.js File System):** Módulo para interactuar con el sistema de archivos local.
* **path (Node.js Path):** Módulo para manejar rutas de archivos.


### Requisitos Previos
**Asegúrate de tener instalado lo siguiente en tu sistema:
Node.js: Versión 14.x o superior.
npm (Node Package Manager) o Yarn: Vienen con Node.js.
Git: Para clonar el repositorio.**


## Instalación
**Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:**

#### Clonar el repositorio:
* Abre tu terminal o línea de comandos y ejecuta:

**_git clone https://github.com/cfalcone1977/CEPITBACK_**

* Luego desde la terminal o línea de comandos, en la carpeta donde clonaste el repositorio, ejecuta:

**_npm run dev_**






## Documentación de la API
La API de películas se expone bajo la ruta base /pelicula.

La URL base para todos los endpoints es:
http://localhost:3000/pelicula

#Endpoints
1. Obtener todas las películas o filtrar por criterios.
   
GET /pelicula

**Descripción:** Retorna una lista de todas las películas. Permite filtrar la colección por 
título, año, director o género mediante parámetros de consulta.
Parámetros de Consulta - filtrado peliculas (Query Parameters - Opcionales):

* **titulo (string):** Filtra películas por título (búsqueda insensible a mayúsculas/minúsculas, permite busqueda por título completo o solo fracción de título).

* **year (number):** Filtra películas por año de lanzamiento.

* **director (string):** Filtra películas por nombre del director (búsqueda insensible a mayúsculas/minúsculas, permite busqueda por nombre completo o solo fracción de nombre).

* **genero (string):** Filtra películas por género (debe coincidir exactamente con uno de los géneros en el array generos).

**Nota:** Si se proporcionan múltiples filtros, se aplican secuencialmente (ej. GET /pelicula?year=2020&genero=Drama buscará películas de 2020 que sean del género Drama).

 **Ejemplo de Solicitud (Obtener todas):**  
_http://localhost:3000/pelicula_

**Ejemplo de Solicitud (Filtrar por año y género):**  
_http://localhost:3000/pelicula?year=2014&genero=Drama_



**Ejemplo de Respuesta (200 OK - Lista completa o filtrada):**
[  
  {  
    "id": "abc1",  
    "titulo": "El Gran Hotel Budapest",   
    "year": 2014,  
    "director": "Wes Anderson",  
    "duracion": "1h 39m",  
    "poster": "url_poster_1.jpg",  
    "generos": ["Comedia", "Aventura"],  
    "sinopsis": "Las aventuras de Gustave H, el conserje de un famoso hotel europeo..."  
  },  
  {  
    "id": "newIdGenerated",  
    "titulo": "Interestelar",  
    "year": 2014,  
    "director": "Christopher Nolan",  
    "duracion": "2h 49m",  
    "poster": "url_poster_interstellar.jpg",  
    "generos": ["Ciencia Ficción", "Drama"],  
    "sinopsis": "Un grupo de exploradores espaciales viaja a través de un agujero de gusano..."  
  }  
]    







  
