// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un amigo a la lista
 */
function agregarAmigo() {
    // Obtener el valor del input
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre válido.');
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    inputAmigo.value = '';

    // Actualizar la lista visible
    actualizarListaAmigos();
}

/**
 * Función para actualizar la lista de amigos en el HTML
 */
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    listaAmigos.innerHTML = '';

    // Recorrer el array y crear elementos para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        // Crear un elemento de lista
        const itemLista = document.createElement('li');
        
        // Establecer el texto del elemento con el nombre del amigo
        itemLista.textContent = amigos[i];
        
        // Agregar el elemento a la lista
        listaAmigos.appendChild(itemLista);
    }
}

/**
 * Función para sortear un amigo aleatorio
 */
function sortearAmigo() {
    // Verificar que haya amigos en la lista
    if (amigos.length === 0) {
        alert('Necesitas agregar al menos un amigo para poder sortear.');
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre del amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡Tu amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;
}