import connect from 'connect'
import cache from 'memory-cache'
import axios from 'axios'
import bodyParser from 'body-parser'

const app = connect()
app.use(bodyParser.json())

app.use(async function (req, res, next) {
  try {
    const cacheId = Buffer.from(JSON.stringify(req.body)).toString('base64')
    const responseCache = cache.get(cacheId)
    if (responseCache) res.end(responseCache)
    const response = await axios.post(
      `${process.env.STRAPI_URL}/graphql`,
      req.body
    )
    cache.put(cacheId, JSON.stringify(response.data))
    if (!responseCache) res.end(JSON.stringify(response.data))
  } catch (error) {
    console.error(error)
    next(new Error(error))
  }
})

module.exports = app
