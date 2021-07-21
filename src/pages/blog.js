import React, { useState, useEffect} from "react";
import Layout from '../components/layout'
import {graphql, Link} from 'gatsby'

const kebabCase = require('kebab-case');

const BlogPage = ({ data, pageContext }) => {

    const {category, tag} = pageContext;

    // Array of all news articles
    const allNews = data.allMdx.edges

    // State for the list
    const [list, setList] = useState([...allNews.slice(0, 10)])

    // State to trigger oad more
    const [loadMore, setLoadMore] = useState(false)

    // State of whether there is more to load
    const [hasMore, setHasMore] = useState(allNews.length > 10)

    // Load more button click
    const handleLoadMore = () => {
        setLoadMore(true)
    }

    // Handle loading more articles
    useEffect(() => {
        if (loadMore && hasMore) {
            const currentLength = list.length
            const isMore = currentLength < allNews.length
            const nextResults = isMore
                ? allNews.slice(currentLength, currentLength + 10)
                : []
            setList([...list, ...nextResults])
            setLoadMore(false)
        }
    }, [loadMore, hasMore]) //eslint-disable-line

    //Check if there is more
    useEffect(() => {
        const isMore = list.length < allNews.length
        setHasMore(isMore)
    }, [list]) //eslint-disable-line


    return (
        <Layout pageTitle={category || tag} pageName="blog-page" pageDescription="Description about Blogs">
                {
                    list.map(edge => (

                        <div className="blog-section" key={edge.node.slug}>
                            <div className="blog-section-header">
                                <span className="blog-section-header-date">{edge.node.frontmatter.date}</span>
                                <Link className="blog-section-header-tag" to={`/category/${kebabCase(edge.node.frontmatter.category)}`}>
                                    {edge.node.frontmatter.category}
                                </Link>
                            </div>
                            <h2 className="blog-section-header-title">
                                <Link to={`/blog/${edge.node.slug}`}>
                                {edge.node.frontmatter.title}
                                </Link>
                            </h2>
                            <p className="blog-section-description">{edge.node.frontmatter.description}</p>
                            <Link to={`/blog/${edge.node.slug}`}>
                                Read
                            </Link>
                        </div>
                    ))
                }
                { hasMore ? (
                    <button onClick={handleLoadMore} className="btn btn-secondary">Load More</button>
                ) : (
                    <p>*** No more results ***</p>
                )}
        </Layout>
    )
}

export const query = graphql`
    query ($category: String, $tag: String) {
      allMdx (sort: {fields: frontmatter___date, order: ASC},filter: {frontmatter: {category: {eq: $category},tags: {eq: $tag},draft: {eq: false}}}) {
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
`

export default BlogPage