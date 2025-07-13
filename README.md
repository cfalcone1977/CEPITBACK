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

## Endpoints

### Obtener todas las películas o filtrar por criterios.
   
## GET /pelicula

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
    "duracion": 139,  
    "poster": "url_poster_1.jpg",  
    "generos": ["Comedia", "Aventura"],  
    "sinopsis": "Las aventuras de Gustave H, el conserje de un famoso hotel europeo..."  
  },  
  {  
    "id": "newIdGenerated",  
    "titulo": "Interestelar",  
    "year": 2014,  
    "director": "Christopher Nolan",  
    "duracion": 249,  
    "poster": "url_poster_interstellar.jpg",  
    "generos": ["Ciencia Ficción", "Drama"],  
    "sinopsis": "Un grupo de exploradores espaciales viaja a través de un agujero de gusano..."  
  }  
]    


**Ejemplo de Respuesta (200 OK - Sin resultados para filtros):**  

{  
  "message": "NO HAY PELICULA/S PARA ESOS FILTROS"  
}  

### Obtener película por índice (posición arreglo)  

## GET /pelicula/:posicion  

**Descripción:** Retorna una película específica basada en su posición (índice numérico) en el array de películas.  

**Parámetros de Ruta:**  
:posicion (obligatorio, number): El índice numérico de la película a obtener (ej. 0 para la primera película, 1 para la segunda, etc.).

**Ejemplo de Solicitud:**  

_http://localhost:3000/pelicula/0_  

**Ejemplo de Respuesta (200 OK):**  

[  
  {  
    "id": "abc1",  
    "titulo": "El Gran Hotel Budapest",  
    "year": 2014,  
    "director": "Wes Anderson",  
    "duracion": 139,  
    "poster": "url_poster_1.jpg",  
    "generos": ["Comedia", "Aventura"],  
    "sinopsis": "Las aventuras de Gustave H, el conserje de un famoso hotel europeo..."  
  }
]

Ejemplo de Respuesta (cuando el indice no existe en el arreglo):

{
  "message": "Pelicula Inexistente"
}

**Códigos de Estado:**  

200 OK: Solicitud exitosa.  
200 OK: Si el índice no existe.  
404 URL mal escrita o inexistente en servidor.
500 Internal Server Error: Error en el servidor.  
  
  
    
    
### Obtener películas por año.  
## GET /pelicula/year/:year  
**Descripción:** Retorna una lista de películas lanzadas en un año específico.  

**Parámetros de Ruta:**  

:year (obligatorio, number): El año de lanzamiento de las películas (ej. 1994).  

**Ejemplo de Solicitud:**  

_http://localhost:3000/pelicula/year/1994_

**Ejemplo de Respuesta (200 OK):**  
[  
  {  
    "id": "def2",  
    "titulo": "Pulp Fiction",  
    "year": 1994,  
    "director": "Quentin Tarantino",  
    "duracion": 234,    
    "poster": "url_poster_2.jpg",  
    "generos": ["Crimen", "Drama"],  
    "sinopsis": "Las vidas de dos sicarios de la mafia, un boxeador, la esposa de un gánster y un par de ladrones se entrelazan..."  
  }  
]  


**Ejemplo de Respuesta (200 OK - Sin resultados):**  
{  
  "message": "No existe/n pelicula/s con ese Año"  
}  
**Códigos de Estado:**  
200 OK: Solicitud exitosa.  
200 OK: No existe/n pelicula/s con ese Año.
500 Internal Server Error: Error en el servidor.    

### Obtener película por ID  
## GET /pelicula/id/:id  
  
**Descripción:** Retorna una película específica basada en su ID único.  
  
**Parámetros de Ruta:**  
:id (obligatorio, string): El ID único de la película a obtener (ej. 119a4ae3-e35f-4b6c-86a7).      

**Ejemplo de Solicitud:**  
  
_http://localhost:3000/pelicula/id/119a4ae3-e35f-4b6c-86a7_  

**Ejemplo de Respuesta (200 OK):**  
  
[  
  {  
    "id": "119a4ae3-e35f-4b6c-86a7",  
    "titulo": "El Gran Hotel Budapest",  
    "year": 2014,  
    "director": "Wes Anderson",  
    "duracion": 139,  
    "poster": "url_poster_1.jpg",  
    "generos": ["Comedia", "Aventura"],  
    "sinopsis": "Las aventuras de Gustave H, el conserje de un famoso hotel europeo..."  
  }  
]  
  
**Ejemplo de Respuesta (si id no existe):**  
{  
  "message": "No existen peliculas con ese ID"  
}  
  
**Códigos de Estado:**
200 OK: Solicitud exitosa.  
200 OK: Si el ID no existe.  
500 Internal Server Error: Error en el servidor.  
  
  
### Agregar una nueva película.  
## POST /pelicula/agregar  

**Descripción:** Agrega una nueva película a la colección. Se espera un objeto Pelicula en el 
cuerpo de la solicitud(body). El id puede ser generado automáticamente por el backend si no se provee, 
o puedes incluirlo si tienes un sistema de IDs predefinido.  

**Cuerpo de la Solicitud (Request Body - application/json):**  
{
  "id": "new-movie-id",  
  "titulo": "El Señor de los Anillos: La Comunidad del Anillo",  
  "year": 2001,  
  "director": "Peter Jackson",  
  "duracion": 258,  
  "poster": "url_poster_lotr.jpg",  
  "generos": ["Aventura", "Fantasía"],  
  "sinopsis": "Un hobbit hereda un anillo mágico y emprende una búsqueda para destruirlo."  
}  

  
**Ejemplo de Solicitud:**
_POST -H "Content-Type: application/json" \_
     -d '{  
           "id": "new-movie-id",  
           "titulo": "El Señor de los Anillos: La Comunidad del Anillo",  
           "year": 2001,  
           "director": "Peter Jackson",  
           "duracion": 258,  
           "poster": "url_poster_lotr.jpg",  
           "generos": ["Aventura", "Fantasía"],  
           "sinopsis": "Un hobbit hereda un anillo mágico y emprende una búsqueda para destruirlo."    
         }' \    
     _http://localhost:3000/pelicula/agregar_  
  
**Ejemplo de Respuesta (200 OK):**  
{  
  "message": "Pelicula agregada exitosamente"  
}  
  
**Códigos de Estado:**  
200 OK: Película agregada exitosamente.  
500 Internal Server Error: Error en el servidor (ej. archivo movies.json no encontrado).  



### Modificar una película existente  
## PUT /pelicula/:id     
  
**Descripción:** Modifica los datos de una película existente identificada por su ID. Se espera un objeto Pelicula (o un subconjunto de sus campos) en el cuerpo de la solicitud(body) con los datos a actualizar.  
  
**Parámetros de Ruta:**  
:id (obligatorio, string): El ID único de la película a modificar (ej. 119a4ae3-e35f-4b6c-86a7).  
  
Cuerpo de la Solicitud (Request Body - application/json):  
{  
  "titulo": "El Gran Hotel Budapest (Versión Extendida)",  
  "duracion": 210   
}  
  
**Ejemplo de Solicitud:**  
curl -X PUT -H "Content-Type: application/json" \  
     -d '{  
           "titulo": "El Gran Hotel Budapest (Versión Extendida)",  
           "duracion": 210,  
         }' \  
     _http://localhost:3000/pelicula/119a4ae3-e35f-4b6c-86a7_
  
**Ejemplo de Respuesta (200 OK):**  
{  
  "message": "Pelicula MODIFICADA EXITOSAMENTE"  
}  
  
**Ejemplo de Respuesta (200 OK):**
{  
  "message": "IDENTIFICADOR INEXISTENTE"  
}  
  
**Códigos de Estado:**  
200 OK: Película modificada exitosamente.  
200 OK: Found: Si el ID de la película no existe.  
500 Internal Server Error: Error en el servidor.  

### Eliminar una película  
## DELETE /pelicula/:id  
  
**Descripción:** Elimina una película de la colección basada en su ID único.  
  
**Parámetros de Ruta:**  
:id (obligatorio, string): El ID único de la película a eliminar (ej.: 119a4ae3-e35f-4b6c-86a7).  

**Ejemplo de Solicitud:**  
  
curl -X DELETE _http://localhost:3000/pelicula/119a4ae3-e35f-4b6c-86a7_  
  
**Ejemplo de Respuesta (200 OK):**  
{  
  "message": "Pelicula ELIMINADA EXITOSAMENTE"  
}  
  
**Ejemplo de Respuesta (404 Not Found):**
{  
  "message": "IDENTIFICADOR INEXISTENTE"  
}  
  
**Códigos de Estado:**  
200 OK: Película eliminada exitosamente.    
200 OK: Si el ID de la película no existe.    
500 Internal Server Error: Error en el servidor.    
  





  
