import Link3 from "../router/link";
import { Link as RouterLink, Outlet } from 'react-router-dom';
import Image from '../image/about_bg.jpg'
import A from '../image/Cakebanner.png'

function Cake() {
    return (
        <>
        <div>
                <Link3 />
            </div>
            

            <div className="cakediv">
                <div className="banner1">
                   
                </div>
                <div className="abt1">
                <h1>Cake!!</h1>
            </div>

                <div>
                    <nav>
                        <ul className='link3'>
                            <li className="l3">
                                <RouterLink to="favouritecake" className="r2">Favourite Cake</RouterLink>
                            </li>
                            <li className="l3">
                                <RouterLink to="weddingcake" className="r2">Wedding Cake</RouterLink>
                            </li>
                            <li className="l3">
                                <RouterLink to="birthdaycake" className="r2">Birthday Cake</RouterLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <Outlet />
                </div>
            </div>
        </>

    );
}

export default Cake;
