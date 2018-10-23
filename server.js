const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db.json')
const rewriter = jsonServer.rewriter(require('./routes.json'))
const middlewares = jsonServer.defaults()

const FLAG_INDEX = 2
const FLAG = process.argv[FLAG_INDEX]

server.use(middlewares)
server.use(rewriter)
server.use(router)

router.render = (req, res) => {
  switch (FLAG) {
    case '404':
      res.status(404).jsonp({
        error: "statusCode 404"
      })
      break
    case '500':
      res.status(500).jsonp({
        error: "statusCode 500"
      })
      break
    default:
      res.jsonp(res.locals.data)
  }
}

server.listen(3000, () => {
  console.log('JSON Server is running. localhost:3000')
})
