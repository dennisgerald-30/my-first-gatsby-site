import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/layout"
import CodeBlock from '../components/codeblock'

const kebabCase = require('kebab-case')
const shortcodes = { Link, CodeBlock } // Provide common components here

export default function PostPageTemplate({ data: { mdx } }) {
    return (
        <Layout pageTitle={mdx.frontmatter.title}>
            <MDXProvider components={shortcodes}>
                <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
            </MDXProvider>
            <div className="tags-li">
                <ul className="tags-list">
                    {mdx.frontmatter.tags.map( tag => (
                        <li className="tags-list-item" key={tag}>
                            <a href={`/tag/${kebabCase(tag)}`} className="tags-list-item-link">{tag}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        tags
      }
    }
  }
`