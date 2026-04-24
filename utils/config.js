// 🌐 Configuración base
export const BASE_URL = __ENV.BASE_URL || 'https://fakestoreapi.com';

// ⚙️ Configuración de carga
export const LOAD_CONFIG = {
    RATE: Number(__ENV.RATE) || 20,              // TPS objetivo
    DURATION: __ENV.DURATION || '1m',            // duración de la prueba
    PRE_VUS: Number(__ENV.PRE_VUS) || 20,        // VUs iniciales
    MAX_VUS: Number(__ENV.MAX_VUS) || 50         // VUs máximos
};

// 📊 Thresholds (criterios de aceptación)
export const THRESHOLDS = {
    http_req_duration: ['p(95)<1500'],   // 95% < 1.5 segundos
    http_req_failed: ['rate<0.03'],      // < 3% errores
};

// 🧪 Headers comunes
export const HEADERS = {
    'Content-Type': 'application/json',
};

// 📌 Endpoints
export const ENDPOINTS = {
    LOGIN: '/auth/login',
};