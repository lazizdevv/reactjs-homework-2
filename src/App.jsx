// ----- cards --------------------------------------------
import FeatureCard from './components/card/feature-card'
import ProductCard from './components/card/prodect-card'
import Footer from './components/footer/footer'
// -----------------------------------------------------------

// ----- icons ---------------------------------------------
import StarIcon from "./assets/svg/star-icon";
import HeadPhone from "./assets/svg/head-phone";
import BookIcon from "./assets/svg/book-icon";
import LeftIcon from "./assets/svg/left-icon"
import RightIcon from "./assets/svg/right-icon"
// --------------------------------------------------------------

// ----- images --------------------------------------------------
import img1 from "./assets/images/1984.png";
import img2 from "./assets/images/rich-dad.png";
import img3 from "./assets/images/code-8.png";
import img4 from "./assets/images/daniel-qiz.png";
import img5 from "./assets/images/mark-mar-son.png";
import img6 from "./assets/images/ego-enemy.png";
import img7 from "./assets/images/ro-kit.png";
import img8 from "./assets/images/nick-lake.png";
import img9 from "./assets/images/mark-goldman.png";
// -------------------------------------------------------------------------

import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const App =function () {

  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    <ProductCard img={img1} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>,
    <ProductCard img={img2} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>,
    <ProductCard img={img3} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>,
    <ProductCard img={img4} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>,
    <ProductCard img={img5} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>,
    <ProductCard img={img1} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>,
    <ProductCard img={img2} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>,
    <ProductCard img={img3} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>,
    <ProductCard img={img4} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>,
    <ProductCard img={img5} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>,
    <ProductCard img={img1} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>,
    <ProductCard img={img2} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>,
    <ProductCard img={img3} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>,
    <ProductCard img={img4} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>,
    <ProductCard img={img5} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>,
    <ProductCard img={img1} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>,
    <ProductCard img={img2} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>,
    <ProductCard img={img3} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>,
    <ProductCard img={img4} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>,
    <ProductCard img={img5} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>,
  ];

  const groupSize = 1; // Number of items to show per slide
  const dotGroupSize = 4; // Number of dots to show per view

  const totalGroups = Math.ceil(items.length / groupSize);
  const totalDotGroups = Math.ceil(totalGroups / dotGroupSize);

  const updateCarousel = () => {
    const track = document.querySelector(".carousel-inner");
    const offset = -currentIndex * 150; // 150px is the width of each card
    track.style.transform = `translateX(${offset}px)`;
  };

  useEffect(() => {
    updateCarousel();
  }, [currentIndex]);

    // Calculate the current dot group index
    const currentDotGroupIndex = Math.floor(currentIndex / (groupSize * dotGroupSize));

    // Get the starting index for the current dot group
    const startDotIndex = currentDotGroupIndex * dotGroupSize;
    const endDotIndex = Math.min(startDotIndex + dotGroupSize, totalGroups);
  return (
    <>
    <main>
      <section id='feature' className='mb-[40px]'>
        <div className="container">
          <div className="feature flex flex-wrap lg:flex-nowrap justify-around">
            <FeatureCard/>
          </div>
        </div>
      </section>
      <section id="product">
        <div className="container">

        <div className="" id='new-adds'>
          <div className="flex justify-end ">
          <div className="flex justify-between  align-middle">
            <button id="prev" className="mr-7" onClick={() =>  setCurrentIndex(  currentIndex > 0 ? currentIndex - 1 : items.length - 1)}>
              <LeftIcon/>
            </button>

            <div className="carousel-pagination flex justify-center align-middle mt-2">
            {Array.from({ length: endDotIndex - startDotIndex }, (_, index) => (
              <span
                key={startDotIndex + index}
                className={`carousel-dot ${
                  Math.floor(currentIndex / groupSize) === startDotIndex + index ? "active w-3 h-3 rounded-[50%] mx-1 cursor-pointer" : "w-3 h-3 mx-1 bg-[#ccc] cursor-pointer rounded-[50%]"
                }`}
                onClick={() => setCurrentIndex((startDotIndex + index) * groupSize)}
                style={{backgroundColor:Math.floor(currentIndex / groupSize) === startDotIndex + index ? "#3f51b5" : "#ccc",}}
              ></span>
            ))}
          </div>
            <button
              id="next"
              className="ml-7"
              onClick={() =>
                setCurrentIndex(
                  currentIndex < items.length - 1 ? currentIndex + 1 : 0
                )
              }
            >
              <RightIcon/>
              
            </button>
          </div>
          
          </div>

          <h1 id="book-type" className='text-primaryText2 font-cairo font-[600] text-[32px]  text-center md:text-left leading-[40px] mb-[32px]'>Янги қўшилганлар</h1>
        
          <div className="carousel relative overflow-hidden">
            <div className="carousel-inner flex gap-3 sm:gap-6 justify-around transition ease duration-300 transform">
              {items.map((item, index) => (
                <div className="carousel-item " key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
          

          <h1 id="book-type" className='text-primaryText2 font-cairo font-[600] text-[32px] text-center md:text-left leading-[40px] mb-[32px]'>Аудио китоблар</h1>
          <div id="audio-books" className='flex md:justify-between justify-center gap-[24px] mb-[64px] flex-wrap md:flex-nowrap'>
            <ProductCard img={img6} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>} hidden={true}/>
            <ProductCard img={img7} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>} hidden={true}/>
            <ProductCard img={img5} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>} hidden={true}/>
            <ProductCard img={img8} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>} hidden={true}/>
            <ProductCard img={img9} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>} hidden={true}/>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  )
}

export default App