import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import thousandSeperator from '../others/thousandseperator';

const DaftarProduk = (props) => {
  return (
    <div className='kartu'>
      <Link to={`/detailproduk/${props.akhiran}`} className='tempatGambar'>
        <img src={props.gambar} alt='' />
        <img src={props.gambar2} alt='' />
      </Link>

      <div className='flex'>
        <span>{props.kategori}</span>
        <span>{props.nama}</span>
      </div>

      <div className='harga'>
        <span>IDR {thousandSeperator(props.harga)}</span>
        <Link to={`/detailproduk/${props.akhiran}`} className='backBulat'>
          <AiOutlineShoppingCart color='#03ac0e' fontSize={30} />
        </Link>
      </div>
    </div>
  );
};

export default DaftarProduk;
