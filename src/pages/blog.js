import React, { useState, useEffect} from "react";
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import Blogs from "../components/blogs";

const BlogPage = ({ data, pageContext }) => {

    const {category, tag} = pageContext;

    // Array of all news articles
    const allNews = data.allMdx.edges

    const blogsOffset = 2;

    // State for the list
    const [list, setList] = useState([...allNews.slice(0, blogsOffset)])

    // State to trigger oad more
    const [loadMore, setLoadMore] = useState(false)

    // State of whether there is more to load
    const [hasMore, setHasMore] = useState(allNews.length > blogsOffset)

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
                ? allNews.slice(currentLength, currentLength + blogsOffset)
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

    const defaultText = 'Blogs'
    const isCategoryOrTagAvailable = category || tag
    const pageTitle = isCategoryOrTagAvailable ? `${isCategoryOrTagAvailable} | ${defaultText}` : defaultText
    const pageHeader = isCategoryOrTagAvailable ? isCategoryOrTagAvailable : defaultText

    return (
        <Layout pageTitle={pageTitle} pageClass="blog-page" pageDescription="Description about Blogs">
            <div className="container">
                <h1 className="page-header">{pageHeader}</h1>

                <Blogs readButtonVisible dateCategoryPlacement="top" category={category} tag={tag} data={list}/>

                { hasMore ? (
                    <button onClick={handleLoadMore} className="btn btn-secondary text-center">Load More</button>
                ) : (
                    <p className="text-center">*** No more results ***</p>
                )}
            </div>
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