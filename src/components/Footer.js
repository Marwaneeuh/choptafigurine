import React from 'react';

import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return <footer className='pt-16 bg-primary'>
    <div className='container mx-auto'>
      <div className='text-center'>
        <h2 className='h2 uppercase mb-6 font-semibold'>Abonnez-vous à notre newsletter</h2>
        <p className='text-white/70'>Soyez le premier à recevoir les dernières nouvelles sur les tendances,
           promotions et bien plus encore !
        </p>
      </div>
      {/* form */}
      <form className='w-full max-w-3x1 mx-auto flex flex-col 
      md:flex-row gap-5 my-14'>
        <input type='text' placeholder='Adresse Email'
        className='input' />
        <button className='btn btn-accent min-w-[150px]'>Rejoindre</button>
      </form>
      {/* Links */}
      <div className='text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9'>
        <a href='#' className='hover:text-white transition-all'>Politique de retour</a>
        <a href='#' className='hover:text-white transition-all'>Suivre votre commande</a>
        <a href='#' className='hover:text-white transition-all'>Expédition et livraison</a>
      </div>
      {/* socials */}
      <div className='flex gap-x-6 max-w-max mx-auto test-lg mb-16'>
      <a href='https://www.instagram.com/choptafigurine/' className='hover:text-white transition-all'> <FaInstagram /></a>
      <a href='https://twitter.com/choptafigurine' className='hover:text-white transition-all'> <FaTwitter /></a>
      <a href='https://www.facebook.com/profile.php?id=100095178280247' className='hover:text-white transition-all'> <FaFacebook /></a>
      </div>
    </div>
    {/* copyright */}
    <div className='py-10 border-t border-t-white/10'>
      <div className='container mx-auto'>
        <div className='text-center text-sm text-white/60'>Copyright &copy; ChopTaFigurine 2023 | Tous droits réservés </div>
      </div>
    </div>
  </footer>;
};

export default Footer;