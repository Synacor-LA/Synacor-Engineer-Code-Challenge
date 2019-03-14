const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.resolve(__dirname, './app')));

const port = 3000;

app.listen(port, () => { console.log(`Express is listening on port ${port}`); });
