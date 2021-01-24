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

app.put('/projects/:id', (request, response) => {
    const id = request.params;
    const { title, owner } = request.body;

    return response.json({
        id:id,
        title:title,
        owner:owner,
    })
});

app.delete('/projects/:id', (request, response) => {
    const id = request.params;

    return response.send();
});

app.listen(3333, () => {
    console.log('🚀 Back-end started!')
})