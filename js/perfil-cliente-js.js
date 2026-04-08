function renderClientProfile(clientId) {
  const client = clientes.find(c => c.id === clientId);
  if (!client) return;

  // 🔝 HEADER
  document.getElementById("client-name").textContent = client.nombre;
  document.getElementById("client-meta").textContent = client.meta;
  document.getElementById("client-sector").textContent = client.industry || client.meta.split("·")[0];
  document.getElementById("client-since").textContent = client.since;
  document.getElementById("client-kam").textContent = client.manager;
  document.getElementById("client-risk").textContent = client.nivel;

  // 🎯 KPIs
  document.getElementById("kpi-otif").textContent = client.otif;
  document.getElementById("kpi-puntualidad").textContent = client.puntual;
  document.getElementById("kpi-nps").textContent = client.nps;
  document.getElementById("kpi-quejas").textContent = client.quejas;

  // 📊 SERVICIOS
  const servicesTbody = document.getElementById("services-tbody");
  servicesTbody.innerHTML = "";

  client.services.forEach(s => {
    const tr = document.createElement("tr");

    // manejar nombres de propiedades distintos (real vs actual)
    const realDate = s.real || s.actual;

    tr.innerHTML = `
      <td>${s.name}</td>
      <td>${s.desc}</td>
      <td>${s.area}</td>
      <td>${s.expected}</td>
      <td class="${s.realClass || ""}">${realDate}</td>
      <td class="${s.slClass || ""}">${s.sl}%</td>
      <td class="${s.npsClass || ""}">${s.nps}/10</td>
    `;

    servicesTbody.appendChild(tr);
  });

  // ⚠️ QUEJAS
  const complaintsTbody = document.getElementById("complaints-tbody");
  complaintsTbody.innerHTML = "";

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

  // 🔢 TOTAL QUEJAS
  document.getElementById("complaints-total").textContent = client.complaints.length;

  // 📝 NOTA
  document.getElementById("complaints-note").textContent =
    client.complaints.length > 5
      ? "⚠️ Alto volumen de quejas. Se recomienda análisis inmediato."
      : "Nivel de quejas dentro de rango controlado.";
}