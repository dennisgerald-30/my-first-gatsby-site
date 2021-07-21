import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Icon } from '@iconify/react';
import netflixIcon from '@iconify-icons/mdi/netflix';


const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page" pageDescription="My site home page">
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="../images/IMG_1445.JPG"
            />
            <Icon icon={netflixIcon} />
        </Layout>
    )
}

export default IndexPage