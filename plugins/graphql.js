import axios from 'axios'

export default ({ app }, inject) => {
  inject('strapi', {
    graphql: (body) =>
      axios({
        url: `${process.env.HOST_SERVER_MIDDLEWARE}/graphql`,
        method: 'post',
        data: { query: body.query },
      })
        .then((result) => {
          return result.data.data
        })
        .catch((error) => {
          console.log(error)
          throw new Error(error)
        }),
  })
}
