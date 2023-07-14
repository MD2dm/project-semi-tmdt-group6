
import PageHome from '../views/home';
import PageContact from '../views/contact';
import PageAbout from '../views/about';
import { Route, Routes } from 'react-router';
import PageSigUp from '../views/sigup';
import PageLogin from '../views/login';
import PageUserSell from '../views/usersell';
import PageCart from '../views/cart';
import PageCheckOut from '../views/checkout';
import Page404 from '../views/404';


const RouterPage = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<PageHome></PageHome>}></Route>
                <Route path="/contact" element={<PageContact></PageContact>}></Route>
                <Route path="/about" element={<PageAbout></PageAbout>}></Route>
                <Route path="/signup" element={<PageSigUp></PageSigUp>}></Route>
                <Route path="/login" element={<PageLogin></PageLogin>}></Route>
                <Route path="/usersell" element={<PageUserSell></PageUserSell>}></Route>
                <Route path="/cart" element={<PageCart></PageCart>}></Route>
                <Route path="/checkout" element={<PageCheckOut></PageCheckOut>}></Route>
                <Route path="*" element={<Page404></Page404>}></Route>
            </Routes>
        </div>
    );
};

export default RouterPage;