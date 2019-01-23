import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import mentor from '../assets/images/mentor.jpg'
import def from '../assets/images/mentors/default.png'
import Chamu from '../assets/images/mentors/Chamu Rajasekera.jpg'
import Natalie from '../assets/images/mentors/Natalie Chin.jpg'
import Zichen from '../assets/images/mentors/Zichen Jiang.jpg'
import Umme from '../assets/images/mentors/Umme Salma.jpg'
import Ocean from '../assets/images/mentors/Ocean Cheung.jpg'
import Nelson from '../assets/images/mentors/Nelson Su.jpg'
import Danilo from '../assets/images/mentors/Danilo Joksimovic.jpg'
import Thomas from '../assets/images/mentors/Thomas Dykstra.jpg'
import Hassan from '../assets/images/mentors/Hassan Jasim.jpg'
import Kevin from '../assets/images/mentors/Kevin Pei.jpg'
import Hamid from '../assets/images/mentors/Hamid Yuksel.jpg'
import Avin from '../assets/images/mentors/Avin Regmi.jpg'
import Shehryar from '../assets/images/mentors/Shehryar Assad.jpg'
import Chinmay from '../assets/images/mentors/Chinmay Patel.jpg'
import Jason from '../assets/images/mentors/Jason Fok.jpg'
import Rajat from '../assets/images/mentors/Rajat Arora.jpg'
import Simon0 from '../assets/images/mentors/Simon Fan.jpg'
import Mustafa from '../assets/images/mentors/Mustafa Ismail.jpg'
import Sujan from '../assets/images/mentors/Sujan Kandeepan.jpg'
import Prasann from '../assets/images/mentors/Prasann Pandya.jpg'
import Ishmeet from '../assets/images/mentors/Ishmeet Singh.jpg'
import Jawadur from '../assets/images/mentors/Jawadur Rashid.jpg'
import Raymond from '../assets/images/mentors/Raymond Chen.jpg'
import Matthew from '../assets/images/mentors/Matthew Black.jpg'
import Robert from '../assets/images/mentors/Robert Skaljin.jpg'
import Ezzeldin from '../assets/images/mentors/Ezzeldin Tahoun.jpg'
import Tancred from '../assets/images/mentors/Tancred Yip.jpg'
import Simon1 from '../assets/images/mentors/Simon Gyorkos.jpg'
import Yiguo from '../assets/images/mentors/Yiguo Sun.jpg'
import Zheng from '../assets/images/mentors/Zheng Zheng.jpg'
import Damien from '../assets/images/mentors/Damien Tran.jpg'
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
                    <p><span className="image left"><img src={Chamu} alt="" /></span><h2><br/>Chamu Rajasekera</h2><h3>AR/VR,CG,NodeJS,React,Full Stack Web,C/C++,Python,Raspberry Pi,Arduino</h3></p>
                    <p><span className="image left"><img src={Natalie} alt="" /></span><h2><br/>Natalie Chin</h2><h3>Blockchain - Ethereum/State Channels</h3></p>
                    <p><span className="image left"><img src={Zichen} alt="" /></span><h2><br/>Zichen Jiang</h2><h3>Database, full stack</h3></p>
                    <p><span className="image left"><img src={Umme} alt="" /></span><h2><br/>Umme Salma</h2><h3>Python, Full-stack, C#, C, Java, Blockchain, Cryptography</h3></p>
                    <p><span className="image left"><img src={Ocean} alt="" /></span><h2><br/>Ocean Cheung</h2><h3>iOS, Programming</h3></p>
                    <p><span className="image left"><img src={def} alt="" /></span><h2><br/>Jaison Loodu</h2><h3>Back-End Development, Java, Databases</h3></p>
                    <p><span className="image left"><img src={Nelson} alt="" /></span><h2><br/>Nelson Su</h2><h3>C++, C, Java, Web Dev, Software Testing (Manual & Automated)</h3></p>
                    <p><span className="image left"><img src={Danilo} alt="" /></span><h2><br/>Danilo Joksimovic</h2><h3>Web development, infrastructure, VR</h3></p>
                    <p><span className="image left"><img src={Thomas} alt="" /></span><h2><br/>Thomas Dykstra</h2><h3>Python, UNIX, Assembly, Java, C++</h3></p>
                    <p><span className="image left"><img src={Hassan} alt="" /></span><h2><br/>Hassan Jasim</h2><h3>C, C++, Java, Python, html, Django, react native, Visual Basic, Bash, NASM</h3></p>
                    <p><span className="image left"><img src={Kevin} alt="" /></span><h2><br/>Kevin Pei</h2><h3>Full Stack FE & BE, DevOps, Reason/OCaml</h3></p>
                    <p><span className="image left"><img src={Hamid} alt="" /></span><h2><br/>Hamid Yuksel</h2><h3>iOS (Swift), Angular, HTML/CSS, Java, JS, UX design</h3></p>
                    <p><span className="image left"><img src={def} alt="" /></span><h2><br/>Fangyu Wu</h2><h3>C++, NodeJS, SQL, Microsoft Auzre Cloud</h3></p>
                    <p><span className="image left"><img src={Avin} alt="" /></span><h2><br/>Avin Regmi</h2><h3>AI</h3></p>
                    <p><span className="image left"><img src={Shehryar} alt="" /></span><h2><br/>Shehryar Assad</h2><h3>C, Java</h3></p>
                    <p><span className="image left"><img src={Chinmay} alt="" /></span><h2><br/>Chinmay Patel</h2><h3>Blockchain, Software Development, Creating Developer tools for Blockchain ecosystems</h3></p>
                    <p><span className="image left"><img src={def} alt="" /></span><h2><br/>Pedrum Mohammadi-Shemirani</h2><h3>R, SQL, machine learning, statistics, data science</h3></p>
                    <p><span className="image left"><img src={Jason} alt="" /></span><h2><br/>Jason Fok</h2><h3>iOS, Rails, Machine Learning</h3></p>
                    <p><span className="image left"><img src={Rajat} alt="" /></span><h2><br/>Rajat Arora</h2><h3>Java, Node.js(ES6/7), angular 6, vue.js, MongoDB, MySQL, Python, sikitlearn, Aws, terraform, ci/cd</h3></p>
                    <p><span className="image left"><img src={Simon0} alt="" /></span><h2><br/>Simon Fan</h2><h3>Machine Learning, Cloud hosting/compute platforms, Python, C++, Backend, Databases</h3></p>
                    <p><span className="image left"><img src={Mustafa} alt="" /></span><h2><br/>Mustafa Ismail</h2><h3>VR, C</h3></p>
                    <p><span className="image left"><img src={Sujan} alt="" /></span><h2><br/>Sujan Kandeepan</h2><h3>Java, Python, C#, JavaScript, .NET, Full-Stack Web Dev, Android, Databases</h3></p>
                    <p><span className="image left"><img src={Prasann} alt="" /></span><h2><br/>Prasann Pandya</h2><h3>Deep Learning, Machine Learning,  Python</h3></p>
                    <p><span className="image left"><img src={Ishmeet} alt="" /></span><h2><br/>Ishmeet Singh</h2><h3>Python, C, C++, Html, CSS, Javascript</h3></p>
                    <p><span className="image left"><img src={Jawadur} alt="" /></span><h2><br/>Jawadur Rashid</h2><h3>Android</h3></p>
                    <p><span className="image left"><img src={def} alt="" /></span><h2><br/>Rajeeban Raveendran</h2><h3>C++</h3></p>
                    <p><span className="image left"><img src={Raymond} alt="" /></span><h2><br/>Raymond chen</h2><h3>Node js and Python</h3></p>
                    <p><span className="image left"><img src={Matthew} alt="" /></span><h2><br/>Matthew Black</h2><h3>Blockchain</h3></p>
                    <p><span className="image left"><img src={Robert} alt="" /></span><h2><br/>Robert Skaljin</h2><h3>Chatbots, AI, Mobile</h3></p>
                    <p><span className="image left"><img src={Ezzeldin} alt="" /></span><h2><br/>Ezzeldin Tahoun</h2><h3>Cyber Security, Blockchain, Data Science, IoT </h3></p>
                    <p><span className="image left"><img src={Tancred} alt="" /></span><h2><br/>Tancred Yip</h2><h3>Iot, Project Managment, Idea Generation</h3></p>
                    <p><span className="image left"><img src={Simon1} alt="" /></span><h2><br/>Simon Gyorkos</h2><h3>Java, Python, Django, PHP, Laravel, Vue.js, Angular</h3></p>
                    <p><span className="image left"><img src={def} alt="" /></span><h2><br/>Mikhail Adrenkov</h2><h3>Android, C++, FPGAs, Go, Java, OpenGL, Python</h3></p>
                    <p><span className="image left"><img src={Yiguo} alt="" /></span><h2><br/>Yiguo Sun</h2><h3>Programming in C++, QML, Java, Python; Algorithms Design</h3></p>
                    <p><span className="image left"><img src={Zheng} alt="" /></span><h2><br/>Zheng Zheng</h2><h3>Databases, C++, C, Hadoop, Data Mining</h3></p>
                    <p><span className="image left"><img src={Damien} alt="" /></span><h2><br/>Damien Tran</h2><h3>C, C++, Neural Networks, TLS/SSL, Web Development, Machine Learning</h3></p>
                    {/* <p><span className="image left"><img src={mentor} alt="" /></span><h2><br/></h2><h3></h3></p> */}
                </div>
            </section>


        </div>
    </div>
)
}
}

export default Mentors
