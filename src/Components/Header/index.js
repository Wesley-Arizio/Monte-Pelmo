import React from 'react';
import './style.css';
import background from '../../assets/background.jpg'

export default function Header(){
    return(
    <section className="container-header">
        <header className="container">
            <img src={background} alt="background" />
        </header>
        <section className="container-phrases">
                <ul className="prhases-list">
                    <li className="prhase">
                        <h5>Confiável</h5>
                    </li>
                    <li className="prhase">
                        <h5>Familiar</h5>
                    </li>
                    <li className="prhase">
                        <h5>Autêntico</h5>
                    </li>
                    <li className="prhase">
                        <h5>Artesanal</h5>  
                    </li>
                </ul>
            </section>
    </section>

        
    );
}