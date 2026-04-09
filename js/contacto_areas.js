/* =========================================
   CONTACTO POR ÁREA - LÓGICA PRINCIPAL
   ========================================= */

// --- SISTEMA DE TOAST (Notificaciones) ---

let toastQueue = [];
let isShowingToast = false;

function showToast(message, type = 'normal') {
  toastQueue.push({ message, type });
  if (!isShowingToast) processQueue();
}

function processQueue() {
  if (toastQueue.length === 0) {
    isShowingToast = false;
    return;
  }

  isShowingToast = true;
  const { message, type } = toastQueue.shift();

  // Eliminar toast anterior si existe
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const colors = {
    critical: '#d93025',
    high:     '#f29900',
    warning:  '#5f6368',
    normal:   '#2ea44f',
  };

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    padding: 14px 20px;
    border-radius: 10px;
    color: white;
    font-weight: 600;
    font-size: 0.875rem;
    font-family: 'Inter', sans-serif;
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
    z-index: 9999;
    max-width: 340px;
    line-height: 1.45;
    background: ${colors[type] ?? colors.normal};
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.35s ease, transform 0.35s ease;
    pointer-events: none;
  `;

  document.body.appendChild(toast);

  // Fade-in
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    });
  });

  // Fade-out y siguiente en cola
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    setTimeout(() => {
      toast.remove();
      processQueue();
    }, 380);
  }, 3800);
}


// --- BADGE CRÍTICO ---

function updateCriticalBadge() {
  let badge = document.getElementById('criticalBadge');

  if (!badge) {
    badge = document.createElement('div');
    badge.id = 'criticalBadge';
    badge.className = 'critical-badge';
    badge.dataset.count = '1';
    badge.innerText = '1 CRÍTICO';
    badge.style.cssText += `
      opacity: 0;
      transform: scale(0.8);
      transition: opacity 0.3s ease, transform 0.3s ease;
    `;
    document.body.appendChild(badge);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        badge.style.opacity = '1';
        badge.style.transform = 'scale(1)';
      });
    });
  } else {
    const count = (parseInt(badge.dataset.count) || 1) + 1;
    badge.dataset.count = count;
    badge.innerText = `${count} CRÍTICO${count > 1 ? 'S' : ''}`;

    // Efecto pulso al actualizar
    badge.style.transform = 'scale(1.15)';
    setTimeout(() => { badge.style.transform = 'scale(1)'; }, 180);
  }
}


// --- VALIDACIÓN DEL FORMULARIO ---

function validateForm() {
  const nombre  = document.getElementById('inputNombre')?.value.trim();
  const correo  = document.getElementById('inputCorreo')?.value.trim();
  const area    = document.getElementById('areaSelect')?.value;
  const mensaje = document.getElementById('inputMensaje')?.value.trim();
  const urgency = document.querySelector('input[name="urgency"]:checked');

  if (!nombre) {
    showToast('⚠️ Por favor, escribe tu nombre.', 'warning');
    document.getElementById('inputNombre')?.focus();
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!correo || !emailRegex.test(correo)) {
    showToast('⚠️ Ingresa un correo electrónico válido.', 'warning');
    document.getElementById('inputCorreo')?.focus();
    return false;
  }

  if (!area) {
    showToast('⚠️ Selecciona un área antes de enviar.', 'warning');
    document.getElementById('areaSelect')?.focus();
    return false;
  }

  if (!mensaje) {
    showToast('⚠️ El mensaje no puede estar vacío.', 'warning');
    document.getElementById('inputMensaje')?.focus();
    return false;
  }

  if (!urgency) {
    showToast('⚠️ Selecciona un nivel de urgencia.', 'warning');
    return false;
  }

  return urgency.value;
}


// --- ENVÍO DEL FORMULARIO ---

const btnEnviar = document.getElementById('btnEnviar');

if (btnEnviar) {
  btnEnviar.addEventListener('click', function (e) {
    e.preventDefault();

    const urgencyValue = validateForm();
    if (!urgencyValue) return;

    if (urgencyValue === 'critica') {
      showToast('🚨 Caso CRÍTICO enviado. Atención inmediata requerida.', 'critical');
      updateCriticalBadge();
    } else if (urgencyValue === 'alta') {
      showToast('⚠️ Caso de alta prioridad enviado correctamente.', 'high');
    } else {
      showToast('✅ Mensaje enviado correctamente.', 'normal');
    }
  });
}


// --- CONTACTO POR ÁREA ---

const contacts = {
  "Transporte": `
    <div class="contact-option">
      <div class="contact-option__icon">✉️</div>
      <div>
        <h4 class="contact-option__title">Correo Transporte</h4>
        <p class="contact-option__value">transporte@empresa.com</p>
      </div>
    </div>
    <div class="contact-option">
      <div class="contact-option__icon">📞</div>
      <div>
        <h4 class="contact-option__title">Teléfono</h4>
        <p class="contact-option__value">+52 55 1111 2222</p>
      </div>
    </div>
  `,
  "Logística": `
    <div class="contact-option">
      <div class="contact-option__icon">✉️</div>
      <div>
        <h4 class="contact-option__title">Correo Logística</h4>
        <p class="contact-option__value">logistica@empresa.com</p>
      </div>
    </div>
    <div class="contact-option">
      <div class="contact-option__icon">📞</div>
      <div>
        <h4 class="contact-option__title">Teléfono</h4>
        <p class="contact-option__value">+52 55 3333 4444</p>
      </div>
    </div>
  `,
  "Tecnología": `
    <div class="contact-option">
      <div class="contact-option__icon">✉️</div>
      <div>
        <h4 class="contact-option__title">Soporte Técnico</h4>
        <p class="contact-option__value">soporte@empresa.com</p>
      </div>
    </div>
    <div class="contact-option">
      <div class="contact-option__icon">📞</div>
      <div>
        <h4 class="contact-option__title">Teléfono</h4>
        <p class="contact-option__value">+52 55 5555 6666</p>
      </div>
    </div>
  `,
  "Atención al cliente": `
    <div class="contact-option">
      <div class="contact-option__icon">✉️</div>
      <div>
        <h4 class="contact-option__title">Atención al cliente</h4>
        <p class="contact-option__value">atencion@empresa.com</p>
      </div>
    </div>
    <div class="contact-option">
      <div class="contact-option__icon">📞</div>
      <div>
        <h4 class="contact-option__title">Teléfono</h4>
        <p class="contact-option__value">+52 55 7777 8888</p>
      </div>
    </div>
  `,
  "Almacén": `
    <div class="contact-option">
      <div class="contact-option__icon">✉️</div>
      <div>
        <h4 class="contact-option__title">Correo Almacén</h4>
        <p class="contact-option__value">almacen@empresa.com</p>
      </div>
    </div>
    <div class="contact-option">
      <div class="contact-option__icon">📞</div>
      <div>
        <h4 class="contact-option__title">Teléfono</h4>
        <p class="contact-option__value">+52 55 9999 0000</p>
      </div>
    </div>
  `
};

const areaSelect  = document.getElementById('areaSelect');
const contactInfo = document.getElementById('contactInfo');

if (areaSelect) {
  areaSelect.addEventListener('change', () => {
    const selected = areaSelect.value;
    if (contactInfo) {
      contactInfo.innerHTML = contacts[selected] || '';
    }
  });
}