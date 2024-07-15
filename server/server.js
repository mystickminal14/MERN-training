const express = require('express');
const app = express();
const router = require('./routes/auth-route');
app.use(express.json())
app.use('/api/auth', router);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});
