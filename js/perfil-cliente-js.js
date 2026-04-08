function renderClientProfile(clientId) {
  const client = clientes.find(c => c.id === clientId);
  if (!client) return;

  // 🔝 HEADER
  document.getElementById("client-name").textContent = client.nombre;
  document.getElementById("client-meta").textContent = client.meta;
  document.getElementById("client-sector").textContent = client.meta.split("·")[0];
  document.getElementById("client-since").textContent = client.since;
  document.getElementById("client-kam").textContent = client.manager;

  const riskEl = document.getElementById("client-risk");
  riskEl.textContent = client.nivel;

  // opcional: color según tipo
  riskEl.className = `badge badge--${client.tipo}`;

  // 📊 KPIs
  document.getElementById("kpi-otif").textContent = client.otif;
  document.getElementById("kpi-puntualidad").textContent = client.puntual;
  document.getElementById("kpi-nps").textContent = client.nps;
  document.getElementById("kpi-quejas").textContent = client.quejas;

  // =========================
  // 🧩 SERVICIOS
  // =========================
  const servicesTbody = document.getElementById("services-tbody");
  servicesTbody.innerHTML = "";

  client.services.forEach(s => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${s.name}</td>
      <td>${s.desc}</td>
      <td>${s.area}</td>
      <td>${s.expected}</td>
      <td class="${s.realClass || ""}">${s.real}</td>
      <td class="${s.slClass || ""}">${s.sl}</td>
      <td class="${s.npsClass || ""}">${s.nps}</td>
    `;

    servicesTbody.appendChild(tr);
  });

  // =========================
  // ⚠️ QUEJAS
  // =========================
  const complaintsTbody = document.getElementById("complaints-tbody");
  complaintsTbody.innerHTML = "";

  if (!client.complaints || client.complaints.length === 0) {
    complaintsTbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align:center; padding: 20px;">
          ✅ Sin quejas abiertas registradas
        </td>
      </tr>
    `;
  } else {
    client.complaints.forEach(c => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${c.title}</td>
        <td>${c.desc}</td>
        <td>${c.area}</td>
        <td>${c.date}</td>
        <td><span class="badge ${c.severityClass || ""}">${c.severity}</span></td>
        <td><span class="badge ${c.statusClass || ""}">${c.status}</span></td>
      `;

      complaintsTbody.appendChild(tr);
    });
  }

  // 🔢 TOTAL QUEJAS
  document.getElementById("complaints-total").textContent =
    client.complaints ? client.complaints.length : 0;

  // 📝 NOTA DINÁMICA
  const noteEl = document.getElementById("complaints-note");

  if (!client.complaints || client.complaints.length === 0) {
    noteEl.textContent = "✅ No hay quejas abiertas registradas.";
  } else if (client.complaints.length > 5) {
    noteEl.textContent = "⚠️ Alto volumen de quejas. Se recomienda análisis inmediato.";
  } else {
    noteEl.textContent = "Nivel de quejas dentro de rango controlado.";
  }

  // =========================
  // 🤖 BOTÓN IA
  // =========================
  const btn = document.getElementById("btn-analizar");

  btn.onclick = () => {
    console.log("Analizando cliente:", client.nombre);
    
    // aquí puedes meter tu prompt después
    alert(`Analizando riesgo de ${client.nombre} con IA...`);
  };
}

const params = new URLSearchParams(window.location.search);
const clientId = params.get("id") || "walmart";

renderClientProfile(clientId);

