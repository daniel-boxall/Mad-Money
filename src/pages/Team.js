import React from 'react';
import GithubProfile from '../components/aboutUs/GithubProfile.js';
import './Team.css';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ButtonMailto from '../components/globalUi/footer/ButtonMailto';

function Team() {
    return (
        <>
            <div className='body'>
                <h1 className='title'>Meet The Team</h1>
                <div className='main'>
                    <div className='glass'>
                        <div className='cards'>
                            <div className='card'>
                                <GithubProfile username={'dearbojack'} />
                                <Link to='#'><AccountBoxIcon style={{ "font-size": "50px" }} /></Link>
                                <Link to='https://linkedin.com/in/'><LinkedInIcon style={{ "font-size": "50px" }} /></Link>
                                <Link to='https://github.com/dearbojack'><GitHubIcon style={{ "font-size": "50px" }} /></Link>
                                <ButtonMailto label= { <EmailIcon style={{ "font-size": "50px" }} />} mailto='#'/>
                            </div>
                            <div className='card'>
                                <GithubProfile username={'daniel-boxall'} />
                                <Link to='#'><AccountBoxIcon style={{ "font-size": "50px" }} /></Link>
                                <Link target="_blank" to='https://linkedin.com/in/daniel-boxall-34a951257'><LinkedInIcon style={{ "font-size": "50px" }} /></Link>
                                <Link target="_blank" to='https://github.com/daniel-boxall'><GitHubIcon style={{ "font-size": "50px" }} /></Link>
                                <ButtonMailto label={ <EmailIcon  style={{ "font-size": "50px" }}/>} mailto='mailto:danielboxall07@gmail.com'/>
                            </div>
                            <div className='card'>
                                <GithubProfile username={'DJ-86'} />
                                <Link target="_blank" to='https://davejonesuk.dev/'><AccountBoxIcon style={{"font-size":"50px"}} /></Link>
                                <Link target="_blank" to='https://linkedin.com/in/david-jones-751206257/'><LinkedInIcon style={{ "font-size": "50px" }} /></Link>
                                <Link target="_blank" to='https://github.com/DJ-86'><GitHubIcon style={{ "font-size": "50px" }}/></Link>
                                <ButtonMailto label={ <EmailIcon style={{ "font-size": "50px" }} />} mailto='mailto:davidmarkjones@gmail.com'/>
                            </div>
                            <div className='card'>
                                <GithubProfile username={'shah-hoque'} />
                                <Link target="_blank" to='#'><AccountBoxIcon style={{ "font-size": "50px" }} /></Link>
                                <Link target="_blank" to='https://linkedin.com/in/'><LinkedInIcon style={{ "font-size": "50px" }} /></Link>
                                <Link target="_blank" to='https://github.com/shah-hoque'><GitHubIcon style={{ "font-size": "50px" }} /></Link>
                                <ButtonMailto label={ <EmailIcon style={{ "font-size": "50px" }} />} mailto='#'/>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Team;
