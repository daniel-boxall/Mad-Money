import React from 'react';
import GithubProfile from '../components/aboutUs/GithubProfile.js';
import './Team.css';
import Footer from '../components/globalUi/footer/Footer'

function Team() {
    return (
        <>
            <div className='about' style={{"min-height":"calc(100vh - 230px)"}}>
                <h1 className='title'>Meet The Team</h1>
                <GithubProfile username={'dearbojack'} />
                <GithubProfile username={'daniel-boxall'} />
                <GithubProfile username={'DJ-86'} />
                <GithubProfile username={'shah-hoque'} />
            </div>
            <div>
                <Footer />
            </div>
            
        </>
    )
}

export default Team;
