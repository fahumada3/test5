// Inicializar el array de usuarios
let usuarios = [];

// Función para cargar usuarios estáticos desde un JSON
function cargarUsuarios() {
    const usuariosEstaticos = [
        { cedula: "12345678", nombre: "Juan", apellido: "Pérez", email: "juan@example.com", telefono: "1234567890" },
        { cedula: "87654321", nombre: "Ana", apellido: "García", email: "ana@example.com", telefono: "0987654321" },
        { cedula: "11223344", nombre: "Luis", apellido: "Martínez", email: "luis@example.com", telefono: "1231231234" },
    ];

    // Solo agregar usuarios estáticos si el array de usuarios está vacío
    if (usuarios.length === 0) {
        usuarios = usuariosEstaticos;
    }

    actualizarTabla();
}

// Función para actualizar la tabla de usuarios
function actualizarTabla() {
    const tbody = document.getElementById("usersTable").getElementsByTagName("tbody")[0];
    tbody.innerHTML = ""; // Limpiar tabla

    usuarios.forEach(usuario => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = usuario.cedula;
        row.insertCell(1).textContent = usuario.nombre;
        row.insertCell(2).textContent = usuario.apellido;
        row.insertCell(3).textContent = usuario.email;
        row.insertCell(4).textContent = usuario.telefono;
    });
}

// Función para registrar un nuevo usuario
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    const cedula = document.getElementById("cedula").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;

    // Validaciones
    if (!/^\d+$/.test(cedula)) {
        alert("La cédula solo debe contener números.");
        return;
    }

    if (usuarios.some(usuario => usuario.cedula === cedula)) {
        alert("El ID de usuario ya existe.");
        return;
    }

    // Agregar nuevo usuario
    usuarios.push({ cedula, nombre, apellido, email, telefono });
    actualizarTabla();

    // Limpiar el formulario
    document.getElementById("registerForm").reset();
});

// Event listener para el botón "Listar Usuarios"
document.getElementById("loadUsersBtn").addEventListener("click", cargarUsuarios);
