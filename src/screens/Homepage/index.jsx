import React, { useEffect, useState } from 'react'
import ProductCard from './productCard'
import car1 from  "../../assets/car1.jpg"
import NewProductModal from '../NewProduct'
import ShowProductModal from '../ShowProduct'
import axios from "axios";
import { BASE_API_URL } from '../../utils/CONSTANTS'
export default function HomePage() {
  const userid = window.localStorage.getItem("userid")
  const [isnewproductOpen,OpenNewProductModel] = useState(false)
  const [isshowproduct,OpenShowProductModel] = useState(false)
  const [carData,setCarData] = useState([])
  const getCars = async()=>{
    try {
      const response = await axios.get(`${BASE_API_URL}/cars`, {
        params: { user_id: userid },
      });
      console.log('Cars:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching cars:', error.response.data);
      throw error;
    }
  }
  useEffect(()=>{
    
  },[])
  return (
    <>
    <div className='grid grid-cols-3 gap-y-8 m-10'>
      <ProductCard image = {car1} showProduct = {()=>OpenShowProductModel(!isshowproduct)} />
      <ProductCard image = {car1} showProduct = {()=>OpenShowProductModel(!isshowproduct)} />
      <ProductCard image = {car1} showProduct = {()=>OpenShowProductModel(!isshowproduct)} />
      <ProductCard image = {car1} showProduct = {()=>OpenShowProductModel(!isshowproduct)} />
      <ProductCard image = {car1} showProduct = {()=>OpenShowProductModel(!isshowproduct)} />
      <ProductCard image = {car1} showProduct = {()=>OpenShowProductModel(!isshowproduct)} />
      <ProductCard image = {car1} showProduct = {()=>OpenShowProductModel(!isshowproduct)} />
      <ProductCard image = {car1} showProduct = {()=>OpenShowProductModel(!isshowproduct)} />
      <ProductCard image = {car1} showProduct = {()=>OpenShowProductModel(!isshowproduct)} />
      <ProductCard image = {car1} showProduct = {()=>OpenShowProductModel(!isshowproduct)} />
    </div>
    
        <button
          class="sticky z-[49] bottom-7 left-[93%] text-white px-4 w-auto h-8 bg-blue-600 rounded-full hover:bg-blue-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
          onClick={()=>OpenNewProductModel(!isnewproductOpen)}
          >
          <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-4 h-4 inline-block mr-1">
            <path fill="#FFFFFF" d="M17.561,2.439c-1.442-1.443-2.525-1.227-2.525-1.227L8.984,7.264L2.21,14.037L1.2,18.799l4.763-1.01
                                    l6.774-6.771l6.052-6.052C18.788,4.966,19.005,3.883,17.561,2.439z M5.68,17.217l-1.624,0.35c-0.156-0.293-0.345-0.586-0.69-0.932
                                    c-0.346-0.346-0.639-0.533-0.932-0.691l0.35-1.623l0.47-0.469c0,0,0.883,0.018,1.881,1.016c0.997,0.996,1.016,1.881,1.016,1.881
                                    L5.68,17.217z"/>
          </svg>
          <span>Add</span>
        </button>
        <NewProductModal open={isnewproductOpen} setOpen={OpenNewProductModel} />
        <ShowProductModal open={isshowproduct} setOpen={OpenShowProductModel} image={car1} />
    </>
  )
}