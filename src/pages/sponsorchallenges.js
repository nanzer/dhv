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

const SponsorChallenges = (props) => (
    <div>

        {/* Code for background video below this*/}
        {/*
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
        */ }
            {/* Code for background video ends here */}
                    

        <Helmet>
            <title>Sponsor Challenges :: DeltaHacks 5</title>
            <meta name="description" content="The DeltaHacks Sponsor Challenges" />
        </Helmet>


        <div id="main">
            <Accordion>
                <h1>&#9651; Sponsor Challenges</h1>
                <div className="box">
                        <h3>What are the Sponsor Challenges?</h3>
                        <p>Each of the following challenges comes with their own prize category. For details on the prizes available, check out the event <u><a href="/devpost">DevPost</a></u>!<br />
                        </p>
                </div>
                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Innovation Factory - Autonomous Solutions Challenge</p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <b>Problem Statement:</b>
                        <p>Cargo theft is a growing problem for Canadian businesses and their transportation providers. According to statistics from the Insurance Bureau of Canada’s National Cargo Theft Reporting Program, 2018 will see record cargo thefts. They estimate that over $55 million in goods will be stolen this year. Most of the cargo theft is orchestrated by organized crime rings in Toronto, Montreal, and Vancouver.</p>    
                        <p>In addition to the loss of the value of the goods stolen, businesses also suffer secondary financial losses due to increased insurance costs, increased security costs, increased technology costs to track assets, and loss of productivity when trucks are stolen and unavailable for use. There is also a safety issue for drivers when a cargo theft happens with a “live” load on the road.</p>
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <p>For more information, contact Ezzeldin Tahoun on Slack or by email: tahoune@mcmaster.ca </p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Wifi Security Hack - EzSec</p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p></p>    
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <p>For more information, contact Ezzeldin Tahoun on Slack or by email: tahoune@mcmaster.ca </p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Wifi Security Hack - EzSec</p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p></p>    
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <p>For more information, contact Ezzeldin Tahoun on Slack or by email: tahoune@mcmaster.ca </p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Wifi Security Hack - EzSec</p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p></p>    
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <p>For more information, contact Ezzeldin Tahoun on Slack or by email: tahoune@mcmaster.ca </p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Wifi Security Hack - EzSec</p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p></p>    
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <p>For more information, contact Ezzeldin Tahoun on Slack or by email: tahoune@mcmaster.ca </p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Wifi Security Hack - EzSec</p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p></p>    
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <p>For more information, contact Ezzeldin Tahoun on Slack or by email: tahoune@mcmaster.ca </p>
                    </AccordionItemBody>
                </AccordionItem>
            </Accordion>
        </div>

    </div>
)

export default Challenges