import React from 'react';
import Slide from '../components/Slide';
import dataSlide from '../assets/data/dataslide';
import DaftarProduk from '../components/DaftarProduk';
import data from '../assets/data/produk';

const Home = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    currentIndex === 2 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    currentIndex === 0 ? setCurrentIndex(2) : setCurrentIndex(currentIndex - 1);
  };

  return (
    <div>
      {dataSlide.map((item, index) => (
        <Slide
          color={item.color}
          judul={item.judul}
          deskripsi={item.deskripsi}
          img={item.img}
          aktif={index === currentIndex}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          index={currentIndex}
          path={item.path}
        ></Slide>
      ))}
      <div className='daftarProduk'>
        {data.getProducts(4).map((item) => (
          <DaftarProduk
            gambar={item.gambar1}
            gambar2={item.gambar2}
            nama={item.nama}
            harga={item.harga}
            kategori={item.kategori}
            akhiran={item.akhiran}
          />
        ))}
      </div>

      <div className='perkenalan'></div>
    </div>
  );
};

export default Home;
