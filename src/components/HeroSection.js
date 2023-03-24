import React, { useState } from 'react'
import '../App.css';
import banner from '../images/banner.png';
import profile from '../images/profile.png';
import './HeroSection.css';
function HeroSection() {
    const [readMore, setReadMore] = useState(false);
    const extraContent=<div><br></br><p className='extra-content'>Description of this collection - - Examples such the content of NFTs, 
    specific themes of the collection, quotations by the creator, 
    the meaning behind the creation of this collection etc Description of this collection - - 
    Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etcDescription of this collection - - Examples such the content of NFTs, specific themes of the collection, 
    quotations by the creator, the meaning behind the creation of this collection etc</p></div>

const linkName=readMore?'Hidden':'Read More'
  return (
    <>
    
    
    <div className='hero-container'>
    <img src={banner} className='banner'/>
      <h1>Collection name </h1>
      <img src={profile} className='profile'/>
      <h4>Artist name</h4>
      <br></br>
      <div className='text'>
      <p>Description of the NFT / collectable - Examples such the content of NFTs, 
        specific themes of the collection, quotations by the creator, 
        the meaning behind the creation of this piece etc.</p>
        <br></br>
        <br></br>
        <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
      {readMore && extraContent}
        
        
        </div>
        <br></br>
        <br></br>
        <div className='table'>
            <table>
            <tr className='first'>
                <td>Floor Price</td>
                <td><b>2,835 STX</b></td>
            </tr>
            <tr className='second'>
                <td>Owners</td>
                <td><b>1,236</b></td>
            </tr> 
            <tr className='third'>
                <td>Items</td>
                <td><b>2,500</b></td>
            </tr> 
            
            
            </table>
        </div>
    </div>
    </>
  );
}

export default HeroSection;
