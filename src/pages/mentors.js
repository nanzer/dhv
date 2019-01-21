import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import mentor from '../assets/images/mentor.jpg'
//import mentors from '../assets/images/mentors'

class Mentor extends React.Component {
    handleSubmit(event){
        alert("Form submitted. Thank you for your interest in DeltaHacks!");   
        // setTimeout(document.getElementById("mentor-signup-form").reset(), 5000);
    }

    render() {
        return (
    <div>
        <Helmet>
            <title>Be A Mentor - DeltaHacks V</title>
            <meta name="description" content="Sign up to be a mentor here!" />
        </Helmet>
        
        <div id="main" className="gradient">

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
                <div className="inner">
                    <h1>Mentors</h1>
                    <div>
                        <pre><code>
                            <div><h3>Bilbo Baggins</h3></div>
                            <div>Farming</div>
                        </code></pre>
                        <pre><code>
                            <div><h3>Dick Cheney</h3></div>
                            <div>Oil</div>
                        </code></pre>
                    </div>
                </div>
            </section>
        </div>
    </div>
)
}
}

export default Mentor
