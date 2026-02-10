import { LitElement, html, css } from "lit-element";
import { unsafeCSS } from "lit-element";
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../styles/generalStyles.css?inline';
import museumStyles from '../styles/museumStyles.css?inline';
/* --- STYLES --- */

import img01 from '../media/img-01.jpeg';
import img02 from '../media/img-02.jpeg';
import img03 from '../media/img-03.jpeg';
import img04 from '../media/img-04.jpeg';
import img05 from '../media/img-05.jpeg';
import img06 from '../media/img-06.jpeg';

import prueba from '../media/prueba.png';

export class MuseumView extends LitElement {

    static properties = {
        fecha: { type: String },
    };

    constructor(){
        super();
        this.fecha = '';
    }

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(museumStyles)}`,
    ]

    render(){
        return html`
            <aside class="museum-container general-container d-flexx d-row">

                <div class="container-photo frame01">
                    <figure class="mask-photo">
                        <img class="photo" src="${img05}">
                    </figure>
                    <span class="frame-photo"></span>
                </div>

                <div class="container-photo frame02">
                    <figure class="mask-photo">
                        <img class="photo" src="${img01}">
                    </figure>
                    <span class="frame-photo"></span>
                </div>

                <div class="container-photo frame03">
                    <figure class="mask-photo">
                        <img class="photo" src="${img04}">
                    </figure>
                    <span class="frame-photo"></span>
                </div>

                <div class="container-photo frame04">
                    <figure class="mask-photo">
                        <img class="photo" src="${img03}">
                    </figure>
                    <span class="frame-photo"></span>
                </div>

                <div class="container-photo frame05">
                    <figure class="mask-photo">
                        <img class="photo" src="${img06}">
                    </figure>
                    <span class="frame-photo"></span>
                </div>

            </aside>
        `;
    };

}
customElements.define('museum-view', MuseumView);
