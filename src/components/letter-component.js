import { LitElement, html, css } from "lit-element";
import { unsafeCSS } from "lit-element";
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../styles/generalStyles.css?inline';
import letterStyles from '../styles/letterStyles.css?inline';
/* --- STYLES --- */

import flores from '../media/flores2.png';

export class LetterComponent extends LitElement {

    static properties = {
        fecha: { type: String },
    };

    constructor(){
        super();
        this.fecha = '';
    }

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(letterStyles)}`,
    ]

    render(){
        return html`
            <div class="letter-container general-container d-flexx d-col">
                <p class="letter-text cursive-font ">
                    Desde que estás conmigo, los días cuentan distinto. <br>
                    No sé amar a medias, y contigo lo entendí todo. <br>
                    Si algún día faltaras, no sabría cómo seguir… <br>
                    por eso hoy y siempre, te elijo. <br> <br>
                    Para: <span class="ballet">Mariana Segura.</span>
                    
                </p>

                <img class="flores" src="${flores}">
            </div>
        `;
        
    };

}
customElements.define('letter-component', LetterComponent);
