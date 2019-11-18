import React from 'react';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import email_logo from '../assets/email-logo.png'

class Footer extends React.Component{
    render(){
        return(
        <div id="footer">
            <a href="mailto:eliasaboujaoude92@gmail.com" className="contact-info">
                <img src={email_logo} className="contact-image" style={{height: "17px"}}/>
            </a>
            <a href="https://www.linkedin.com/in/elias-abou-jaoude/" className="contact-info">
                <img src={linkedin} className="contact-image" />
            </a>
            <a href="https://github.com/eliasaj92" className="contact-info">
                <img src={github} className="contact-image" />
            </a>
        </div>
        )
    }
}

export default Footer;