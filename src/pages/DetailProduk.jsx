import React from 'react';
import DaftarProduk from '../components/DaftarProduk';
import DataProduk from '../assets/data/produk';
import { useParams } from 'react-router-dom';
import thousandSeperator from '../others/thousandseperator';
import { ThemeContext } from '../components/Kerangka';

const DetailProduk = () => {
  const { akhiran } = useParams();
  const produk = DataProduk.getProductByAkhiran(akhiran);

  const [previewImage, setPreviewImage] = React.useState(produk.gambar1);
  const [kuantitas, setKuantitas] = React.useState(1);
  const [ukuran, setUkuran] = React.useState(undefined);
  const [warna, setWarna] = React.useState(undefined);
  const [harga, setHarga] = React.useState(produk.harga);

  const dataKeranjang = React.useContext(ThemeContext);
  const setDataKeranjang = React.useContext(ThemeContext);

  const periksaKesamaanProduk = (akhiran, ukuran, kuantitas) => {
    dataKeranjang.forEach((x, index) => {
      if (x.akhiran === akhiran && x.ukuran === ukuran) {
        setDataKeranjang((dataKeranjang[index].kuantitas += kuantitas));
      }
    });
  };

  const tambahkanKeCart = () => {
    if (ukuran === undefined) {
      alert('Tentukan Ukuran');
    } else if (produk.warna !== 'no') {
      if (warna === undefined) {
        alert('Tentukan Warna');
      } else {
        alert('Berhasil menambahkan produk !');
        setDataKeranjang(
          dataKeranjang.push({
            akhiran,
            warna,
            ukuran,
            kuantitas,
          })
        );
      }
    } else {
      alert('Berhasil menambahkan produk !');
      periksaKesamaanProduk(akhiran, ukuran, kuantitas);
      setDataKeranjang(
        dataKeranjang.push({
          akhiran,
          warna,
          ukuran,
          kuantitas,
        })
      );
    }
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [produk]);
  return (
    <div className='outer_flex'>
      <div className='detail_produk'>
        <div className='kiri'>
          <div className='kiri_row'>
            <div className='kecil'>
              <img
                onClick={() => setPreviewImage(produk.gambar1)}
                src={produk.gambar1}
                alt=''
              />
              <img
                onClick={() => setPreviewImage(produk.gambar2)}
                src={produk.gambar2}
                alt=''
              />
            </div>
            <div className='besar'>
              <img src={previewImage} alt='' />
            </div>
          </div>
          <div className='tulisan'>
            <h3>{produk.nama}</h3>
            <p>
              Pakaian tersebut dirancang langsung oleh Alexander D'Great. Salah
              satu ahli busana terkenal di Perancis. Dibuat dengan bahan kain
              wol yang nyaman digunakan serta memiliki ketahanan dan durabilitas
              yang baik. Bahan tersebut memiliki sirkulasi udara yang telah
              diperhitungkan secara fisika. Cocok bersentuhan untuk semua jenis
              kulit sehingga tidak menyebabkan iritasi ataupun rasa tidak nyaman
              pada kulit.
            </p>
          </div>
        </div>
        <div className='kanan'>
          <span>{produk.nama}</span>
          {produk.warna === 'no' ? null : (
            <div>
              <span className='spanwarna'>Pilihan Warna</span>
              <div className='warna'>
                {produk.warna.map((item, index) => (
                  <div
                    onClick={() => {
                      setPreviewImage(produk.properti[index]);
                      setWarna(item);
                    }}
                    className={`flex_warna ${item} ${
                      warna === item ? 'warnaAktif' : ''
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          )}

          <span className='spanukuran'>Pilihan Ukuran</span>
          <div className='ukuran'>
            {produk.size.map((item) => (
              <div
                onClick={() => setUkuran(item)}
                className={`flex_ukuran ${item === ukuran ? 'aktif' : ''}`}
              >
                {item}
              </div>
            ))}
          </div>
          <span className='spankuantitas'>Kuantitas</span>
          <div className='kuantitas'>
            <span
              onClick={() =>
                kuantitas !== 1
                  ? setKuantitas(kuantitas - 1) &
                    setHarga(parseInt(harga) - parseInt(produk.harga))
                  : null
              }
            >
              -
            </span>
            <span>{kuantitas}</span>
            <span
              onClick={() => {
                setKuantitas(kuantitas + 1);
                setHarga(parseInt(harga) + parseInt(produk.harga));
              }}
            >
              +
            </span>
          </div>
          <span>Rp {thousandSeperator(harga)}</span>
          <button onClick={() => tambahkanKeCart()} className='tombol'>
            Tambahkan ke Cart
          </button>
        </div>
      </div>
      <span className='judul'>Produk Lainnya</span>
      <div className='konten'>
        {DataProduk.produk.map((item) => (
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

export default DetailProduk;
