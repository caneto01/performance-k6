🧪 PRUEBA DE PERFORMANCE – LOGIN API (K6)

---

## 📌 DESCRIPCIÓN

Este proyecto implementa una prueba de carga sobre el endpoint de login de la API Demoblaze utilizando K6.

Se simula tráfico concurrente de usuarios reales consumiendo el servicio de autenticación, validando:

* Disponibilidad del servicio
* Tiempos de respuesta
* Estabilidad bajo carga
* Comportamiento ante múltiples peticiones simultáneas

---

## ⚙️ TECNOLOGÍAS UTILIZADAS

* K6 (herramienta de pruebas de carga)
* JavaScript (scripts de prueba)
* JSON (data driven testing)
* k6-reporter (reporte HTML)

---

## 📁 ESTRUCTURA DEL PROYECTO

k6-performance-test/
│
├── scripts/
│   └── login-test.js
│
├── data/
│   └── users.json
│
├── utils/
│   └── config.js
│
├── reports/
│   ├── report.html
│   └── summary.json
│
├── README.txt
├── conclusiones.txt   


---

## ▶️ EJECUCIÓN DE LA PRUEBA

1. Instalar K6:
   https://k6.io/docs/getting-started/installation/

2. Ubicarse en la raíz del proyecto:

   cd k6-performance-test

3. Ejecutar la prueba:

   k6 run scripts/login-test.js

---

## ⏱️ CONFIGURACIÓN DE LA PRUEBA

* Tipo de prueba: Constant Arrival Rate
* Duración: 5 minutos
* Iteraciones: 20 por segundo
* Usuarios virtuales: 20 – 50 VUs

---

## 📊 REPORTES

Al finalizar la ejecución se generan automáticamente:

* reports/report.html → Reporte visual
* reports/summary.json → Datos técnicos

Abrir en navegador:

reports/report.html

---

## 📌 VALIDACIONES IMPLEMENTADAS

* Status HTTP 200
* Tiempo de respuesta < 1500 ms

---

## 📌 OBSERVACIONES

La prueba utiliza datos dinámicos desde un archivo JSON, simulando múltiples usuarios reales.

---

## 📄 ARCHIVO DE CONCLUSIONES

El archivo "conclusiones.txt" contiene:

* Análisis de resultados
* Interpretación de métricas
* Hallazgos técnicos
* Recomendaciones de mejora

Este archivo es clave para la evaluación del ejercicio.

---
