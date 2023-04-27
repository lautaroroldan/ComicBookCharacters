# API de Personajes de Cómics

<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="https://i0.wp.com/comikonistanbul.com/wp-content/uploads/2017/08/cizgi.png" alt="Comic Book Icon" width="200"></a>
  <br>
  Comic Book API
  <br>
</h1>

Esta API proporciona información sobre personajes de cómics de DC y Marvel. La API utiliza Express.js y se ejecuta en el puerto 8080.

## Cómo ejecutar el proyecto

Para correr este proyecto, debes tener instalado Node.js en tu computadora. Luego, sigue estos pasos:

1. Clona este repositorio en tu computadora utilizando `git clone https://github.com/lautaroroldan/ComicBookCharacters.git`.

2. Abre la carpeta del proyecto en tu terminal.

3. Ejecuta `npm install` para instalar las dependencias del proyecto.

4. Ejecuta el siguiente comando para iniciar la aplicación:

   ```
   node index.js
   ```

   Esto iniciará el servidor y podrás acceder a la aplicación en `http://localhost:8080` en tu navegador.

## Peticiones

- `GET /api/characters` - Devuelve una lista de todos los personajes de cómics disponibles.

- `GET /api/characters/:id` - Devuelve un personaje de cómic con un ID específico.

- `POST /api/characters` - Agrega un nuevo personaje de cómic a la lista de personajes de cómics.

- `DELETE /api/characters/:id` - Elimina un personaje de cómic con un ID específico de la lista de personajes de cómics.

- `GET /api/characters/universe/:universe` - Devuelve una lista de todos los personajes de cómics de un universo específico (DC o Marvel).

## Ejemplos

### Obtener todos los personajes de cómics

```
GET /api/characters
```

Respuesta:
```
[
    { id: 1, name: 'Flash', universe: 'DC' },
    { id: 2, name: 'Superman', universe: 'DC' },
    { id: 3, name: 'Robin', universe: 'DC' },
    { id: 4, name: 'Batman', universe: 'DC' },
    { id: 5, name: 'Doctor Strange', universe: 'Marvel' },
    { id: 6, name: 'Iron Man', universe: 'Marvel' },
    { id: 7, name: 'Captain America', universe: 'Marvel' },
]
```

### Obtener un personaje de cómic por ID

```
GET /api/characters/2
```

Respuesta:
```
{ id: 2, name: 'Superman', universe: 'DC' }
```

### Agregar un nuevo personaje de cómic

```
POST /api/characters
```
Cuerpo:
```
{
    "name": "Wonder Woman",
    "universe": "DC"
}
```

Respuesta:
```
{ id: 8, name: 'Wonder Woman', universe: 'DC' }
```

### Eliminar un personaje de cómic por ID

```
DELETE /api/characters/3
```

Respuesta:
```
{ id: 3, name: 'Robin', universe: 'DC' }
```

### Obtener todos los personajes de cómics de un universo específico

```
GET /api/characters/universe/Marvel
```

Respuesta:
```
[
    { id: 5, name: 'Doctor Strange', universe: 'Marvel' },
    { id: 6, name: 'Iron Man', universe: 'Marvel' },
    { id: 7, name: 'Captain America', universe: 'Marvel' }
]
```

## Notas

- Todos los datos se almacenan en memoria y se eliminan al detener el servidor.

- Para agregar o eliminar personajes de cómics, es necesario utilizar una herramienta de prueba de API como Postman o cURL.

- Si se intenta buscar un personaje de cómic que no existe o se elimina un personaje de cómic que no existe, se devuelve un mensaje de error.
