const { apiClient } = require('../config/apiConfig.js');

function transformText(texto) {
    return texto.toUpperCase().replace(/Ñ/g, 'N').trim();
}

async function fetchPatientData(nombre, apellido, estado, nroAfiliado, sessionId, limit = 30, skip = 0) {
    try {
        let filtros = [`CardCode eq 'C0987'`];

        if (nombre) {
            filtros.push(`startswith(U_NombrePaciente,'${transformText(nombre)}')`);
        }

        if (apellido) {
            filtros.push(`contains(U_ApellidoPaciente,'${transformText(apellido)}')`);
        }

        if (estado) {
            filtros.push(`contains(ESTADO,'${transformText(estado)}')`);
        }

        if (nroAfiliado) {
            const afiliadoLimpio = transformText(nroAfiliado);
            filtros = [`contains(U_NroAfiliado,'${afiliadoLimpio}')`];
        }

        const filterQuery = filtros.join(' and ');
        const url = `/sml.svc/VFCV_AUDI_PEDIDOSPRD?$filter=${filterQuery}&$top=${limit}&$skip=${skip}&$count=true`;

        const headers = {
            'Cookie': `B1SESSION=${sessionId}; CompanyDB=SBOAUDIFRPRDAR; ROUTEID=.node0`
        };

        console.log('URL de la API:', url); 
        const response = await apiClient.get(url, { headers });

        if (response.status === 200) {
            console.log('Response data:', response.data); 
            return response.data;
        } else {
            throw new Error(`Error en la solicitud a la API: ${response.status}`);
        }
    } catch (error) {
        throw new Error(`Error en la solicitud a la API: ${error.message}`);
    }
}



async function fetchAllPatientData(nombre, apellido, estado, nroAfiliado, sessionId) {
    const limit = 20;
    let skip = 0;
    let allData = [];
    let totalResults;

    //do {
        const data = await fetchPatientData(nombre, apellido, estado, nroAfiliado, sessionId, limit, skip);
        allData = allData.concat(data.value);
        totalResults = data['@odata.count'];
        skip += limit;
   // } while (skip < totalResults);

    return allData;
}


module.exports = { fetchAllPatientData };