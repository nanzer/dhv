import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import mentor from '../assets/images/mentor.jpg'

const Mentor = (props) => (
    <div>
        <Helmet>
            <title>Be A Mentor</title>
            <meta name="description" content="Sign up to be a mentor here!" />
        </Helmet>

        <div id="main" className="alt">

            <section id="intro" className="">
                <h1>Want to be a mentor?</h1>
            </section>

            <section id="why" className="spotlights">
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
            </section>

            <section id="signup">
                <section>
                    <iframe width="0" height="0" name="hidden-form"></iframe>  
                    <form id="mentor-signup-form" method="post" target='hidden-form' action="https://script.google.com/a/mcmaster.ca/macros/s/AKfycbzzqgracu41ephczSIgCrJrXR_gTx2d57B-914Sy3Jk7ae_-Po/exec">
                        <input type="hidden" name="bot-field" />
                        <div className="row uniform">

                            <div className="6u 12u(xsmall)">
                                <label>Name *<input type="text" name="name" placeholder="Name"/></label>   
                            </div>

                            <div className="6u 12u(xsmall)">
                                <label>Email Address *<input type="email" name="email" id="email" placeholder="Email" /></label>
                            </div>

                            <div className="6u 12u(xsmall)">
                                <label>Phone Number<input type="tel" name="phone" id="phone" placeholder="416-777-7777" /></label>
                            </div>

                            <div className="6u">
                                <label>Type of Mentor *
                                <div className="select-wrapper">
                                    <select name="type" id="type">
                                        <option value="0">Technical Mentor</option>
                                        <option value="1">Challenger Mentor</option>
                                    </select>
                                </div>
                                </label>
                            </div>

                            <div className="6u 12u(xsmall)">
                                <label>Area of Expertise * (comma separated)<input type="text" name="expertise" id="expertise" placeholder="Blockchain" /></label>
                            </div>

                            <div className="6u 12u(xsmall)">
                                <label>Organization *<input type="text" name="organization" id="organization" placeholder="McMaster University" /></label>
                            </div>

                            <div className="12u">
                                <label>Dietary Restrictions *
                                <div className="select-wrapper">
                                    <select name="diet" id="diet">
                                        <option value="0">None</option>
                                        <option value="1">Vegetarian</option>
                                        <option value="2">Vegan</option>
                                        <option value="3">Halal</option>
                                        <option value="4">Gluten Free</option>
                                        <option value="5">Kosher</option>
                                        <option value="6">No Beef</option>
                                        <option value="7">Lactose Intolerant</option>
                                        <option value="8">Food/Nut Allergy</option>

                                    </select>
                                </div>
                                </label>
                            </div>

                            <div className="12u">
                            <div className="12u 12u">
                                <label>Why do you want to be a mentor? (300 char)<textarea name="why" id="why" placeholder="I really enjoy helping people..." rows="4"></textarea></label>
                            </div>

                            <ul className="actions">
                                <li><input type="submit" value="Sign up" /></li>
                                <li><input type="reset" value="Reset" /></li>
                            </ul>

                            </div>
                        </div>
                    </form>
                </section>
            </section>
        </div>

    </div>
)

export default Mentor
