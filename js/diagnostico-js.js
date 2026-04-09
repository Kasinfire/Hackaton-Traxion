function renderCliente(clientId) {
  const client = clientes.find(c => c.id === clientId);
  if (!client) return;

  // ======================
  // HEADER
  // ======================
  document.getElementById("client-name").textContent = client.nombre;
  document.getElementById("client-meta").textContent = client.meta;

  const [sector, operation] = client.meta.split("·");
  document.getElementById("client-sector").textContent = sector.trim();
  document.getElementById("client-operation").textContent = operation.trim();

  // ======================
  // SEMÁFORO
  // ======================
  const riskEl = document.getElementById("client-risk");
  riskEl.textContent = client.nivel;
  riskEl.className = `semaforo__risk ${client.tipo}`;

  // luces (si las tienes)
  document.querySelectorAll(".semaforo__luz").forEach(l => l.classList.remove("on"));
  if (client.semaforo === "red") document.getElementById("luz-roja")?.classList.add("on");
  if (client.semaforo === "yellow") document.getElementById("luz-amarilla")?.classList.add("on");
  if (client.semaforo === "green") document.getElementById("luz-verde")?.classList.add("on");

  // ======================
  // KPIs
  // ======================
  document.getElementById("kpi-otif").textContent = client.otif;
  document.getElementById("kpi-puntual").textContent = client.puntual;
  document.getElementById("kpi-nps").textContent = client.nps;
  document.getElementById("kpi-quejas").textContent = client.quejas;

  // colores KPI
  document.getElementById("kpi-otif").className = `kpi-card__value ${client.kpiStatus.otif}`;
  document.getElementById("kpi-puntual").className = `kpi-card__value ${client.kpiStatus.puntual}`;
  document.getElementById("kpi-nps").className = `kpi-card__value ${client.kpiStatus.nps}`;
  document.getElementById("kpi-quejas").className = `kpi-card__value ${client.kpiStatus.quejas}`;

  // ======================
  // DIAGNÓSTICO
  // ======================
  document.getElementById("diagnostico").innerHTML =
    `<p>${client.diagnostico.summary}</p>`;

  // ======================
  // FINDINGS
  // ======================
  const findingsEl = document.getElementById("findings");
  findingsEl.innerHTML = "";

  client.keyFindings.forEach(f => {
    findingsEl.innerHTML += `
      <div class="finding">
        <p>${f}</p>
      </div>
    `;
  });

  // ======================
  // ACCIONES
  // ======================
  const actionsEl = document.getElementById("actions");
  actionsEl.innerHTML = "";

  client.actions.forEach((a, i) => {

    const badgeClass =
      a.priority === "urgent" ? "badge-urgente" :
      a.priority === "short_term" ? "badge-corto" :
      "badge-preventivo";

    actionsEl.innerHTML += `
      <div class="action-card">
        <div class="action-num">${i + 1}</div>
        <span class="action-badge ${badgeClass}">
          ${a.priority.toUpperCase()}
        </span>
        <p><strong>${a.text}</strong></p>
      </div>
    `;
  });
}
const params = new URLSearchParams(window.location.search);
const clientId = params.get("id") || "walmart";

renderCliente(clientId);