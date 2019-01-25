import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import YouTube from 'react-youtube'


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

const Challenges = (props) => (
    <div>

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

        <Helmet>
            <title>Triangle Challenges :: DeltaHacks 5</title>
            <meta name="description" content="The DeltaHacks Triangle Challenges" />
        </Helmet>


        <div id="main">
            <Accordion>
                <h1>&#9651; Triangle Challenges</h1>
                <div className="box">
                        <h3>What are the Triangle Challenges?</h3>
                        <p>DeltaHacks is a hackathon for social change, and completing one of the Triangle Challenges is a great way to make sure your hack makes a difference.</p>
                        <h3>What's in it for me?</h3>
                        <p>Apart from the satisfaction of your hack being used in real life, all hacks entered will also become part of the prize pool for the Triangle Challenges. The top 3 hacks in the prize pool will be awarded prizes! For details on the prizes available, check out the event <u><a href="/devpost">DevPost</a></u>!<br />
                        </p>
                </div>
                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Donation Shop Webpage - Food4Kids</p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Food4Kids is looking for a webpage that will offer donors the ability to purchase specific items that will go into bags for the children to receive.  Ideally this will be one page that acts as a grocery store for donors to pick and choose their items. <br /><br />
                        <code><a href="https://drive.google.com/file/d/1GQzZtKRNTsirJO_f0LV2wV1rkrYKHYP-/view?usp=sharing">More Information</a></code></p>
                    </AccordionItemBody>
                </AccordionItem>
            </Accordion>
        </div>

    </div>
)

export default Challenges