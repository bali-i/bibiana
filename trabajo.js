// ===== DATOS DE ESTA PÁGINA: cambia solo estas dos líneas =====
const NOMBRE = "Bibiana Higuera";
const WHATSAPP = "573185935490"; // con 57 adelante, sin espacios
// ==============================================================

document.querySelectorAll("[data-nombre]").forEach(el => el.textContent = NOMBRE);
document.querySelectorAll("[data-tel]").forEach(el => {
  el.textContent = WHATSAPP.slice(2).replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
});
document.querySelectorAll("[data-wa]").forEach(a => {
  a.href = "https://wa.me/" + WHATSAPP + (a.dataset.msg ? "?text=" + encodeURIComponent(a.dataset.msg) : "");
});

// Menú móvil
const burger = document.querySelector(".burger");
const menu = document.getElementById("menu");
burger.addEventListener("click", () => {
  const abierto = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", abierto);
});
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }
});

// Formulario "Afíliate ya" -> WhatsApp
document.getElementById("form-afiliacion").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  const nombre = f.nombre.value.trim();
  const celular = f.celular.value.trim();
  const ciudad = f.ciudad.value;
  const para = f.para.value;
  const error = document.getElementById("error");

  if (!nombre || celular.replace(/\D/g, "").length < 7 || !ciudad) {
    error.textContent = "Completa tu nombre, un celular válido y tu ciudad.";
    return;
  }
  error.textContent = "";

  const mensaje =
    "Hola, quiero afiliarme a Emermédica.\n" +
    "Nombre: " + nombre + "\n" +
    "Celular: " + celular + "\n" +
    "Ciudad: " + ciudad + "\n" +
    "Plan: " + para;

  window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(mensaje), "_blank", "noopener");
});
