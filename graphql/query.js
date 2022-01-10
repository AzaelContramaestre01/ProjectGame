export const dad = function (context) {
  return context.$strapi.graphql({
    query: `
      query {
        dad {
          title
          description
        }
      }
      `,
  })
}
