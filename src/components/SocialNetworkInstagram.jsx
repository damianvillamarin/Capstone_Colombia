import React from 'react';
import InstagramLogo from '../images/svg/instagram.svg';

const SocialNetworkInstagram = () => {
    return (
        <div className="btn btn-xs btn-social btn-icon">
            <img src={InstagramLogo} alt="Instagram Logo" />
        </div>
    )
};

export {SocialNetworkInstagram};