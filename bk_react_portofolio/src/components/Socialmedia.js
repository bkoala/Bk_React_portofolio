import React from 'react'
import { SocialIcon } from 'react-social-icons'

export const Socialmedia = () => {
    return (
<section >
        <div >
        <div className="social-icons-container">
            <SocialIcon className="social-icon" target="_blank" url="https://twitter.com" />
            <SocialIcon className="social-icon" target="_blank" url="https://instagram.com" />
            <SocialIcon className="social-icon" target="_blank" url="https://facebook.com" />
            <SocialIcon className="social-icon" target="_blank" url="https://reddit.com" />
        </div>
        </div>
    </section>
    )
}
