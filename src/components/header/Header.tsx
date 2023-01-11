import styles from './header.module.scss'
import Container from "../container";
import {useState} from "react";
import {icons} from "../../assets";
import Button from "../UI/button";

const Header = () => {

    const [activeBurger, setActiveBurger] = useState(false)

    return (
        <div className={styles.header}>
            <div className={styles.header__address}>
                <Container>
                    <div className={styles.header__address__row}>
                        <div className={styles.header__address__col}>
                            <svg width="15" height="17" viewBox="0 0 15 17" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.07143 0C8.94689 0 10.7455 0.745023 12.0717 2.07117C13.3978 3.39732 14.1429 5.19597 14.1429 7.07143C14.1429 9.999 11.9114 13.0664 7.54286 16.3429C7.40685 16.4449 7.24143 16.5 7.07143 16.5C6.90142 16.5 6.736 16.4449 6.6 16.3429C2.23143 13.0664 0 9.999 0 7.07143C0 5.19597 0.745023 3.39732 2.07117 2.07117C3.39732 0.745023 5.19597 0 7.07143 0ZM7.07143 1.57143C5.61274 1.57143 4.21379 2.15089 3.18234 3.18234C2.15089 4.21379 1.57143 5.61274 1.57143 7.07143C1.57143 9.20071 3.23557 11.6569 6.63771 14.3833L7.07143 14.7259L7.50514 14.3833C10.9073 11.6569 12.5714 9.20071 12.5714 7.07143C12.5714 5.61274 11.992 4.21379 10.9605 3.18234C9.92907 2.15089 8.53012 1.57143 7.07143 1.57143ZM7.07143 5.5C7.4882 5.5 7.8879 5.66556 8.1826 5.96026C8.4773 6.25496 8.64286 6.65466 8.64286 7.07143C8.64286 7.4882 8.4773 7.8879 8.1826 8.1826C7.8879 8.4773 7.4882 8.64286 7.07143 8.64286C6.65466 8.64286 6.25496 8.4773 5.96026 8.1826C5.66556 7.8879 5.5 7.4882 5.5 7.07143C5.5 6.65466 5.66556 6.25496 5.96026 5.96026C6.25496 5.66556 6.65466 5.5 7.07143 5.5Z"
                                    fill="#737373"/>
                            </svg>
                            <span className={styles.header__address__text}>Россия, Москва, 38КМ МКАД, 6Бс1</span>
                        </div>
                        <div className={styles.header__address__col}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8 0C3.5888 0 0 3.5888 0 8C0 12.4112 3.5888 16 8 16C12.4112 16 16 12.4112 16 8C16 3.5888 12.4112 0 8 0ZM8 14.4C4.4712 14.4 1.6 11.5288 1.6 8C1.6 4.4712 4.4712 1.6 8 1.6C11.5288 1.6 14.4 4.4712 14.4 8C14.4 11.5288 11.5288 14.4 8 14.4Z"
                                    fill="#737373"/>
                                <path d="M8.79922 4H7.19922V8.8H11.9992V7.2H8.79922V4Z" fill="#737373"/>
                            </svg>
                            <span className={styles.header__address__text}>Время работы: c 08:00 до 21:00</span>
                        </div>
                        <div className={styles.header__address__col}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.5043 4.62488C15.5125 -0.000152887 9.40435 -1.37516 4.6674 1.49986C0.0551144 4.37488 -1.44076 10.6249 1.55099 15.25L1.80031 15.625L0.803054 19.375L4.54275 18.375L4.91672 18.625C6.53725 19.5 8.28244 20 10.0276 20C11.8975 20 13.7673 19.5 15.3879 18.5C20.0002 15.5 21.3714 9.37492 18.5043 4.62488ZM15.8865 14.25C15.3879 15 14.7646 15.5 13.892 15.625C13.3934 15.625 12.7701 15.875 10.2769 14.875C8.15779 13.875 6.4126 12.2499 5.16603 10.3749C4.41809 9.49992 4.04412 8.37491 3.91947 7.2499C3.91947 6.2499 4.29344 5.37489 4.91672 4.74988C5.16603 4.49988 5.41534 4.37488 5.66466 4.37488H6.28794C6.53725 4.37488 6.78656 4.37488 6.91122 4.87488C7.16053 5.49989 7.78382 6.9999 7.78382 7.1249C7.90847 7.2499 7.90847 7.49991 7.78382 7.62491C7.90847 7.87491 7.78382 8.12491 7.65916 8.24991C7.5345 8.37491 7.40985 8.62491 7.28519 8.74991C7.03588 8.87492 6.91122 9.12492 7.03588 9.37492C7.5345 10.1249 8.15779 10.8749 8.78107 11.4999C9.52901 12.1249 10.2769 12.6249 11.1495 12.9999C11.3989 13.1249 11.6482 13.1249 11.7728 12.8749C11.8975 12.6249 12.5208 11.9999 12.7701 11.7499C13.0194 11.4999 13.144 11.4999 13.3934 11.6249L15.3879 12.6249C15.6372 12.7499 15.8865 12.8749 16.0111 12.9999C16.1358 13.3749 16.1358 13.875 15.8865 14.25Z"
                                    fill="#737373"/>
                            </svg>
                            <span className={styles.header__address__text}>WhatsApp</span>
                        </div>
                    </div>
                </Container>
            </div>

            <Container>
                <div className={styles.header__navbar}>
                    <div className={styles.header__navbar__burger}>
                        <span></span>
                    </div>
                    <img src={icons.logo} alt=""/>
                    <div className={styles.header__navbar__line}></div>
                    <div className={styles.header__navbar__experience}>
                        <span className={styles.header__navbar__redText}>10 лет</span>
                        <span>превосходим <br/> ваши ожидания</span>
                    </div>
                    <ul className={styles.header__navbar__menu}>
                        <li>Подбор авто</li>
                        <li>О компании</li>
                        <li>Техцентр</li>
                        <li>Отзывы</li>
                        <li>Контакты</li>
                    </ul>
                    <div className={styles.header__navbar__phone}>
                        <div>
                            <img src={icons.phone} alt=""/>
                            <h3>+7 (800) 551-94-31</h3>
                        </div>
                        <p>+7 (495) 292-18-67</p>
                    </div>
                    <Button>Обратный звонок</Button>
                </div>
                <ul className={styles.header__menu}>
                    <li>
                        <span>Каталог авто</span>
                        <img src={icons.down} alt=""/>
                    </li>
                    <li>
                        <span>Авто с пробегом</span>
                        <img src={icons.down} alt=""/>
                    </li>
                    <li>
                        <span>Кредит и рассрочка</span>
                        <img src={icons.down} alt=""/>
                    </li>
                    <li>
                        <span>Спецпредложения</span>
                        <img src={icons.down} alt=""/>
                    </li>
                    <li>
                        <span>Такси в кредит</span>
                        <img src={icons.down} alt=""/>
                    </li>
                    <li>
                        <img src={icons.favourites} alt=""/>
                        <img src={icons.vector} alt=""/>
                        <img src={icons.search} alt=""/>
                    </li>
                </ul>
            </Container>
        </div>
    )
}

export default Header