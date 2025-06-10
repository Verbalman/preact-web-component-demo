import { h, render } from 'preact';
import Camera from '@3dlook/camera/src/Camera';

type Coordinates = {
  betaX: number;
  gammaY: number;
  alphaZ: number;
}

class CameraWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['type', 'isTableFlow', 'hardValidation'];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const type = this.getAttribute('type');
    const isTableFlow = this.getAttribute('isTableFlow') || false;
    const hardValidation = this.getAttribute('startCount');
    render(
      <>
        {type && (
          <Camera
            type={type}
            saveFront={(value: string) => {
              this.dispatchEvent(new CustomEvent('saveFront', {
                detail: { file: value },
                bubbles: true,
              }));
            }}
            saveSide={(value: string) => {
              this.dispatchEvent(new CustomEvent('saveSide', {
                detail: { file: value },
                bubbles: true,
              }));
            }}
            isTableFlow={isTableFlow}
            hardValidation={hardValidation}
            disableTableFlow={() => {
              this.dispatchEvent(new CustomEvent('disableTableFlow', {
                bubbles: true,
              }));
            }}
            turnOffCamera={() => {
              this.dispatchEvent(new CustomEvent('turnOffCamera', {
                bubbles: true,
              }));
            }}
            setDeviceCoordinates={(value: Coordinates) => {
              this.dispatchEvent(new CustomEvent('setDeviceCoordinates', {
                detail: { value },
                bubbles: true,
              }));
            }}
          />)}
      </>,
      this.shadowRoot
    );
  }
}

customElements.define('camera-web-component', CameraWebComponent);
