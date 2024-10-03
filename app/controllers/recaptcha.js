async function verifyRecaptcha(req, res) {
    const fetch = (await import('node-fetch')).default;

    const secretKey = '6LfeavUpAAAAAE06UmosxN2xS5OFIeWgx-OzgHQf';
    const token = req.body['token']; // El nombre del parámetro es 'token' en reCAPTCHA v3
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    try {
        const response = await fetch(url, {
            method: 'POST'
        });
        const data = await response.json();

        // Verifica la puntuación mínima requerida (puedes ajustar este valor según tus necesidades)
        const minimumScore = 0.5; // Puntuación mínima requerida para considerar que el usuario no es un bot
        if (data.success && data.score >= minimumScore) {
            res.json({ success: true });
        } else {
            res.json({ success: false, error: 'reCAPTCHA verification failed or score too low' });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

module.exports = { verifyRecaptcha };