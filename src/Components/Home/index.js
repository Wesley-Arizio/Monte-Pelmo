import React from 'react';
import  { MdKeyboardArrowDown } from 'react-icons/md';
import './style.css';
import background from '../../assets/background.jpg'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'

export default function Home(){
    return(
    <div className="home-container">
        
        <header className="container">
                <img src={background} alt="background"/>
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

        <section className="container-flavors">
                <div className="title-flavors">
                     <p>Sabores</p>
                </div>
            <div className="container-card-flavors">
                <div className="card-flavor">
                    <span className="type-flavor">
                        Base água
                        <MdKeyboardArrowDown size={20}/>
                    </span>
                    <ul className="list-flavors">
                        <li>Abacate</li>
                        <li>Abacaxi</li>
                        <li>Açaí</li>
                        <li>Amora</li>
                        <li>Butiá</li>
                        <li>Chocolate</li>
                        <li>Goiaba</li>
                        <li>Jabuticaba</li>
                        <li>Limão</li>
                        <li>Limão com Manjericão</li>
                        <li>Manga</li>
                        <li>Maracujá</li>
                        <li>Melancia</li>
                        <li>Melão</li>
                        <li>Morango</li>
                        <li>Pitanga</li>
                        <li>Uva</li>
                    </ul>
                </div>

                <div className="card-flavor">
                    <span className="type-flavor">
                        Base leite
                        <MdKeyboardArrowDown size={20}/>
                    </span>
                    <ul className="list-flavors">
                        <li>Amendoim</li>
                        <li>Ameixa Preta</li>
                        <li>Avelã</li>
                        <li>Banana</li>
                        <li>Brigadeiro</li>
                        <li>Café </li>
                        <li>Canela com Maçã</li>
                        <li>Cereja</li>
                        <li>Cheesecake</li>
                        <li>Chocolate Fondente (meio amargo)</li>
                        <li>Chocolate</li>
                        <li>Chocolate com Castanha </li>
                        <li>Chocolate com Laranja</li>
                        <li>Chocolate com Pimenta</li>
                        <li>Coco</li>
                        <li>Crocante</li>
                        <li>Crostatella</li>
                        <li>Creme Baunilha</li>
                        <li>Doce de Leite com Chocolate</li>
                        <li>Flocos</li>
                        <li>Floresta Negra</li>
                        <li>Gengibre Tropical</li>
                        <li>Iogurte com Damasco</li>
                        <li>Iogurte com Mel e Nozes</li>
                        <li>Iogurte com Mirtilo</li>
                        <li>Iogurte com Figo</li>
                        <li>Kinder</li>
                        <li>Leite Condensado</li>
                        <li>Menta com Chocolate</li>
                        <li>M.I.C (morango, iogurte e chocolate)</li>
                        <li>Milho Verde</li>
                        <li>Nozes</li>
                        <li>Papaia</li>
                        <li>Passas ao Rum</li>
                        <li>Perugino</li>
                        <li>Pistache</li>
                        <li>Rocher</li>
                        <li>Romeo e Giulieta</li>
                        <li>Tiramisù</li>
                        <li>Torta de Limão</li>
                        <li>Vinho com Frutas Vermelhas</li>
                    </ul>
                </div>

                <div className="card-flavor">
                    <span className="type-flavor">
                        Diet
                        <MdKeyboardArrowDown size={20}/>
                    </span>
                    <ul className="list-flavors">
                        <li>Banana</li>
                        <li>Butiá</li>
                        <li>Coco</li>
                        <li>Chocolate</li>
                        <li>Creme Baunilha</li>
                        <li>Iogurte com Mirtilo</li>
                        <li>Morango</li>
                        <li>Limão</li>
                        <li>Papaia</li>
                        <li>Uva</li>
                    </ul>
                </div>
            </div>

        </section>
        
        <section className="container-info">
                <div className="container-title__about ">
                    <h1>Sobre nós</h1>
                    <div className="border"></div>
                </div>
                <div className="container-text " >
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>  
                </div>
        </section>
        
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

    </div>
    );
}