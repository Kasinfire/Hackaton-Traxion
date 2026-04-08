/* =========================================
   CONTACTO POR ÁREA - LÓGICA
   ========================================= */

// --- CHIPS: resaltar el seleccionado visualmente ---
const chips = document.querySelectorAll('.chip');

chips.forEach(chip => {
  // Marcar el que ya viene checked (baja)
  const radio = chip.querySelector('input[type="radio"]');
  if (radio.checked) chip.classList.add('selected');

  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('selected'));
    chip.classList.add('selected');
  });
});

// --- CONTACTOS POR ÁREA ---
const areaSelect  = document.getElementById('areaSelect');
const contactInfo = document.getElementById('contactInfo');

const contacts = {
  "Transporte": [
    { icon: '✉️', title: 'Correo Transporte',   value: 'transporte@traxion.com' },
    { icon: '📞', title: 'Teléfono',             value: '+52 55 1111 2222' }
  ],
  "Logística": [
    { icon: '✉️', title: 'Correo Logística',     value: 'logistica@traxion.com' },
    { icon: '📞', title: 'Teléfono',             value: '+52 55 3333 4444' }
  ],
  "Tecnología": [
    { icon: '✉️', title: 'Soporte Técnico',      value: 'soporte@traxion.com' },
    { icon: '📞', title: 'Teléfono',             value: '+52 55 5555 6666' }
  ],
  "Atención al cliente": [
    { icon: '✉️', title: 'Atención al cliente',  value: 'atencion@traxion.com' },
    { icon: '📞', title: 'Teléfono',             value: '+52 55 7777 8888' }
  ],
  "Almacén": [
    { icon: '✉️', title: 'Correo Almacén',       value: 'almacen@traxion.com' },
    { icon: '📞', title: 'Teléfono',             value: '+52 55 9999 0000' }
  ]
};

areaSelect.addEventListener('change', () => {
  const selected = areaSelect.value;
  const items = contacts[selected];

  if (!items) return;

  contactInfo.innerHTML = items.map(item => `
    <div class="contact-option">
      <div class="contact-option__icon">${item.icon}</div>
      <div>
        <h4 class="contact-option__title">${item.title}</h4>
        <p class="contact-option__value">${item.value}</p>
      </div>
    </div>
  `).join('');
});

// --- ENVÍO DEL FORMULARIO ---
document.getElementById('btnEnviar').addEventListener('click', () => {
  const nombre   = document.getElementById('inputNombre').value.trim();
  const correo   = document.getElementById('inputCorreo').value.trim();
  const area     = areaSelect.value;
  const mensaje  = document.getElementById('inputMensaje').value.trim();
  const urgency  = document.querySelector('input[name="urgency"]:checked').value;

  // Validación básica
  if (!nombre || !correo || !area || !mensaje) {
    showToast('⚠️ Por favor completa todos los campos.', '#d98a1e');
    return;
  }

  // Acción según urgencia
  if (urgency === 'critica') {
    showToast('🚨 Caso CRÍTICO enviado. Atención inmediata requerida.', '#d93025');
    updateCriticalBadge();
  } else if (urgency === 'alta') {
    showToast('⚠️ Caso de alta prioridad enviado.', '#f29900');
  } else {
    showToast('✅ Mensaje enviado correctamente.', '#2ea44f');
  }
});

// --- TOAST ---
function showToast(message, color) {
  // Remover toast previo si existe
  const prev = document.querySelector('.toast');
  if (prev) prev.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = message;
  toast.style.background = color;
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 4000);
}

// --- BADGE DE CRÍTICOS ---
function updateCriticalBadge() {
  let badge = document.querySelector('.critical-badge');

  if (!badge) {
    badge = document.createElement('div');
    badge.className = 'critical-badge';
    badge.innerText = '1 CRÍTICO';
    document.body.appendChild(badge);
  } else {
    const count = (parseInt(badge.innerText) || 1) + 1;
    badge.innerText = count + ' CRÍTICOS';
  }
}