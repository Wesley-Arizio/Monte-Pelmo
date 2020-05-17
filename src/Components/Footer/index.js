import React from  'react';

import './style.css';
import  { FaFacebook, FaInstagram} from 'react-icons/fa';
import  { FaLinkedin,  FaGithub} from 'react-icons/fa'

export default function Footer(){
    return(
        <footer className="container-footer">
            <div className="container-company">
                <div className="adress">
                Rua Brisamar, nº360 - Ingleses, Florianópolis/SC
                </div>
                <div className="media">
                    <ul>
                        <li>Nossas redes sociais</li>
                        <li><FaFacebook size={20} className="icon-fb" />@SorveteriaMontePelmo</li>
                        <li><FaInstagram size={20} className="icon-insta"/>@SorveteriaMontepelmo</li>
                    </ul>
                </div>
                <span>Venha nos visitar</span>
            </div>
            <div className="container-developer">
                <div className="developer">
                    <span>Developed By Wesley</span>
                    <div>
                        <FaGithub size={25} className="icon-developer"/>
                        <FaLinkedin size={25} className="icon-developer"/>
                    </div>
                </div>
            </div>
        </footer>
    );
}