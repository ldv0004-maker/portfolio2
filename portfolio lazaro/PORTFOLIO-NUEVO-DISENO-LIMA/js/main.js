// Año automático en el pie de página.
document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("currentYear");
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  // Formulario de contacto: prepara un correo usando mailto.
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("nombreContacto").value.trim();
    const email = document.getElementById("emailContacto").value.trim();
    const subject = document.getElementById("asuntoContacto").value.trim();
    const message = document.getElementById("mensajeContacto").value.trim();

    const recipient = "Lazaroyoscar1@gmail.com"; // Sustituye por tu email.
    const body = `Nombre: ${name}\nCorreo: ${email}\n\n${message}`;
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  });
});
