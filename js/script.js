/* =========================================
   SCRIPT.JS — Dashboard principal (index.html)
   Requiere: data.js cargado primero
   ========================================= */

function colorPorValor(v) {
    if (v >= 85) return '#28a745';
    if (v >= 70) return '#d98a1e';
    return '#d9381e';
}

/* ── 1. BARRAS ── */
function initBars() {
    for (const [key, data] of Object.entries(areaDatos)) {
        const barra = document.getElementById(key);
        if (!barra) continue;
        const span = barra.querySelector('.porcentaje');
        barra.style.backgroundColor = colorPorValor(data.valor);
        if (span) span.textContent = data.valor + '%';
        setTimeout(() => { barra.style.height = data.valor + '%'; }, 100);
    }
}

/* ── 2. PANEL LATERAL ── */
function initPanel() {
    const panelDefault = document.getElementById('panel-default');
    const panelArea    = document.getElementById('panel-area');
    if (!panelDefault || !panelArea) return;

    function abrirPanel(areaKey) {
        const d = areaDatos[areaKey];
        if (!d) return;

        document.querySelectorAll('.enlace-barra').forEach(el => el.classList.remove('activa'));
        document.querySelector(`.enlace-barra[data-area="${areaKey}"]`)?.classList.add('activa');

        document.getElementById('pa-eyebrow').textContent = 'RENDIMIENTO DEL ÁREA';
        document.getElementById('pa-titulo').textContent  = d.titulo;
        document.getElementById('pa-valor').textContent   = d.valor + '%';
        document.getElementById('pa-valor').style.color   = colorPorValor(d.valor);
        document.getElementById('pa-resumen').textContent = d.resumen;

        const fill = document.getElementById('pa-barra-fill');
        fill.style.width = '0%';
        fill.style.background = colorPorValor(d.valor);
        setTimeout(() => { fill.style.width = d.valor + '%'; }, 50);

        document.getElementById('pa-kpis').innerHTML = d.kpis.map(k => `
            <div class="panel-kpi">
                <p class="panel-kpi__label">${k.label}</p>
                <p class="panel-kpi__valor ${k.clase}">${k.valor}</p>
                <p class="panel-kpi__meta">${k.meta}</p>
            </div>
        `).join('');

        document.getElementById('pa-btn-link').href = `diagnostico-area.html?area=${areaKey}`;
        panelDefault.classList.add('hidden');
        panelArea.classList.add('visible');
    }

    function cerrarPanel() {
        panelDefault.classList.remove('hidden');
        panelArea.classList.remove('visible');
        document.querySelectorAll('.enlace-barra').forEach(el => el.classList.remove('activa'));
    }

    document.querySelectorAll('.enlace-barra').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            el.classList.contains('activa') ? cerrarPanel() : abrirPanel(el.dataset.area);
        });
    });

    document.getElementById('btn-cerrar-panel')?.addEventListener('click', cerrarPanel);
}

/* ── 3. TARJETAS DE CLIENTES ── */
function renderClients(list) {
    const grid = document.querySelector('.clients__grid');
    if (!grid) return;
    grid.innerHTML = list.map(c => `
        <article class="client-card card--${c.tipo}">
            <div class="client-card__header">
                <div class="client-card__info">
                    <h3 class="client-card__name">${c.nombre}</h3>
                    <p class="client-card__meta">${c.meta}</p>
                </div>
                <span class="badge badge--${c.tipo}-light">${c.nivel}</span>
            </div>
            <div class="client-card__metrics">
                <div class="metric"><span class="metric__value text-${c.tipo}">${c.otif}</span><span class="metric__label">OTIF</span></div>
                <div class="metric"><span class="metric__value text-${c.tipo}">${c.puntual}</span><span class="metric__label">Puntual</span></div>
                <div class="metric"><span class="metric__value text-${c.tipo}">${c.nps}</span><span class="metric__label">NPS</span></div>
                <div class="metric"><span class="metric__value text-${c.tipo}">${c.quejas}</span><span class="metric__label">Quejas</span></div>
            </div>
            <div class="client-card__trend">
                <span class="text-${c.tipo} badge-trend">${c.tendencia}</span>
            </div>
            <div class="client-card__actions">
                <a href="perfil-cliente.html?id=${c.id}" class="btn--outline-full">Ver Perfil</a>
                <a href="diagnostico.html?id=${c.id}" class="btn--outline-full btn--primary">Diagnóstico de IA</a>
            </div>
        </article>
    `).join('');
}

/* ── 4. BUSCADOR ── */
function initBuscador() {
    document.getElementById('buscador')?.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        renderClients(clientes.filter(c => c.nombre.toLowerCase().includes(term)));
    });
}

/* ── 5. FILTROS TOPBAR ── */
function initFiltros() {
    const btns = document.querySelectorAll('.topbar__filters .btn--pill');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const t = btn.textContent.trim().toLowerCase();
            const filtered = t === 'alto riesgo' ? clientes.filter(c => c.tipo === 'danger')
                           : t === 'medio'   ? clientes.filter(c => c.tipo === 'warning')
                           : clientes;
            renderClients(filtered);
        });
    });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
    initBars();
    initPanel();
    renderClients(clientes);
    initBuscador();
    initFiltros();
});