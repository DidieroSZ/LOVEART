import { LitElement, html, css } from "lit-element";
import { unsafeCSS } from "lit-element";

/* --- STYLES --- */
import generalStyles from '../styles/generalStyles.css?inline';
/* --- STYLES --- */

/* --- COMPONENTS --- */
import '../components/counter-component.js';
import '../components/letter-component.js';
import '../views/museum-view.js';
/* --- COMPONENTS --- */


export class HomePage extends LitElement {

    static properties = {

    };

    constructor(){
        super();

    }

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
    ]


    render(){
        return html`
            <main class="main-container d-flexx"> 
                <section class="love-container d-flexx d-col">
                    <letter-component></letter-component>
                    <counter-component .fecha="${'2023-10-10'}"></counter-component>
                    <museum-view></museum-view>
                </section>
            </main>
        `;
        
    };
}
customElements.define('home-page', HomePage);
