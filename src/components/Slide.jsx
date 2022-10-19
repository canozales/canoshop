import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Slide = (props) => {
  return (
    <div className={`${props.aktif ? 'home' : 'tidak_aktif'}`}>
      <div className='kiri'>
        <span style={{ color: `${props.color}` }}>{props.judul}</span>
        <span>{props.deskripsi}</span>
        <Link
          to={`/detailproduk/${props.path}`}
          className='button'
          style={{ background: `${props.color}` }}
        >
          More Detail
        </Link>
      </div>
      <div className='kanan'>
        <div style={{ background: `${props.color}` }} className='shape'></div>
        <img src={props.img} alt='' />
      </div>
      <div className='bawah'>
        <AiOutlineArrowLeft
          className='ikonKiriKanan'
          fontSize={27}
          onClick={props.prevSlide}
        />
        {props.index === 0 ? (
          <span>One</span>
        ) : props.index === 1 ? (
          <span>Two</span>
        ) : (
          <span>Three</span>
        )}

        <AiOutlineArrowRight
          className='ikonKiriKanan'
          fontSize={27}
          onClick={props.nextSlide}
        />
      </div>
    </div>
  );
};

export default Slide;
