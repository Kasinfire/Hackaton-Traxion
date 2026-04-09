function renderArea(areaId) {
  const area = areaDatos[areaId];
  if (!area) return;

  // ======================
  // HEADER
  // ======================
  document.getElementById("area-name").textContent = area.titulo;
  document.title = `Diagnóstico ${area.titulo} - Traxión`;

  // ======================
  // SEMÁFORO + HERO COLOR
  // ======================
  const riskEl = document.getElementById("area-risk");
  const heroEl = document.getElementById("hero-section");
  const riskTagEl = document.getElementById("area-risk-tag");

  riskEl.textContent = area.nivel;

  const colorMap = {
    "ALTO":  { css: "var(--danger)",  hex: "#c0392b", cls: "high" },
    "MEDIO": { css: "var(--warning)", hex: "#d98a1e", cls: "mid"  },
    "BAJO":  { css: "var(--success)", hex: "#27ae60", cls: "low"  },
  };
  const colorInfo = colorMap[area.nivel] || colorMap["MEDIO"];

  riskEl.style.color = colorInfo.css;
  riskEl.className = `semaforo__risk ${colorInfo.cls}`;

  if (heroEl)    heroEl.style.backgroundColor = colorInfo.hex;
  if (riskTagEl) riskTagEl.textContent = `Riesgo: ${area.nivel}`;

  // luces (si las tienes)
  document.querySelectorAll(".semaforo__luz").forEach(l => l.classList.remove("on"));
  if (area.semaforo === "red") document.getElementById("luz-roja")?.classList.add("on");
  if (area.semaforo === "yellow") document.getElementById("luz-amarilla")?.classList.add("on");
  if (area.semaforo === "green") document.getElementById("luz-verde")?.classList.add("on");

  // ======================
  // KPIs
  // ======================
  document.getElementById("kpi-otif").textContent = area.otif;
  document.getElementById("kpi-puntual").textContent = area.puntual;
  document.getElementById("kpi-nps").textContent = area.nps;
  document.getElementById("kpi-quejas").textContent = area.quejas;

  // colores KPI
  document.getElementById("kpi-otif").className = `kpi-card__value ${area.kpiStatus.otif}`;
  document.getElementById("kpi-puntual").className = `kpi-card__value ${area.kpiStatus.puntual}`;
  document.getElementById("kpi-nps").className = `kpi-card__value ${area.kpiStatus.nps}`;
  document.getElementById("kpi-quejas").className = `kpi-card__value ${area.kpiStatus.quejas}`;

  // BARRAS KPI
// ======================

// OTIF
document.getElementById("bar-otif").style.width = area.otif;
document.getElementById("bar-otif").className = `progress-bar-fill ${area.kpiStatus.otif}`;

// Puntualidad
document.getElementById("bar-puntual").style.width = area.puntual;
document.getElementById("bar-puntual").className = `progress-bar-fill ${area.kpiStatus.puntual}`;

// NPS (convertir a %)
const npsValue = parseInt(area.nps); // "4/10" → 4
document.getElementById("bar-nps").style.width = (npsValue * 10) + "%";
document.getElementById("bar-nps").className = `progress-bar-fill ${area.kpiStatus.nps}`;

// Quejas (escala visual)
const quejasValue = parseInt(area.quejas);
document.getElementById("bar-quejas").style.width = Math.min(quejasValue * 5, 100) + "%";
document.getElementById("bar-quejas").className = `progress-bar-fill ${area.kpiStatus.quejas}`;

  // ======================
  // DIAGNÓSTICO
  // ======================
  document.getElementById("diagnostico").innerHTML =
    `<p>${area.diagnostico.summary}</p>`;

  // ======================
  // FINDINGS
  // ======================
  const findingsEl = document.getElementById("findings");
  findingsEl.innerHTML = "";

  area.keyFindings.forEach(f => {
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

  area.actions.forEach((a, i) => {

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
        <p>${a.text}</strong></p>
      </div>
    `;
  });
}
const params = new URLSearchParams(window.location.search);
const areaId = params.get("area") || "transporte";

renderArea(areaId);