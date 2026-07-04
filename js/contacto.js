document.addEventListener("DOMContentLoaded", () => {
    // 1. Capturamos el formulario por su ID (asegurate de que tu <form> en el HTML tenga este id)
    const formulario = document.getElementById("formulario-contacto");

    // Verificamos que el formulario exista en la página actual para que no tire error en otras vistas
    if (formulario) {
        formulario.addEventListener("submit", (e) => {
            // 2. Fundamental: Prevenimos que el navegador recargue la página
            e.preventDefault(); 

            // 3. Acá capturamos lo que el usuario escribió (ejemplo con un input de id "email")
            // const email = document.getElementById("email").value;

            // 4. Lógica de "Silicon Valley": Mostrar mensaje de éxito, validar, o mandarlo a una API
            console.log("¡Formulario procesado y listo para enviar!");
            alert("Gracias por contactarte. Te responderemos a la brevedad.");

            // 5. Limpiamos los campos para que quede prolijo
            formulario.reset(); 
        });
    }
});