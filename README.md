# Reloj Digital

Página estática en español, creada únicamente con HTML, CSS y JavaScript. Sin dependencias, compilación, API ni servidor de aplicación.

## Abrir

Abre `index.html` en un navegador. Para una vista local por HTTP, desde esta carpeta ejecuta `python3 -m http.server 8000` y abre `http://localhost:8000`.

## Publicar con GitHub Pages

1. Crea un repositorio y sube el CONTENIDO de esta carpeta, dejando `index.html` en la raíz.
2. En Settings → Pages, selecciona Deploy from a branch.
3. Selecciona la rama donde subiste los archivos y la carpeta `/ (root)`.
4. Guarda y espera a que GitHub muestre la dirección publicada.

Las rutas son relativas, por lo que funcionan tanto en un dominio principal como bajo una ruta de repositorio.

## Editar

- `index.html`: presentación, objetivos, práctica, aplicación y conclusiones.
- `styles.css`: diseño y comportamiento responsive.
- `script.js`: veinte temas teóricos, componentes e interacciones.
- `assets/`: fotos de referencia del kit y esquema propuesto.

El contenido describe el montaje como trabajo en proceso, sin inventar resultados ni porcentajes. Las imágenes son referencias del kit. El esquema es una propuesta sin simulación y requiere comparación con la PCB y el firmware. La teoría fue redactada y corregida para la página; no se reproducen atribuciones bibliográficas sin verificar.

La alimentación propuesta es de 5 V regulados. El capacitor de 100 nF del esquema se identifica como una adición, no como una pieza confirmada del kit.
