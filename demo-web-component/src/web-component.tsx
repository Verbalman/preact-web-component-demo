import { h, render } from 'preact';
import { App } from './App';
import css from './style.css?inline';

class DemoWebComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = `<style>${css}</style>`;
		this.render();
	}

	static get observedAttributes() {
		return ['displayName', 'startCount'];
	}

	attributeChangedCallback() {
		this.render();
	}

	render() {
    console.log(this.getAttribute('displayName'));
		const name = this.getAttribute('displayName') || 'Test';
		const count = this.getAttribute('startCount') || 0;
		render(
      <App
        displayName={name}
        startCount={count}
        onChangeCount={(value) => {
          this.dispatchEvent(
            new CustomEvent('onChangeCount', {
              detail: { count: value },
              bubbles: true,
              composed: true,
            })
          );
        }}
      />,
      this.shadowRoot
    );
	}
}

customElements.define('demo-web-component', DemoWebComponent);
