import Energy from '../../assets/svg/energy-icon'
import Approve from '../../assets/svg/approve-icon'
import LikeIcon from '../../assets/svg/like-icon'
import Star from '../../assets/svg/star'






const FeatureCard = function() {
    return(
        <>
            <div id='fast-delivery' className=" w-[100%] sm:w-[322px] sm:h-[110px] flex align-middle  gap-5 py-[26px] px-[15px] border-spacing-5 text-center">
                <span className=''><Energy/></span>
                <div className="">
                    <h1 className="w-[125px] mb-2 font-cairo text-[15.93px] font-bold leading-[19.11px] tracking-normal text-left">Тезкор етказиш</h1>
                    <p className="w-[100%] h-[30px]  text-[#AAAAAA] font-open-sans text-[11.15px] font-normal leading-[15px] tracking-normal text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
            </div>

            <div id='' className=" w-[100%] sm:w-[322px] sm:h-[110px]  flex align-middle gap-5 py-[26px] px-[15px] border-spacing-5 text-center">
                <span className=''><Approve/></span>
                <div className="">
                    <h1 className="w-[125px] mb-2 font-cairo text-[15.93px] font-bold leading-[19.11px] tracking-normal text-left">Тўлов химояси</h1>
                    <p className="w-[100%]  text-[#AAAAAA] font-open-sans text-[11.15px] font-normal leading-[15px] tracking-normal text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
            </div>

            <div id='' className=" w-[100%] sm:w-[322px] sm:h-[110px] flex align-middle gap-5 py-[26px] px-[15px] border-spacing-5 text-center">
                <span className=''><LikeIcon/></span>
                <div className="">
                    <h1 className="w-[125px] mb-2 font-cairo text-[15.93px] font-bold leading-[19.11px] tracking-normal text-left">Юқори сифат</h1>
                    <p className="w-[100%] text-[#AAAAAA] font-open-sans text-[11.15px] font-normal leading-[15px] tracking-normal text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
            </div>

            <div id='' className=" w-[100%] sm:w-[322px] sm:h-[110px] flex align-middle gap-5 py-[26px] px-[15px] border-spacing-5 text-center">
                <span className=''><Star/></span>
                <div className="">
                    <h1 className="w-[125px] mb-2 font-cairo text-[15.93px] font-bold leading-[19.11px] tracking-normal text-left">Юқори сифат</h1>
                    <p className="w-[100%] text-[#AAAAAA] font-open-sans text-[11.15px] font-normal leading-[15px] tracking-normal text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
            </div>
        </>
    )
}

export default FeatureCard