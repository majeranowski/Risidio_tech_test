import React from 'react'
import { Link } from 'react-router-dom'

function NFT(props) {
  return (
    <>
    <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
            <figure className='cards__item__pic-wrap'>
                <img src={props.src} alt='NFT Image' className='cards__item__img'></img>
            </figure>
            <div className='cards__item__info'>
                
                <p className='cards__item__text'><b>{props.text}</b></p><p>{props.text2}</p>
                </div>
            <div className='cards__item__info1'>
                <p className='cards__item__text'>By <b>{props.text1}</b></p><p>{props.text3}</p>
            </div>
        </Link>
    </li>
    
    </>
  )
}

export default NFT
