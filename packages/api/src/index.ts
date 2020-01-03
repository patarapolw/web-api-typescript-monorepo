import { GET, POST, DELETE, defineAPI } from 'rest-ts-core'
import { PublicationsList, Publication, CreatePublicationResponse, RemovePublicationResponse } from './dto'

/**
 * This is our REST API definition.
 */
export const myPublicationAPI = defineAPI({

  /**
     * We have a GET endpoint at "/publications/:category", which we name "listPublications".
     *
     * It takes a "category" path parameter and returns a `PublicationsList`.
     */
  listPublications: GET`/publications/${'category'}`
    .response(PublicationsList),

  /**
     * Next is a POST endpoint at "/publications", named "addPublication".
     *
     * It takes a `Publication` body parameter, attempts to add this publication
     * to the database, and returns `CreatePublicationResponse` if all went well.
     */
  addPublication: POST`/publications`
    .body(Publication)
    .response(CreatePublicationResponse),

  /**
     * Finally, we define a way to remove a publication with the DELETE HTTP method.
     */
  removePublication: DELETE`/publications/${'id'}`
    .response(RemovePublicationResponse)
})
