## Variables de Entorno

1. Navega al directorio del proyecto

2. Copia el archivo .env.template a un nuevo archivo llamado .env.development:

```bash
cp .env.template .env.development
```

**Nota:** Para el modo _test_ copia el archivo .env.template a un nuevo archivo llamado .env.test:

```bash
cp .env.template .env.test
```

3. Abre el archivo .env.development en un editor de texto y proporciona valores para cada variable de entorno.

## Comandos

Tosos los comandos deben ser ejecutados en la terminal de tu sistema o editor:

| Command                      | Action                                                                 |
| :--------------------------- | :--------------------------------------------------------------------- |
| `npm install`                | Instalar las dependencias                                              |
| `npm run dev`                | Levantar el servidor en local `localhost:<<YOUR_PORT>>`                |
| `npm run build`              | Construir la app para producción `./dist/`                             |
| `npm run build:tsc`          | Utilizar el `tsconfig.build.json` para compilar                        |
| `npm run build:clean`        | Borrado seguro la carpeta `./dist/`                                    |
| `npm run build:start`        | Realizar el build y levantar el servidor de producción                 |
| `npm run start`              | Levantar el servidor en producción                                     |
| `npm run test:unit`          | Ejecutar pruebas unitarias en entorno de prueba                        |
| `npm run test:unit:watch`    | Ejecutar pruebas unitarias en modo de observación en entorno de prueba |
| `npm run test:unit:coverage` | Generar informe de cobertura de pruebas unitarias                      |
| `npm run format`             | Realizar el formateo de todo el código                                 |
| `npm run prepare`            | Preparar los pre-hooks para github                                     |
| `npm run lint`               | Preparar el checkeo de formato y errores                               |
| `npm run check`              | Realizar un chequeo de tipos en el proyecto                            |
