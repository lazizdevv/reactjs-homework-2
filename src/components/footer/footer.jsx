import FacebookIcon from "../../assets/svg/facebook-icon";
import YoutubeIcon from "../../assets/svg/youtube-icon";
import TikTokIcon from "../../assets/svg/tik-tok-icon";
import TelegramIcon from "../../assets/svg/telegram-icon";
import InstagramIcon from "../../assets/svg/instagram-icon";
import PayMeIcon from "../../assets/svg/pay-me-icon";
import HuMoIcon from "../../assets/svg/hu-mo-card-icon";
import UzCardIcon from "../../assets/svg/uz-card-icon";
import GooglePlayIcon from "../../assets/svg/google-play-icon";
import AppStoreIcon from "../../assets/svg/app-store-icon";

const Footer = () => {
    return(
        <>    
            <footer id="footer " className="bg-primarySoft">
                <div className="container">
                    <div className="link-box  flex md:justify-between md:h-[283px] flex-wrap gap-[40px] justify-center align-middle h-[auto]">
                        <ul className="box flex flex-col gap-[18px]">
                            <h1 className="type font-bold text-xl text-left leading-[37px]">Платформа хақида</h1>
                            <li className="list"><a href="#" className="link text-primarText  font-[400] text-[18px] text-left leading-[34px] transition-[0.5s]">Liber ўзи нима?</a></li>
                            <li className="list"><a href="#" className="link text-primarText  font-[400] text-[18px] text-left leading-[34px] transition-[0.5s]">Фойдаланиш шартлари</a></li>
                            <li className="list"><a href="#" className="link text-primarText  font-[400] text-[18px] text-left leading-[34px] transition-[0.5s]">Ёрдам</a></li>
                        </ul>

                        <ul className="box flex flex-col gap-[18px]">
                            <h1 className="type font-bold text-xl text-left leading-[37px]">Обуна хақида</h1>
                            <li className="list"><a href="#" className="link text-primarText  font-[400] text-[18px] text-left leading-[34px] transition-[0.5s]">Обуна бўлиш</a></li>
                            <li className="list"><a href="#" className="link text-primarText  font-[400] text-[18px] text-left leading-[34px] transition-[0.5s]">Қандай тўлаш</a></li>
                        </ul>

                        <ul className="box flex flex-col gap-[18px]">
                            <h1 className="type font-bold text-xl text-left leading-[37px]">Китоблар</h1>
                            <li className="list"><a href="#" className="link text-primarText  font-[400] text-[18px] text-left leading-[34px] transition-[0.5s]">Аудио китоблар</a></li>
                            <li className="list"><a href="#" className="link text-primarText  font-[400] text-[18px] text-left leading-[34px] transition-[0.5s]">Электрон китоблар</a></li>
                            <li className="list"><a href="#" className="link text-primarText  font-[400] text-[18px] text-left leading-[34px] transition-[0.5s]">Китоблар</a></li>
                        </ul>

                        <ul className="box flex flex-col gap-[18px]">
                            <h1 className="type font-bold text-xl text-left leading-[37px]">Мобил илова</h1>
                            <li className="list"><a href="#" className="link text-primarText  font-[400] text-[18px] text-left leading-[34px] transition-[0.5s]"><span className=""><GooglePlayIcon className="" alt="play-market-icon" /></span></a></li>
                            <li className="list"><a href="#" className="link text-primarText  font-[400] text-[18px] text-left leading-[34px] transition-[0.5s]"><span className=""><AppStoreIcon className="" alt="app-store-icon" /></span></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
                
            <footer id="footer-bottom" className="bg-secondary text-white">
                <div className="container">
                    <div className="bottom-box flex md:justify-between justify-center flex-wrap">
                        <div className="social-box mb-[25px] md:mb-0">
                            <h1 className="contact-type my-[12px] text-white  font-[300] text-[14px]  text-center md:text-left leading-[16px]">Ижтимоий тармоқлар</h1>
                            <ul className="icon-wrapper flex gap-[24px] ">
                                <li className="icon-list"><a href="#" className="icon-link"><FacebookIcon alt="icon-facebook" className="icon" /></a></li>
                                <li className="icon-list"><a href="#" className="icon-link"><YoutubeIcon alt="icon-youtube" className="icon" /></a></li>
                                <li className="icon-list"><a href="#" className="icon-link"><TikTokIcon alt="icon-tik-tok" className="icon" /></a></li>
                                <li className="icon-list"><a href="#" className="icon-link"><TelegramIcon alt="icon-telegram" className="icon" /></a></li>
                                <li className="icon-list"><a href="#" className="icon-link"><InstagramIcon alt="icon-instagram" className="icon" /></a></li>
                            </ul>
                        </div>

                        <div className="contact-box mb-[25px] md:mb-0">
                            <h1 className="contact-type my-[12px] text-white  font-[300] text-[14px] text-center md:text-left leading-[16px]">Боғланиш</h1>
                            <ul className="contact flex align-middle gap-[9px] ">
                                <li><a href="tel:+998902537753">+998 90 253 77 53</a></li>
                                <li><a href="#">support@liber.uz</a></li>
                            </ul>
                        </div>

                        <div className="contact-box mb-[25px] md:mb-0">
                            <h1 className="contact-type my-[12px] text-white  font-[300] text-[14px]  text-center md:text-left leading-[16px]">Биз қабул қиламиз</h1>
                            <ul className="pay-icon-box flex justify-between gap-[8px]">
                                <li className="pay-icon flex align-middle p-[8px 5px]"><PayMeIcon alt="pay-me-icon" /></li>
                                <li className="pay-icon flex align-middle p-[8px 5px]"><HuMoIcon alt="hu-mo-icon" /></li>
                                <li className="pay-icon flex align-middle p-[8px 5px]"><UzCardIcon alt="uz-card-icon" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
