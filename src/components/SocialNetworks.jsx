import React from 'react';

const SocialNetworks = (props) => {
    return (
        <footer className="footer text-center">
        <ul>
            <li className="list-inline-item p-0 m-0">
                <a href="#!" className="btn btn-xs btn-social btn-icon">
                    {props.socialNetworkFacebook}
                </a>
            </li>
            <li className="list-inline-item p-0 m-0">
                <a href="#!" className="btn btn-xs btn-social btn-icon">
                    {props.socialNetworkInstagram}
                </a>
            </li>
            <li className="list-inline-item p-0 m-0">
                <a href="#!" className="btn btn-xs btn-social btn-icon">
                    {props.socialNetworkTwiter}
                </a>
            </li>
        </ul>
        </footer>
    )
};

export {SocialNetworks};