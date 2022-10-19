import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import Home from '../pages/Home';
import Kategori from '../pages/Kategori';
import Keranjang from '../pages/Keranjang';
import Footer from './Footer';
import DetailProduk from '../pages/DetailProduk';
import Membership from '../pages/Membership';

export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

const Kerangka = () => {
  const [dataKeranjang, setDataKeranjang] = React.useState([]);

  return (
    <BrowserRouter>
      <Navbar />

      <ThemeContext.Provider value={dataKeranjang}>
        <ThemeUpdateContext.Provider value={setDataKeranjang}>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route
              exact
              path='/detailproduk/:akhiran'
              element={<DetailProduk />}
            />
            <Route exact path='/keranjang' element={<Keranjang />} />
            <Route exact path='/kategori' element={<Kategori />} />
            <Route exact path='/membership' element={<Membership />} />
          </Routes>
        </ThemeUpdateContext.Provider>
      </ThemeContext.Provider>

      <Footer />
    </BrowserRouter>
  );
};

export default Kerangka;
