import React, { Component } from 'react';
import A from '../image/bir2.jpg'
import I from '../image/bir3.jpg'
import S from  '../image/bir4.jpg'
import H from '../image/bir5.jpg'
import U from '../image/bir6.jpg'
import K from '../image/bir8.jpg'
import O from  '../image/bir 9.jpg'
import W from '../image/bir11.jpg'
import { Link } from 'react-router-dom';


const initialData = [
    {
        id: 1,  
        image1: A,
        name: "Cake 1",
        price: "200"
    },
    {
        id: 2,
        image1: I,
        name: "Cake 2",
        price: "180"
    },

    {
        id: 3,
        image1: S,
        name: "Cake 2",
        price: "190"
    },
    {
        id: 4,
        image1: H,
        name: "Cake 2",
        price: "110"
    },
    {
        id: 5,
        image1: U,
        name: "Cake 2",
        price: "120"
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
        price: "110"
    },
    {
        id: 8,
        image1: W,
        name: "Cake 2",
        price: "120"
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
                <div className='img3' style={{ display: "grid", gridTemplateColumns: "300px 300px 300px 300px", gridGap: "60px", justifyContent:"space-evenly"}}>
                    {listdata.map((item) => (
                        <div key={item.id}>
                      <img src={item.image1} className="birimg1"  />
                       <div className="bircake_abt">
                         <p>Price: {item.price}</p>
                         <button className="order-button">
    <Link className="" to={"/order/"}>Order</Link></button>                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Weddingcake
