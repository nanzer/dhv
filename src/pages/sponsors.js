import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import YouTube from 'react-youtube'

import '../assets/scss/layout/_sponsor.scss'

//images
import Microsoft from '../assets/images/sponsors/Microsoft_logo.svg'
import TD from '../assets/images/sponsors/TD_logo.svg'
import RBC from '../assets/images/sponsors/RBC_logo.svg'
import CIBC from '../assets/images/sponsors/CIBC_logo.svg'
import MLH from '../assets/images/sponsors/mlh_logo.svg'
import MacEng from '../assets/images/sponsors/mac_eng_logo.svg'
import MES from '../assets/images/sponsors/mes_logo.png'
import IF from  '../assets/images/sponsors/if_logo.png'
import CSE from '../assets/images/sponsors/cse_logo.svg'
import Rogers from '../assets/images/sponsors/rogers_logo.png'



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

            <h4>Powered By:</h4>
            <div className="box alt">
                <div className="boxcontent">
                    <img className="logos microsoft" src={Microsoft} alt="" />
                </div>
            </div>   

            <h4>Supported By:</h4>
            <div className="box alt">
                <div className="boxcontent">
                    <img className="logos IF" src={IF} alt="" />
                </div>
            </div>    

            <div className="box alt">
                <div className="boxcontent">
                    <img className="logos td" src={TD} alt="" />
                </div>
            </div>  

            <div className="box alt">
                <div className="boxcontent">
                    <img className="logos rbc" src={RBC} alt="" />
                    <img className="logos cibc" src={CIBC} alt="" />

                </div>
            </div>

            <div className="box alt">
                <div className="boxcontent">
                    <img className="logos rogers" src={Rogers} alt="" />
                </div>
            </div>      

            <div className="box alt">
                <div className="boxcontent">
                    <img className="logos cse" src={CSE} alt="" />
                </div>
            </div>

            <h4>Partners</h4>
            <div className="box alt">
                <div className="boxcontent">
                    <img className="logos mlh" src={MLH} alt="" />
                    <img className="logos maceng" src={MacEng} alt="" />
                    <img className="logos mes" src={MES} alt="" />
                </div>
            </div>              
            
            </div>
            </section>  
        </div>        
    </div>
)

export default Sponsors