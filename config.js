// Configuración de los botones del portal
const portalConfig = [
    {
        href: "shift-guidelines.html",
        icon: "fa-clock",
        title: "Event Guidelines",
        desc: "Protocols for hosting events within GREGGS UK."
    },
    {
        href: "management-guidelines.html",
        icon: "fa-clipboard-list",
        title: "Management Guidelines",
        desc: "Rules, professionalism, and official procedures for staff."
    },
    // Cuando quieras una página nueva, solo copia y pega un bloque de estos aquí
];

// Función para renderizar el portal automáticamente
function renderPortal() {
    const grid = document.getElementById('portal-grid');
    if (!grid) return;

    grid.innerHTML = portalConfig.map(item => `
        <a href="${item.href}" class="card">
            <i class="fa-solid ${item.icon}"></i>
            <h2>${item.title}</h2>
            <p>${item.desc}</p>
        </a>
    `).join('');
}

// Ejecutar cuando cargue la página
document.addEventListener('DOMContentLoaded', renderPortal);
