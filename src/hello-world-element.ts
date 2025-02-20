import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("hello-world-element") // Define the custom element
export class HelloWorldElement extends LitElement {
    @property({ type: String }) hello_str = "Hello World";
    eventList: string[] = [];
    constructor() {
        super();
    }

    private clickHandler(event: Event) {
        console.log("Button Clicked", event);
        this.eventList.push("Button Clicked " + event.type+" at "+new Date().toLocaleTimeString()); // Add the event to the list
        this.requestUpdate();
    };

    protected render() {
        return html`
      <h2>${this.hello_str}</h2>
      <button type="button" @click=${this.clickHandler.bind(this)}>Click Me</button>
        <ul>
            ${this.eventList.map((event) => html`<li>${event}</li>`)}   
        </ul>
    `;
    }

    // Disable shadow DOM (optional)
    protected createRenderRoot() {
        return this;
    }
}
