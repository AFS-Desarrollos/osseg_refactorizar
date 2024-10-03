 showMessage = (message, type = 'success') => {
    const div = document.createElement('div');
    div.textContent = message;
    div.className = `alert alert-${type}`;
    document.body.appendChild(div);

    setTimeout(() => {
        document.body.removeChild(div);
    }, 3000);
};


