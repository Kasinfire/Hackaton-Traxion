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
    since: "2020",
    manager: "Luis Torres",

    services: [
      {
        name: "Rutas Centro CDMX",
        desc: "Distribución a tiendas urbanas con alta congestión.",
        area: "Transporte",
        expected: "01-Dic",
        real: "03-Dic",
        realClass: "severity-high",
        sl: "72%",
        slClass: "severity-high text-center",
        nps: "3/10",
        npsClass: "severity-high text-center",
      },
      {
        name: "Entrega CEDIS Norte",
        desc: "Abastecimiento a centros de distribución regionales.",
        area: "Transporte",
        expected: "02-Dic",
        real: "04-Dic",
        realClass: "severity-high",
        sl: "78%",
        slClass: "severity-high text-center",
        nps: "4/10",
        npsClass: "severity-high text-center",
      },
      {
        name: "Control Inventario",
        desc: "Validación de stock previo a embarque.",
        area: "Almacén",
        expected: "01-Dic",
        real: "02-Dic",
        realClass: "severity-mid",
        sl: "85%",
        slClass: "severity-mid text-center",
        nps: "5/10",
        npsClass: "severity-mid text-center",
      },
      {
        name: "Planeación Rutas",
        desc: "Asignación de ventanas y rutas.",
        area: "Coordinación",
        expected: "01-Dic",
        real: "03-Dic",
        realClass: "severity-high",
        sl: "70%",
        slClass: "severity-high text-center",
        nps: "3/10",
        npsClass: "severity-high text-center",
      },
      {
        name: "Atención Incidencias",
        desc: "Gestión de reclamos de tienda.",
        area: "Atención",
        expected: "01-Dic",
        real: "02-Dic",
        realClass: "severity-high",
        sl: "78%",
        slClass: "severity-mid text-center",
        nps: "4/10",
        npsClass: "severity-high text-center",
      },
    ],

    complaints: [
      {
        title: "Retrasos en CDMX",
        desc: "Demoras constantes en rutas urbanas.",
        area: "Transporte",
        date: "12 Dic 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Saturación CEDIS",
        desc: "Recepción excedida en ventanas.",
        area: "Transporte",
        date: "11 Dic 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Faltantes pedidos",
        desc: "Diferencias en surtido.",
        area: "Almacén",
        date: "10 Dic 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Errores picking",
        desc: "Errores en preparación.",
        area: "Almacén",
        date: "09 Dic 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "EN PROGRESO",
        statusClass: "badge--warning-light",
      },
      {
        title: "Planeación deficiente",
        desc: "Asignación tardía de rutas.",
        area: "Coordinación",
        date: "08 Dic 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Cambios última hora",
        desc: "Reprogramaciones frecuentes.",
        area: "Coordinación",
        date: "07 Dic 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Respuesta lenta",
        desc: "Atención tardía a incidencias.",
        area: "Atención",
        date: "06 Dic 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Falta visibilidad",
        desc: "Poca trazabilidad en pedidos.",
        area: "Tecnología",
        date: "05 Dic 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Unidades insuficientes",
        desc: "Falta de flota disponible.",
        area: "Transporte",
        date: "04 Dic 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Demoras descarga",
        desc: "Retrasos en recepción.",
        area: "Transporte",
        date: "03 Dic 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Inventario incorrecto",
        desc: "Descuadres frecuentes.",
        area: "Almacén",
        date: "02 Dic 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Errores SKU",
        desc: "Productos mal etiquetados.",
        area: "Almacén",
        date: "01 Dic 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Falta coordinación",
        desc: "Desalineación entre áreas.",
        area: "Coordinación",
        date: "30 Nov 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Ventanas incumplidas",
        desc: "Entregas fuera de horario.",
        area: "Coordinación",
        date: "29 Nov 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Escalaciones sin cierre",
        desc: "Casos abiertos sin resolución.",
        area: "Atención",
        date: "28 Nov 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Comunicación deficiente",
        desc: "Falta de seguimiento claro.",
        area: "Atención",
        date: "27 Nov 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Incumplimiento SLA",
        desc: "Servicios fuera de estándar.",
        area: "Transporte",
        date: "26 Nov 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Retrasos recurrentes",
        desc: "Problema estructural.",
        area: "Transporte",
        date: "25 Nov 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
    ],
    semaforo: "red",
    kpiStatus: {
      otif: "warning",
      puntual: "danger",
      nps: "danger",
      quejas: "danger",
    },
    diagnostico: {
      summary:
        '<p>Walmart de México presenta un <span class="hl-danger">riesgo alto de churn</span> por deterioro simultáneo en métricas operativas y experiencia: OTIF de 82%, puntualidad de 75%, NPS general de 4/10 y 18 quejas altas abiertas. Los 5 servicios reportan retrasos contra fecha esperada, y 4 de 5 operan con SL por debajo de 80%, lo que confirma una afectación sostenida en cumplimiento.</p><p>El riesgo es <span class="hl-danger">sistémico y multiarea</span> porque los incidentes se concentran en Transporte, Almacén, Coordinación, Atención y Tecnología. El mayor impacto de negocio está en Transporte y Coordinación por demoras urbanas, saturación de CEDIS, planeación tardía y ventanas incumplidas; además, Almacén aporta errores de inventario y picking que elevan el impacto financiero y la fricción operativa.</p>',
    },
    keyFindings: [
      "Los 5 servicios presentan retraso entre fecha esperada y fecha real; además, 4 de 5 tienen SL menor a 80%, con focos críticos en Rutas Centro CDMX (72%), Entrega CEDIS Norte (78%), Planeación Rutas (70%) y Atención Incidencias (78%).",
      "Existen 18 quejas de severidad ALTA, en su mayoría abiertas, distribuidas en múltiples áreas; la concentración en Transporte, Almacén y Coordinación indica que el problema no es aislado sino recurrente y estructural.",
      "El bajo NPS general (4/10) y los NPS por servicio entre 3/10 y 5/10 muestran daño directo en percepción del cliente, con riesgo real de escalación comercial si no se corrigen demoras, saturación en CEDIS y fallas de planeación.",
    ],
    actions: [
      {
        priority: "URGENTE",
        text: "Implementar en 24-48h una mesa de control diaria para Walmart enfocada en Transporte y Coordinación, revisando puntualidad, cumplimiento de ventanas y asignación de rutas en CDMX y CEDIS Norte.",
      },
      {
        priority: "URGENTE",
        text: "Rebalancear capacidad operativa en Rutas Centro CDMX y Entrega CEDIS Norte, ajustando flota, ventanas y secuencia de despacho para reducir los retrasos recurrentes y la saturación en recepción.",
      },
      {
        priority: "URGENTE",
        text: "Ejecutar un plan de contención en Almacén sobre Control Inventario y picking, con conteo cíclico de SKUs críticos, validación previa a embarque y auditoría de diferencias de surtido.",
      },
      {
        priority: "CORTO PLAZO",
        text: "Rediseñar en 3-7 días el proceso de Planeación Rutas, definiendo hora límite de programación, responsable por ventana y control de cambios de última hora para evitar reprogramaciones frecuentes.",
      },
      {
        priority: "CORTO PLAZO",
        text: "Establecer un esquema de gestión de incidencias con SLA interno para Atención, priorizando casos abiertos de Walmart, tiempo máximo de respuesta y seguimiento visible por queja hasta cierre.",
      },
      {
        priority: "PREVENTIVO",
        text: "Crear un tablero semanal de salud del cliente con OTIF, puntualidad, SL por servicio, NPS y aging de quejas por área, para detectar deterioros tempranos y escalar desvíos antes de una inconformidad formal.",
      },
    ],
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
    nps: "6/10",
    quejas: "5",
    tendencia: "↓ Falta operadores",
    since: "2019",
    manager: "Carlos Méndez",

    services: [
      {
        name: "Transporte Planta",
        desc: "Entrega de autopartes just-in-time.",
        area: "Transporte",
        expected: "01-Dic",
        real: "02-Dic",
        realClass: "severity-mid",
        sl: "88%",
        slClass: "severity-mid text-center",
        nps: "7/10",
        npsClass: "severity-mid text-center",
      },
      {
        name: "Distribución Regional",
        desc: "Entrega a distribuidores.",
        area: "Transporte",
        expected: "02-Dic",
        real: "02-Dic",
        realClass: "severity-low",
        sl: "91%",
        slClass: "severity-low text-center",
        nps: "7/10",
        npsClass: "severity-mid text-center",
      },
    ],

    complaints: [
      {
        title: "Falta de operadores",
        desc: "Escasez de choferes certificados en planta.",
        area: "Transporte",
        date: "10 Dic 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Retrasos en entregas JIT",
        desc: "Afectación a líneas de producción.",
        area: "Transporte",
        date: "09 Dic 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Capacidad limitada",
        desc: "Falta de unidades en horas pico.",
        area: "Transporte",
        date: "08 Dic 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Desalineación producción-logística",
        desc: "Fallas en sincronización de embarques.",
        area: "Coordinación",
        date: "07 Dic 2025",
        severity: "MEDIO",
        severityClass: "badge--warning-light",
        status: "EN PROGRESO",
        statusClass: "badge--warning-light",
      },
      {
        title: "Incidencias sin seguimiento",
        desc: "Casos abiertos sin cierre oportuno.",
        area: "Atención",
        date: "06 Dic 2025",
        severity: "MEDIO",
        severityClass: "badge--warning-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
    ],
    semaforo: "red",
    kpiStatus: {
      otif: "success",
      puntual: "warning",
      nps: "danger",
      quejas: "warning",
    },
    diagnostico: {
      summary:
        '<p>General Motors presenta un <span class="hl-danger">riesgo alto de churn</span> impulsado principalmente por incidencias críticas en Transporte que impactan operaciones just-in-time. Aunque los KPIs generales son relativamente estables (OTIF 90%, puntualidad 88%, NPS 6/10), existen retrasos en servicios clave y una tendencia negativa asociada a falta de operadores y capacidad limitada.</p><p>El riesgo se concentra en <span class="hl-danger">Transporte con impacto directo en producción</span>, evidenciado por múltiples quejas ALTA abiertas relacionadas con entregas JIT, disponibilidad de operadores y unidades. Adicionalmente, existen señales de desalineación operativa y fallas de seguimiento en Coordinación y Atención que podrían escalar si no se corrigen rápidamente.</p>',
    },
    keyFindings: [
      "El servicio Transporte Planta presenta retraso (expected vs real) y SL de 88%, lo que impacta directamente operaciones just-in-time sensibles a tiempos.",
      "Existen 3 quejas de severidad ALTA abiertas en Transporte relacionadas con operadores, capacidad y retrasos, indicando un problema operativo crítico y recurrente.",
      "La tendencia negativa por falta de operadores y la afectación a producción elevan el riesgo de escalación comercial pese a KPIs generales relativamente estables.",
    ],
    actions: [
      {
        priority: "URGENTE",
        text: "Asignar en 24-48h capacidad adicional de operadores certificados en Transporte Planta, incluyendo reasignación interna o contratación temporal para cubrir la demanda crítica JIT.",
      },
      {
        priority: "URGENTE",
        text: "Ajustar la planeación operativa en Transporte Planta asegurando cobertura de unidades en horas pico y priorización de embarques críticos de autopartes.",
      },
      {
        priority: "URGENTE",
        text: "Implementar monitoreo en tiempo real de entregas JIT en planta, con alertas tempranas ante retrasos y escalación inmediata a operaciones.",
      },
      {
        priority: "CORTO PLAZO",
        text: "Sincronizar en 3-7 días la programación entre producción y logística mediante revisión diaria de ventanas de embarque y capacidad disponible.",
      },
      {
        priority: "CORTO PLAZO",
        text: "Establecer un flujo de seguimiento de incidencias con responsables definidos en Atención para asegurar cierre oportuno de casos abiertos.",
      },
      {
        priority: "PREVENTIVO",
        text: "Desarrollar un plan estructural de atracción y retención de operadores para operaciones críticas de GM, incluyendo forecast de demanda y cobertura mínima por turno.",
      },
    ],
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
    quejas: "12",
    tendencia: "↓ Alta demanda",
    since: "2021",
    manager: "Fernanda Ruiz",

    services: [
      {
        name: "Última Milla",
        desc: "Entrega a cliente final en zonas urbanas.",
        area: "Transporte",
        expected: "01-Dic",
        real: "02-Dic",
        realClass: "severity-mid",
        sl: "90%",
        slClass: "severity-mid text-center",
        nps: "6/10",
        npsClass: "severity-mid text-center",
      },
      {
        name: "Fulfillment",
        desc: "Preparación de pedidos en FC.",
        area: "Almacén",
        expected: "01-Dic",
        real: "02-Dic",
        realClass: "severity-mid",
        sl: "92%",
        slClass: "severity-mid text-center",
        nps: "6/10",
        npsClass: "severity-mid text-center",
      },
    ],

    complaints: [
      {
        title: "Saturación última milla",
        desc: "Alta demanda en zonas urbanas.",
        area: "Transporte",
        date: "12 Dic 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Retrasos en entregas",
        desc: "Volumen superior a capacidad.",
        area: "Transporte",
        date: "11 Dic 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Falta de repartidores",
        desc: "Cobertura insuficiente.",
        area: "Transporte",
        date: "10 Dic 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Errores en picking",
        desc: "Productos incorrectos enviados.",
        area: "Almacén",
        date: "09 Dic 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "EN PROGRESO",
        statusClass: "badge--warning-light",
      },
      {
        title: "Demoras en preparación",
        desc: "Retraso en centros fulfillment.",
        area: "Almacén",
        date: "08 Dic 2025",
        severity: "MEDIO",
        severityClass: "badge--warning-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Inventario desactualizado",
        desc: "Stock no sincronizado.",
        area: "Almacén",
        date: "07 Dic 2025",
        severity: "MEDIO",
        severityClass: "badge--warning-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Forecast inexacto",
        desc: "Planeación de demanda incorrecta.",
        area: "Coordinación",
        date: "06 Dic 2025",
        severity: "ALTO",
        severityClass: "badge--danger-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Reprogramaciones frecuentes",
        desc: "Cambios en rutas.",
        area: "Coordinación",
        date: "05 Dic 2025",
        severity: "MEDIO",
        severityClass: "badge--warning-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Falta visibilidad pedidos",
        desc: "Tracking limitado.",
        area: "Tecnología",
        date: "04 Dic 2025",
        severity: "MEDIO",
        severityClass: "badge--warning-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Errores tracking",
        desc: "Datos incorrectos en sistema.",
        area: "Tecnología",
        date: "03 Dic 2025",
        severity: "BAJO",
        severityClass: "badge--success-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Soporte lento",
        desc: "Tiempos largos de respuesta.",
        area: "Atención",
        date: "02 Dic 2025",
        severity: "MEDIO",
        severityClass: "badge--warning-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Escalaciones abiertas",
        desc: "Casos sin resolución.",
        area: "Atención",
        date: "01 Dic 2025",
        severity: "MEDIO",
        severityClass: "badge--warning-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
    ],
    semaforo: "yellow",
    kpiStatus: {
      otif: "success",
      puntual: "success",
      nps: "danger",
      quejas: "danger",
    },
    diagnostico: {
      summary:
        '<p>Amazon México presenta un <span class="hl-danger">riesgo alto de churn</span> debido a una alta concentración de quejas críticas en Transporte y deterioro progresivo en múltiples áreas. Aunque los KPIs generales aún se mantienen estables (OTIF 92%, puntualidad 91%), existe presión operativa por alta demanda que ya está generando retrasos en servicios clave y afectación en última milla.</p><p>El riesgo es <span class="hl-danger">multiarea y escalable</span>, con incidencias ALTA abiertas en Transporte (saturación, falta de repartidores y retrasos), junto con fallas en Almacén, Coordinación y Tecnología. La combinación de alta demanda, capacidad insuficiente y errores operativos indica un problema estructural que puede deteriorar rápidamente la experiencia del cliente si no se corrige.</p>',
    },
    keyFindings: [
      "Ambos servicios presentan retraso (expected vs real) y niveles de servicio en rango medio (90% y 92%), indicando presión operativa en última milla y fulfillment.",
      "Existen múltiples quejas de severidad ALTA abiertas en Transporte (saturación, retrasos y falta de repartidores), evidenciando un cuello de botella crítico en la operación.",
      "El problema se extiende a varias áreas (Almacén, Coordinación, Tecnología y Atención), mostrando un riesgo sistémico impulsado por alta demanda y planeación insuficiente.",
    ],
    actions: [
      {
        priority: "URGENTE",
        text: "Incrementar en 24-48h la capacidad de última milla en zonas urbanas mediante incorporación de repartidores adicionales y expansión temporal de flota en Transporte.",
      },
      {
        priority: "URGENTE",
        text: "Implementar control diario de capacidad vs demanda en última milla para priorizar rutas críticas y evitar saturación en picos operativos.",
      },
      {
        priority: "URGENTE",
        text: "Ejecutar revisión inmediata en Fulfillment para validar procesos de picking y preparación, reduciendo errores y tiempos de despacho.",
      },
      {
        priority: "CORTO PLAZO",
        text: "Ajustar en 3-7 días el modelo de forecast de demanda en Coordinación, integrando volúmenes reales y picos históricos para mejorar planeación operativa.",
      },
      {
        priority: "CORTO PLAZO",
        text: "Corregir fallas de visibilidad en Tecnología implementando validación de tracking y sincronización de inventario en tiempo real.",
      },
      {
        priority: "PREVENTIVO",
        text: "Desarrollar un esquema de planeación de capacidad escalable para temporadas de alta demanda, incluyendo contratación anticipada y dimensionamiento dinámico de recursos.",
      },
    ],
  },

  {
    id: "heineken",
    nombre: "Heineken México",
    meta: "Consumo · Distribución",
    nivel: "MEDIO",
    tipo: "warning",
    otif: "91%",
    puntual: "93%",
    nps: "7/10",
    quejas: "1",
    tendencia: "↓ Estacionalidad",
    since: "2020",
    manager: "Roberto Díaz",

    services: [
      {
        name: "Distribución Nacional",
        desc: "Entrega a centros de consumo.",
        area: "Transporte",
        expected: "01-Dic",
        real: "01-Dic",
        realClass: "severity-low",
        sl: "98%",
        slClass: "severity-low text-center",
        nps: "9/10",
        npsClass: "severity-low text-center",
      },
    ],

    complaints: [
      {
        title: "Ajuste estacional",
        desc: "Variación en demanda por temporada.",
        area: "Coordinación",
        date: "10 Dic 2025",
        severity: "BAJO",
        severityClass: "badge--success-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
    ],
    semaforo: "yellow",
    kpiStatus: {
      otif: "success",
      puntual: "success",
      nps: "warning",
      quejas: "success",
    },
    diagnostico: {
      summary:
        '<p>Heineken México presenta un <span class="hl-success">riesgo bajo de churn</span> con operación estable y desempeño consistente: OTIF de 91%, puntualidad de 93% y NPS de 7/10. El servicio de Distribución Nacional opera sin retrasos y con nivel de servicio alto (98%), lo que indica control operativo sólido en Transporte.</p><p>Las incidencias actuales son <span class="hl-warning">puntuales y de bajo impacto</span>, relacionadas principalmente con variaciones estacionales en Coordinación. No se observan señales de deterioro estructural ni afectación multiarea, por lo que el riesgo se mantiene contenido bajo condiciones actuales.</p>',
    },
    keyFindings: [
      "El servicio de Distribución Nacional cumple sin retrasos y con SL de 98%, reflejando alta confiabilidad operativa en Transporte.",
      "Solo existe una queja de severidad BAJA asociada a estacionalidad, sin impacto crítico ni acumulación de incidencias.",
      "La tendencia de variación por demanda estacional representa un riesgo controlado, sin evidencia de afectación en KPIs clave.",
    ],
    actions: [
      {
        priority: "PREVENTIVO",
        text: "Ajustar planeación de demanda en Coordinación considerando picos estacionales para asegurar disponibilidad de capacidad en Distribución Nacional.",
      },
      {
        priority: "PREVENTIVO",
        text: "Monitorear semanalmente variaciones de volumen vs capacidad en Transporte para anticipar posibles desviaciones durante temporadas altas.",
      },
      {
        priority: "PREVENTIVO",
        text: "Implementar revisión periódica de forecast y alineación con cliente para validar cambios en patrones de consumo y evitar desbalances operativos.",
      },
    ],
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
    since: "2021",
    manager: "Sofía Navarro",

    services: [
      {
        name: "Última Milla Express",
        desc: "Entrega rápida urbana.",
        area: "Transporte",
        expected: "01-Dic",
        real: "01-Dic",
        realClass: "severity-low",
        sl: "96%",
        slClass: "severity-low text-center",
        nps: "8/10",
        npsClass: "severity-low text-center",
      },
      {
        name: "Fulfillment",
        desc: "Preparación pedidos.",
        area: "Almacén",
        expected: "01-Dic",
        real: "01-Dic",
        realClass: "severity-low",
        sl: "95%",
        slClass: "severity-low text-center",
        nps: "8/10",
        npsClass: "severity-low text-center",
      },
      {
        name: "Planeación Capacidad",
        desc: "Coordinación demanda.",
        area: "Coordinación",
        expected: "01-Dic",
        real: "01-Dic",
        realClass: "severity-low",
        sl: "96%",
        slClass: "severity-low text-center",
        nps: "8/10",
        npsClass: "severity-low text-center",
      },
      {
        name: "Tracking Envíos",
        desc: "Monitoreo en tiempo real.",
        area: "Tecnología",
        expected: "01-Dic",
        real: "01-Dic",
        realClass: "severity-low",
        sl: "97%",
        slClass: "severity-low text-center",
        nps: "8/10",
        npsClass: "severity-low text-center",
      },
      {
        name: "Soporte Seller",
        desc: "Atención vendedores.",
        area: "Atención",
        expected: "01-Dic",
        real: "02-Dic",
        realClass: "severity-mid",
        sl: "94%",
        slClass: "severity-mid text-center",
        nps: "8/10",
        npsClass: "severity-low text-center",
      },
    ],

    complaints: [
      {
        title: "Ajuste rutas nuevas",
        desc: "Optimización de rutas en expansión.",
        area: "Transporte",
        date: "10 Dic 2025",
        severity: "BAJO",
        severityClass: "badge--success-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Configuración tracking",
        desc: "Errores menores en monitoreo.",
        area: "Tecnología",
        date: "09 Dic 2025",
        severity: "BAJO",
        severityClass: "badge--success-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
      {
        title: "Consulta de sellers",
        desc: "Dudas operativas de vendedores.",
        area: "Atención",
        date: "08 Dic 2025",
        severity: "BAJO",
        severityClass: "badge--success-light",
        status: "ABIERTO",
        statusClass: "badge--danger-light",
      },
    ],
    semaforo: "green",
    kpiStatus: {
      otif: "success",
      puntual: "success",
      nps: "success",
      quejas: "success",
    },
    diagnostico: {
      summary:
        '<p>Mercado Libre presenta un <span class="hl-success">riesgo bajo de churn</span> con desempeño sólido y consistente en todos los KPIs: OTIF de 96%, puntualidad de 95% y NPS de 8/10. La operación es estable en múltiples áreas, con todos los servicios cumpliendo sin retrasos relevantes y niveles de servicio superiores a 94%.</p><p>Las incidencias actuales son <span class="hl-warning">menores y asociadas a crecimiento</span>, principalmente por expansión de rutas y ajustes operativos en Tecnología y Atención. No se observan fallas estructurales, sino una operación en evolución controlada que requiere ajustes finos para sostener el nivel de servicio.</p>',
    },
    keyFindings: [
      "Los 5 servicios operan sin retrasos significativos y con SL entre 94% y 97%, reflejando consistencia operativa en Transporte, Almacén, Coordinación y Tecnología.",
      "Las 3 quejas registradas son de severidad BAJA y distribuidas en distintas áreas, sin acumulación crítica ni impacto directo en KPIs.",
      "La tendencia de crecimiento por nuevas rutas genera ajustes operativos controlados, sin deterioro actual pero con necesidad de alineación preventiva.",
    ],
    actions: [
      {
        priority: "PREVENTIVO",
        text: "Optimizar la configuración de nuevas rutas en Transporte validando tiempos, cobertura y balance de carga para evitar desviaciones en última milla.",
      },
      {
        priority: "PREVENTIVO",
        text: "Ajustar en Tecnología los parámetros de tracking para asegurar precisión en monitoreo conforme crecen los volúmenes y rutas.",
      },
      {
        priority: "PREVENTIVO",
        text: "Fortalecer en Atención los procesos de soporte a sellers, definiendo tiempos de respuesta y categorización de consultas para mantener el nivel de servicio.",
      },
      {
        priority: "PREVENTIVO",
        text: "Monitorear semanalmente el impacto de nuevas rutas en KPIs operativos para anticipar saturaciones o desbalances en capacidad.",
      },
    ],
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
    since: "2018",
    manager: "Laura Sánchez",

    services: [
      {
        name: "Distribución Refrigerada",
        desc: "Entrega de productos sensibles a temperatura en cadena de frío.",
        area: "Transporte",
        expected: "01-Dic",
        real: "01-Dic",
        realClass: "severity-low",
        sl: "99%",
        slClass: "severity-low text-center",
        nps: "9/10",
        npsClass: "severity-low text-center",
      },
      {
        name: "Control Frío",
        desc: "Monitoreo y control de inventario refrigerado en centros logísticos.",
        area: "Almacén",
        expected: "01-Dic",
        real: "01-Dic",
        realClass: "severity-low",
        sl: "99%",
        slClass: "severity-low text-center",
        nps: "9/10",
        npsClass: "severity-low text-center",
      },
      {
        name: "Coord. Supply",
        desc: "Planificación logística de abastecimiento y reposición con alta precisión.",
        area: "Coordinación",
        expected: "01-Dic",
        real: "01-Dic",
        realClass: "severity-low",
        sl: "99%",
        slClass: "severity-low text-center",
        nps: "9/10",
        npsClass: "severity-low text-center",
      },
      {
        name: "Tracking Avanzado",
        desc: "Seguimiento en tiempo real de unidades y pedidos críticos.",
        area: "Tecnología",
        expected: "01-Dic",
        real: "01-Dic",
        realClass: "severity-low",
        sl: "99%",
        slClass: "severity-low text-center",
        nps: "9/10",
        npsClass: "severity-low text-center",
      },
      {
        name: "Soporte Premium",
        desc: "Atención especializada para incidencias logísticas y ajustes operativos.",
        area: "Atención",
        expected: "01-Dic",
        real: "01-Dic",
        realClass: "severity-low",
        sl: "99%",
        slClass: "severity-low text-center",
        nps: "9/10",
        npsClass: "severity-low text-center",
      },
    ],

    complaints: [],
    semaforo: "green",
    kpiStatus: {
      otif: "success",
      puntual: "success",
      nps: "success",
      quejas: "success",
    },
    diagnostico: {
      summary:
        '<p>Nestlé México presenta un <span class="hl-success">riesgo bajo de churn</span> con desempeño sobresaliente en todos los indicadores: OTIF de 99%, puntualidad de 98% y NPS de 9/10. La operación es altamente consistente en todas las áreas, con cumplimiento total de tiempos y niveles de servicio de 99% en cada servicio.</p><p>La operación se encuentra en un estado <span class="hl-success">óptimo y controlado</span>, sin quejas registradas ni desviaciones operativas. La tendencia positiva indica una ejecución madura y estable, particularmente crítica en cadena de frío donde no se observan fallas ni riesgos actuales.</p>',
    },
    keyFindings: [
      "Todos los servicios operan sin retrasos y con SL de 99%, reflejando excelencia operativa en Transporte, Almacén, Coordinación, Tecnología y Atención.",
      "No existen quejas registradas, lo que confirma estabilidad operativa y ausencia de fricción con el cliente.",
      "La tendencia positiva y la operación en cadena de frío sin incidentes indican un control robusto en procesos críticos de alto riesgo.",
    ],
    actions: [
      {
        priority: "PREVENTIVO",
        text: "Mantener monitoreo continuo de cadena de frío en Transporte y Almacén para asegurar estabilidad en condiciones críticas de temperatura.",
      },
      {
        priority: "PREVENTIVO",
        text: "Documentar y estandarizar mejores prácticas operativas actuales para replicarlas en otros clientes de características similares.",
      },
      {
        priority: "PREVENTIVO",
        text: "Implementar revisiones periódicas de indicadores clave para detectar desviaciones mínimas antes de que impacten la operación.",
      },
    ],
  },
];

/* =========================================
   DATOS POR ÁREA (DASHBOARD)
   ========================================= */
const areaDatos = {
  transporte: {
    titulo: "Transporte",
    nivel: "ALTO",
    semaforo: "red",
    otif: "87%",
    puntual: "82%",
    nps: "5/10",
    quejas: "26",
    "kpiStatus": {
    "otif": "warning",
    "puntual": "danger",
    "nps": "danger",
    "quejas": "danger"
    },
    diagnostico: {
    "summary": "<p>El área de <span class=\"hl-danger\">Transporte presenta deterioro estructural</span> impulsado por retrasos recurrentes, saturación operativa y falta de capacidad en múltiples clientes (Walmart, Amazon, GM).</p><p>Existe una <span class=\"hl-danger\">alta concentración de quejas ALTA abiertas</span> relacionadas con última milla, disponibilidad de operadores y cumplimiento de ventanas, impactando directamente entregas y operaciones críticas como JIT.</p>"
  },

  keyFindings: [
    "Retrasos consistentes en última milla y rutas urbanas en múltiples clientes",
    "Problemas de capacidad (flota y operadores) recurrentes en GM y Amazon",
    "Impacto directo en entregas, CEDIS y producción (caso GM JIT)"
  ],

  actions: [
    {
      "priority": "URGENTE",
      "text": "Reasignar flota y operadores en rutas críticas (CDMX, última milla y plantas GM) para estabilizar cumplimiento en 24-48h."
    },
    {
      "priority": "CORTO PLAZO",
      "text": "Implementar planeación dinámica de capacidad considerando picos de demanda en e-commerce y consumo."
    }
  ],
    valor: 62,
    resumen:
      "Área con mayor deterioro sistémico, afectada por capacidad insuficiente, saturación y retrasos recurrentes en última milla y rutas críticas. Impacta directamente entregas, producción (JIT) y experiencia del cliente.",
    kpis: [
      {
        label: "NS",
        valor: "87%",
        meta: "Meta ≥90%",
        clase: "warning",
      },
      {
        label: "PUNTUAL",
        valor: "82%",
        meta: "Meta ≥90%",
        clase: "danger",
      },
      { label: "NPS", valor: "5/10", meta: "Meta 8", clase: "danger" },
      {
        label: "QUEJAS",
        valor: "26",
        meta: "Límite aceptable: ≤ 3",
        clase: "danger",
      },
    ],
  },
  almacen: {
    titulo: "Almacén",
    nivel: "MEDIO",
    semaforo: "yellow",
    otif: "90%",
    puntual: "89%",
    nps: "6/10",
    quejas: "10",
    "kpiStatus": {
    "otif": "success",
    "puntual": "warning",
    "nps": "warning",
    "quejas": "danger"
    },
    diagnostico: {
    "summary": "<p>El área de <span class=\"hl-warning\">Almacén presenta presión operativa moderada</span> con errores recurrentes en picking, inventario y preparación de pedidos en clientes como Walmart y Amazon.</p><p>Aunque existen operaciones de alto desempeño (Nestlé, Mercado Libre), la presencia de <span class=\"hl-warning\">fallas en control de inventario y surtido</span> genera impacto financiero y fricción operativa.</p>"
  },

  keyFindings: [
    "Errores de picking y diferencias de inventario en Walmart y Amazon",
    "Demoras en preparación de pedidos en fulfillment",
    "Operaciones altamente estables en Nestlé y Mercado Libre compensan parcialmente el riesgo"
  ],

  actions: [
    {
      "priority": "CORTO PLAZO",
      "text": "Implementar auditorías de picking y validación previa a embarque en centros con mayor incidencia."
    },
    {
      "priority": "PREVENTIVO",
      "text": "Estandarizar mejores prácticas de control de inventario observadas en Nestlé para replicarlas en otros clientes."
    }
  ],
    valor: 72,
    resumen:
      "Operación funcional pero con inconsistencias en picking, inventario y preparación en algunos clientes. El riesgo es moderado y principalmente financiero, no crítico.",
    kpis: [
      {
        label: "NS",
        valor: "90%",
        meta: "Meta ≥90%",
        clase: "success",
      },
      {
        label: "PUNTUAL",
        valor: "89%",
        meta: "Meta ≥90%",
        clase: "warning",
      },
      { label: "NPS", valor: "6/10", meta: "Meta 8", clase: "warning" },
      {
        label: "QUEJAS",
        valor: "10",
        meta: "Límite aceptable: ≤ 3",
        clase: "danger",
      },
    ],
  },
  coordinacion: {
    titulo: "Coordinación Logística",
    valor: 65,
    nivel: "ALTO",
    otif: "88%",
    puntual: "85%",
    nps: "5/10",
    quejas: "12",
    "kpiStatus": {
    "otif": "warning",
    "puntual": "warning",
    "nps": "danger",
    "quejas": "danger"
    },
    semaforo: "red",
    diagnostico: {
    "summary": "<p>El área de <span class=\"hl-danger\">Coordinación presenta fallas sistémicas</span> relacionadas con planeación tardía, forecast inexacto y desalineación entre áreas en clientes como Walmart, Amazon y GM.</p><p>Se observa una <span class=\"hl-danger\">alta frecuencia de reprogramaciones y mala asignación de rutas</span>, lo que genera inestabilidad operativa y amplifica los problemas en Transporte y Almacén.</p>"
  },

  keyFindings: [
    "Planeación de rutas tardía y cambios de última hora en Walmart",
    "Forecast incorrecto y desalineación demanda-capacidad en Amazon",
    "Desincronización producción-logística en GM"
  ],

  actions: [
    {
      "priority": "URGENTE",
      "text": "Definir ventanas de planeación obligatorias y responsables por cliente para evitar asignaciones tardías."
    },
    {
      "priority": "CORTO PLAZO",
      "text": "Recalibrar modelos de forecast integrando demanda real y picos históricos por cliente."
    }
  ],
    resumen:
      "Principal fuente de desalineación sistémica: forecast impreciso, planeación tardía y cambios constantes que amplifican problemas en Transporte y Almacén.",
    kpis: [
      {
        label: "NS",
        valor: "88%",
        meta: "Meta ≥90%",
        clase: "warning",
      },
      {
        label: "PUNTUAL",
        valor: "85%",
        meta: "Meta ≥90%",
        clase: "warning",
      },
      { label: "NPS", valor: "5/10", meta: "Meta 8", clase: "danger" },
      {
        label: "QUEJAS",
        valor: "12",
        meta: "Límite aceptable: ≤ 3",
        clase: "danger",
      },
    ],
  },
  tecnologia: {
    titulo: "Tecnología y Monitoreo",
    nivel: "MEDIO",
    semaforo: "yellow",
    otif: "92%",
    puntual: "91%",
    nps: "7/10",
    quejas: "4",
    "kpiStatus": {
    "otif": "success",
    "puntual": "success",
    "nps": "warning",
    "quejas": "warning"
    },
    diagnostico: {
    "summary": "<p>El área de <span class=\"hl-warning\">Tecnología y monitoreo presenta inconsistencias moderadas</span> en visibilidad, tracking y sincronización de datos en clientes como Walmart y Amazon.</p><p>Aunque existen operaciones maduras (Nestlé y Mercado Libre), las <span class=\"hl-warning\">fallas en trazabilidad y datos incorrectos</span> afectan la toma de decisiones y percepción del cliente.</p>"
  },

  keyFindings: [
    "Falta de visibilidad y trazabilidad en pedidos (Walmart)",
    "Errores en tracking y sincronización de inventario en Amazon",
    "Plataformas robustas y estables en Mercado Libre y Nestlé"
  ],

  actions: [
    {
      "priority": "CORTO PLAZO",
      "text": "Corregir integraciones de tracking e inventario en clientes con incidencias para mejorar visibilidad en tiempo real."
    },
    {
      "priority": "PREVENTIVO",
      "text": "Homologar estándares tecnológicos tomando como referencia las soluciones de tracking avanzado de Nestlé y Mercado Libre."
    }
  ],
    valor: 84,
    resumen:
      "Capacidades sólidas en clientes maduros, pero con fallas de visibilidad, tracking e integración en operaciones de alto volumen que afectan la toma de decisiones.",
    kpis: [
      {
        label: "NS",
        valor: "92%",
        meta: "Meta ≥90%",
        clase: "success",
      },
      {
        label: "PUNTUAL",
        valor: "91%",
        meta: "Meta ≥90%",
        clase: "success",
      },
      { label: "NPS", valor: "7/10", meta: "Meta 8", clase: "warning" },
      {
        label: "QUEJAS",
        valor: "4",
        meta: "Límite aceptable: ≤ 3",
        clase: "warning",
      },
    ],
  },
  cliente: {
    titulo: "Atención al Cliente",
    valor: 87,
    nivel: "BAJO",
    semaforo: "green",
    otif: "91%",
    puntual: "90%",
    nps: "7/10",
    quejas: "2",
    "kpiStatus": {
    "otif": "success",
    "puntual": "success",
    "nps": "warning",
    "quejas": "success"
    },
    diagnostico: {
    "summary": "<p>El área de <span class=\"hl-warning\">Atención presenta oportunidades de mejora</span> en tiempos de respuesta y cierre de incidencias, particularmente en Walmart y Amazon.</p><p>Se identifican <span class=\"hl-warning\">casos abiertos sin seguimiento oportuno</span> y escalaciones sin cierre, lo que impacta directamente la percepción del cliente pese a operaciones estables en otras áreas.</p>"
  },

  keyFindings: [
    "Casos abiertos y escalaciones sin cierre en múltiples clientes",
    "Tiempos de respuesta lentos en atención de incidencias",
    "Operación estable en clientes con bajo volumen de incidencias (Nestlé, Heineken)"
  ],

  actions: [
    {
      "priority": "CORTO PLAZO",
      "text": "Implementar SLA internos de atención y seguimiento con responsables claros por cliente."
    },
    {
      "priority": "PREVENTIVO",
      "text": "Crear tablero de control de incidencias con aging y prioridad para asegurar cierre oportuno."
    }
  ],
    resumen:
      "Área reactiva con problemas de seguimiento y cierre de incidencias, generando fricción en percepción aunque no siempre impacto operativo directo.",
    kpis: [
      {
        label: "NS",
        valor: "91%",
        meta: "Meta ≥90%",
        clase: "success",
      },
      {
        label: "PUNTUAL",
        valor: "90%",
        meta: "Meta ≥90%",
        clase: "success",
      },
      { label: "NPS", valor: "7/10", meta: "Meta 8", clase: "warning" },
      {
        label: "QUEJAS",
        valor: "2",
        meta: "Límite aceptable: ≤ 3",
        clase: "success",
      },
    ],
  },
};
