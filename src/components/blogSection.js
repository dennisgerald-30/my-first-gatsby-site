import * as React from 'react'
import {graphql, Link} from 'gatsby'
import {StaticQuery} from "../../.cache/gatsby-browser-entry"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

const kebabCase = require('kebab-case');

const BlogSection = () => {

    return (
        <div className="blogs-section section">
            <div className="container">
            <div className="section-head">
                <h2>Blogs</h2>
            </div>
                <StaticQuery
                    query={graphql`
                        query {
                          allMdx (sort: {fields: frontmatter___date, order: ASC}) {
                            edges {
                              node {
                                frontmatter {
                                  date
                                  description
                                  title
                                  tags
                                  category  
                                }
                                slug
                              }
                            }
                          }
                        }
                      `}
                    render={data => (
                        <ul className="blogs-list">
                            {
                                data.allMdx.edges.map(edge => (
                                    <li className="item">
                                        <h3 className="blog-list-title">
                                            <Link to={`/blog/${edge.node.slug}`}>
                                                {edge.node.frontmatter.title}
                                            </Link>
                                        </h3>
                                        <p>{edge.node.frontmatter.description}</p>
                                        <p className="date-category">
                                            <FontAwesomeIcon icon={faCalendarAlt} /> {edge.node.frontmatter.date}
                                            <Link className="blog-section-header-tag ml-2" to={`/category/${kebabCase(edge.node.frontmatter.category?edge.node.frontmatter.category:"")}`}>
                                                 {edge.node.frontmatter.category}
                                            </Link>
                                        </p>
                                    </li>

                                ))
                            }
                        </ul>
                    )}
                />
            <div className="see-more">
                <a href="/blog"><span>More Blogs</span></a>
            </div>
            </div>
        </div>

    )
}

export default BlogSection