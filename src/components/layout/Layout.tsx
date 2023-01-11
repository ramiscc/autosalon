import Header from "../header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../footer/Footer";

const Layout = () => {
    return (
        <>
            <header>
                <Header/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Layout