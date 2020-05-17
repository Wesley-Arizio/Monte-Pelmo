import React from 'react';

import './style.css';
import  { FaFacebook, FaInstagram} from 'react-icons/fa';
import { Component } from 'react';

export default class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message:'',
        }
        this.handleInputSubmit = this.handleInputSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(e){
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.email]: e.target.value,
            [e.target.message]: e.target.value,
        })
    }
    
    handleInputSubmit(e){
        e.preventDefault();
        console.log(this.state.email, this.state.name);
    }
    render(){ 
        const { name, email, message } = this.state;
       
        return(
            <section className="container-contact">
                    <div className="contact-title">
                        <h3>Entre em contato conosco</h3>
                    </div>
                    <form className="form-contact" method="POST" onSubmit={this.handleInputSubmit}>
                        <div className="container-input">
                        <input type="text" name="name" value={name} placeholder="Digite seu nome" onChange={ this.handleInputChange}/>
                        </div>
                        <div className="container-input">
                        <input type="email" name="email" id="email" placeholder="Digite seu email" value={email} onChange={ this.handleInputChange}/>
                        </div>
                        <div className="container-input">
                            <textarea name="message" id="message" rows="10" placeholder="Digite sua mensagem" value={message} onChange={ this.handleInputChange}></textarea>
                        </div>
                        <div className="container-button">
                            <button type="submit" className="input-submit">Enviar</button>
                        </div>
                    </form>
                        <section className="container-media">
                            <div className="description">
                                <h4>Ou entre em contato pela nossas redes sociais</h4>
                            </div>
                            
                            
                            <div className="container-social-media">
                            <ul className="ul-social-media">
                                <li><FaFacebook size={20} className="icon-fb" /><span>@SorveteriaMontePelmo </span></li>
                                <li><FaInstagram size={20} className="icon-insta"/> <span>@SorveteriaMontepelmo</span></li>
                            </ul>
                            </div>
                        </section>
                </section>
        );
    }
}