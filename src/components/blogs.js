import * as React from "react"
import {Link} from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons"

const kebabCase = require('kebab-case')

const Blogs = ({ data, display, readButtonVisible= false, dateCategoryPlacement = "bottom" }) => {

    const DateCategory = (edge) => {

        return (
            <p className="date-category">
                <FontAwesomeIcon icon={faCalendarAlt} /> {edge.edge.node.frontmatter.date}
                <Link className="blog-section-header-tag ml-2" to={`/category/${kebabCase(edge.edge.node.frontmatter.category?edge.edge.node.frontmatter.category:"")}`}>
                    {edge.edge.node.frontmatter.category}
                </Link>
            </p>
        )
    }

    return (
        <ul className="blogs-list flex">
            {
                data.map(edge => (
                    <li className="item">
                        <div className="inner">
                            {edge.node.frontmatter.featuredImage ? (
                                <GatsbyImage layout="fullWidth" alt="Blog page" image={getImage(edge.node.frontmatter.featuredImage)}/>
                            ) : (
                                <div className="no-image"></div>
                            )}

                            <div className="details">
                                <h3 className="blog-list-title">
                                    <Link to={`/blog/${edge.node.slug}`}>
                                        {edge.node.frontmatter.title}
                                    </Link>
                                </h3>
                                <DateCategory edge={edge} />
                            </div>
                        </div>
                    </li>

                ))
            }
        </ul>
    )
}

export default Blogs