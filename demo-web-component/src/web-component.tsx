import { h, render } from 'preact';
import { App } from './App';
import css from './style.css?inline';

const sheet = new CSSStyleSheet();
sheet.replaceSync(css);

class DemoWebComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    shadow.adoptedStyleSheets = [sheet];
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['displayName', 'startCount'];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute('displayName') || 'Test';
    const count = this.getAttribute('startCount') || 0;
    render(
      <App
        displayName={name}
        startCount={count}
        onChangeCount={(value) => {
          this.dispatchEvent(
            new CustomEvent('onChangeCount', {
              detail: {count: value},
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
