import * as React from 'react'
import Blogs from "./blogs"
import {graphql, useStaticQuery} from "gatsby"

const BlogSection = () => {

    const data = useStaticQuery(graphql`
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
                  featuredImage{
                      childImageSharp {
                        gatsbyImageData(
                           placeholder: BLURRED
                           formats: [AUTO, WEBP, AVIF]
                         )
                      }
                    } 
                }
                slug
              }
            }
          }
        }
    `)

    return (
        <div className="blogs-section section">
            <div className="container">
                <div className="section-head">
                    <h2>Blogs</h2>
                </div>

                <Blogs display="flex" data={data.allMdx.edges}/>

                <div className="see-more">
                    <a href="/blog"><span>More Blogs</span></a>
                </div>
            </div>
        </div>

    )
}

export default BlogSection