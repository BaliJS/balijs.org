// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const Parser = require('rss-parser')
const { format, localeFormat } = require('light-date')

module.exports = function(api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const collection = addCollection('Post')
    const parser = new Parser()
    const data = await parser.parseURL(
      'https://forum.balijs.org/category/7.rss?uid=2&token=bb4ccc7b-262a-4991-9df4-e47a8504365e'
    )

    for (const post of data.items) {
      const [_, id] = post.title.split('#')

      const d = new Date(post.pubDate)
      const pubDate = format(d, `{dd} ${localeFormat(d, '{MMMM}')} {yyyy}`)

      collection.addNode({
        id: `newsletter-${id}`,
        title: post.title,
        content: post.content,
        pubDate
      })
    }

    const socials = require('./src/data/socials.json')

    const socialCollections = addCollection('Social')

    Object.keys(socials).forEach(key => {
      socialCollections.addNode({ type: key, value: socials[key] })
    })
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
