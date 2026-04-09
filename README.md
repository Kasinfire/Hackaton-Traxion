# Customer Health Agent - Traxión (Hackathon)


Este proyecto es un **Dashboard Interactivo** diseñado para el Eje 2 del Hackathon Traxión. Su objetivo principal es monitorear la "salud" operativa y el nivel de riesgo de las cuentas clave (clientes logísticos), proporcionando diagnósticos impulsados por análisis de datos y sugerencias de acción inmediatas.


## Características Principales


* **Dashboard General:** Vista panorámica con KPIs clave (NS%, NPS, Clientes en riesgo) y una gráfica interactiva del rendimiento del sistema logístico por áreas (Transporte, Almacén, Tecnología, etc.).

* **Agente AI Integrado:** Panel lateral dinámico que analiza en tiempo real el área seleccionada, mostrando un resumen de rendimiento y métricas específicas.

* **Monitoreo de Cuentas Clave:** Tarjetas individuales por cliente (Walmart, Amazon, GM, etc.) con sus niveles de riesgo (Alto, Medio, Bajo), métricas OTIF y acceso a sus perfiles detallados.

* **Diagnóstico de Área y Cliente:** Vistas detalladas con *Key Findings* y acciones sugeridas categorizadas por urgencia (Urgente, Corto plazo, Preventivo).

* **Contacto por Áreas:** Formulario interactivo con niveles de urgencia (baja, media, alta, crítica) para escalar incidencias directamente al área responsable.

* **Buscador en Tiempo Real:** Filtrado rápido de clientes directamente desde el panel principal.


## Tecnologías Utilizadas


* **HTML5:** Estructura semántica.

* **CSS3:** Diseño responsivo (Flexbox/Grid), variables globales (Custom Properties) y animaciones fluidas.

* **Vanilla JavaScript (ES6+):** Lógica de renderizado dinámico, manipulación del DOM, filtrado de datos y manejo de parámetros URL. *Sin frameworks pesados, 100% nativo.*


## Estructura del Proyecto


\`\`\`text

 Hackaton-Traxion

├──  index.html                 # Dashboard principal

├── perfil-cliente.html        # Vista detallada por cliente

├── diagnostico.html           # Diagnóstico general de cliente

├── diagnostico-area.html      # Diagnóstico específico por área logística

├── contacto_areas.html        # Portal de escalamiento e incidencias

├──  css

│   ├── styles.css             # Estilos globales y del layout principal

│   ├── diagnostico-styles.css # Estilos para las vistas de diagnóstico

│   ├── perfil-cliente-styles.css

│   └── contacto_areas_style.css

└──  js

    ├── data.js                # Base de datos local (JSON simulado de clientes y áreas)

    ├── script.js              # Lógica principal del Dashboard (gráficas, buscador, panel)

    └── perfil-cliente-js.js   # Lógica específica para inyectar datos del cliente

\`\`\`


## Cómo ejecutar el proyecto

# Customer Health Agent - Traxión (Hackathon)


Este proyecto es un **Dashboard Interactivo** diseñado para el Eje 2 del Hackathon Traxión. Su objetivo principal es monitorear la "salud" operativa y el nivel de riesgo de las cuentas clave (clientes logísticos), proporcionando diagnósticos impulsados por análisis de datos y sugerencias de acción inmediatas.


## Características Principales


* **Dashboard General:** Vista panorámica con KPIs clave (NS%, NPS, Clientes en riesgo) y una gráfica interactiva del rendimiento del sistema logístico por áreas (Transporte, Almacén, Tecnología, etc.).

* **Agente AI Integrado:** Panel lateral dinámico que analiza en tiempo real el área seleccionada, mostrando un resumen de rendimiento y métricas específicas.

* **Monitoreo de Cuentas Clave:** Tarjetas individuales por cliente (Walmart, Amazon, GM, etc.) con sus niveles de riesgo (Alto, Medio, Bajo), métricas OTIF y acceso a sus perfiles detallados.

* **Diagnóstico de Área y Cliente:** Vistas detalladas con *Key Findings* y acciones sugeridas categorizadas por urgencia (Urgente, Corto plazo, Preventivo).

* **Contacto por Áreas:** Formulario interactivo con niveles de urgencia (baja, media, alta, crítica) para escalar incidencias directamente al área responsable.

* **Buscador en Tiempo Real:** Filtrado rápido de clientes directamente desde el panel principal.


## Tecnologías Utilizadas


* **HTML5:** Estructura semántica.

* **CSS3:** Diseño responsivo (Flexbox/Grid), variables globales (Custom Properties) y animaciones fluidas.

* **Vanilla JavaScript (ES6+):** Lógica de renderizado dinámico, manipulación del DOM, filtrado de datos y manejo de parámetros URL. *Sin frameworks pesados, 100% nativo.*


## Estructura del Proyecto


\`\`\`text

 Hackaton-Traxion

├──  index.html                 # Dashboard principal

├── perfil-cliente.html        # Vista detallada por cliente

├── diagnostico.html           # Diagnóstico general de cliente

├── diagnostico-area.html      # Diagnóstico específico por área logística

├── contacto_areas.html        # Portal de escalamiento e incidencias

├──  css

│   ├── styles.css             # Estilos globales y del layout principal

│   ├── diagnostico-styles.css # Estilos para las vistas de diagnóstico

│   ├── perfil-cliente-styles.css

│   └── contacto_areas_style.css

└──  js

    ├── data.js                # Base de datos local (JSON simulado de clientes y áreas)

    ├── script.js              # Lógica principal del Dashboard (gráficas, buscador, panel)

    └── perfil-cliente-js.js   # Lógica específica para inyectar datos del cliente

\`\`\`


## Cómo ejecutar el proyecto


Al estar construido con tecnologías web estándar (Vanilla JS/HTML/CSS), no requiere de procesos de compilación ni instalación de dependencias (Node.js/NPM).


1.  Clona este repositorio:

    \`\`\`bash

    git clone https://github.com/Kasinfire/Hackaton-Traxion.git

    \`\`\`

2.  Abre la carpeta del proyecto.

3.  Abre el archivo \`index.html\` en tu navegador web de preferencia.

    * *Recomendación:* Si usas Visual Studio Code, puedes usar la extensión **Live Server** para una mejor experiencia de desarrollo.


## Equipo / Autores

Ivana Mariel Moreno Angeles

Mariola Camacho Lie

Kelly Anahí Arellano Villaseñor


* Desarrollado para el **Hackathon Traxión 2026**.
Al estar construido con tecnologías web estándar (Vanilla JS/HTML/CSS), no requiere de procesos de compilación ni instalación de dependencias (Node.js/NPM).


1.  Clona este repositorio:

    \`\`\`bash

    git clone https://github.com/Kasinfire/Hackaton-Traxion.git

    \`\`\`

2.  Abre la carpeta del proyecto.

3.  Abre el archivo \`index.html\` en tu navegador web de preferencia.

    * *Recomendación:* Si usas Visual Studio Code, puedes usar la extensión **Live Server** para una mejor experiencia de desarrollo.


## Equipo / Autores

Ivana Mariel Moreno Angeles

Mariola Camacho Lie

Kelly Anahí Arellano Villaseñor


* Desarrollado para el **Hackathon Traxión 2026**.
