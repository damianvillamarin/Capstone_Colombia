import React from 'react';
import FacebookLogo from '../images/svg/facebook.svg';

const SocialNetworkFacebook = () => {
    return (
        <div className="btn btn-xs btn-social btn-icon">
            <img src={FacebookLogo} alt="Facebook Logo" />
        </div>
    )
};

export {SocialNetworkFacebook};