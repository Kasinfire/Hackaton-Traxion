const clientes = [
  {
        id: "walmart",
    nombre: "Walmart de México",
    meta: "Retail · Última Milla · 150 Unidades",
    nivel: "ALTO",
    tipo: "danger",
    otif: "82%",
    puntual: "75%",
    nps: "4/10",
    quejas: "18",
    tendencia: "↓ Crítico: Demoras en CEDIS",
    diagnostico: "diagnostico.html",
    since: "2020",
    manager: "Luis Torres",
    services: [
            { name: "Rutas Centro", desc: "Distribución diaria a tiendas en CDMX y zona metropolitana.", area: "Transporte", expected: "01-Dic", real: "03-Dic", realClass: "severity-high", sl: "75%", slClass: "severity-high text-center", nps: "3/10", npsClass: "severity-high text-center" },
            { name: "Entrega Retail", desc: "Entrega de productos en puntos de venta pequeños y conveniencia.", area: "Transporte", expected: "02-Dic", real: "04-Dic", realClass: "severity-high", sl: "80%", slClass: "severity-mid text-center", nps: "4/10", npsClass: "severity-high text-center" },
            { name: "Control Stock", desc: "Validación de inventario y conciliación de pedidos en rampa.", area: "Almacén", expected: "01-Dic", real: "02-Dic", realClass: "severity-mid", sl: "88%", slClass: "severity-mid text-center", nps: "6/10", npsClass: "severity-mid text-center" },
            { name: "Planif. Rutas", desc: "Coordinación de horarios y ventanas de entrega con el cliente.", area: "Coordinación", expected: "01-Dic", real: "03-Dic", realClass: "severity-high", sl: "72%", slClass: "severity-high text-center", nps: "3/10", npsClass: "severity-high text-center" },
            { name: "Atención Incidencias", desc: "Seguimiento a reportes de clientes y resolución de problemas.", area: "Atención", expected: "01-Dic", real: "02-Dic", realClass: "severity-high", sl: "85%", slClass: "severity-high text-center", nps: "4/10", npsClass: "severity-high text-center" }
        ],
    complaints: [
        { title: "Retrasos en rutas CDMX", desc: "Retrasos recurrentes de más de 2–3 horas en rutas críticas afectando entregas a cadenas grandes.", area: "Transporte", date: "12 Dic 2025", severity: "HIGH", severityClass: "badge--danger-light", status: "OPEN", statusClass: "badge--danger-light" },
        { title: "Faltantes en pedidos", desc: "Diferencias entre pedidos enviados y recibidos, generando reclamaciones frecuentes.", area: "Almacén", date: "05 Dic 2025", severity: "HIGH", severityClass: "badge--danger-light", status: "IN PROGRESS", statusClass: "badge--warning-light" },
        { title: "Comunicación inconsistente", desc: "Cambios de horario no comunicados oportunamente a clientes finales.", area: "Coordinación", date: "28 Nov 2025", severity: "MEDIUM", severityClass: "badge--warning-light", status: "OPEN", statusClass: "badge--danger-light" },
        { title: "Mercancía rechazada en tienda", desc: "Entregas fuera de ventana de recibo provocan rechazo de mercancía en punto de venta.", area: "Transporte", date: "20 Nov 2025", severity: "HIGH", severityClass: "badge--danger-light", status: "OPEN", statusClass: "badge--danger-light" },
        { title: "Cuello de botella en CEDIS", desc: "Demoras superiores a 4 horas en la carga dentro del CEDIS impactan puntualidad de despacho.", area: "Almacén", date: "15 Nov 2025", severity: "HIGH", severityClass: "badge--danger-light", status: "IN PROGRESS", statusClass: "badge--warning-light" }
    ]
  },
  {
    id: "gm",
    nombre: "General Motors",
    meta: "Automotriz · Egoba",
    nivel: "ALTO",
    tipo: "danger",
    otif: "90%",
    puntual: "88%",
    nps: "7/10",
    quejas: "5",
    tendencia: "↓ Alerta: Falta operadores",
    diagnostico: "diagnostico-General-Motors.html",
    since: "2019",
    manager: "Carlos Méndez",
    services: [
      { name: "Transporte Planta", desc: "Traslado de autopartes entre plantas.", expected: "2025-12-01", actual: "2025-12-02", sl: 89, nps: 7, area: "Transporte" },
      { name: "Distribución Regional", desc: "Entrega a distribuidores nacionales.", expected: "2025-12-02", actual: "2025-12-02", sl: 91, nps: 7, area: "Transporte" },
      { name: "Control Almacén", desc: "Gestión de inventario de autopartes.", expected: "2025-12-01", actual: "2025-12-01", sl: 92, nps: 7, area: "Almacén" },
      { name: "Coordinación Producción", desc: "Sincronización logística con líneas de producción.", expected: "2025-12-01", actual: "2025-12-02", sl: 90, nps: 7, area: "Coordinación" },
      { name: "Soporte Operativo", desc: "Gestión de incidencias en producción.", expected: "2025-12-01", actual: "2025-12-01", sl: 90, nps: 7, area: "Atención" }
    ],
    complaints: [
      { title: "Falta de operadores", desc: "Escasez de operadores causando retrasos puntuales en rutas.", severity: "high", status: "open", date: "2025-12-10", area: "Transporte" },
      { title: "Retrasos leves planta", desc: "Demoras menores en traslado de autopartes.", severity: "medium", status: "open", date: "2025-12-11", area: "Transporte" },
      { title: "Desajuste inventario", desc: "Errores menores en inventario.", severity: "medium", status: "open", date: "2025-12-11", area: "Almacén" },
      { title: "Coordinación limitada", desc: "Pequeñas fallas en planificación.", severity: "medium", status: "open", date: "2025-12-12", area: "Coordinación" },
      { title: "Incidencia operativa", desc: "Caso aislado en producción.", severity: "low", status: "open", date: "2025-12-12", area: "Atención" }
    ]
  },
  {
    id: "amazon",
    nombre: "Amazon México",
    meta: "E-commerce · Redpack",
    nivel: "MEDIO",
    tipo: "warning",
    otif: "92%",
    puntual: "91%",
    nps: "6/10",
    quejas: "12",
    tendencia: "↓ Alta demanda",
    diagnostico: "diagnostico-Amazon.html",
    since: "2021",
    manager: "Fernanda Ruiz",

    services: [
      { name: "Última Milla", desc: "Entrega de pedidos a clientes finales.", expected: "2025-12-01", actual: "2025-12-02", sl: 91, nps: 6, area: "Transporte" },
      { name: "Distribución Hub", desc: "Movimiento entre centros logísticos.", expected: "2025-12-02", actual: "2025-12-02", sl: 92, nps: 6, area: "Transporte" },
      { name: "Gestión Inventario", desc: "Control de stock en fulfillment centers.", expected: "2025-12-01", actual: "2025-12-02", sl: 93, nps: 6, area: "Almacén" },
      { name: "Planeación Demanda", desc: "Coordinación logística en picos de demanda.", expected: "2025-12-01", actual: "2025-12-02", sl: 92, nps: 6, area: "Coordinación" },
      { name: "Soporte Cliente", desc: "Atención post-entrega.", expected: "2025-12-01", actual: "2025-12-01", sl: 94, nps: 6, area: "Atención" }
    ],

    complaints: Array.from({ length: 12 }, (_, i) => ({
      title: `Demanda alta #${i+1}`,
      desc: "Incremento en pedidos causando retrasos y saturación operativa.",
      severity: i < 4 ? "high" : "medium",
      status: "open",
      date: "2025-12-12",
      area: "Transporte"
    }))
  },
  {
    id: "heineken",
    nombre: "Heineken México",
    meta: "Consumo · Distribución",
    nivel: "BAJO",
    tipo: "warning",
    otif: "98%",
    puntual: "97%",
    nps: "9/10",
    quejas: "1",
    tendencia: "↓ Estacionalidad",
    diagnostico: "diagnostico-Heineken.html",
    since: "2020",
    manager: "Roberto Díaz",

    services: [
      { name: "Distribución Nacional", desc: "Entrega a centros de consumo.", expected: "2025-12-01", actual: "2025-12-01", sl: 98, nps: 9, area: "Transporte" },
      { name: "Inventario Regional", desc: "Gestión de stock en almacenes.", expected: "2025-12-02", actual: "2025-12-02", sl: 98, nps: 9, area: "Almacén" },
      { name: "Coordinación Entregas", desc: "Planificación de rutas.", expected: "2025-12-01", actual: "2025-12-01", sl: 97, nps: 9, area: "Coordinación" },
      { name: "Tracking Pedidos", desc: "Seguimiento digital.", expected: "2025-12-01", actual: "2025-12-01", sl: 99, nps: 9, area: "Tecnología" },
      { name: "Atención Clientes", desc: "Gestión de incidencias.", expected: "2025-12-01", actual: "2025-12-01", sl: 98, nps: 9, area: "Atención" }
    ],

    complaints: [
      { title: "Ajuste estacional", desc: "Cambio en demanda por temporada.", severity: "low", status: "open", date: "2025-12-10", area: "Coordinación" }
    ]
  },
  {
    id: "meli",
    nombre: "Mercado Libre",
    meta: "E-commerce · 3PL",
    nivel: "BAJO",
    tipo: "success",
    otif: "96%",
    puntual: "95%",
    nps: "8/10",
    quejas: "3",
    tendencia: "↑ Nuevas rutas",
    diagnostico: "diagnostico-Mercado-Libre.html",
    since: "2021",
    manager: "Sofía Navarro",

    services: [
        { name: "Última Milla Express", desc: "Entrega acelerada de pedidos en zonas urbanas de alta demanda.", expected: "2025-12-01", actual: "2025-12-01", sl: 96, nps: 8, area: "Transporte" },
        { name: "Fulfillment Center", desc: "Gestión de inventario y preparación de pedidos en centros logísticos 3PL.", expected: "2025-12-01", actual: "2025-12-01", sl: 95, nps: 8, area: "Almacén" },
        { name: "Planeación Capacidad", desc: "Coordinación de rutas, ventanas de entrega y capacidad en picos de demanda.", expected: "2025-12-01", actual: "2025-12-01", sl: 96, nps: 8, area: "Coordinación" },
        { name: "Tracking Envíos", desc: "Monitoreo de pedidos en tiempo real con actualización continua al cliente.", expected: "2025-12-01", actual: "2025-12-01", sl: 97, nps: 8, area: "Tecnología" },
        { name: "Soporte Seller", desc: "Atención a incidencias de sellers y seguimiento de tickets operativos.", expected: "2025-12-01", actual: "2025-12-02", sl: 94, nps: 8, area: "Atención" }
    ],

    complaints: [
        { title: "Ajuste por nuevas rutas", desc: "Se reportaron desviaciones menores durante la apertura de nuevas rutas logísticas.", severity: "low", status: "open", date: "2025-12-10", area: "Transporte" },
        { title: "Demora en ticket seller", desc: "Algunos sellers reportaron tiempo de respuesta mayor al esperado en incidencias no críticas.", severity: "low", status: "open", date: "2025-12-11", area: "Atención" },
        { title: "Desfase operativo puntual", desc: "Se detectó un ajuste menor en coordinación de capacidad durante un pico promocional.", severity: "medium", status: "in_progress", date: "2025-12-12", area: "Coordinación" }
    ]
  },
  {
    id: "nestle",
    nombre: "Nestlé México",
    meta: "Alimentos · Refrigerados",
    nivel: "BAJO",
    tipo: "success",
    otif: "99%",
    puntual: "98%",
    nps: "9/10",
    quejas: "0",
    tendencia: "↑ Operación óptima",
    diagnostico: "diagnostico-Nestle.html",
    since: "2018",
    manager: "Laura Sánchez",

    services: [
      { name: "Distribución Refrigerada", desc: "Entrega de productos sensibles a temperatura.", expected: "2025-12-01", actual: "2025-12-01", sl: 99, nps: 9, area: "Transporte" },
      { name: "Control Frío", desc: "Monitoreo de cadena de frío.", expected: "2025-12-01", actual: "2025-12-01", sl: 99, nps: 9, area: "Almacén" },
      { name: "Coordinación Supply", desc: "Planificación logística avanzada.", expected: "2025-12-01", actual: "2025-12-01", sl: 99, nps: 9, area: "Coordinación" },
      { name: "Tracking Avanzado", desc: "Monitoreo en tiempo real.", expected: "2025-12-01", actual: "2025-12-01", sl: 99, nps: 9, area: "Tecnología" },
      { name: "Soporte Premium", desc: "Atención especializada.", expected: "2025-12-01", actual: "2025-12-01", sl: 99, nps: 9, area: "Atención" }
    ],

    complaints: []
  }
];