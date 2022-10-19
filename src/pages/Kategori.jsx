import React from 'react';
import DaftarProduk from '../components/DaftarProduk';
import daftarDataProduk from '../assets/data/produk';
import Checkbox from '../components/Checkbox';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const dataKategoriFilter = [
  {
    nama: 'Kostum Anime',
    kategori: 'Anime',
  },
  {
    nama: 'Kostum Game Online',
    kategori: 'Game Online',
  },
  {
    nama: 'Kostum Keprofesian',
    kategori: 'Profesi',
  },
];

const Kategori = () => {
  const initFilter = {
    category: [],
  };

  const productList = daftarDataProduk.produk;

  const [products, setProducts] = React.useState(productList);
  const [filter, setFilter] = React.useState(initFilter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case 'CATEGORY':
          setFilter({
            ...filter,
            category: [...filter.category, item.kategori],
          });
          break;
        default:
      }
    } else {
      switch (type) {
        case 'CATEGORY':
          const newCategory = filter.category.filter(
            (e) => e !== item.kategori
          );
          setFilter({ ...filter, category: newCategory });
          break;
        default:
      }
    }
  };

  // const clearFilter = () => setFilter(initFilter);

  const updateProducts = React.useCallback(() => {
    let temp = productList;

    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.kategori));
    }

    setProducts(temp);
  }, [filter, productList]);

  const filterRef = React.useRef(null);
  const judulRef = React.useRef(null);
  const ikonkotakRef = React.useRef(null);

  const fasilitasFilterSide = () => {
    ikonkotakRef.current.classList.toggle('munculkanIkon');
    filterRef.current.classList.toggle('munculkanKotak');
    judulRef.current.classList.toggle('sembunyikanJudul');
  };

  React.useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  return (
    <div className='kategori'>
      <button onClick={() => fasilitasFilterSide()} className='tombol'>
        Fasilitas Filter
      </button>
      <div className='kotak_filter slide-bottom' ref={filterRef}>
        <div ref={ikonkotakRef} className='ikon_kotak'>
          <AiOutlineArrowLeft
            onClick={() => fasilitasFilterSide()}
            fontSize={30}
          />
        </div>

        <span ref={judulRef} className='judul_kotak'>
          Fasilitas Filter
        </span>
        {dataKategoriFilter.map((item, index) => (
          <Checkbox
            nama={item.nama}
            identitas={`iden-${index}`}
            onChange={(input) => filterSelect('CATEGORY', input.checked, item)}
            checked={filter.category.includes(item.kategori)}
          />
        ))}
      </div>
      <div className='daftar_produk'>
        {products.map((item) => (
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
    </div>
  );
};

export default Kategori;
