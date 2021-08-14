import * as React from 'react'
import Layout from '../components/layout'
import BlogSection from "../components/blogSection"
import PhotoSection from '../components/photoSection'
import '../styles/index.scss'
import BannerSection from "../components/bannerSection"


const IndexPage = () => {
    return (
        <Layout pageTitle="Welcome to Tooth and Keys" pageDescription="My site home page" pageClass="home-page">
            <BannerSection />
            <BlogSection />
            <PhotoSection />
        </Layout>
    )
}

export default IndexPage