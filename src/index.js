const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

app.use(express.json());

const projects = [];

app.get('/projects', (request, response) => {
    const { title, owner } =  request.query;
    
    return response.json({title:title, owner:owner});
});

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;
    const project = {title, owner};

    projects.push(project);

    return response.json(project);
});

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
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