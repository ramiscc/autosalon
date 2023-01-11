import styles from './footer.module.scss'
import Container from "../container";
import {icons} from "../../assets";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Container>
                <ul className={styles.footer__navbar}>
                    <li>Каталог авто</li>
                    <li>Авто с пробегом</li>
                    <li>Кредит и рассрочка</li>
                    <li>Спецпредложения</li>
                    <li>Такси в кредит</li>
                </ul>
                <hr/>
                <div className={styles.footer__menu}>
                    <div>
                        <h3>Каталог авто</h3>
                        <span>Kia</span>
                        <span>Hyundai</span>
                        <span>Skoda</span>
                        <span>Volkswagen</span>
                        <span>Toyota</span>
                        <span>Brilliance</span>
                    </div>
                    <div>
                        <span>Подробнее</span>
                        <span>Changen</span>
                        <span>Chery</span>
                        <span>CherryExeed</span>
                        <span>Chevrolet</span>
                        <span>Citroen</span>
                        <span>Datsun</span>
                    </div>
                    <div>
                        <span></span>
                        <span>Dongfeng</span>
                        <span>DW Hower</span>
                        <span>FAW</span>
                        <span>Ford</span>
                        <span>Foton</span>
                        <span>Geely</span>
                    </div>
                    <div>
                        <span></span>
                        <span>Great Wall</span>
                        <span>Haima</span>
                        <span>Haval</span>
                        <span>Honda</span>
                        <span>JAC</span>
                        <span>Lada</span>
                    </div>
                    <div>
                        <span></span>
                        <span>Lifan</span>
                        <span>Mazda</span>
                        <span>Mitsubishi</span>
                        <span>Nissan</span>
                        <span>Opel</span>
                        <span>Peugeot</span>
                    </div>
                    <div>
                        <span>Карта сайта</span>
                        <span>Ravon</span>
                        <span>Renault</span>
                        <span>SsangYong</span>
                        <span>Suzuki</span>
                        <span>UAZ</span>
                        <span>Zotye</span>
                    </div>
                    <div>
                        <span>Кредит и рассрочка</span>
                        <span>Экспресс-кредит</span>
                        <span>Семейный автомобиль</span>
                        <span>Первый автомобиль</span>
                        <span>Работникам медицины</span>
                        <span>Рассрочка</span>
                        <span>Trade-in</span>
                    </div>
                    <div>
                        <h3>Контакты</h3>
                        <div>
                            <div>
                                <img src={icons.phone} alt=""/>
                                <span>+7 (800) 551-94-31</span>
                                <span>+7 (800) 551-94-31</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer