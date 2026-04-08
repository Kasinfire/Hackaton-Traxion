const button = document.querySelector('.btn-primary');
button.addEventListener('click', function() {
  const selected = document.querySelector('input[name="urgency"]:checked').value;

  if (selected === 'critica') {
    showAlert('🚨 Caso CRÍTICO enviado. Atención inmediata requerida.', 'critical');
    updateBadge();
  } else if (selected === 'alta') {
    showAlert('⚠️ Caso de alta prioridad enviado.', 'high');
  } else {
    showAlert('✅ Mensaje enviado correctamente.', 'normal');
  }
});

function showAlert(message, type) {
  const alert = document.createElement('div');
  alert.innerText = message;
  alert.style.position = 'fixed';
  alert.style.bottom = '20px';
  alert.style.right = '20px';
  alert.style.padding = '14px 18px';
  alert.style.borderRadius = '10px';
  alert.style.color = 'white';
  alert.style.fontWeight = 'bold';
  alert.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';

  if (type === 'critical') alert.style.background = '#d93025';
  else if (type === 'high') alert.style.background = '#f29900';
  else alert.style.background = '#2ea44f';

  document.body.appendChild(alert);

  setTimeout(() => alert.remove(), 4000);
}

// Badge simulado tipo dashboard
function updateBadge() {
  let badge = document.getElementById('criticalBadge');
  if (!badge) {
    badge = document.createElement('div');
    badge.id = 'criticalBadge';
    badge.innerText = '1 CRÍTICO';
    badge.style.position = 'fixed';
    badge.style.top = '20px';
    badge.style.right = '20px';
    badge.style.background = '#d93025';
    badge.style.color = 'white';
    badge.style.padding = '10px 16px';
    badge.style.borderRadius = '20px';
    badge.style.fontWeight = 'bold';
    badge.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    document.body.appendChild(badge);
  } else {
    let count = parseInt(badge.innerText) || 1;
    count++;
    badge.innerText = count + ' CRÍTICOS';
  }
}

/* TIPOS DE CONTACTOS */
const areaSelect = document.getElementById('areaSelect');
const contactInfo = document.getElementById('contactInfo');

const contacts = {
  "Transporte": `
    <div class="contact-option"><h4>Correo Transporte</h4><p>transporte@empresa.com</p></div>
    <div class="contact-option"><h4>Teléfono</h4><p>+52 55 1111 2222</p></div>
  `,
  "Logística": `
    <div class="contact-option"><h4>Correo Logística</h4><p>logistica@empresa.com</p></div>
    <div class="contact-option"><h4>Teléfono</h4><p>+52 55 3333 4444</p></div>
  `,
  "Tecnología": `
    <div class="contact-option"><h4>Soporte Técnico</h4><p>soporte@empresa.com</p></div>
    <div class="contact-option"><h4>Teléfono</h4><p>+52 55 5555 6666</p></div>
  `,
  "Atención al cliente": `
    <div class="contact-option"><h4>Atención al cliente</h4><p>atencion@empresa.com</p></div>
    <div class="contact-option"><h4>Teléfono</h4><p>+52 55 7777 8888</p></div>
  `,
  "Almacén": `
  <div class="contact-option"><h4>Correo Almacén</h4><p>almacen@empresa.com</p></div>
  <div class="contact-option"><h4>Teléfono</h4><p>+52 55 9999 0000</p></div>
`
};

areaSelect.addEventListener('change', () => {
  const selected = areaSelect.value;
  contactInfo.innerHTML = contacts[selected] || '';
});