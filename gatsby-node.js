const path = require("path")
const kebabCase = require("kebab-case");

exports.createPages = async ({ graphql, actions, reporter }) => {
    // Destructure the createPage function from the actions object
    const { createPage } = actions

    const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            slug
            frontmatter {
              category
              tags
            }
          }
        }
        group(field: frontmatter___category) {
          totalCount
          fieldValue
        }
      }
    }
  `)

    const resultTags = await graphql(`
        query TagsQuery {
          allMdx {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }

    // Create blog post pages.
    const posts = result.data.allMdx.edges
    const groups = result.data.allMdx.group
    const tags = resultTags.data.allMdx.group

    // you'll call `createPage` for each result
    posts.forEach(({ node }, index) => {
        createPage({
            // This is the slug you created before
            // (or `node.frontmatter.slug`)
            path: `/blog/${kebabCase(node.slug)}`,
            // This component will wrap our MDX content
            component: path.resolve(`./src/template/postPageTemplate.js`),
            // You can use the values in this context in
            // our page layout component
            context: { id: node.id },
        })
    })

    groups.forEach(( group ) => {
        createPage({
            path: `/category/${kebabCase(group.fieldValue)}`,
            component: path.resolve(`./src/pages/blog.js`),
            context: { category: group.fieldValue }
        })
    })

    tags.forEach( ( tag ) => {
        createPage({
            path: `/tag/${kebabCase(tag.fieldValue)}`,
            component: path.resolve('./src/pages/blog.js'),
            context: { tag: tag.fieldValue }
        })
    })
}