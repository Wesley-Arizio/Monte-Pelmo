import React from 'react';

import './style.css'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'

export default function gallery(){
    return(
        <section className="container-gallery">
        <div className="title-gallery">
            <h1>Veja nosso trabalho</h1>
        </div>
        <div className="gallery">
            <div className="container-image">
                <img src={img1} alt=""/>
            </div>
            <div className="container-image">
                <img src={img2} alt=""/>
            </div>
            <div className="container-image">
                <img src={img3} alt=""/>
            </div>
            <div className="container-image">
                <img src={img4} alt=""/>
            </div>
            <div className="container-image">
                <img src={img5} alt=""/>
            </div>
            <div className="container-image">
                <img src={img6} alt=""/>
            </div>
            <div className="container-image">
                <img src={img7} alt=""/>
            </div>
            <div className="container-image">
                <img src={img8} alt=""/>
            </div>
        </div>
    </section>  

    );
}