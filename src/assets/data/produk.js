const gambar1a = require('../gambar/produk/bluegenshin.jpg');
const gambar1b = require('../gambar/produk/bluegenshinb.png');

const gambar2a = require('../gambar/produk/chainsawa.jpg');
const gambar2b = require('../gambar/produk/chainsawb.png');

const gambar3a = require('../gambar/produk/itsuki.jpg');
const gambar3b = require('../gambar/produk/itsukib.png');

const gambar4a = require('../gambar/produk/keqing.jpg');
const gambar4b = require('../gambar/produk/keqingb.png');

const gambar5a = require('../gambar/produk/mikasa.jpg');
const gambar5b = require('../gambar/produk/mikasac.png');

const gambar6a = require('../gambar/produk/miko.jpg');
const gambar6b = require('../gambar/produk/mikob.png');

const gambar7a = require('../gambar/produk/nun.jpg');
const gambar7b = require('../gambar/produk/nunb.png');

const gambar8a = require('../gambar/produk/osakanac.jpg');
const gambar8b = require('../gambar/produk/osakanac.png');

const gambar9a = require('../gambar/produk/purple.jpg');
const gambar9b = require('../gambar/produk/purpleb.png');

const gambar10a = require('../gambar/produk/raiden.jpg');
const gambar10b = require('../gambar/produk/raidenb.png');

const gambar11a = require('../gambar/produk/santet.jpg');
const gambar11b = require('../gambar/produk/santetb.png');

const gambar12a = require('../gambar/produk/vampire.jpg');
const gambar12b = require('../gambar/produk/vampireb.png');

const gambar13a = require('../gambar/produk/yorhitam.jpg');
const gambar13b = require('../gambar/produk/yorhitamb.png');

const gambar14a = require('../gambar/produk/yormerah.jpg');
const gambar14b = require('../gambar/produk/yormerahb.png');

const gambar15a = require('../gambar/produk/yotsuba.jpg');
const gambar15b = require('../gambar/produk/yotsubab.png');

const gambar16a = require('../gambar/produk/zerotwo.png');
const gambar16b = require('../gambar/produk/zerotwoc.png');

const gambar17a = require('../gambar/produk/student.png');
const gambar17b = require('../gambar/produk/studentb.png');

const gambar18a = require('../gambar/slide/slider3a.jpg');
const gambar18b = require('../gambar/slide/slider3b.png');

const slide1 = require('../gambar/slide/teacher.jpg');
const slide1b = require('../gambar/slide/teacher1b.png');
const slide1c = require('../gambar/slide/teacher1c.png');
const slide1d = require('../gambar/slide/teacher1d.png');
const slide1e = require('../gambar/slide/teacher1e.png');

const slide2 = require('../gambar/slide/slider2a.jpg');
const slide2a = require('../gambar/slide/slider2b.png');
const slide2b = require('../gambar/slide/slider2c.png');

const produk = [
  {
    nama: 'Mikasa Azur Lane',
    harga: '180000',
    gambar1: gambar5a,
    gambar2: gambar5b,
    kategori: 'Game Online',
    warna: 'no',
    akhiran: 'mikasa-01',
    size: ['M', 'L'],
  },
  {
    nama: 'Makima マキマ',
    harga: '120000',
    gambar1: gambar2a,
    gambar2: gambar2b,
    kategori: 'Anime',
    warna: 'no',
    akhiran: 'makima-01',
    size: ['S', 'M', 'L', 'XL'],
  },
  {
    nama: 'Eula Lawrence',
    harga: '250000',
    gambar1: gambar1a,
    gambar2: gambar1b,
    kategori: 'Game Online',
    warna: 'no',
    akhiran: 'eula-01',
    size: ['S', 'M', 'L'],
  },
  {
    nama: 'Pakaian Guru',
    harga: '150000',
    gambar1: slide1,
    gambar2: slide1b,
    kategori: 'Profesi',
    warna: ['Black', 'Red', 'Navy', 'Green'],
    properti: [slide1b, slide1c, slide1d, slide1e],
    akhiran: 'teacher-01',
    size: ['S', 'M', 'L', 'XL'],
  },
  {
    nama: 'Forger Assasin',
    harga: '220000',
    gambar1: gambar13a,
    gambar2: gambar13b,
    kategori: 'Anime',
    warna: 'no',
    akhiran: 'yor-01',
    size: ['S', 'M', 'L'],
  },
  {
    nama: 'Forger Home',
    harga: '90000',
    gambar1: gambar14a,
    gambar2: gambar14b,
    kategori: 'Anime',
    warna: 'no',
    akhiran: 'yor-02',
    size: ['S', 'M', 'L', 'XL'],
  },
  {
    nama: 'Takina Inoue',
    harga: '120000',
    gambar1: slide2,
    gambar2: slide2a,
    kategori: 'Anime',
    warna: ['Navy', 'Red'],
    properti: [slide2a, slide2b],
    akhiran: 'takina-01',
    size: ['S', 'M', 'L'],
  },
  {
    nama: 'Nier Automata',
    harga: '140000',
    gambar1: gambar18a,
    gambar2: gambar18b,
    kategori: 'Game Online',
    warna: 'no',
    akhiran: 'nier-01',
    size: ['S', 'M', 'L', 'XL'],
  },

  {
    nama: 'Itsuki Nakano',
    harga: '120000',
    gambar1: gambar3a,
    gambar2: gambar3b,
    kategori: 'Anime',
    warna: 'no',
    akhiran: 'itsuki-01',
    size: ['S', 'M', 'L'],
  },
  {
    nama: 'Keqing',
    harga: '200000',
    gambar1: gambar4a,
    gambar2: gambar4b,
    kategori: 'Game Online',
    warna: 'no',
    akhiran: 'keqing-01',
    size: ['S', 'M', 'L'],
  },

  {
    nama: 'Yae Miko',
    harga: '210000',
    gambar1: gambar6a,
    gambar2: gambar6b,
    kategori: 'Game Online',
    warna: 'no',
    akhiran: 'yae-01',
    size: ['S', 'M', 'L'],
  },
  {
    nama: 'Pakaian Biarawati',
    harga: '230000',
    gambar1: gambar7a,
    gambar2: gambar7b,
    kategori: 'Profesi',
    warna: 'no',
    akhiran: 'nun-01',
    size: ['S', 'M', 'L', 'XL'],
  },
  {
    nama: 'Osakana Neko',
    harga: '80000',
    gambar1: gambar8a,
    gambar2: gambar8b,
    kategori: 'Anime',
    warna: 'no',
    akhiran: 'osakana-01',
    size: ['S', 'M', 'L', 'XL'],
  },
  {
    nama: 'Pakaian Siswa',
    harga: '140000',
    gambar1: gambar17a,
    gambar2: gambar17b,
    kategori: 'Profesi',
    warna: 'no',
    akhiran: 'siswa-01',
    size: ['S', 'M', 'L', 'XL'],
  },
  {
    nama: 'Mash Kyrielight',
    harga: '140000',
    gambar1: gambar9a,
    gambar2: gambar9b,
    kategori: 'Anime',
    warna: 'no',
    akhiran: 'mash-01',
    size: ['S', 'M', 'L'],
  },
  {
    nama: 'Raiden Shogun',
    harga: '280000',
    gambar1: gambar10a,
    gambar2: gambar10b,
    kategori: 'Game Online',
    warna: 'no',
    akhiran: 'raiden-01',
    size: ['S', 'M', 'L'],
  },
  {
    nama: 'Kugisaki Nobara',
    harga: '160000',
    gambar1: gambar11a,
    gambar2: gambar11b,
    kategori: 'Anime',
    warna: 'no',
    akhiran: 'nobara-01',
    size: ['S', 'M', 'L', 'XL'],
  },
  {
    nama: 'Nazuna Nanakusa',
    harga: '150000',
    gambar1: gambar12a,
    gambar2: gambar12b,
    kategori: 'Anime',
    warna: 'no',
    akhiran: 'nazuna-01',
    size: ['S', 'M', 'L'],
  },

  {
    nama: 'Yotsuba Nakano',
    harga: '130000',
    gambar1: gambar15a,
    gambar2: gambar15b,
    kategori: 'Anime',
    warna: 'no',
    akhiran: 'yotsuba-01',
    size: ['S', 'M', 'L'],
  },
  {
    nama: 'Zero Two',
    harga: '170000',
    gambar1: gambar16a,
    gambar2: gambar16b,
    kategori: 'Anime',
    warna: 'no',
    akhiran: 'zerotwo-01',
    size: ['S', 'M', 'L', 'XL'],
  },
];

const getProducts = (count) => {
  // const max = produk.length - count;
  // const min = 0;
  // const start = Math.floor(Math.random() * (max - min) + min);
  // return produk.slice(start, start + count);
  return produk.slice(0, count);
};

const getProductByAkhiran = (akhiran) =>
  produk.find((x) => x.akhiran === akhiran);

const daftarDataProduk = {
  produk,
  getProducts,
  getProductByAkhiran,
};

export default daftarDataProduk;
