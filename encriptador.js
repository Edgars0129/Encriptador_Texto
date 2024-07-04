document.addEventListener('DOMContentLoaded', function() {
    const encriptarBtn = document.getElementById('encriptarBtn');
    const desencriptarBtn = document.querySelector('.button-secondary');
    const divEditable = document.querySelector('.div4');
    const div3 = document.querySelector('.div3');
    const div3ContentInitial = div3.innerHTML;

    encriptarBtn.addEventListener('click', function() {
        procesarTexto(encriptar);
    });

    desencriptarBtn.addEventListener('click', function() {
        procesarTexto(desencriptar);
    });

    function procesarTexto(funcion) {
        let texto = divEditable.textContent.trim().toLowerCase();
        if (texto === '') {
            resetDiv3();
            return;
        }
        
        // Eliminar acentos y caracteres especiales
        texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        // Eliminar cualquier caracter que no sea letra minúscula o espacio
        texto = texto.replace(/[^a-z\s]/g, "");
        
        const textoResultado = funcion(texto);
        
        // Actualizar div4 con texto procesado
        divEditable.textContent = textoResultado;
        
        // Actualizar div3 con texto procesado y mostrar botón de copiar
        actualizarDiv3(textoResultado);
    }

    function actualizarDiv3(texto) {
        // Limpiar el contenido actual de div3
        div3.innerHTML = '';

        // Crear y añadir el párrafo con el texto procesado
        const parrafo = document.createElement('p');
        parrafo.textContent = texto;
        div3.appendChild(parrafo);

        // Crear y añadir el botón de copiar
        const copiarBtn = document.createElement('button');
        copiarBtn.textContent = 'Copiar';
        copiarBtn.className = 'button-copy';
        div3.appendChild(copiarBtn);

        // Añadir funcionalidad al botón de copiar
        copiarBtn.addEventListener('click', function() {
            navigator.clipboard.writeText(texto).then(function() {
                alert('Texto copiado al portapapeles');
            }).catch(function(err) {
                console.error('Error al copiar texto: ', err);
            });
        });
    }

    function resetDiv3() {
        div3.innerHTML = div3ContentInitial;
    }

    // Asegurarse de que el contenido inicial esté correcto
    resetDiv3();
});

function encriptar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}