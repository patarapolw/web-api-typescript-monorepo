import axios from 'axios'
import { createConsumer } from 'rest-ts-axios'
import { myPublicationAPI } from '@web-api-typescript-monorepo/api'

const driver = axios.create({
  baseURL: 'http://localhost:3000/api'
  // You can add global settings here such as authentication headers
})

const api = createConsumer(myPublicationAPI, driver)

async function doRun () {
  if (confirm('Press OK to add publication')) {
    const response = await api.addPublication({
      body: {
        authors: ['R.L. Rivest', 'A. Shamir', 'L. Adleman'],
        title: 'A Method for Obtaining Digital Signatures and Public-Key Cryptosystems',
        body: '...',
        isPublished: true
      }
    })

    alert(response.data.id)
  }
}
doRun()
