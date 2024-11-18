import React from 'react'
import { BASE_API_URL } from '../../utils/CONSTANTS'
import { Carousel } from "flowbite-react";
export default function ImageSlider({images}) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {images.map((image,idx)=><img src={`${image}`} />)}
      </Carousel>
    </div>

  )
}
