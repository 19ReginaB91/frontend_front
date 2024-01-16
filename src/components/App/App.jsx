import React, { useEffect } from 'react'
import './main.css'
import { Route, Routes } from 'react-router-dom'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainPage from '../../pages/MainPage/MainPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFountPage';
import { useDispatch } from 'react-redux'
import ProductsPage from '../../pages/ProductsPage/ProductsPage';
import CategoriesPage from '../../pages/CategoriesPage/CategoriesPage';
import BasketPage from '../../pages/BasketPage/BasketPage';
import SingleProductPage from '../../pages/SingleProductPage/SingleProductPage';
import ScrollToTop from '../../helpers/ScrollToTop';
import { fetchCategories } from '../../store/slices/cateroriesSlice';
import { fetchProducts } from '../../store/slices/productsSlice';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {

  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchCategories())
    dispatch(fetchProducts())
  },[dispatch])

  return (
    <div>
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/categories' element={<CategoriesPage/>}/>
        <Route path='/categories/:categoryTitle/:categoryID' element={<ProductsPage/>}/>
        <Route path='/sales/:sales' element={<ProductsPage/>}/>
        <Route path='/products/all' element={<ProductsPage/>}/>
        <Route path='/product/:id' element={<SingleProductPage/>}/>
        <Route path='/basket' element={<BasketPage/>}/>
        <Route path='/*' element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;