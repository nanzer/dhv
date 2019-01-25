import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import '../assets/scss/layout/_team.scss'
import YouTube from 'react-youtube'

import React, { Component } from "react"


import test from '../assets/images/team/test.png'

// Headshots 

// import Abhayraj from '../assets/images/team/Abhayraj.png' 
// import Rumsha from '../assets/images/team/Rumsha.png'
// import Troy from '../assets/images/team/Troy.png'
// import Benson from '../assets/images/team/Benson.png'
// import Curtis from '../assets/images/team/Curtis.png'
// import Dananjay from '../assets/images/team/Dananjay.png'
// import Dipinjit from '../assets/images/team/Dipinjit.png'
// import Jefin from '../assets/images/team/Jefin.png'
// import Malavan from '../assets/images/team/Malavan.png'
// import Nathan from '../assets/images/team/Nathan.png'
// import Sameeksha from '../assets/images/team/Sameeksha.png'
// import Tiffany from '../assets/images/team/Tiffany.png'
// import Anirudh from '../assets/images/team/Anirudh.png'
// import Colleen from '../assets/images/team/Colleen.png'
// import Joshua from '../assets/images/team/Joshua.png'
// import Levin from '../assets/images/team/Levin.png'
// import Daniel from '../assets/images/team/Daniel.png'
// import Cynthia from '../assets/images/team/Cynthia.png'
// import Han from '../assets/images/team/Han.png'
// import Karim from '../assets/images/team/Karim.png'
// import Ryan from '../assets/images/team/Ryan.png'
// import Jolie from '../assets/images/team/Jolie.png'
// import Kumail from '../assets/images/team/Kumail.png'
// import Anant from '../assets/images/team/Anant.png'
// import Divya from '../assets/images/team/Divya.png'
// import Ethan from '../assets/images/team/Ethan.png'
// import Ghazi from '../assets/images/team/Ghazi.png'
// import Kajoban from '../assets/images/team/Kajoban.png'
// import Pranav from '../assets/images/team/Pranav.png'
// import Kevin from '../assets/images/team/Kevin.png'
// import Tina from '../assets/images/team/Tina.png'
// import Madeeha from '../assets/images/team/Madeeha.png'
// import Tanner from '../assets/images/team/Tanner.png'
// import Sunada from '../assets/images/team/Sunada.png'
// import Varun from '../assets/images/team/Varun.png'
// import Yang from '../assets/images/team/Yang.png'
// import Sophia from '../assets/images/team/Sophia.png'
// import Rahil from '../assets/images/team/Rahil.png'
// import Marina from '../assets/images/team/Marina.png'
// import Merlin from '../assets/images/team/Merlin.png'
// import Mebby from '../assets/images/team/Mebby.png'
// import Luke from '../assets/images/team/Luke.png'
// import Mitchell from '../assets/images/team/Mitchell.png'


// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
// }

// const images = importAll(require.context('../assets/images/team', false, '/\.png/'));





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

{/* <img src={images['test.png']} /> */}

                <div className="grid">

                {/* Directors */}
                <div className="box cent">
                    <div className="each">
                        <img src={test}/>
                            <p className="name">
                                Abhayraj J.
                            </p>
                            <p className="bio">
                                
                            </p>
                    </div>

                    <div className="each">
                        <img src={test}/>
                            <p className="name">
                                Rumsha S.
                            </p>
                            <p className="bio">
                                
                            </p>
                    </div>

                    <br />
                    <p className="button small">Co-Directors</p>
                    <br />
                </div>

                <div className="row">
                    {/* left column */}
                    <div className="6u 12u$(small)">
                        
                        {/* Logistics */}
                        <div className="box cent">
                        <p className="button special fit small">Logistics Team</p>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Troy K.
                                    </p>
                                    <p className="bio">
                                    </p>
                            </div>
                            <br />
                            <p className="button small">Head of Logistics</p>
                            <br />

                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Benson H.
                                    </p>
                                    <p className="bio">
                                    </p>
                            </div>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Curtis C.
                                    </p>
                                    <p className="bio">
                                    </p>
                            </div>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Dananjay P.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Dipinjit H.
                                    </p>
                                    <p className="bio">
                                    </p>
                            </div>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Jefin J.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Malavan R.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Nathan M.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Sameeksha M.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Tiffany T.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                        </div>

                        {/* Attendee */}
                        <div className="box cent">
                        <p className="button special fit small">Attendee Relations Team</p>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Jolie N.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <br />
                            <p className="button small">Head of Attendee Relations</p>
                            <br />

                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Kumail N.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <br />
                            <p className="button small">Technical Lead</p>
                            <br />

                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Anant J.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Divya T.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Ethan J.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Ghazi S.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Kajoban K.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Pranav P.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Manpreet M.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                        </div>

                    </div>

                    {/* right column */}
                    <div className="6u 12u$(small)">

                        {/* Sponsorship */}
                        <div className="box cent">
                        <p className="button special fit small">Sponsorship Team</p>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Anirudh V.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <br />
                            <p className="button small">Head of Sponsorship</p>
                            <br />

                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Colleen L.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Joshua G.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Levin N.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Sunanda K.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Varun J.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Yang H.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                        </div>
                        

                        {/* Public Relations */}
                        <div className="box cent">
                        <p className="button special fit small">Public Relations Team</p>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Madeeha K.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>

                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Tanner R.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>

                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Biya K.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>

                        </div>

                        {/* Supportive Relations */}
                        <div className="box cent">
                        <p className="button special fit small">Supportive Relations Team</p>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Daniel R.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <br />
                            <p className="button small">Head of Supportive Relations</p>
                            <br />
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Karim El S.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>

                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Ryan R.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>

                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Sophia T.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>

                        </div>

                        {/* Design */}
                        <div className="box cent">
                        <p className="button special fit small">Design Team</p>

                            {/* <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Abhay
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <br />
                            <p className="button small">Head of Design</p>
                            <br /> */}

                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Kevin H.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Tina M.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Rahil S.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Marina W.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Merlin Z.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>

                        </div>

                    </div>
                </div>
                    {/* PhaseOne */}
                        <div className="box cent">
                        <p className="button special fit small">PhaseOne Executives</p>
                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Mebby M.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>

                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Luke P.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>

                            <div className="each">
                                <img src={test}/>
                                    <p className="name">
                                        Mitchell P.
                                    </p>
                                    <p className="bio">
                                        
                                    </p>
                            </div>
                        </div>
                </div>   
                </div>
            </section>
        </div>

    </div>
)

export default Team