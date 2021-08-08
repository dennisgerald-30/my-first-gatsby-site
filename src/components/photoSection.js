import * as React from 'react'
import {graphql} from 'gatsby'
import {StaticQuery} from "../../.cache/gatsby-browser-entry"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {GatsbyImage, getImage} from "gatsby-plugin-image"

const PhotoSection = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        pauseOnHover: true,
        autoplaySpeed: 6000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className="photos-section section container">
            <div className="container">
                <div className="section-head">
                    <h2>Photos</h2>
                </div>
                <div className="photos-item">
                    <StaticQuery query={graphql`
                    query ImagesForPhotoSection {
                      allFile(
                        filter: {extension: {ne: "mdx"}, sourceInstanceName: {eq: "photography"}}
                        limit: 10
                        sort: {order: ASC, fields: name}
                      ) {
                        edges {
                          node {
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
                `}
                                 render={data => (
                                     <Slider {...settings} className="overflow-hidden">
                                     {
                                         data.allFile.edges.map(edge => (
                                             <GatsbyImage image={getImage(edge.node)} />
                                         ))
                                     }
                                     </Slider>
                                 )}
                    />
                </div>
                <div className="see-more">
                    <a href="/photography"><span>More Photos</span></a>
                </div>
            </div>
        </div>
    )
}

export default PhotoSection