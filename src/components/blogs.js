import * as React from "react";
import {Link} from "gatsby";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";

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
        <ul className={'blogs-list ' + display}>
            {
                data.map(edge => (

                    <li className="item">
                        {
                            dateCategoryPlacement === "top" ? (
                                <DateCategory edge={edge} />
                            ) : ""
                        }
                        <h3 className="blog-list-title">
                            <Link to={`/blog/${edge.node.slug}`}>
                                {edge.node.frontmatter.title}
                            </Link>
                        </h3>
                        <p>{edge.node.frontmatter.description}</p>
                        {
                            dateCategoryPlacement === "bottom" ? (
                                <DateCategory edge={edge} />
                            ) : ""
                        }
                        {
                            readButtonVisible ? (
                                <Link to={`/blog/${edge.node.slug}`}>
                                    Read
                                </Link>
                            ) : ""
                        }
                    </li>

                ))
            }
        </ul>
    )
}

export default Blogs