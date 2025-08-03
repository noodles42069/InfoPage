const express = require('express');
const app = express();
const port = 3000;

const tokenGenerator = () => {
    const token = Math.random().toString(36).substr(2, 10);
    return token;
};

app.get('/token', (req, res) => {
    const token = tokenGenerator();
    res.send({ token });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
