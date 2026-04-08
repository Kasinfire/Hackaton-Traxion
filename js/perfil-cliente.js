// 1. BASE DE DATOS (Puedes agregar los clientes que quieras aquí)
const clientsDB = {
    "walmart": {
        name: "Walmart México",
        meta: "Retail · Última Milla · 150 Unidades",
        sector: "Retail",
        since: "Marzo 2021",
        kam: "Ana García",
        risk: "ALTO",
        riskClass: "risk-alto-text",
        kpiColor: "text-danger",
        kpis: { otif: "82%", puntualidad: "75%", nps: "4", quejas: "18" },
        analysisLink: "diagnostico.html",
        services: [
            { name: "Rutas Centro", desc: "Distribución diaria a tiendas en CDMX y zona metropolitana.", area: "Transporte", expected: "01-Dic", real: "03-Dic", realClass: "severity-high", sl: "75%", slClass: "severity-high text-center", nps: "3/10", npsClass: "severity-high text-center" },
            { name: "Entrega Retail", desc: "Entrega de productos en puntos de venta pequeños y conveniencia.", area: "Transporte", expected: "02-Dic", real: "04-Dic", realClass: "severity-high", sl: "80%", slClass: "severity-mid text-center", nps: "4/10", npsClass: "severity-high text-center" },
            { name: "Control Stock", desc: "Validación de inventario y conciliación de pedidos en rampa.", area: "Almacén", expected: "01-Dic", real: "02-Dic", realClass: "severity-mid", sl: "88%", slClass: "severity-mid text-center", nps: "6/10", npsClass: "severity-mid text-center" },
            { name: "Planif. Rutas", desc: "Coordinación de horarios y ventanas de entrega con el cliente.", area: "Coordinación", expected: "01-Dic", real: "03-Dic", realClass: "severity-high", sl: "72%", slClass: "severity-high text-center", nps: "3/10", npsClass: "severity-high text-center" },
            { name: "Atención Incidencias", desc: "Seguimiento a reportes de clientes y resolución de problemas.", area: "Atención", expected: "01-Dic", real: "02-Dic", realClass: "severity-high", sl: "85%", slClass: "severity-high text-center", nps: "4/10", npsClass: "severity-high text-center" }
        ],
        complaintsTotal: 18,
        complaints: [
            { title: "Retrasos en rutas CDMX", desc: "Retrasos recurrentes de más de 2–3 horas en rutas críticas afectando entregas a cadenas grandes.", area: "Transporte", date: "12 Dic 2025", severity: "HIGH", severityClass: "badge--danger-light", status: "OPEN", statusClass: "badge--danger-light" },
            { title: "Faltantes en pedidos", desc: "Diferencias entre pedidos enviados y recibidos, generando reclamaciones frecuentes.", area: "Almacén", date: "05 Dic 2025", severity: "HIGH", severityClass: "badge--danger-light", status: "IN PROGRESS", statusClass: "badge--warning-light" },
            { title: "Comunicación inconsistente", desc: "Cambios de horario no comunicados oportunamente a clientes finales.", area: "Coordinación", date: "28 Nov 2025", severity: "MEDIUM", severityClass: "badge--warning-light", status: "OPEN", statusClass: "badge--danger-light" },
            { title: "Mercancía rechazada en tienda", desc: "Entregas fuera de ventana de recibo provocan rechazo de mercancía en punto de venta.", area: "Transporte", date: "20 Nov 2025", severity: "HIGH", severityClass: "badge--danger-light", status: "OPEN", statusClass: "badge--danger-light" },
            { title: "Cuello de botella en CEDIS", desc: "Demoras superiores a 4 horas en la carga dentro del CEDIS impactan puntualidad de despacho.", area: "Almacén", date: "15 Nov 2025", severity: "HIGH", severityClass: "badge--danger-light", status: "IN PROGRESS", statusClass: "badge--warning-light" }
        ]
    },
    "amazon": {
        name: "Amazon México",
        meta: "E-commerce · Redpack · 200 Unidades",
        sector: "E-commerce",
        since: "Enero 2022",
        kam: "Luis Pérez",
        risk: "MEDIO",
        riskClass: "severity-mid",
        kpiColor: "text-warning",
        kpis: { otif: "92%", puntualidad: "91%", nps: "6", quejas: "12" },
        analysisLink: "diagnostico-Amazon.html",
        services: [], // Puedes llenarlos si quieres
        complaintsTotal: 12,
        complaints: [] // Puedes llenarlas si quieres
    }
};

// 2. LÓGICA PARA LEER LA URL Y LLENAR EL HTML
document.addEventListener("DOMContentLoaded", () => {
    // Buscar qué cliente dice la URL (ej: perfil-cliente.html?id=walmart)
    const urlParams = new URLSearchParams(window.location.search);
    const clientId = urlParams.get('id') || 'walmart'; // Si no hay id, muestra walmart por defecto
    
    const clientData = clientsDB[clientId];

    if (clientData) {
        // Llenar Cabecera
        document.getElementById('client-name').innerText = clientData.name;
        document.getElementById('client-meta').innerText = clientData.meta;
        document.getElementById('client-sector').innerText = clientData.sector;
        document.getElementById('client-since').innerText = clientData.since;
        document.getElementById('client-kam').innerText = clientData.kam;
        
        const riskEl = document.getElementById('client-risk');
        riskEl.innerText = clientData.risk;
        riskEl.className = `info-value ${clientData.riskClass}`;
        
        document.getElementById('btn-analizar').href = clientData.analysisLink;

        // Llenar KPIs
        document.getElementById('kpi-otif').innerText = clientData.kpis.otif;
        document.getElementById('kpi-otif').className = `kpi-card__value ${clientData.kpiColor}`;
        
        document.getElementById('kpi-puntualidad').innerText = clientData.kpis.puntualidad;
        document.getElementById('kpi-puntualidad').className = `kpi-card__value ${clientData.kpiColor}`;
        
        document.getElementById('kpi-nps').innerHTML = `${clientData.kpis.nps}<span style="font-size:1rem;font-weight:400;color:#bbb">/10</span>`;
        document.getElementById('kpi-nps').className = `kpi-card__value ${clientData.kpiColor}`;
        
        document.getElementById('kpi-quejas').innerText = clientData.kpis.quejas;
        document.getElementById('kpi-quejas').className = `kpi-card__value ${clientData.kpiColor}`;

        // Llenar Tabla de Servicios
        const servicesTbody = document.getElementById('services-tbody');
        clientData.services.forEach(s => {
            servicesTbody.innerHTML += `
                <tr>
                    <td><strong>${s.name}</strong></td>
                    <td>${s.desc}</td>
                    <td>${s.area}</td>
                    <td>${s.expected}</td>
                    <td class="${s.realClass}">${s.real}</td>
                    <td class="${s.slClass}">${s.sl}</td>
                    <td class="${s.npsClass}">${s.nps}</td>
                </tr>`;
        });

        // Llenar Tabla de Quejas
        document.getElementById('complaints-total').innerText = `${clientData.complaintsTotal} totales`;
        const complaintsTbody = document.getElementById('complaints-tbody');
        clientData.complaints.forEach(c => {
            complaintsTbody.innerHTML += `
                <tr>
                    <td><strong>${c.title}</strong></td>
                    <td>${c.desc}</td>
                    <td>${c.area}</td>
                    <td>${c.date}</td>
                    <td class="text-center"><span class="badge ${c.severityClass}">${c.severity}</span></td>
                    <td class="text-center"><span class="badge ${c.statusClass}">${c.status}</span></td>
                </tr>`;
        });

        // Nota final
        const rest = clientData.complaintsTotal - clientData.complaints.length;
        document.getElementById('complaints-note').innerText = `Mostrando los ${clientData.complaints.length} tickets más críticos y recientes. Las ${rest} quejas restantes están en revisión por Coordinación.`;
    }
});