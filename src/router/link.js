import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Image1 from '../image/Cakebanner.png'

function Link3() {
    return (
        <div>
            <nav>
                <ul className='link2'>
                    <li className="l2">
                        <Link to="/" className="r1">Home</Link>
                    </li>
                    <li className="l2">
                        <Link to="/about" className="r1">About</Link>
                    </li>
                    <li className="l2">
                        <Link to="/cake" className="r1">Cake</Link>
                    </li>
                   
                    <li className="l2">
                        <Link to="/contact" className="r1">Gallery</Link>
                    </li>
                    <li className="l2">
                        <Link to="/order" className="r1">Order</Link>
                    </li>
                </ul>
            </nav>

            <div>
            </div>
        </div>
    );
}

export default Link3;
