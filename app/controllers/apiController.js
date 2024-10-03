const { fetchAllPatientData } = require('../service/apiservice.js');



async function buscarPaciente(req, res) {
   
    
    const { nombre, apellido, nroAfiliado, estado } = req.body;

    try {
        const sessionId = req.session.sessionId;

        if (!sessionId) {
            throw new Error('Sesi車n no autenticada. Por favor, inicie sesi車n de nuevo.');
        }

        const data = await fetchAllPatientData(nombre, apellido, estado, nroAfiliado, sessionId);

        if (data.length === 0) {
            return res.status(404).render('error', { error: 'No se encontraron datos para los criterios proporcionados' });
        }

        const totalResults = data.length;
        const totalPages = Math.ceil(totalResults / 20);

        if (req.xhr) {
            res.json({ data, totalPages });
        } else {
            res.render('index', { data, totalPages });
        }
    } catch (error) {
        const statusCode = error.response ? error.response.status : 500;
        if (req.xhr) {
            res.status(statusCode).json({ error: error.message });
        } else {
            res.status(statusCode).render('error', { error: error.message });
        }
    }
}



module.exports = {
    buscarPaciente
};
