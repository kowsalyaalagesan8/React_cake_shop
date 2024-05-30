import React, { Component } from 'react';
import Link3 from '../router/link';

import A from '../image/bf1.jpg';
import I from '../image/gg1.jpg';
import S from '../image/bf2.jpg';
import H from '../image/bir10.jpg';
import U from '../image/g6.jpg';
import O from '../image/gg6.jpg';
import K from '../image/about_cake3.jpeg';
import W from '../image/about_cake2.jpg';
import L from '../image/bs5.jpg';
import Y from '../image/bf3.jpg';
import S1 from  '../image/about_bg1.jpg'
import S2 from  '../image/Cakebanner.png'
import S3 from '../image/gg2.jpg'

const initialData = [
    { id: 1,
     image1: A, 
     imageName: 'Black forest' },

    { id: 2, 
    image1: I,
     imageName: 'White forest Cake' },

    { id: 3, 
    image1: S,
    imageName: 'Red velvet Cake' },

    { id: 4, 
    image1: H, 
    imageName: 'Butterscotch Cake' },

    { id: 5,
     image1: U,
    imageName: 'Chocolate Cake' },

    { id: 6, 
    image1: O, 
    imageName: 'Cream Cake' },

    { id: 7,
    image1: K,
    imageName: 'Banana Cake' },

    { id: 8,
     image1: Y,
    imageName: 'Apple Cake' },
    { id: 9, 
    image1: W,
     imageName: 'Apple Cake' },

    { id: 10,
    image1: L, 
    imageName: 'Apple Cake' },

    { id: 11,
        image1: S, 
        imageName: 'Apple Cake' },

        { id: 12,
            image1: I, 
            imageName: 'Apple Cake' },
];

class Contact extends Component {
    state = {
        searchQuery: '',
        filteredData: initialData,
        slideIndex: 0
    };

    componentDidMount() {
        this.showSlides(this.state.slideIndex);
    }

    plusSlides = (n) => {
        this.showSlides(this.state.slideIndex + n);
    }

    showSlides = (n) => {
        let slideIndex = n;
        const slides = document.getElementsByClassName("mySlides");
        if (n >= slides.length) { slideIndex = 0 }
        if (n < 0) { slideIndex = slides.length - 1 }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
        this.setState({ slideIndex });
    }

    handleInputChange = (event) => {
        const searchQuery = event.target.value;
        this.setState({ searchQuery }, this.filterData);
    };

    filterData = () => {
        const { searchQuery } = this.state;
        const filteredData = initialData.filter((item) =>
            item.imageName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        this.setState({ filteredData });
    };

    render() {
        const { searchQuery, filteredData } = this.state;

        return (
       

                <div>
                    <Link3 />
                    <div className="contact-container">
                <div className="slideshow-container">
                    <div className="mySlides fade">
                        <img src={S1} style={{ width: '100%' }} alt="Slide 1" />
                    </div>

                    <div className="mySlides fade">
                        <img src={S2} style={{ width: '100%' }} alt="Slide 2" />
                    </div>

                    <div className="mySlides fade">
                        <img src={S3} style={{ width: '100%' }} alt="Slide 3" />
                    </div>
                </div>









                    <div className="search-bar">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={this.handleInputChange}
                            placeholder="Search by image name"
                            className="search-input"
                        />
                    </div>

                    <div className="gallery2">
                        {filteredData.map((item) => (
                            <div key={item.id} className="gallery-item" >
                                <img src={item.image1} alt={item.imageName} className="gallery-image" />
                            </div>
                        ))}
                    </div>

                    {/* Next and previous buttons */}
                    <div className="slide-buttons">
                        <a className="prev" onClick={() => this.plusSlides(-1)}>❮</a>
                        <a className="next" onClick={() => this.plusSlides(1)}>❯</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
