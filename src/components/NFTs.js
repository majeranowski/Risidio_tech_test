import React from 'react'
import NFT from './NFT'
import './NFTs.css'
import NFT1 from '../images/NFT1.png'
import NFT2 from '../images/nft2.png'
import NFT3 from '../images/nft3.png'
import { Button } from './Button'
function NFTs() {
  return (
    <div className='cards'>
        <div className='bar'>
            <p className='items'>Items</p>
            <p className='activity'>Activity</p>
            
        </div>
        
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <NFT src={NFT1} text="Artwork" text1="Artist name" text2="20 STX" text3="27 $" />
                    <NFT src={NFT2} text="Artwork" text1="Artist name" text2="20 STX" text3="27 $" />
                    <NFT src={NFT3} text="Artwork" text1="Artist name" text2="20 STX" text3="27 $" />
                    <NFT src={NFT2} text="Artwork" text1="Artist name" text2="20 STX" text3="27 $" />
                </ul>
                <ul className='cards__items'>
                    <NFT src={NFT1} text="Artwork" text1="Artist name" text2="20 STX" text3="27 $" />
                    <NFT src={NFT1} text="Artwork" text1="Artist name" text2="20 STX" text3="27 $" />
                    <NFT src={NFT3} text="Artwork" text1="Artist name" text2="20 STX" text3="27 $" />
                    <NFT src={NFT2} text="Artwork" text1="Artist name" text2="20 STX" text3="27 $" />
                </ul>
                <ul className='cards__items'>
                    <NFT src={NFT3} text="Artwork" text1="Artist name" text2="20 STX" text3="27 $" />
                    <NFT src={NFT1} text="Artwork" text1="Artist name" text2="20 STX" text3="27 $" />
                    <NFT src={NFT1} text="Artwork" text1="Artist name" text2="20 STX" text3="27 $" />
                    <NFT src={NFT1} text="Artwork" text1="Artist name" text2="20 STX" text3="27 $" />
                </ul>
            </div>
        </div>
        <div className='bottom'>
            <p>You've seen all the collection</p>
            <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outlinedown'
          buttonSize='btn--medium'
        >
          Gallery
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primarydown'
          buttonSize='btn--medium'
          
        >
          Go back to top
        </Button>
        </div>
        </div>
    </div>
  )
}

export default NFTs
