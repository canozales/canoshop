import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import logo from './../assets/gambar/logo2.png';

const Footer = () => {
  return (
    <div className='app__footer'>
      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Hubungi Kami</h1>
          <p style={{ marginBottom: 12 }} className='p__opensans'>
            Jl. Jend. Sudirman, Daerah Ibukota Jakarta
          </p>
          <p className='p__opensans'>+62 355-355-1234</p>
          <p className='p__opensans'>+62 355-355-5678</p>
        </div>

        <div className='app__footer-links_logo'>
          <img src={logo} alt='' />
          <p className='p__opensans'>
            &quot;Jadilah Manusia yang Berakhlak sehingga berguna bagi bangsa
            dan negara&quot;
          </p>
          <div className='app__footer-links_icons'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Waktu Pelayanan</h1>
          <p className='p__opensans'>Senin-Jumat:</p>
          <p className='p__opensans'>08:00 am - 07:00 pm</p>
          <p className='p__opensans'>Sabtu-Minggu:</p>
          <p className='p__opensans'>08:00 am - 03:00 pm</p>
        </div>
      </div>

      <div className='footer__copyright'>
        <p className='p__opensans'>Canoshop & Carlsen. All Rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
