import React from 'react'

const BannerLanding = (props) => (
    <section id="banner" className="style2">
        <div className="inner">
            <header className="major">
                <h1>DeltaHacks V</h1>
            </header>
            <div className="content">
                <p>Jan 26-27, 2019   /   McMaster University</p>
                <a href="#who" className="button down scrolly">Tell Me More!</a>
                <a href="#contact" className="button scrolly">Contact Us</a>
                {/* <button>Scroll</button> */}
                <br />
                <ul className="icons">
                    <li><a href="https://twitter.com/deltahacks" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="https://www.facebook.com/thedeltahacks/" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="https://www.instagram.com/deltahacks/" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="https://www.linkedin.com/company/deltahacks/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                </ul>
                <br />
            </div>
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />
                <div className="row uniform">
                    <div className="6u 12u(xsmall)">
                        <label><input type="text" name="name" placeholder="Name"/></label>   
                    </div>
                    <div className="6u 12u(xsmall)">
                        <label><input type="email" name="email" id="email" placeholder="Email" /></label>
                    </div>
                    <div className="12u">
                        <ul className="actions">
                            <li><input type="submit" value="Join Mailing List" className="special" /></li>
                            <li><input type="reset" value="Reset" /></li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    </section>
)

export default BannerLanding
