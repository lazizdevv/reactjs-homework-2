import Footer from './components/footer/footer'
import ProductCard from './components/card/prodect-card'


import StarIcon from "./assets/svg/star-icon";
import HeadPhone from "./assets/svg/head-phone";
import BookIcon from "./assets/svg/book-icon";


import img1 from "./assets/images/1984.png";
import img2 from "./assets/images/rich-dad.png";
import img3 from "./assets/images/code-8.png";
import img4 from "./assets/images/daniel-qiz.png";
import img5 from "./assets/images/mark-mar-son.png";
import img6 from "./assets/images/ego-enemy.png";
import img7 from "./assets/images/ro-kit.png";
import img8 from "./assets/images/nick-lake.png";
import img9 from "./assets/images/mark-goldman.png";

const App =function () {
  return (
    <>
    <main>
      <section id="product">
        <div className="container">
          <h1 id="book-type">Янги қўшилганлар</h1>
          <div id="new-adds" className='flex justify-between gap-[24px] mb-[64px]'>
            <ProductCard img={img1} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>
            <ProductCard img={img2} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>
            <ProductCard img={img3} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>
            <ProductCard img={img4} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>
            <ProductCard img={img5} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={<StarIcon/>} rating={"4.7"} phone={<HeadPhone/>} book={<BookIcon/>}/>
          </div>

          <h1 id="book-type">Аудио китоблар</h1>
          <div id="audio-books" className='flex justify-between gap-[24px] mb-[64px]'>
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