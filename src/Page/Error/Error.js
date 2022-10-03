import React from 'react'
import NotFound from '../../assets/NotFound.jpg';
import Header from '../../components/header/header';
import '../Error/Error.css';


export default function Error  () {
  return (
   
    <div className='BodyError'>
       <Header/> 
        <div>
              <img src={NotFound} alt='Not found'></img>
        </div>
        <p>Oups! La page quevous demandez n'existe pas</p>
        <link to='/'>Retourner sur la page d'accueil</link>
    </div>
  )
}
