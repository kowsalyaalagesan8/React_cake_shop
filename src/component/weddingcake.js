import React, { Component } from 'react';
import F from '../image/wed1.jpg'
import G from '../image/wed9.jpg'
import H from  '../image/wed3.jpg'
import I from '../image/wed4.jpg'
import J from '../image/wed5.jpg'
import K from '../image/wed6.jpg'
import L from  '../image/wed11.jpg'
import M from '../image/wed4.jpg'

import { Link } from 'react-router-dom';

const initialData = [
    {
        id: 1,  
        image1: F,
        name: "Cake 1",
        price: "1100"
    },
    {
        id: 2,
        image1: G,
        name: "Cake 2",
        price: "1200"
    },

    {
        id: 3,
        image1: H,
        name: "Cake 2",
        price: "1500"
    },
    {
        id: 4,
        image1: I,
        name: "Cake 2",
        price: "1500"
    },
    {
        id: 5,
        image1: J,
        name: "Cake 2",
        price: "2000"
    },
    {
        id: 6,
        image1: K,
        name: "Cake 2",
        price: "30000"
    },
    {
        id: 7,
        image1: L,
        name: "Cake 2",
        price: "3600"
    },
    {
        id: 8,
        image1: M,
        name: "Cake 2",
        price: "2468"
    },
];

class Weddingcake extends Component {
    state = {
        searchQuery: '',
        listdata: initialData
    };

    render() {
        const { listdata } = this.state;

        return (
            <div>
                <div className='img2' style={{ display: "grid", gridTemplateColumns: "300px 300px 300px 300px", gridGap: "60px", justifyContent:"space-evenly"}}>
                    {listdata.map((item) => (
                        <div key={item.id}>
                      <img src={item.image1} className="wedimg1"  />
                       <div className="wedcake_abt">
                         <p>Price: {item.price}</p>
                         <button className="order-button">
    <Link className="" to={"/order/"}>Order</Link></button>                               </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Weddingcake
