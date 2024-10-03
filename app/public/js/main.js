// main.js

// Función para mostrar mensajes de alerta
const showMessage = (message, type = 'success') => {
    const div = document.createElement('div');
    div.textContent = message;
    div.className = `alert alert-${type}`;
    document.body.appendChild(div);

    setTimeout(() => {
        document.body.removeChild(div);
    }, 3000);
};

// Escuchar eventos de inicio de sesión exitoso
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        try {
            const formData = new FormData(loginForm);
            const response = await fetch('/login', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                // Mostrar mensaje de éxito utilizando showMessage
                showMessage(data.message, 'success');
                // Redirigir al usuario u otra acción si es necesario
                window.location.href = '/osseg_seguimiento';
            } else {
                // Mostrar mensaje de error si no se pudo iniciar sesión
                alert('Error de autenticación: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Ocurrió un error al intentar iniciar sesión. Inténtelo de nuevo más tarde.');
        }
    });
});
