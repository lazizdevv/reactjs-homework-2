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
            <footer id="footer " className="">
                <div className="container">
                    <div className="link-box bg-primarySoft flex justify-between h-[283px] flex-wrap">
                        <ul className="box flex flex-col gap-[18px]">
                            <h1 className="type">Платформа хақида</h1>
                            <li className="list"><a href="#" className="link">Liber ўзи нима?</a></li>
                            <li className="list"><a href="#" className="link">Фойдаланиш шартлари</a></li>
                            <li className="list"><a href="#" className="link">Ёрдам</a></li>
                        </ul>

                        <ul className="box flex flex-col gap-[18px]">
                            <h1 className="type">Обуна хақида</h1>
                            <li className="list"><a href="#" className="link">Обуна бўлиш</a></li>
                            <li className="list"><a href="#" className="link">Қандай тўлаш</a></li>
                        </ul>

                        <ul className="box flex flex-col gap-[18px]">
                            <h1 className="type">Китоблар</h1>
                            <li className="list"><a href="#" className="link">Аудио китоблар</a></li>
                            <li className="list"><a href="#" className="link">Электрон китоблар</a></li>
                            <li className="list"><a href="#" className="link">Китоблар</a></li>
                        </ul>

                        <ul className="box flex flex-col gap-[18px]">
                            <h1 className="type">Мобил илова</h1>
                            <li className="list"><a href="#" className="link black"><span className=""><GooglePlayIcon className="" alt="play-market-icon" /></span></a></li>
                            <li className="list"><a href="#" className="link black"><span className=""><AppStoreIcon className="" alt="app-store-icon" /></span></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
                
            <footer id="footer-bottom" className="bg-secondary text-white">
                <div className="container">
                    <div className="bottom-box flex justify-between flex-wrap">
                        <div className="social-box">
                            <h1 className="contact-type">Ижтимоий тармоқлар</h1>
                            <ul className="icon-wrapper flex gap-[24px] ">
                                <li className="icon-list"><a href="#" className="icon-link"><FacebookIcon alt="icon-facebook" className="icon" /></a></li>
                                <li className="icon-list"><a href="#" className="icon-link"><YoutubeIcon alt="icon-youtube" className="icon" /></a></li>
                                <li className="icon-list"><a href="#" className="icon-link"><TikTokIcon alt="icon-tik-tok" className="icon" /></a></li>
                                <li className="icon-list"><a href="#" className="icon-link"><TelegramIcon alt="icon-telegram" className="icon" /></a></li>
                                <li className="icon-list"><a href="#" className="icon-link"><InstagramIcon alt="icon-instagram" className="icon" /></a></li>
                            </ul>
                        </div>

                        <div className="contact-box">
                            <h1 className="contact-type">Боғланиш</h1>
                            <ul className="contact flex align-middle gap-[9px]">
                                <li><a href="tel:+998902537753">+998 90 253 77 53</a></li>
                                <li><a href="#">support@liber.uz</a></li>
                            </ul>
                        </div>

                        <div className="contact-box">
                            <h1 className="contact-type">Биз қабул қиламиз</h1>
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
