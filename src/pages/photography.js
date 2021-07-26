import React, {useState} from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import ReactBnbGallery from "react-bnb-gallery"
import 'react-bnb-gallery/dist/style.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const GalleryExample = ({ data }) => {
    const Photos = data.allFile.edges.map(({ node }) => node.publicURL)
    const [isOpen, setIsOpen] = useState(false);
    const [activePhotoIndex, setActivePhotoIndex] = useState(0)

    return (
        <Layout pageTitle="Dentist Photography" pageName="photography-page" containerClass="container-fluid" navStyle="dark" pageDescription="Photography of different seasons in Rochester, New York.">
            <div className="image-grid">
            {
                data.allFile.edges.map( (edge, index) =>
                    <div className="image-container d-inline-block">
                        <div className="image-container-wrapper d-inline-block">
                            <a onClick={() => {setIsOpen(true); setActivePhotoIndex(index)}}>
                                <GatsbyImage alt="" image={getImage(edge.node)} />
                            </a>
                        </div>
                    </div>
                )
            }
            </div>
                <ReactBnbGallery
                    show={isOpen}
                    photos={Photos}
                    onClose={() => setIsOpen(false)}
                    activePhotoIndex={activePhotoIndex}
                />
        </Layout>
    );
};

export const imageQuery = graphql`
query ImagesForGallery {
  allFile(
    filter: {extension: {ne: "mdx"}, sourceInstanceName: {eq: "photography"}}
  ) {
    edges {
      node {
        publicURL
        base
        childImageSharp {
          gatsbyImageData(
            width: 358
            height: 240
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
}

`

export default GalleryExample