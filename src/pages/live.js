import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import YouTube from 'react-youtube';
import Clock from './clock.js';
import $ from 'jquery';
import '../assets/scss/layout/_live.scss'


// import {TwitterTimelineEmbed} from 'react-twitter-embed';


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



class Test extends Component {


     render() {
          return (
            <div>
                <Helmet>
                    <title>Live Page :: DeltaHacks</title>
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



                    {/* <div className="row">
                        <div className="2u">
                        <a href="#" className="button">Default</a>
                        </div>
                        <div className="2u">
                        <a href="#" className="button">Default</a>
                        </div>
                        <div className="2u">
                        <a href="#" className="button">Default</a>
                        </div>
                        <div className="2u">
                        <a href="#" className="button">Default</a>
                        </div>
                        <div className="2u">
                        <a href="#" className="button">Default</a>
                        </div>
                    </div> */}

                    <table>
                        <th><a href="/slack" className="button special fit small">Slack</a></th>
                        <th><a href="/schedule" className="button special fit small">Schedule</a></th>
                        <th><a href="/workshops" className="button special fit small">Workshops</a></th>
                        <th><a href="/challenges" className="button special fit small">Challenges</a></th>
                        <th><a href="/mentors" className="button special fit small">Mentors</a></th>

                    </table>

                    

                    <div className="row">

                        <div className="6u 12u$(small)">

                        <div className="box">
                        <div className="boxtitles">
                        <h4>Registration and Breakfast</h4>
                        <p>Thode 1st Floor ~ 9:30am - 11:00am</p>
                        <div className="timer">
                        <a href="#" className="button special small timer">
                        <Clock deadline='January, 26, 2019, 9:30'/></a>
                        </div>
                        </div>
                        </div>


                        <div className="box">
                        <div className="boxtitles">
                        <h4>Opening Ceremony</h4>
                        <p>JHE 376 ~ 11:00am - 12:00pm</p>
                        <div className="timer">
                        <a href="#" className="button special small timer">
                        <Clock deadline='January, 21, 2019, 18:19'/></a>
                        </div>
                        </div>
                        </div>



                        <div className="box">
                        <div className="boxtitles">
                        <h4>Registration and Breakfast</h4>
                        <p>Thode 1st Floor</p>
                        <div className="timer">
                        <a href="#" className="button special small timer">
                        <Clock deadline='January, 26, 2019, 11:30'/></a>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div className="6u 12u$(small)">

                            {/* <div className="box">
                                <h4 className="boxtitles">Twitter</h4>
                                    <TwitterTimelineEmbed
                                    sourceType="profile"
                                    screenName="DeltaHacks"
                                    options={{height: 1000}}
                                    theme= "dark"
                                    transparent= "true"
                                    borderColor= "#FFFFFF"
                                    />
                            </div>  */}

                            <div className="box">
                                <h3 className="boxtitles">Important Links</h3>
                                <h4>Communications</h4>
                                    <dl>
                                    <dd>
                                    <p1>
                                        Questions? Find us on the slack group.<br />
                                        Look for the Deltahacks logo next to the name!<br />
                                        Slack group: deltahacks5.slack.com<br />
                                        Looking for team members? Slack #find-a-team<br />
                                        Announcements. Slack #announcements<br />
                                        Slack group: deltahacks5.slack.com
                                    </p1>
                                    </dd>
                                    </dl>


                                <h4>Mentor</h4>
                                    <p>Check out some of our mentor profiles</p>
                                <h4>Links</h4>
                                <h4>Wifi</h4>       
                            </div> 

                        </div>
                    </div>

                </div>        
            </section>
        </div>    




            </div>
          );
     }
}
export default Test;


// 




// const Sponsors = (props) => (
//     <div>

    
//     </div>
// )

// export default Sponsors


