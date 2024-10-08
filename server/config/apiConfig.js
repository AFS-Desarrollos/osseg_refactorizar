import axios from 'axios';
import https from 'https';



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
        console.log('Datos de Login a enviar:', loginParams);
        const response = await apiClient.post('/Login', loginParams);
        console.log('Respuesta de autenticación recibida:', response.data.SessionId);
        return response.data.SessionId;
    } catch (error) {
        console.error('Error en la autenticación:', error);
        throw error;
    }
}

export default loginToAPI;