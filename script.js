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

    // 🔥 REDIRECCIÓN A MICROSERVICIOS

    // 👤 Usuarios
    document.getElementById("btnUsuarios").addEventListener("click", () => {
        window.open("http://149.130.186.3:3001", "_blank");
    });

    // 📅 Reservas
    document.getElementById("btnReservas").addEventListener("click", () => {
        window.open("http://149.130.186.3:3002", "_blank");
    });

    // 💳 Pagos
    document.getElementById("btnPagos").addEventListener("click", () => {
        window.open("http://149.130.186.3:3003", "_blank");
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
