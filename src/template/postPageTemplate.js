import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/layout"
import CodeBlock from '../components/codeblock'
import BlogCard from "../components/blogCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";

const kebabCase = require('kebab-case')
const shortcodes = { Link, CodeBlock, BlogCard } // Provide common components here

export default function PostPageTemplate({ data: { mdx } }) {
    return (
        <Layout pageTitle={mdx.frontmatter.title} pageClass="post-page">
            <div className="container py-3">
                <h1 className="page-header mb-3">{mdx.frontmatter.title}</h1>
                <p className="mb-4">
                    <span className="blog-section-header-date"> <FontAwesomeIcon icon={faCalendarAlt} /> {mdx.frontmatter.date}</span>
                    <Link className="blog-section-header-tag" to={`/category/${kebabCase(mdx.frontmatter.category)}`}>
                        {mdx.frontmatter.category}
                    </Link>
                </p>
                <MDXProvider components={shortcodes}>
                    <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
                </MDXProvider>
                <div className="tags-li mt-4">
                    <ul className="tags-list">
                        {mdx.frontmatter.tags.map( tag => (
                            <li className="tags-list-item" key={tag}>
                                <a href={`/tag/${kebabCase(tag)}`} className="tags-list-item-link">{tag}</a>
                            </li>
                        ))}
                    </ul>
                </div>
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
        date
        title
        tags
        category
      }
    }
  }
`