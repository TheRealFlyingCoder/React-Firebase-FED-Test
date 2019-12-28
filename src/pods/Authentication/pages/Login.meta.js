import React from 'react';
import { MetaConfig } from '~/configuration/meta';

import bannerImage from '~/assets/exampleBanner.jpg'

export default {
    ...MetaConfig,
    title: 'Home | React SPA',
    description: 'The Flying Coder\'s SPA Landing page',
    image: bannerImage,
    custom: [
        {
            tag: 'script',
            props: {},
            content: `window.fbAsyncInit=function(){FB.init({appId:'2610064605713581',cookie:!0,xfbml:!0,version:'v5.0'});FB.AppEvents.logPageView()};(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return;}
            js=d.createElement(s);js.id=id;js.src="https://connect.facebook.net/en_US/sdk.js";fjs.parentNode.insertBefore(js,fjs)}(document,'script','facebook-jssdk'));`
        }
    ]
}