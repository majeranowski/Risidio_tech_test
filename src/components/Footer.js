import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Logo from '../images/logofooter.png'

function Footer() {
  return (
    <div className='footer-container'>
    <div class='footer-logo'>
            <Link to='/'>
              <img src={Logo} />
              
            </Link>
            
          </div>  
          
        
        <div class='footer-links'>
        <div className='footer-link-wrapper'>
        <div className='footer-description'>
          <p>Risidio Marketplace is the platform for digital assets registered via the Bitcoin blockchain 
                using Clarity Contracts and the 
                Stacks 2.0 network. We are looking for 
                partners and clients to help get the platform to the next level.</p>
          </div> 
          <div class='footer-link-items'>
            
            <p>NFT</p>
            <Link to='/'>Your NFTs</Link>
            <Link to='/'>Mint a file</Link>
            
          </div>
          <div class='footer-link-items'>
            <p>How it works</p>
            <Link to='/'>Self Owned Indenty</Link>
            <Link to='/'>Getting Testnet Stc</Link>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <p>What we do</p>
            <Link to='/'>Get In Touch</Link>
            <Link to='/'>Developers</Link>
            
          </div>
          
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          
          
          <div class='social-icons'>
            <Link
              class='social-icon-link discord'
              to='/'
              target='_blank'
              aria-label='Discord'
            >
              <i class='fab fa-discord' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            
          </div>
          <br></br>
          <small class='website-rights'>© 2020 Risidio Ltd. All right Reserved</small>
        </div>
        <br></br>
        <div className='privacy'>
            <p>Privacy Policy</p>
            <p>Terms of use</p>
        </div>
      </section>
    </div>
  );
}

export default Footer;