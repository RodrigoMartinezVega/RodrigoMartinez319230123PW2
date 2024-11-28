document.getElementById("formAgregar").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const institucion = document.getElementById("institucion").value;
    const dependencia = document.getElementById("dependencia").value;

    // Enviar los datos al servidor usando fetch
    fetch("/agregarUsuario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, correo, institucion, dependencia })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Usuario agregado exitosamente.");
            cargarUsuarios();  // Recargar la lista de usuarios
        } else {
            alert("Hubo un error al agregar el usuario.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});

// Función para cargar usuarios desde el servidor
function cargarUsuarios() {
    fetch("/obtenerUsuarios")
        .then(response => response.json())
        .then(data => {
            const usuariosLista = document.getElementById("usuariosLista");
            usuariosLista.innerHTML = "";  // Limpiar la lista actual

            data.usuarios.forEach(usuario => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${usuario.id}</td>
                    <td>${usuario.nombre}</td>
                    <td>${usuario.correo}</td>
                    <td>${usuario.institucion}</td>
                    <td>${usuario.dependencia}</td>
                    <td>
                        <button onclick="eliminarUsuario(${usuario.id})">Eliminar</button>
                        <button onclick="mostrarFormularioActualizar(${usuario.id})">Actualizar</button>
                    </td>
                `;
                usuariosLista.appendChild(tr);
            });
        })
        .catch(error => console.error("Error al cargar los usuarios:", error));
}

// Función para eliminar un usuario
function eliminarUsuario(id) {
    fetch(`/eliminarUsuario/${id}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Usuario eliminado exitosamente.");
            cargarUsuarios();  // Recargar la lista de usuarios
        } else {
            alert("Hubo un error al eliminar el usuario.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

// Función para mostrar el formulario de actualización
function mostrarFormularioActualizar(id) {
    const nombre = prompt("Nuevo nombre:");
    const correo = prompt("Nuevo correo:");
    const institucion = prompt("Nueva institución:");
    const dependencia = prompt("Nueva dependencia:");

    // Enviar los datos al servidor para actualizar el usuario
    fetch("/actualizarUsuario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id, nombre, correo, institucion, dependencia })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Usuario actualizado exitosamente.");
            cargarUsuarios();  // Recargar la lista de usuarios
        } else {
            alert("Hubo un error al actualizar el usuario.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

// Cargar los usuarios al iniciar la página
window.onload = cargarUsuarios;
