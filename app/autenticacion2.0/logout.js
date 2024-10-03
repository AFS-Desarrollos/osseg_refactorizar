const { getAuth, signOut } = require('./firebase/auth');

exports.logout = () => {
    const logoutButton = document.getElementById('logout'); // Obtén el botón de logout por su id
    logoutButton.addEventListener('click', () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                console.log('Usuario desconectado');
            })
            .catch((error) => {
                console.error('Error al desconectar:', error);
            });
    });
};
