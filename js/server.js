const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/search', (req, res) => {
    // Ваш код для обработки запроса поиска
    res.send('Результаты поиска');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
