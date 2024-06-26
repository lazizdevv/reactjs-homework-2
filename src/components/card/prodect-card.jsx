import BookIcon from "../../assets/svg/book-icon";
import HeadPhone from "../../assets/svg/head-phone";
import StarIcon from "../../assets/svg/star-icon";

const ProductCard = ({img,name,info,star,rating,phone,book,hidden}) => {
    return( 
        <>
            <div className="card w-[239px] h-[450px] mb-[20px]">
                <img id="book-img" src={img} alt="img" className="cursor-pointer w-[100%] mb-[18px]"/>  
                <h1 id="name" className="font-cairo text-primaryText font-bold text-xl text-left leading-[37px]">{name}</h1>
                <p id="info" className="font-sans text-primary font-bold text-[14px] text-left leading-[19px]">{info}</p>
                <div id="icon-panel" className="mt-[16px] flex justify-between align-middle">
                    <div id="icon-star" className="flex gap-[10px]">
                        <StarIcon src={star} alt="icon-star" />
                        <span id="rating">{rating}</span>
                    </div>
                    <div id="icon-button" className="flex gap-[21px]">
                        <HeadPhone src={phone} alt="icon-headphone" />
                        <BookIcon src={book} alt="icon-book" className={hidden ? 'hidden' : ''} />
                    </div>
                </div>
            </div>
        </>
    ) 
}

export default ProductCard;