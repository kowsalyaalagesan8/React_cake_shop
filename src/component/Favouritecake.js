import React, { Component } from 'react';
import A from '../image/bf1.jpg'
import I from '../image/sb2.jpg'
import S from '../image/red vallet.jpg'
import H from '../image/sb4.jpg'
import U from '../image/White-Forest-Cake.jpeg'
import K from '../image/abt_cake1.jpg'
import O from '../image/bs5.jpg'
import W from '../image/wed8.jpg'
import { Link } from 'react-router-dom';


const initialData = [
    {
        id: 1,
        image1: A,
        name: "Cake 1",
        price: "208"
    },
    {
        id: 2,
        image1: I,
        name: "Cake 2",
        price: "300"
    },

    {
        id: 3,
        image1: S,
        name: "Cake 2",
        price: "120"
    },
    {
        id: 4,
        image1: U,
        name: "Cake 2",
        price: "130"
    },
    {
        id: 5,
        image1: H,
        name: "Cake 2",
        price: "220"
    },
    {
        id: 6,
        image1: K,
        name: "Cake 2",
        price: "100"
    },
    {
        id: 7,
        image1: O,
        name: "Cake 2",
        price: "270"
    },
    {
        id: 8,
        image1: W,
        name: "Cake 2",
        price: "200"
    },
];

class Favouritecake extends Component {
    state = {
        searchQuery: '',
        listdata: initialData
    };

    render() {
        const { listdata } = this.state;

        return (
            <div>
                <div className='img1' style={{ display: "grid", gridTemplateColumns: "300px 300px 300px 300px", gridGap: "60px", justifyContent: "space-evenly" }}>
                    {listdata.map((item) => (
                        <div key={item.id}>
                            <img src={item.image1} className="favimg1" />
                            <div className="cake_abt">
                                <p>Price: {item.price}</p>
                                <button className="order-button">
    <Link className="" to={"/order/"}>Order</Link>
</button>                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Favouritecake;
