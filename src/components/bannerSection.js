import * as React from 'react'
import {StaticImage} from "gatsby-plugin-image"

const BannerSection = () => {
    return (
        <div className="banner-section">
            <div className="banner-image">
                <StaticImage alt="banner image" src="../images/1366120.jpg"/>
            </div>
            <div className="banner-details">
                <span className="intro-text">Hello...</span>
                <h1>I am a <span className="highlighter-banner">DENTIST</span></h1>
                <ul className="sub-data">
                    <li><span className="highlighter-sub-data">D</span>octor</li>
                    <li><span className="highlighter-sub-data">EN</span>gineer</li>
                    <li>ar<span className="highlighter-sub-data">TIST</span></li>
                </ul>
            </div>
        </div>
    )
}

export default BannerSection