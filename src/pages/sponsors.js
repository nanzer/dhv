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
import MacEng from '../assets/images/sponsors/mac_eng_logo.png'
import MacLib from '../assets/images/sponsors/mac_library_logo.png'
import MES from '../assets/images/sponsors/mes_logo.png'
import IF from  '../assets/images/sponsors/if_logo.png'
import CSE from '../assets/images/sponsors/cse_logo.svg'
import Rogers from '../assets/images/sponsors/rogers_logo.png'
import Loyalty from '../assets/images/sponsors/loyaltyone_logo.png'
import Synopsys from '../assets/images/sponsors/synopsys_logo.png'
import FDM from '../assets/images/sponsors/fdm_logo.png'
import Pinks from '../assets/images/sponsors/pinks_logo.png'
import BitAlino from '../assets/images/sponsors/bitalino_logo.png'
import ObieAi from '../assets/images/sponsors/obie_logo.png'
import StickerMule from '../assets/images/sponsors/stickermule_logo.png'
import Wolfram from '../assets/images/sponsors/wolfram_logo.png'





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
                <div className="boxcontent powered">
                    <img className="logos microsoft" src={Microsoft} alt="" />
                </div>
            </div>   

            <h4>Supported By:</h4>
            <div className="box alt">
                <div className="boxcontent sponsored">
                    <img className="logos IF" src={IF} alt="" />
                </div>
            </div>    

            {/* Gold */}
            <div className="box alt">
                <div className="boxcontent gold">
                    <img className="logos td" src={TD} alt=""/>
                </div>
            </div>  

            {/* Silver */}
            <div className="box alt">
                <div className="boxcontent silver">
                    <img className="logos cibc" src={CIBC} alt=""/>
                    <img className="logos rbc" src={RBC} alt=""/>
                </div>
            </div>

            {/* Copper */}
            <div className="box alt">
                <div className="boxcontent copper"> 
                    <img className="logos cse" src={CSE} alt=""/>
                    <img className="logos loyaltyone" src={Loyalty} alt=""/>
                    <img className="logos synopsys" src={Synopsys} alt=""/>
                </div>
            </div>    

            {/* Base */}
            <div className="box alt">
                <div className="boxcontent base">
                    <img className="logos fdm" src={FDM} alt=""/>
                    <img className="logos rogers" src={Rogers} alt=""/>
                </div>
            </div>

            {/* In Kind */}
            <h4>In-kind:</h4>
            <div className="box alt">
                <div className="boxcontent inkind">
                    <img className="logos bitalino" src={BitAlino} alt=""/>
                    <img className="logos obie" src={ObieAi} alt=""/>
                    <img className="logos stickermule" src={StickerMule} alt=""/>
                    <img className="logos wolfram" src={Wolfram} alt=""/>
                </div>
            </div>

            {/* Food */}
            <h4>Food:</h4>
            <div className="box alt">
                <div className="boxcontent food">
                    <img className="logos pinks" src={Pinks} alt=""/>
                </div>
            </div>

            <h4>Partners:</h4>
            <div className="box alt">
                <div className="boxcontent partners">
                    <img className="logos mlh" src={MLH} alt="" />
                    <img className="logos maceng" src={MacEng} alt="" />
                    <img className="logos maclib" src={MacLib} alt="" />
                    <img className="logos mes" src={MES} alt="" />
                </div>
            </div>              
            
            </div>
            </section>  
        </div>        
    </div>
)

export default Sponsors