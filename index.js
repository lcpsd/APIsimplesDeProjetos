const Express = require('express')
const app = Express()
const routes = require('./src/routes')

app.use(Express.json())
app.use('/', routes)

app.listen(3000, () => console.log('ok'))