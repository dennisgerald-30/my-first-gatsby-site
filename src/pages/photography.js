import React from 'react'
import { graphql } from 'gatsby'
import Gallery from "@browniebroke/gatsby-image-gallery"
import Layout from "../components/layout"

const PhotographyPage = ({ data }) => {
    const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
    // `images` is an array of objects with `thumb` and `full`
    return (
        <Layout pageTitle="Vini's Photography" pageName="photography-page" containerClass="container-fluid" navStyle="dark" pageDescription="Photography of different seasons in Rochester, New York.">
            <Gallery images={images} gutter=".25rem" mdColWidth="25" lightboxOptions={{"enableZoom": false}}/>
        </Layout>
    )
}

export const pageQuery = graphql`
  query ImagesForGallery {
    allFile(filter: {extension: {ne: "mdx"}}) {
        edges {
          node {
            childImageSharp {
              thumb: gatsbyImageData(width: 358, height: 240, placeholder: BLURRED)
              full: gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
    }
  }
`

export default PhotographyPage