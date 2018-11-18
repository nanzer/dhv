import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import YouTube from 'react-youtube'

import '../assets/scss/layout/_sponsor.scss'

//images
import Microsoft from '../assets/images/Microsoft_logo.svg'



const BGvideoOptions = {
    height: '500',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay:1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        modestbranding: 1,  // Hide the Youtube Logo
        loop: 1,            // Run the video in a loop - DOESN'T WORK - used onEnd function
        fs: 0,              // Hide the full screen button
        cc_load_policy: 0, // Hide closed captions
        iv_load_policy: 3,  // Hide the Video Annotations
        autohide: 0,
        enablejsapi: 0
    }
};
const FGvideoOptions = {
    height: '500',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        controls: 1,
        rel: 0,
        showinfo: 0,
        modestbranding: 1,  // Hide the Youtube Logo
        loop: 0,            // Run the video in a loop
        fs: 1,              // Show the full screen button
        cc_load_policy: 0, // Hide closed captions
        iv_load_policy: 3,  // Hide the Video Annotations
        autohide: 1,
        enablejsapi: 0
    }
};

const Sponsors = (props) => (
    <div>
        <Helmet>
            <title>Sponsors</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

          {/* Code for background video below this*/}
          <div className="video-background">
                <div className="video-foreground">
                    <YouTube
                        videoId="tJA4XoCAs1Y"
                        opts={BGvideoOptions}
                        className="video-iframe"
                        onReady={function(e) {
                            e.target.mute();
                          }}
                        onEnd={function(e) {
                            e.target.playVideo();
                        }}
                    />
                </div>
            </div>
            {/* Code for background video ends here */}
        
        <div id="main" className="alt">
        <section id="one">
                <div className="inner">
                    <header className="major">
                        <h3>Current Sponsors</h3>
                        <h3>2018-2019</h3>
                    </header>

            <div className="box">
                <div className="boxcontent">
                    <img className="logos" src={Microsoft} alt="" />
                    <img className="logos" src={Microsoft} alt="" />
                    <img className="logos" src={Microsoft} alt="" />
                </div>
            </div>   
            <div className="box">
                <div className="boxcontent">
                    <img className="logos" src={Microsoft} alt="" />
                    <img className="logos" src={Microsoft} alt="" />
                    <img className="logos" src={Microsoft} alt="" />
                </div>
            </div>     
            <div className="box">
                <div className="boxcontent">
                    <img className="logos" src={Microsoft} alt="" />
                    <img className="logos" src={Microsoft} alt="" />
                    <img className="logos" src={Microsoft} alt="" />
                    <img className="logos" src={Microsoft} alt="" />
                </div>
            </div>       
            

            </div>
            </section>  
        </div>        
    </div>
)

export default Sponsors