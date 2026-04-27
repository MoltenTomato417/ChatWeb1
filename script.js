document.addEventListener("DOMContentLoaded", () => {

    // 🔹 SALUDO
    document.getElementById("btnSaludar").addEventListener("click", () => {
        alert("🚀 JavaScript funcionando correctamente");
    });

    // 🔹 CONTACTO
    document.getElementById("btnEnviar").addEventListener("click", () => {
        const nombre = document.getElementById("nombre").value;
        const mensaje = document.getElementById("mensaje");

        if (nombre.trim() === "") {
            mensaje.innerText = "⚠️ Ingresa tu nombre";
        } else {
            mensaje.innerText = "👋 Hola " + nombre + ", bienvenido!";
        }
    });

    // 🔹 SERVICIOS
    const resultado = document.getElementById("resultadoServicio");

    document.getElementById("btnUsuarios").addEventListener("click", () => {
        resultado.innerHTML = `
            <h3>👤 Usuarios</h3>
            <p>Gestión de registro, login y perfiles.</p>
        `;
    });

    document.getElementById("btnReservas").addEventListener("click", () => {
        resultado.innerHTML = `
            <h3>📅 Reservas</h3>
            <p>Creación, consulta y cancelación de reservas.</p>
        `;
    });

    document.getElementById("btnPagos").addEventListener("click", () => {
        resultado.innerHTML = `
            <h3>💳 Pagos</h3>
            <p>Procesamiento de pagos y confirmaciones.</p>
        `;
    });

    // 🔹 SCROLL SUAVE
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
        });
    });

});