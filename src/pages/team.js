// import Link from 'gatsby-link'
// import Helmet from 'react-helmet'
// import '../assets/scss/layout/_team.scss'
// import YouTube from 'react-youtube'


// import React, { Component } from "react"


// // Headshots 

// import Maanav from '../assets/images/team/Maanav.JPG' 
// import Abhayraj from '../assets/images/team/Abhayraj.JPG' 
// import Rumsha from '../assets/images/team/Rumsha.JPG'
// import Troy from '../assets/images/team/Troy.JPG'
// import Benson from '../assets/images/team/Benson.JPG'
// import Curtis from '../assets/images/team/Curtis.JPG'
// import Dananjay from '../assets/images/team/Dananjay.JPG'
// import Dipinjit from '../assets/images/team/Dipinjit.JPG'
// import Jefin from '../assets/images/team/Jefin.jpg'
// import Malavan from '../assets/images/team/Malavan.JPG'
// import Nathan from '../assets/images/team/Nathan.JPG'
// import Sameeksha from '../assets/images/team/Sameeksha.JPG'
// import Tiffany from '../assets/images/team/Tiffany.JPG'
// import Anirudh from '../assets/images/team/Anirudh.JPG'
// import Colleen from '../assets/images/team/Colleen.JPG'
// import Joshua from '../assets/images/team/Joshua.JPG'
// import Levin from '../assets/images/team/Levin.JPG'
// import Daniel from '../assets/images/team/Daniel.jpg'
// import Karim from '../assets/images/team/Karim.JPG'
// import Ryan from '../assets/images/team/Ryan.jpg'
// import Jolie from '../assets/images/team/Jolie.JPG'
// import Kumail from '../assets/images/team/Kumail.JPG'
// import Anant from '../assets/images/team/Anant.JPG'
// import Divya from '../assets/images/team/Divya.JPG'
// import Ethan from '../assets/images/team/Ethan.JPG'
// import Ghazi from '../assets/images/team/Ghazi.JPG'
// import Kajoban from '../assets/images/team/Kajoban.JPG'
// import Pranav from '../assets/images/team/Pranav.JPG'
// import Kevin from '../assets/images/team/Kevin.JPG'
// import Tina from '../assets/images/team/Tina.JPG'
// import Madeeha from '../assets/images/team/Madeeha.JPG'
// import Tanner from '../assets/images/team/Tanner.jpg'
// import Sunanda from '../assets/images/team/Sunanda.JPG'
// import Varun from '../assets/images/team/Varun.JPG'
// import Yang from '../assets/images/team/Yang.JPG'
// import Sophia from '../assets/images/team/Sophia.jpg'
// import Rahil from '../assets/images/team/Rahil.JPG'
// import Marina from '../assets/images/team/Marina.JPG'
// import Merlin from '../assets/images/team/Merlin.jpg'
// import Mebby from '../assets/images/team/Mebby.jpg'
// import Luke from '../assets/images/team/Luke.JPG'
// import Manpreet from '../assets/images/team/Manpreet.JPG'
// import Biya from '../assets/images/team/Biya.JPG'
// import Mitchell from '../assets/images/team/Mitchell.JPG'



// // function importAll(r) {
// //     let images = {};
// //     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
// //     return images;
// // }

// // const images = importAll(require.context('../assets/images/team', false, '/\.png/'));





// const BGvideoOptions = {
//     height: '500',
//     width: '100%',
//     playerVars: { // https://developers.google.com/youtube/player_parameters
//         autoplay:1,
//         controls: 0,
//         rel: 0,
//         showinfo: 0,
//         modestbranding: 1,  // Hide the Youtube Logo
//         loop: 1,            // Run the video in a loop - DOESN'T WORK - used onEnd function
//         fs: 0,              // Hide the full screen button
//         cc_load_policy: 0, // Hide closed captions
//         iv_load_policy: 3,  // Hide the Video Annotations
//         autohide: 0,
//         enablejsapi: 0
//     }
// };


// class Team extends React.Component {

//     render() {
//         return (


//     <div>
//         <Helmet>
//             <title>Team :: DeltaHacks V</title>
//             <meta name="description" content="Generic Page" />
//         </Helmet>

//             {/* Code for background video below this*/}
//             <div className="video-background">
//                 <div className="video-foreground">
//                     <YouTube
//                         videoId="3SizoIuIedc"
//                         opts={BGvideoOptions}
//                         className="video-iframe"
//                         onReady={function(e) {
//                             e.target.mute();
//                           }}
//                         onEnd={function(e) {
//                             e.target.playVideo();
//                         }}
//                     />
//                 </div>
//             </div>
//             {/* Code for background video ends here */}

//         <div id="main" className="alt">
//             <section id="one">
//                 <div className="inner">
//                     <header className="major">
//                         <h1>Our Team</h1>
//                     </header>

// {/* <img src={images['test.png']} /> */}

//                 <div className="grid">

//                 {/* Directors */}
//                 <div className="box cent">
//                     <div className="each">
//                         <img src={Abhayraj}/>
//                             <p className="name">
//                                 Abhayraj J.
//                             </p>
//                             <p className="bio">
                                
//                             </p>
//                     </div>

//                     <div className="each">
//                         <img src={Rumsha}/>
//                             <p className="name">
//                                 Rumsha S.
//                             </p>
//                             <p className="bio">
                                
//                             </p>
//                     </div>

//                     <br />
//                     <p className="button small">Co-Directors</p>
//                 </div>

//                 <div className="row">
//                     {/* left column */}
//                     <div className="6u 12u$(small)">

//                         {/* Attendee */}
//                         <div className="box cent">
//                         <p className="button special fit small">Attendee Relations Team</p>
//                             <div className="each">
//                                 <img src={Jolie}/>
//                                     <p className="name">
//                                         Jolie N.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <br />
//                             <p className="button small">Head of Attendee Relations</p>
//                             <br />

//                             <div className="each">
//                                 <img src={Kumail}/>
//                                     <p className="name">
//                                         Kumail N.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <br />
//                             <p className="button small">Technical Lead</p>
//                             <br />

//                             <div className="each">
//                                 <img src={Maanav}/>
//                                     <p className="name">
//                                         Maanav G.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Anant}/>
//                                     <p className="name">
//                                         Anant J.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Divya}/>
//                                     <p className="name">
//                                         Divya T.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Ethan}/>
//                                     <p className="name">
//                                         Ethan J.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Ghazi}/>
//                                     <p className="name">
//                                         Ghazi S.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Kajoban}/>
//                                     <p className="name">
//                                         Kajoban K.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Pranav}/>
//                                     <p className="name">
//                                         Pranav P.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Manpreet}/>
//                                     <p className="name">
//                                         Manpreet M.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                         </div>


//                         {/* Logistics */}
//                         <div className="box cent">
//                         <p className="button special fit small">Logistics Team</p>
//                             <div className="each">
//                                 <img src={Troy}/>
//                                     <p className="name">
//                                         Troy K.
//                                     </p>
//                                     <p className="bio">
//                                     </p>
//                             </div>
//                             <br />
//                             <p className="button small">Head of Logistics</p>
//                             <br />

//                             <div className="each">
//                                 <img src={Benson}/>
//                                     <p className="name">
//                                         Benson H.
//                                     </p>
//                                     <p className="bio">
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Curtis}/>
//                                     <p className="name">
//                                         Curtis C.
//                                     </p>
//                                     <p className="bio">
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Dananjay}/>
//                                     <p className="name">
//                                         Dananjay P.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Dipinjit}/>
//                                     <p className="name">
//                                         Dipinjit H.
//                                     </p>
//                                     <p className="bio">
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Malavan}/>
//                                     <p className="name">
//                                         Malavan R.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Nathan}/>
//                                     <p className="name">
//                                         Nathan M.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Sameeksha}/>
//                                     <p className="name">
//                                         Sameeksha M.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Tiffany}/>
//                                     <p className="name">
//                                         Tiffany T.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Jefin}/>
//                                     <p className="name">
//                                         Jefin J.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                         </div>

//                     </div>

//                     {/* right column */}
//                     <div className="6u 12u$(small)">

//                         {/* Sponsorship */}
//                         <div className="box cent">
//                         <p className="button special fit small">Sponsorship Team</p>
//                             <div className="each">
//                                 <img src={Anirudh}/>
//                                     <p className="name">
//                                         Anirudh V.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <br />
//                             <p className="button small">Head of Sponsorship</p>
//                             <br />

//                             <div className="each">
//                                 <img src={Colleen}/>
//                                     <p className="name">
//                                         Colleen L.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Joshua}/>
//                                     <p className="name">
//                                         Joshua G.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Levin}/>
//                                     <p className="name">
//                                         Levin N.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Sunanda}/>
//                                     <p className="name">
//                                         Sunanda K.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Varun}/>
//                                     <p className="name">
//                                         Varun J.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Yang}/>
//                                     <p className="name">
//                                         Yang H.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                         </div>
                        

//                         {/* Public Relations */}
//                         <div className="box cent">
//                         <p className="button special fit small">Public Relations Team</p>
//                             <div className="each">
//                                 <img src={Madeeha}/>
//                                     <p className="name">
//                                         Madeeha K.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Biya}/>
//                                     <p className="name">
//                                         Biya K.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Tanner}/>
//                                     <p className="name">
//                                         Tanner R.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>

//                         </div>

//                         {/* Supportive Relations */}
//                         <div className="box cent">
//                         <p className="button special fit small">Supportive Relations Team</p>
//                             <div className="each">
//                                 <img src={Daniel}/>
//                                     <p className="name">
//                                         Daniel R.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <br />
//                             <p className="button small">Head of Supportive Relations</p>
//                             <br />
//                             <div className="each">
//                                 <img src={Karim}/>
//                                     <p className="name">
//                                         Karim El S.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>

//                             <div className="each">
//                                 <img src={Ryan}/>
//                                     <p className="name">
//                                         Ryan R.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>

//                             <div className="each">
//                                 <img src={Sophia}/>
//                                     <p className="name">
//                                         Sophia T.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>

//                         </div>

//                         {/* Design */}
//                         <div className="box cent">
//                         <p className="button special fit small">Design Team</p>

//                             {/* <div className="each">
//                                 <img src={test}/>
//                                     <p className="name">
//                                         Abhay
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <br />
//                             <p className="button small">Head of Design</p>
//                             <br /> */}

//                             <div className="each">
//                                 <img src={Kevin}/>
//                                     <p className="name">
//                                         Kevin H.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Tina}/>
//                                     <p className="name">
//                                         Tina M.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Rahil}/>
//                                     <p className="name">
//                                         Rahil S.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Marina}/>
//                                     <p className="name">
//                                         Marina W.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Merlin}/>
//                                     <p className="name">
//                                         Merlin Z.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>

//                         </div>

//                     </div>
//                 </div>
//                     {/* PhaseOne */}
//                         <div className="box cent">
//                         <p className="button special fit small">PhaseOne Executives</p>

//                             <div className="each">
//                                 <img src={Luke}/>
//                                     <p className="name">
//                                         Luke P.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Mitchell}/>
//                                     <p className="name">
//                                         Mitchell P.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                             <div className="each">
//                                 <img src={Mebby}/>
//                                     <p className="name">
//                                         Mebby M.
//                                     </p>
//                                     <p className="bio">
                                        
//                                     </p>
//                             </div>
//                         </div>
//                 </div>   
//                 </div>
//             </section>
//         </div>

//     </div>
// )
// }
// }

// export default Team