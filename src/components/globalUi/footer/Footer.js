import React from 'react';
import './Footer.css';
import ButtonMailto from '../footer/ButtonMailto';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-link-wrapper'>
                <div className='row'>
                    <div className='column'>
                        <h2 className='name'>David Jones</h2>
                        <Link target="_blank" to='https://davejonesuk.dev/'><AccountBoxIcon className="link" fontSize='large' /></Link>
                        <Link target="_blank" to='https://linkedin.com/in/david-jones-751206257/'><LinkedInIcon className="link" fontSize='large' /></Link>
                        <Link target="_blank" to='https://github.com/DJ-86'><GitHubIcon className="link" fontSize='large'/></Link>
                        <ButtonMailto label={ <EmailIcon className="link" fontSize='large' />} mailto='mailto:davidmarkjones@gmail.com'/>
                    </div>
                    <div className='column'>
                        <h2 className='name'>Daniel Boxall</h2>
                        <Link  target="_blank" to='#'><AccountBoxIcon className="link" fontSize='large' /></Link>
                        <Link  target="_blank" to='https://linkedin.com/in/daniel-boxall-34a951257'><LinkedInIcon className="link" fontSize='large' /></Link>
                        <Link  target="_blank" to='https://github.com/daniel-boxall'><GitHubIcon className="link" fontSize='large'/></Link>
                        <ButtonMailto label={ <EmailIcon className="link" fontSize='large' />} mailto='mailto:danielboxall07@gmail.com'/>
                    </div>
                    <div className='column'>
                        <h2 className='name'>Shah Hoque</h2>
                        <Link target="_blank" to='#'><AccountBoxIcon className="link" fontSize='large' /></Link>
                        <Link target="_blank" to='https://linkedin.com/in/'><LinkedInIcon className="link" fontSize='large' /></Link>
                        <Link target="_blank" to='https://github.com/shah-hoque'><GitHubIcon className="link" fontSize='large'/></Link>
                        <ButtonMailto label={ <EmailIcon className="link" fontSize='large' />} mailto='#'/>
                    </div>
                    <div className='column'>
                        <h2 className='name'>Dali Han</h2>
                        <Link target="_blank" to='#'><AccountBoxIcon className="link" fontSize='large' /></Link>
                        <Link target="_blank" to='https://linkedin.com/in/'><LinkedInIcon className="link" fontSize='large' /></Link>
                        <Link target="_blank" to='https://github.com/dearbojack'><GitHubIcon className="link"fontSize='large'/></Link>
                        <ButtonMailto  label= { <EmailIcon className="link" fontSize='large' />} mailto='dali4han@gmail.com'/>
                    </div>
                </div>
            </div>
            <small className='website-rights'>Mad Money © 2023</small>
        </div>
    );
}


export default Footer;
