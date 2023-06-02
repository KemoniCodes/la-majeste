import React, { useCallback, useState } from 'react';
import Image from "next/image";
import { FeaturedProductsProps } from "./FeaturedProductsProps"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


function FeaturedProduct({ productImage, productTitle }: FeaturedProductsProps) {
  return (
    <div className="featuredProduct items-center flex flex-col">
      <div className="productImage">
        <Image src={productImage} width={200} height={200} alt="featured-product" className='w-auto' />
      </div>
      <h3 className="mt-4 productTitle text-[29px] text-primary font-EditorialLight">{productTitle}</h3>
    </div>
  )
}

const featuredProductData: FeaturedProductsProps[] = [
  {
    productImage: '/mask.svg',
    productTitle: 'The Best Mask'
  },
  {
    productImage: '/toner.svg',
    productTitle: 'The Best Toner'
  },
  {
    productImage: '/serum.svg',
    productTitle: 'The Best Serum'
  },
  {
    productImage: '/mask.svg',
    productTitle: 'The Best Mask'
  },
  {
    productImage: '/toner.svg',
    productTitle: 'The Best Toner'
  },
  {
    productImage: '/serum.svg',
    productTitle: 'The Best Serum'
  },
]

export default function FeaturedProducts() {
  return (
    <div className="featuredProducts py-16 text-center">
      <h2 className="text-[88px] text-primary font-EditorialLight">
        The <i>Best</i> Face
      </h2>
      <p className="font-EditorialLight text-[18px] text-primary -mt-4">
        Our favorite <i>face</i> products.
      </p>

      <Swiper navigation={true} modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={3}
        className="w-[85%] my-20">
        {featuredProductData.map((data, index) => (
          <SwiperSlide key={index}>
            <FeaturedProduct
              key={index}
              {...data}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
