import React from 'react';
import './Footer.css';
import ButtonMailto from './ButtonMailto';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-link-wrapper'>
                <h2 className='footer-title'>Contact Us</h2>
                <div className='row'>
                    <div className='column'>
                        <h2 className='name'>David Jones</h2>
                        <Link target="_blank" to='https://davejonesuk.dev/'><AccountBoxIcon fontSize='large' /></Link>
                        <Link to='https://linkedin.com/in/david-jones-751206257/'><LinkedInIcon fontSize='large' /></Link>
                        <Link to='https://github.com/DJ-86'><GitHubIcon fontSize='large'/></Link>
                        <ButtonMailto label={ <EmailIcon fontSize='large' />} mailto='mailto:davidmarkjones@gmail.com'/>
                    </div>
                    <div className='column'>
                        <h2 className='name'>Daniel Boxall</h2>
                        <Link target="_blank" to='#'><AccountBoxIcon fontSize='large' /></Link>
                        <Link to='https://linkedin.com/in/daniel-boxall-34a951257'><LinkedInIcon fontSize='large' /></Link>
                        <Link to='https://github.com/daniel-boxall'><GitHubIcon fontSize='large'/></Link>
                        <ButtonMailto label={ <EmailIcon fontSize='large' />} mailto='mailto:danielboxall07@gmail.com'/>
                    </div>
                    <div className='column'>
                        <h2 className='name'>Shah hoque</h2>
                        <Link target="_blank" to='#'><AccountBoxIcon fontSize='large' /></Link>
                        <Link to='https://linkedin.com/in/'><LinkedInIcon fontSize='large' /></Link>
                        <Link to='https://github.com/shah-hoque'><GitHubIcon fontSize='large'/></Link>
                        <ButtonMailto label={ <EmailIcon fontSize='large' />} mailto='#'/>
                    </div>
                    <div className='column'>
                        <h2 className='name'>Dali Han</h2>
                        <Link target="_blank" to='#'><AccountBoxIcon fontSize='large' /></Link>
                        <Link to='https://linkedin.com/in/'><LinkedInIcon fontSize='large' /></Link>
                        <Link to='https://github.com/dearbojack'><GitHubIcon fontSize='large'/></Link>
                        <ButtonMailto label= { <EmailIcon fontSize='large' />} mailto='dali4han@gmail.com'/>
                    </div>
                </div>
            </div>
            <small className='website-rights'>Mad Money © 2023</small>
        </div>
    );
}


export default Footer;
