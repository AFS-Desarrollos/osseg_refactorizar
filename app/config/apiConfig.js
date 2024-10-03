const axios = require('axios');
const https = require('https');




const apiClient = axios.create({
    baseURL: 'https://app-afiliados.audifarmsalud.com:50000/b1s/v1',
    headers: { 'Content-Type': 'application/json' },
    httpsAgent: new https.Agent({
        rejectUnauthorized: false // Ignorar errores de certificado
    })
});

const loginParams = {
    CompanyDB: 'SBOAUDIFRPRDAR',
    UserName: 'blx',
    Password:'Audi.2021'
};

async function loginToAPI() {
    try {
        console.log('Datos de Login a enviar:', loginParams); // Agrega este log
        const response = await apiClient.post('/Login', loginParams);
        console.log('Respuesta de autenticaci贸n recibida:', response.data.SessionId);
        return response.data.SessionId; // Retorna el token de autenticaci贸n
    } catch (error) {
        console.error('Error en la autenticaci贸n:', error);
        throw error;
    }
}

module.exports = {
    loginToAPI,
    apiClient
};

