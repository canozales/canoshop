import React from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import thousandSeperator from '../others/thousandseperator';
import { ThemeContext, ThemeUpdateContext } from '../components/Kerangka';
import DataProduk from '../assets/data/produk';

const ListItem = (props) => {
  const [kuantitas, setKuantitas] = React.useState(props.qty);

  return (
    <div className='itemList'>
      <img src={props.gambar} alt='' />
      <div className='hello_flex'>
        <div className='hello_tulisan'>
          <span>{props.nama}</span>
          <span>Rp {thousandSeperator(props.harga * kuantitas)}</span>
        </div>

        <div className='kuantitas'>
          <span
            onClick={() => {
              if (kuantitas !== 1) {
                let temp = props.dataKeranjang;
                temp[props.index].kuantitas -= 1;

                props.setDataKeranjang(temp);

                setKuantitas(kuantitas - 1);
                props.setTotalItem(props.totalItem - 1);
                props.setTotalHarga(
                  parseInt(props.totalHarga) - parseInt(props.harga)
                );
              }
            }}
          >
            -
          </span>
          <span>{kuantitas}</span>
          <span
            onClick={() => {
              let temp = props.dataKeranjang;
              temp[props.index].kuantitas += 1;

              props.setDataKeranjang(temp);

              setKuantitas(kuantitas + 1);
              props.setTotalItem(props.totalItem + 1);
              props.setTotalHarga(
                parseInt(props.totalHarga) + parseInt(props.harga)
              );
            }}
          >
            +
          </span>
        </div>
        <IoTrashOutline
          onClick={() => {
            props.setTotalItem(props.totalItem - kuantitas);
            props.setTotalHarga(props.totalHarga - kuantitas * props.harga);
            const temp = props.dataKeranjang;
            temp.splice(props.index, 1);
            props.setDataKeranjang(temp);
          }}
          className='ikon'
          fontSize={30}
        />
      </div>
    </div>
  );
};

const Keranjang = () => {
  const dataKeranjang = React.useContext(ThemeContext);
  const setDataKeranjang = React.useContext(ThemeUpdateContext);

  console.log(dataKeranjang);

  const hitungTotalItem = () => {
    let jumlah = 0;
    dataKeranjang.forEach((x) => {
      jumlah += x.kuantitas;
    });
    return jumlah;
  };

  const hitungTotalHarga = () => {
    let jumlah = 0;
    dataKeranjang.forEach((x) => {
      jumlah += x.kuantitas * DataProduk.getProductByAkhiran(x.akhiran).harga;
    });
    return jumlah;
  };

  const [totalItem, setTotalItem] = React.useState(hitungTotalItem);
  const [totalHarga, setTotalHarga] = React.useState(hitungTotalHarga);

  return (
    <div className='keranjang'>
      <div className='kiri'>
        <div className='kotak'>
          <span>Anda memiliki {totalItem} Item</span>
          <div className='flex'>
            <span>Rp {thousandSeperator(totalHarga)}</span>
          </div>
          <button>Checkout</button>
        </div>
      </div>
      <div className='kanan'>
        {Array.from(dataKeranjang).map((item, index) => {
          const produk = DataProduk.getProductByAkhiran(item.akhiran);
          return (
            <ListItem
              dataKeranjang={dataKeranjang}
              setDataKeranjang={setDataKeranjang}
              index={index}
              totalItem={totalItem}
              setTotalItem={setTotalItem}
              totalHarga={totalHarga}
              setTotalHarga={setTotalHarga}
              harga={produk.harga}
              gambar={produk.gambar1}
              nama={`${produk.nama}${
                item.warna === undefined ? '' : ' / ' + item.warna
              } / ${item.ukuran}`}
              qty={item.kuantitas}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Keranjang;
