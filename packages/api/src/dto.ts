/**
 * This class represents the main model we will work with: a scientific publication.
 */
export class Publication {
  constructor (
      public readonly authors: string[],
      public readonly title: string,
      public readonly body: string,
      public readonly isPublished: boolean
  ) {
  }
}

/**
* This model represents a list of publications for a given category.
*/
export class PublicationsList {
  constructor (
      public readonly publications: Publication[],
      public readonly category: string
  ) {
  }
}

/**
* This is returned by the server when a publication has been successfully published.
* We don't need to return the full model so instead we only return the database `id` of the publication.
*/
export class CreatePublicationResponse {
  constructor (
      public readonly id: string
  ) {}
}

/**
* As an alternative to classes, you may also use a variable. Note that the member values don't matter.
* What matters is the **type** of the members
*/
export const RemovePublicationResponse = {
  // See how we use 'as' to make the type more precise.
  success: 'ok' as 'ok' | 'failure',
  error: null as null | string,

  // Here, we don't use 'as' because the type 'string' is what we want.
  // The actual text in the string doesn't matter.
  userMessage: 'some string'
}
