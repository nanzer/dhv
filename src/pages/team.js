import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import '../assets/css/team.css'
import YouTube from 'react-youtube'

import test from '../assets/images/test.png'

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


const Team = (props) => (
    <div>
        <Helmet>
            <title>Team Members</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

                   {/* Code for background video below this*/}
                   <div className="video-background">
                <div className="video-foreground">
                    <YouTube
                        videoId="3SizoIuIedc"
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
                        <h1>Our Team</h1>
                    </header>
                <div className="grid">

                    <div className="each">
                        <img src={test}/>
                            <p className="name">
                                Maanav Garg
                            </p>
                            <p className="bio">
                                Co-Director
                            </p>
                    </div>

                    <div className="each">
                        <img src={test}/>
                            <p className="name">
                                Maanav Garg
                            </p>
                            <p className="bio">
                                Co-Director
                            </p>
                    </div>

                    <div className="each">
                        <img src={test}/>
                            <p className="name">
                                Maanav Garg
                            </p>
                            <p className="bio">
                                Co-Director
                            </p>
                    </div>

                    <div className="each">
                        <img src={test}/>
                            <p className="name">
                                Maanav Garg
                            </p>
                            <p className="bio">
                                Head of Sponsorship
                            </p>
                    </div>

                    <div className="each">
                        <img src={test}/>
                            <p className="name">
                                Maanav Garg
                            </p>
                            <p className="bio">
                                Software Developer
                            </p>
                    </div>

                    <div className="each">
                        <img src={test}/>
                            <p className="name">
                                Maanav Garg
                            </p>
                            <p className="bio">
                                Website Developer
                            </p>
                    </div>

                    <div className="each">
                        <img src={test}/>
                            <p className="name">
                                Maanav Garg
                            </p>
                            <p className="bio">
                                Software Developer
                            </p>
                    </div>

                    <div className="each">
                        <img src={test}/>
                            <p className="name">
                                Maanav Garg
                            </p>
                            <p className="bio">
                                Website Developer
                            </p>
                    </div>

                    <div className="each">
                        <img src={test}/>
                            <p className="name">
                                Maanav Garg
                            </p>
                            <p className="bio">
                                Software Developer
                            </p>
                    </div>

                    <div className="each">
                        <img src={test}/>
                            <p className="name">
                                Maanav Garg
                            </p>
                            <p className="bio">
                                Website Developer
                            </p>
                    </div>

                    <div className="each">
                        <img src={test}/>
                            <p className="name">
                                Maanav Garg
                            </p>
                            <p className="bio">
                                Software Developer
                            </p>
                    </div>

                    <div className="each">
                        <img src={test}/>
                            <p className="name">
                                Maanav Garg
                            </p>
                            <p className="bio">
                                Website Developer
                            </p>
                    </div>

                    <div className="each">
                        <img src={test}/>
                            <p className="name">
                                Maanav Garg
                            </p>
                            <p className="bio">
                                Software Developer
                            </p>
                    </div>

                    <div className="each">
                        <img src={test}/>
                            <p className="name">
                                Maanav Garg
                            </p>
                            <p className="bio">
                                Website Developer
                            </p>
                    </div>

                    <div className="each">
                        <img src={test}/>
                            <p className="name">
                                Maanav Garg
                            </p>
                            <p className="bio">
                                Software Developer
                            </p>
                    </div>

                    <div className="each">
                        <img src={test}/>
                            <p className="name">
                                Maanav Garg
                            </p>
                            <p className="bio">
                                Website Developer
                            </p>
                    </div>

                    <div className="each">
                        <img src={test}/>
                            <p className="name">
                                Maanav Garg
                            </p>
                            <p className="bio">
                                Website Developer
                            </p>
                    </div>

                </div>   
                </div>
            </section>
        </div>

    </div>
)

export default Team