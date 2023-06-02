import React from 'react';
import Image from "next/image";
import { FeaturedProductsProps } from "./FeaturedProductsProps"
import useEmblaCarousel from 'embla-carousel-react'

function FeaturedProduct({ productImage, productTitle }: FeaturedProductsProps) {
  return (
    <div className="featuredProduct min-w-0 items-center flex flex-col flex-[0_0_50%]">
      <div className="productImage">
        <Image src={productImage} width={200} height={200} alt="featured-product" className='w-auto' />
      </div>
      <h3 className="mt-2 productTitle text-[29px] text-primary font-EditorialLight">{productTitle}</h3>
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
  // {
  //   productImage: '/mask.svg',
  //   productTitle: 'The Best Mask'
  // },
  // {
  //   productImage: '/toner.svg',
  //   productTitle: 'The Best Toner'
  // },
  // {
  //   productImage: '/serum.svg',
  //   productTitle: 'The Best Serum'
  // },
]

export default function FeaturedProducts() {
  useEmblaCarousel.globalOptions = { loop: true }
  const [emblaRef] = useEmblaCarousel({ slidesToScroll: 1, align: 0.25, loop: true, inViewThreshold: 0.5, startIndex: 1 })

  return (
    <div className="featuredProducts py-16 text-center">
      <h2 className="text-[88px] text-primary font-EditorialLight">
        The <i>Best</i> Face
      </h2>
      <p className="font-EditorialLight text-[18px] text-primary -mt-4">
        Our favorite <i>face</i> products.
      </p>
      <div className="productsCarousel overflow-hidden max-w-[70%] mx-auto mt-20" ref={emblaRef}>
        <div className="container flex justify-between max-w-[inherit] items-baseline mx-auto">
          {featuredProductData.map((data, index) => (
            <FeaturedProduct
              key={index}
              {...data}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
