import React from 'react';
import './Footer.css';
import ButtonMailto from './ButtonMailto';
import { Link } from 'react-router-dom';

function Footer() {
  return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                  <h2 className='footer-title'>Contact Us</h2>
                  <div className='row'>
                      <div className='column'>
                          <h2 className='name'>David Jones</h2>
                      </div>
                      <div className='column'>
                          <h2 className='name'>Daniel Boxall</h2>
                          <Link to='https://github.com/daniel-boxall'>Github</Link>
                          <br></br>
                          <ButtonMailto label="Email" mailto='mailto:danielboxall07@gmail.com' />
                      </div>
                      <div className='column'>
                          <h2 className='name'>Shah hoque</h2>
                      </div>
                      <div className='column'>
                          <h2 className='name'>Dali Han</h2>
                      </div>
                  </div>
                
                    
                </div>
            </div>
            <small className='website-rights'>Mad Money © 2023</small>
        </div>
    );
}


export default Footer;