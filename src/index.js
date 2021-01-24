const express = require('express');

const app = express();

app.use(express.json());

app.get();

app.post();

app.put();

app.delete();

app.listen(3333, () => {
    console.log('🚀 Back-end started!')
})