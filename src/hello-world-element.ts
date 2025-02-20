import { LitElement,html } from "lit";
import { customElement, property } from 'lit/decorators.js';

@customElement('hello-world-element')
export class HelloWorldElement extends LitElement{
    protected render() {
        return html`Hello World Lit Element`;
    }
    
}