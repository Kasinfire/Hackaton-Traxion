const clientes = [

  // 🟢 WALMART (ya lo tenías)
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
      { name: "Entrega Retail", desc: "Entrega a tiendas de conveniencia y retail.", area: "Transporte", expected: "02-Dic", real: "04-Dic", realClass: "severity-high", sl: "80%", slClass: "severity-mid text-center", nps: "4/10", npsClass: "severity-high text-center" },
      { name: "Control Stock", desc: "Validación de inventario en CEDIS.", area: "Almacén", expected: "01-Dic", real: "02-Dic", realClass: "severity-mid", sl: "88%", slClass: "severity-mid text-center", nps: "6/10", npsClass: "severity-mid text-center" },
      { name: "Planif. Rutas", desc: "Coordinación de ventanas de entrega.", area: "Coordinación", expected: "01-Dic", real: "03-Dic", realClass: "severity-high", sl: "72%", slClass: "severity-high text-center", nps: "3/10", npsClass: "severity-high text-center" },
      { name: "Atención Incidencias", desc: "Seguimiento a incidencias operativas.", area: "Atención", expected: "01-Dic", real: "02-Dic", realClass: "severity-high", sl: "85%", slClass: "severity-high text-center", nps: "4/10", npsClass: "severity-high text-center" }
    ],

    complaints: [
      { title: "Retrasos en rutas CDMX", desc: "Demoras de 2–3 horas en rutas clave.", area: "Transporte", date: "12 Dic 2025", severity: "HIGH", severityClass: "badge--danger-light", status: "OPEN", statusClass: "badge--danger-light" },
      { title: "Faltantes en pedidos", desc: "Diferencias en inventario entregado.", area: "Almacén", date: "05 Dic 2025", severity: "HIGH", severityClass: "badge--danger-light", status: "IN PROGRESS", statusClass: "badge--warning-light" }
    ]
  },

  // 🔴 GM
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
    tendencia: "↓ Falta operadores",
    diagnostico: "diagnostico-General-Motors.html",
    since: "2019",
    manager: "Carlos Méndez",

    services: [
      { name: "Transporte Planta", desc: "Traslado de autopartes.", area: "Transporte", expected: "01-Dic", real: "02-Dic", realClass: "severity-mid", sl: "89%", slClass: "severity-mid text-center", nps: "7/10", npsClass: "severity-mid text-center" },
      { name: "Distribución Regional", desc: "Entrega a distribuidores.", area: "Transporte", expected: "02-Dic", real: "02-Dic", realClass: "severity-low", sl: "91%", slClass: "severity-low text-center", nps: "7/10", npsClass: "severity-mid text-center" },
      { name: "Control Almacén", desc: "Gestión de inventario.", area: "Almacén", expected: "01-Dic", real: "01-Dic", realClass: "severity-low", sl: "92%", slClass: "severity-low text-center", nps: "7/10", npsClass: "severity-mid text-center" },
      { name: "Coord. Producción", desc: "Sincronización con líneas.", area: "Coordinación", expected: "01-Dic", real: "02-Dic", realClass: "severity-mid", sl: "90%", slClass: "severity-mid text-center", nps: "7/10", npsClass: "severity-mid text-center" },
      { name: "Soporte Planta", desc: "Atención incidencias.", area: "Atención", expected: "01-Dic", real: "01-Dic", realClass: "severity-low", sl: "90%", slClass: "severity-mid text-center", nps: "7/10", npsClass: "severity-mid text-center" }
    ],

    complaints: [
      { title: "Falta de operadores", desc: "Escasez de personal operativo.", area: "Transporte", date: "10 Dic 2025", severity: "HIGH", severityClass: "badge--danger-light", status: "OPEN", statusClass: "badge--danger-light" }
    ]
  },

  // 🟡 AMAZON
  {
    id: "amazon",
    nombre: "Amazon México",
    meta: "E-commerce · Redpack",
    nivel: "MEDIO",
    tipo: "warning",
    otif: "92%",
    puntual: "91%",
    nps: "6/10",
    quejas: "3",
    tendencia: "↓ Alta demanda",
    diagnostico: "diagnostico-Amazon.html",
    since: "2021",
    manager: "Fernanda Ruiz",

    services: [
      { name: "Última Milla", desc: "Entrega a clientes finales.", area: "Transporte", expected: "01-Dic", real: "02-Dic", realClass: "severity-mid", sl: "91%", slClass: "severity-mid text-center", nps: "6/10", npsClass: "severity-mid text-center" },
      { name: "Distribución Hub", desc: "Movimiento entre hubs.", area: "Transporte", expected: "02-Dic", real: "02-Dic", realClass: "severity-low", sl: "92%", slClass: "severity-mid text-center", nps: "6/10", npsClass: "severity-mid text-center" },
      { name: "Gestión Inventario", desc: "Control en FC.", area: "Almacén", expected: "01-Dic", real: "02-Dic", realClass: "severity-mid", sl: "93%", slClass: "severity-low text-center", nps: "6/10", npsClass: "severity-mid text-center" },
      { name: "Planeación Demanda", desc: "Forecast de pedidos.", area: "Coordinación", expected: "01-Dic", real: "02-Dic", realClass: "severity-mid", sl: "92%", slClass: "severity-mid text-center", nps: "6/10", npsClass: "severity-mid text-center" },
      { name: "Soporte Cliente", desc: "Atención post entrega.", area: "Atención", expected: "01-Dic", real: "01-Dic", realClass: "severity-low", sl: "94%", slClass: "severity-low text-center", nps: "6/10", npsClass: "severity-mid text-center" }
    ],

    complaints: [
      { title: "Alta demanda", desc: "Saturación operativa por volumen.", area: "Transporte", date: "12 Dic 2025", severity: "HIGH", severityClass: "badge--danger-light", status: "OPEN", statusClass: "badge--danger-light" }
    ]
  },

  {
    id: "heineken",
    nombre: "Heineken México",
    meta: "Consumo · Distribución",
    nivel: "BAJO",
    tipo: "warning",
    otif: "91%",
    puntual: "93%",
    nps: "7/10",
    quejas: "4",
    tendencia: "↓ Estacionalidad",
    diagnostico: "diagnostico-Heineken.html",
    since: "2020",
    manager: "Roberto Díaz",

    services: [
      { name: "Distribución Nacional", desc: "Entrega a centros de consumo.", area: "Transporte", expected: "01-Dic", real: "01-Dic", realClass: "severity-low", sl: "98%", slClass: "severity-low text-center", nps: "9/10", npsClass: "severity-low text-center" },
      { name: "Inventario Regional", desc: "Gestión de stock.", area: "Almacén", expected: "02-Dic", real: "02-Dic", realClass: "severity-low", sl: "98%", slClass: "severity-low text-center", nps: "9/10", npsClass: "severity-low text-center" },
      { name: "Coord. Entregas", desc: "Planificación rutas.", area: "Coordinación", expected: "01-Dic", real: "01-Dic", realClass: "severity-low", sl: "97%", slClass: "severity-low text-center", nps: "9/10", npsClass: "severity-low text-center" },
      { name: "Tracking", desc: "Seguimiento pedidos.", area: "Tecnología", expected: "01-Dic", real: "01-Dic", realClass: "severity-low", sl: "99%", slClass: "severity-low text-center", nps: "9/10", npsClass: "severity-low text-center" },
      { name: "Atención Cliente", desc: "Gestión incidencias.", area: "Atención", expected: "01-Dic", real: "01-Dic", realClass: "severity-low", sl: "98%", slClass: "severity-low text-center", nps: "9/10", npsClass: "severity-low text-center" }
    ],

    complaints: [
      { title: "Ajuste estacional", desc: "Cambio en demanda.", area: "Coordinación", date: "10 Dic 2025", severity: "LOW", severityClass: "badge--success-light", status: "OPEN", statusClass: "badge--danger-light" }
    ]
  },

  // 🟢 MERCADO LIBRE
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
      { name: "Última Milla Express", desc: "Entrega rápida urbana.", area: "Transporte", expected: "01-Dic", real: "01-Dic", realClass: "severity-low", sl: "96%", slClass: "severity-low text-center", nps: "8/10", npsClass: "severity-low text-center" },
      { name: "Fulfillment", desc: "Preparación pedidos.", area: "Almacén", expected: "01-Dic", real: "01-Dic", realClass: "severity-low", sl: "95%", slClass: "severity-low text-center", nps: "8/10", npsClass: "severity-low text-center" },
      { name: "Planeación Capacidad", desc: "Coordinación demanda.", area: "Coordinación", expected: "01-Dic", real: "01-Dic", realClass: "severity-low", sl: "96%", slClass: "severity-low text-center", nps: "8/10", npsClass: "severity-low text-center" },
      { name: "Tracking Envíos", desc: "Monitoreo en tiempo real.", area: "Tecnología", expected: "01-Dic", real: "01-Dic", realClass: "severity-low", sl: "97%", slClass: "severity-low text-center", nps: "8/10", npsClass: "severity-low text-center" },
      { name: "Soporte Seller", desc: "Atención vendedores.", area: "Atención", expected: "01-Dic", real: "02-Dic", realClass: "severity-mid", sl: "94%", slClass: "severity-mid text-center", nps: "8/10", npsClass: "severity-low text-center" }
    ],

    complaints: [
      { title: "Ajuste rutas", desc: "Cambios en rutas nuevas.", area: "Transporte", date: "10 Dic 2025", severity: "LOW", severityClass: "badge--success-light", status: "OPEN", statusClass: "badge--danger-light" }
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
      { name: "Distribución Refrigerada", desc: "Entrega de productos sensibles a temperatura en cadena de frío.", area: "Transporte", expected: "01-Dic", real: "01-Dic", realClass: "severity-low", sl: "99%", slClass: "severity-low text-center", nps: "9/10", npsClass: "severity-low text-center" },
      { name: "Control Frío", desc: "Monitoreo y control de inventario refrigerado en centros logísticos.", area: "Almacén", expected: "01-Dic", real: "01-Dic", realClass: "severity-low", sl: "99%", slClass: "severity-low text-center", nps: "9/10", npsClass: "severity-low text-center" },
      { name: "Coord. Supply", desc: "Planificación logística de abastecimiento y reposición con alta precisión.", area: "Coordinación", expected: "01-Dic", real: "01-Dic", realClass: "severity-low", sl: "99%", slClass: "severity-low text-center", nps: "9/10", npsClass: "severity-low text-center" },
      { name: "Tracking Avanzado", desc: "Seguimiento en tiempo real de unidades y pedidos críticos.", area: "Tecnología", expected: "01-Dic", real: "01-Dic", realClass: "severity-low", sl: "99%", slClass: "severity-low text-center", nps: "9/10", npsClass: "severity-low text-center" },
      { name: "Soporte Premium", desc: "Atención especializada para incidencias logísticas y ajustes operativos.", area: "Atención", expected: "01-Dic", real: "01-Dic", realClass: "severity-low", sl: "99%", slClass: "severity-low text-center", nps: "9/10", npsClass: "severity-low text-center" }
    ],
    
    complaints: []
  }

];