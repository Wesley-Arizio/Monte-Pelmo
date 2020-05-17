import React from 'react';

import './style.css';
import  { MdKeyboardArrowDown } from 'react-icons/md';

    
export default function Flavor(){
    return(
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
    );

}