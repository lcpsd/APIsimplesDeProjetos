const Express = require('express')
const routes = Express.Router()

const allProjects = new Array

function checkIndex(req, res, next){
    if(!allProjects[parseFloat( req.params.id)-1]){
        return res.json('Project not found')
    }

    next()
}

function checkExists(req, res, next){

    if(allProjects[parseFloat(req.params.id)-1] || 
    allProjects[parseFloat(req.body.id)-1]){
        
        return res.json('Id aready exists')
    }

    next()
}

routes.get('/projects', (req, res) => {
    return res.json(allProjects)
})

routes.post('/projects',checkExists, (req, res) => {
    allProjects.push(req.body)
    
    return res.json(allProjects)
})

routes.put('/projects/:id',checkExists, (req, res) => {
    const {id} = req.params
    const {title} = req.body

    for(let project of allProjects){
        if(project.id == id){

            project.title = title

            return res.json(allProjects)
        }
    }
})

routes.delete('/projects/:id',checkIndex, (req, res) => {
    
    let index = parseFloat( req.params.id )
    if(index >= 1){
        index =+ - 1
    }

    allProjects.splice(index, 1)
    return res.json(allProjects)
})

routes.post('/projects/:id/tasks', checkIndex, (req, res) => {
    const index = parseFloat(req.params.id) - 1

    for(let task of req.body.tasks){

        allProjects[index]['tasks'].push(task)
    }

    return res.json(allProjects[index])
})

module.exports = routes