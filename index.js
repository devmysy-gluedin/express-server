const express = require('express');

const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
    const response = {
        email: "example@example.com",
        username: "exampleUser"
    };
    res.json(response);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});