import * as express from 'express'
import * as path from 'path'
import { json } from 'body-parser'
import { buildRouter } from 'rest-ts-express'
import { myPublicationAPI } from '@web-api-typescript-monorepo/api'
import { PublicationsList } from '@web-api-typescript-monorepo/api/dist/dto'

const router = buildRouter(myPublicationAPI, (_) => _

/*
     * The builder defines one method for each endpoint. The method accepts a handler
     * which gets executed when a valid HTTP request is made to that endpoint.
     *
     * The handler takes a `req` and `res` parameter, just like regular express handlers.
     * The difference here is that `req` contains additional type information for the input parameters.
     */
  .listPublications((req, res) => {
    console.log(`Requesting category "${req.params.category}"`)
    // Note how, contrary to regular express handlers, here we return
    // the object to send instead of using `res.send` or `res.write`pèw.
    return new PublicationsList(
      [],
      req.params.category
    )
  })

/*
     * Another difference with express is that you can make your handler asynchronous:
     */
  .addPublication(async (req, res) => {
    // You could do something like this:
    // await someAsynchronousOperation();
    console.log(`Title: ${req.body.title}, authors: ${req.body.authors}`)
    // You don't have to use the class constructor `new CreatePublicationResponse`.
    // Rest.ts only cares about the structural type of the object you return. Therefore,
    // you may return anonymous object hashes like this:
    return {
      id: 'id_of_' + req.body.title
    }
  })

  .removePublication((req, res) => {
    // Try this: type `req.params.`, a good IDE such as VS code will provide a list of possible completions.
    // Here, it shows the `id` property we've defined in the template literal in the API definition.
    console.log(`Removing publication: ${req.params.id}`)

    // Similarly, you can just type: `return {` and hit CTRL+SPACE to get a list of valid members to return.
    // This is one of the most useful features of Rest.ts.
    return {
      userMessage: 'some string',
      error: null,
      success: 'ok'
    }
  })
)

const app = express()
const port = process.env.PORT || '3000'

app.use(json()) // Don't forget to add a body parser if you want to use `req.body`!

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', `http://localhost:${process.env.DEV_SERVER_PORT || '8080'}`)
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use('/api', router)

app.use(express.static(path.resolve(require.resolve('@web-api-typescript-monorepo/web'), '../dist')))

app.listen(port, () => {
  console.log(`Server in running at http://localhost:${port}`)
})
