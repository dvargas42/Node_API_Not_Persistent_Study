const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {
    const {title, owner } =  request.query;
    
    return response.json({title:title, owner:owner});
});

app.post();

app.put();

app.delete();

app.listen(3333, () => {
    console.log('🚀 Back-end started!')
})