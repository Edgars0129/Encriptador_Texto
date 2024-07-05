# Encriptador de Texto

## Descripción
Este proyecto es un encriptador/desencriptador de texto desarrollado con HTML, CSS y JavaScript. Permite a los usuarios ingresar un texto, encriptarlo usando un algoritmo específico, y luego desencriptarlo para recuperar el mensaje original.

## Funcionalidades

### 1. Encriptación de texto
- Los usuarios pueden ingresar texto en un área editable.
- Al hacer clic en el botón "Encriptar", el texto se procesa usando las siguientes reglas:
  - La letra "e" se convierte en "enter"
  - La letra "i" se convierte en "imes"
  - La letra "a" se convierte en "ai"
  - La letra "o" se convierte en "ober"
  - La letra "u" se convierte en "ufat"

### 2. Desencriptación de texto
- Los usuarios pueden ingresar texto encriptado en el área editable.
- Al hacer clic en el botón "Desencriptar", el texto se revierte a su forma original usando las reglas inversas.

### 3. Procesamiento de texto
- El texto ingresado se convierte automáticamente a minúsculas.
- Se eliminan acentos y caracteres especiales.
- Solo se permiten letras minúsculas y espacios.

### 4. Interfaz de usuario
- Diseño responsivo que se adapta a diferentes tamaños de pantalla (desktop, tablet, móvil).
- Área de texto editable para ingresar el mensaje.
- Botones para encriptar y desencriptar.
- Área de resultado que muestra el texto procesado.
- Botón para copiar el resultado al portapapeles.

### 5. Validaciones
- Si no se ingresa texto, se muestra un mensaje indicando que no se encontró ningún mensaje.
- El área de resultado se actualiza dinámicamente según la acción realizada.

### 6. Accesibilidad
- Mensajes de advertencia para guiar al usuario.
- Feedback visual al realizar acciones.

## Tecnologías utilizadas
- HTML5
- CSS3 (con diseño responsivo)
- JavaScript (ES6+)

## Cómo usar
1. Ingresa el texto que deseas encriptar o desencriptar en el área de texto editable.
2. Haz clic en el botón "Encriptar" o "Desencriptar" según lo que desees hacer.
3. El resultado aparecerá en el área de la derecha.
4. Puedes copiar el resultado haciendo clic en el botón "Copiar" que aparece debajo del texto procesado.

## Instalación
1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web.

## Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue para discutir los cambios que te gustaría hacer.
