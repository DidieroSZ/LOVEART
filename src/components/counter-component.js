import { LitElement, html, css } from "lit-element";
import { unsafeCSS } from "lit-element";
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

import { differenceInDays } from "date-fns";

/* --- STYLES --- */
import generalStyles from '../styles/generalStyles.css?inline';
import counterStyles from '../styles/counterStyles.css?inline';
/* --- STYLES --- */

export class CounterComponent extends LitElement {

    static properties = {
        fecha: { type: String },
        format: { type: String },
        segundos: { type: Number }
    };

    constructor(){
        super();
        this.fecha = '';
        this.format = '';
        this.segundos = 0;
    }

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(counterStyles)}`,
    ]

    firstUpdated(){
        setInterval(() => {
            this._secondsCounter();
        }, 1000);
    }

    render(){
        return html`
            <div class="counter-container general-container d-flexx d-col">
                <p>Amando cada parte de tí desde hace: </p>
                <p class="counter-text">
                    ${this._dateCounter(this.fecha)}
                </p>
            </div>
        `;
        
    };

    _dateCounter(dateParam){
        const dateNow = new Date();
        const dateStart = new Date(dateParam);
        const hoursNow = dateNow.getHours();
        const minutesNow = dateNow.getMinutes();
        const secondsNow = dateNow.getSeconds();

        const days = differenceInDays(dateNow, dateStart);

        let formato = `
                <span class="number-font">${days}</span> días
                <span class="number-font">${hoursNow}</span> horas
                <span class="number-font">${minutesNow}</span> minutos
                <span class="number-font">${secondsNow}</span> segundos
            `;
        return html`${unsafeHTML(formato)}`;
    }

    _secondsCounter(){
        
        if (this.segundos > 60) {
            this.segundos = 0;
        }
        else{
            this.segundos++;
        }
    }
}
customElements.define('counter-component', CounterComponent);
