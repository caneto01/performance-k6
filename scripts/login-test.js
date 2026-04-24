import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';

// 📊 Reporte HTML integrado
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

import { 
    BASE_URL, 
    LOAD_CONFIG, 
    THRESHOLDS, 
    HEADERS, 
    ENDPOINTS 
} from '../utils/config.js';

// 📥 JSON data
const users = new SharedArray('users', function () {
    return JSON.parse(open('../data/users.json'));
});

// ⚙️ Opciones dinámicas (FORZANDO 5 MIN)
export const options = {
    scenarios: {
        login_test: {
            executor: 'constant-arrival-rate',
            rate: LOAD_CONFIG.RATE,
            timeUnit: '1s',
            duration: '5m', // 🔥 AQUÍ EL CAMBIO CLAVE
            preAllocatedVUs: LOAD_CONFIG.PRE_VUS,
            maxVUs: LOAD_CONFIG.MAX_VUS,
        },
    },
    thresholds: THRESHOLDS,
};

// 🧪 Test principal
export default function () {

    const user = users[Math.floor(Math.random() * users.length)];

    const payload = JSON.stringify({
        username: user.username,
        password: user.password,
    });

    const res = http.post(
        `${BASE_URL}${ENDPOINTS.LOGIN}`,
        payload,
        { headers: HEADERS }
    );

    check(res, {
        'status 200': (r) => r.status === 200,
        'response < 1.5s': (r) => r.timings.duration < 1500,
    });

    sleep(1);
}

// 📊 Generación automática de reportes
export function handleSummary(data) {
    return {
        'reports/summary.json': JSON.stringify(data, null, 2),
        'reports/report.html': htmlReport(data),
    };
}