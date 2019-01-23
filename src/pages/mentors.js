import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import mentor from '../assets/images/mentor.jpg'
//import mentors from '../assets/images/mentors'

class Mentors extends React.Component {
    handleSubmit(event){
        alert("Form submitted. Thank you for your interest in DeltaHacks!");   
        // setTimeout(document.getElementById("mentor-signup-form").reset(), 5000);
    }

    render() {
        return (
    <div>
        <Helmet>
            <title>Mentors - DeltaHacks V</title>
            <meta name="description" content="Sign up to be a mentor here!" />
        </Helmet>
        
        <div id="main" >

            {/* <section id="why" className="spotlights">
                <section>
                    <Link to="#" className="image">
                        <img src={mentor} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Want to be a mentor?</h3>
                            </header>
                            <p>Mentors are an irreplaceable part of the hackathon ecosystem. It's a great way to give back to the community.

                                <br /><br />As a Technical Mentor, you'll assist hackers with using new technologies, helping them learn what you already excel at!

                                <br /><br />At DeltaHacks, we Hack for Change. As a Challenger Mentor, you'll be able to provide a problem to hackers and guide them while they look for a solution! The possibilities are endless.
                            </p>
                            <ul className="actions">
                                <li><Link to="#signup" className="button down scrolly">Count me in!</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section> */}

            <section id="description">
                <div className="box">
                    <h1>Mentors</h1>
                    <p><span className="image left"><img src={mentor} alt="" /></span><h2><br/>Chamu Rajasekera</h2><h3>AR/VR,CG,NodeJS,React,Full Stack Web,C/C++,Python,Raspberry Pi,Arduino</h3></p>
                    <p><span className="image right"><img src={mentor} alt="" /></span><h2><br/>Natalie Chin</h2><h3>Blockchain - Ethereum/State Channels</h3></p>
                    <p><span className="image left"><img src={mentor} alt="" /></span><h2><br/>Zichen Jiang</h2><h3>Database, full stack</h3></p>
                    <p><span className="image right"><img src={mentor} alt="" /></span><h2><br/>Umme Salma</h2><h3>Python, Full-stack, C#, C, Java, Blockchain, Cryptography</h3></p>
                    <p><span className="image left"><img src={mentor} alt="" /></span><h2><br/>Ocean Cheung</h2><h3>iOS, Programming</h3></p>
                    <p><span className="image right"><img src={mentor} alt="" /></span><h2><br/>Jaison Loodu</h2><h3>Back-End Development, Java, Databases</h3></p>
                    <p><span className="image left"><img src={mentor} alt="" /></span><h2><br/>Nelson Su</h2><h3>C++, C, Java, Web Dev, Software Testing (Manual & Automated)</h3></p>
                    <p><span className="image right"><img src={mentor} alt="" /></span><h2><br/>Danilo Joksimovic</h2><h3>Web development, infrastructure, VR</h3></p>
                    <p><span className="image left"><img src={mentor} alt="" /></span><h2><br/>Thomas Dykstra</h2><h3>Python, UNIX, Assembly, Java, C++</h3></p>
                    <p><span className="image right"><img src={mentor} alt="" /></span><h2><br/>Hassan Jasim</h2><h3>C, C++, Java, Python, html, Django, react native, Visual Basic, Bash, NASM</h3></p>
                    <p><span className="image left"><img src={mentor} alt="" /></span><h2><br/>Kevin Pei</h2><h3>Full Stack FE & BE, DevOps, Reason/OCaml</h3></p>
                    <p><span className="image right"><img src={mentor} alt="" /></span><h2><br/>Hamid Yuksel</h2><h3>iOS (Swift), Angular, HTML/CSS, Java, JS, UX design</h3></p>
                    <p><span className="image left"><img src={mentor} alt="" /></span><h2><br/>Fangyu Wu</h2><h3>C++, NodeJS, SQL, Microsoft Auzre Cloud</h3></p>
                    <p><span className="image right"><img src={mentor} alt="" /></span><h2><br/>Avin Regmi</h2><h3>AI</h3></p>
                    {/* <p><span className="image left"><img src={mentor} alt="" /></span><h2><br/></h2><h3></h3></p>
                    <p><span className="image right"><img src={mentor} alt="" /></span><h2><br/></h2><h3></h3></p> */}
                </div>
            </section>


        </div>
    </div>
)
}
}

export default Mentors
