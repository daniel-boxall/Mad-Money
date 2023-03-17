import React from 'react';
import './Footer.css';
import ButtonMailto from './ButtonMailto';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                  <h2 className='footer-title'>Contact Us</h2>
                  <div className='row'>
                      <div className='column'>
                          <h2 className='name'>David Jones</h2>
                          <Link to='https://linkedin.com/in/'><LinkedInIcon fontSize='large' /></Link>
                          <br/>
                          <Link to='https://github.com/DJ-86'><GitHubIcon fontSize='large'/></Link>
                          <br></br>
                          <ButtonMailto label='Email' mailto='#'/>
                      </div>
                      <div className='column'>
                          <h2 className='name'>Daniel Boxall</h2>
                          <Link to='https://linkedin.com/in/daniel-boxall-34a951257'><LinkedInIcon fontSize='large' /></Link>
                          <br/>
                          <Link to='https://github.com/daniel-boxall'><GitHubIcon fontSize='large'/></Link>
                          <br></br>
                          <ButtonMailto label='Email' mailto='mailto:danielboxall07@gmail.com'/>
                      </div>
                      <div className='column'>
                          <h2 className='name'>Shah hoque</h2>
                          <Link to='https://linkedin.com/in/'><LinkedInIcon fontSize='large' /></Link>
                          <br/>
                          <Link to='https://github.com/shah-hoque'><GitHubIcon fontSize='large'/></Link>
                          <br></br>
                          <ButtonMailto label='Email' mailto='#'/>
                      </div>
                      <div className='column'>
                          <h2 className='name'>Dali Han</h2>
                          <Link to='https://linkedin.com/in/'><LinkedInIcon fontSize='large' /></Link>
                          <br/>
                          <Link to='https://github.com/dearbojack'><GitHubIcon fontSize='large'/></Link>
                          <br></br>
                          <ButtonMailto label='Email' mailto='#'/>
                      </div>
                  </div>
                
                    
                </div>
            </div>
            <small className='website-rights'>Mad Money © 2023</small>
        </div>
    );
}


export default Footer;