function renderCliente(clientId) {
  const client = clientes.find(c => c.id === clientId);
  if (!client) return;

  // ======================
  // HEADER
  // ======================
  document.getElementById("client-name").textContent = client.nombre;
  document.getElementById("client-meta").textContent = client.meta;
  document.title = `Diagnóstico ${client.nombre} - Traxión`;

  const [sector, operation] = client.meta.split("·");
  document.getElementById("client-sector").textContent = sector.trim();
  document.getElementById("client-operation").textContent = operation.trim();

  // ======================
  // SEMÁFORO + HERO COLOR
  // ======================
  const riskEl = document.getElementById("client-risk");

  riskEl.textContent = client.nivel;

  const colorMap = {
    "ALTO":  { css: "var(--danger)",  hex: "#c0392b", cls: "high" },
    "MEDIO": { css: "var(--warning)", hex: "#d98a1e", cls: "mid"  },
    "BAJO":  { css: "var(--success)", hex: "#27ae60", cls: "low"  },
  };
  const colorInfo = colorMap[client.nivel] || colorMap["MEDIO"];

  riskEl.style.color = colorInfo.css;
  document.querySelector('.hero').style.backgroundColor = colorInfo.hex;

  riskEl.className = `semaforo__risk ${colorInfo.cls}`;

  // luces
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

  // BARRAS KPI
  // ======================

  // OTIF
  document.getElementById("bar-otif").style.width = client.otif;
  document.getElementById("bar-otif").className = `progress-bar-fill ${client.kpiStatus.otif}`;

  // Puntualidad
  document.getElementById("bar-puntual").style.width = client.puntual;
  document.getElementById("bar-puntual").className = `progress-bar-fill ${client.kpiStatus.puntual}`;

  // NPS (convertir a %)
  const npsValue = parseInt(client.nps); // "4/10" → 4
  document.getElementById("bar-nps").style.width = (npsValue * 10) + "%";
  document.getElementById("bar-nps").className = `progress-bar-fill ${client.kpiStatus.nps}`;

  // Quejas (escala visual)
  const quejasValue = parseInt(client.quejas);
  document.getElementById("bar-quejas").style.width = Math.min(quejasValue * 5, 100) + "%";
  document.getElementById("bar-quejas").className = `progress-bar-fill ${client.kpiStatus.quejas}`;

  // ======================
  // DIAGNÓSTICO
  // ======================
  document.getElementById("diagnostico").innerHTML = `<p>${client.diagnostico.summary}</p>`;

  // ======================
  // FINDINGS
  // ======================
  const findingsEl = document.getElementById("findings");
  findingsEl.innerHTML = "";

  client.keyFindings.forEach(f => {
    findingsEl.innerHTML += `
      <div class="finding">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>  
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
      a.priority === "URGENTE" ? "badge-urgente" :
      a.priority === "CORTO PLAZO" ? "badge-corto" :
      "badge-preventivo";

    actionsEl.innerHTML += `
      <div class="action-card">
        <div class="action-num">${i + 1}</div>
        <span class="action-badge ${badgeClass}">
          ${a.priority.toUpperCase()}
        </span>
        <p>${a.text}</p>
      </div>
    `;
  });
}

const params = new URLSearchParams(window.location.search);
const clientId = params.get("id") || "walmart";

renderCliente(clientId);