const express = require('express');
const cors = require('cors');
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(cors());
app.use(express.json());
// app.use('/projects/:id', validateProjectId);

const projects = [];

function validateProjectId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)){
    return response.status(400).json({ error: 'Invalid project ID.'})
  }

  return next();
}

app.get('/projects', (request, response) => {
  const { title } = request.query;

  const result = title
    ? projects.filter(project => project.title.includes(title))
    : projects;

  return response.json(result);
})

app.post('/projects', (request, response) => {
  const {title, owner} = request.body;

  const project = { id: uuid(), title, owner };

  projects.push(project);

  return response.json(project);
})

app.put('/projects/:id', validateProjectId, (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found.'})
  }

  const project = {
    id,
    title, 
    owner,
  }

  projects[projectIndex] = project;

  return response.json(project);
})

app.delete('/projects/:id', validateProjectId, (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found.'})
  }

  projects.splice(projectIndex, 1)

  return response.status(204).send();
})

app.listen(3333, () => {
  console.log('👽 Servidor rodando na porta 3333')
});