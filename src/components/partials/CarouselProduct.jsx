import React from 'react';
import { Carousel } from 'antd';


const CarouselProduct = () => (
  <Carousel autoplay arrows autoplaySpeed={3000} className="h-100">
    <div className="h-[500px] flex items-center justify-center bg-blue-700 text-white">
      <img src="https://intrigueme.ca/wp-content/uploads/2014/09/Blogs-Client-Success-Stories-1024x498.jpg" alt="Slide 1" className="object-cover w-full h-full rounded-lg shadow-lg" />
    </div>
    <div className="h-[500px] flex items-center justify-center bg-blue-700 text-white">
      <img src="https://elements-preview-images-0.imgix.net/2ab4951c-0b4d-4475-ae6d-b9e57e38e95a?auto=compress%2Cformat&w=1370&fit=max&s=1f798084da9b9bc40685958cba916c4d" alt="Slide 2" className="object-cover w-full h-full rounded-lg shadow-lg" />
    </div>
    <div className="h-[500px] flex items-center justify-center bg-blue-700 text-white">
      <img src="https://elements-preview-images-0.imgix.net/551e6eeb-8059-4d4c-b165-94444332f824?auto=compress%2Cformat&w=632&fit=max&s=3d6bff9ceb98e3d74b4d8261f8e2680e" alt="Slide 3" className="object-cover w-full h-full rounded-lg shadow-lg" />
    </div>
    <div className="h-[500px] flex items-center justify-center bg-blue-700 text-white">
      <img src="https://socinator.com/blog/wp-content/uploads/2024/01/carousel-post-example.webp" alt="Slide 4" className="object-cover w-full h-full rounded-lg shadow-lg" />
    </div>
  </Carousel>

);

export default CarouselProduct;
