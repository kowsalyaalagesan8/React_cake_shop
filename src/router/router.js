import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from "../component/about";
import Home3 from "../component/home3";
import Contact from "../component/contact";
import Order from "../component/order";
import Cake from "../component/cake";
import Favouritecake from "../component/Favouritecake";
import Birthdaycake from "../component/Birthdaycake";
import Weddingcake from "../component/weddingcake";

function Router1() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home3 />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/order" element={<Order />} />
                <Route path="/cake" element={<Cake />}>
                    <Route path="favouritecake" element={<Favouritecake />} />
                    <Route path="weddingcake" element={<Weddingcake />} />
                    <Route path="birthdaycake" element={<Birthdaycake />} />
                </Route>

            </Routes>
        </Router>
    );
}

export default Router1;
