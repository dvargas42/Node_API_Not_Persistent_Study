const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {
    const {title, owner } =  request.query;
    
    return response.json({title:title, owner:owner});
});

app.post('/projects', (request, response) => {
    const body = request.body;

    return response.json(body);
});

app.put();

app.delete();

app.listen(3333, () => {
    console.log('🚀 Back-end started!')
})