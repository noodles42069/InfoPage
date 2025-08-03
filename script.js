document.getElementById('generate-token').addEventListener('click', () => {
    fetch('/token')
        .then(response => response.json())
        .then(data => {
            const tokenElement = document.getElementById('token-box');
            tokenElement.textContent = `Generated token: ${data.token}`;
        });
});

document.getElementById('check-token').addEventListener('click', () => {
    const input = document.getElementById('input-box').value;
    const token = document.getElementById('token-box').textContent.split(': ')[1];
    if (input === token) {
        const resultElement = document.getElementById('result-box');
        resultElement.textContent = 'Token is valid!';
    } else {
        const resultElement = document.getElementById('result-box');
        resultElement.textContent = 'Token is invalid!';
    }
});
