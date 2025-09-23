import { h, render } from 'preact';
import Camera from '@3dlook-me/camera-rpv-client';
import css from '@3dlook-me/camera-rpv-client/dist/style.css?inline';
import { BoolFromString, isValidJSON } from "./camera-web-component.utils";

declare module 'preact/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'camera-web-component': JSX.HTMLAttributes<CameraWebComponent>;
    }
  }
}

const sheet = new CSSStyleSheet();
sheet.replaceSync(css);

interface Coordinates {
  betaX: number;
  gammaY: number;
  alphaZ: number;
}

class CameraWebComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.adoptedStyleSheets = [sheet];
  }

  private _emitEvent(name: string, detail?: Record<string, unknown>) {
    // Create a new event
    let event = new CustomEvent(name, {
      bubbles: true,
      cancelable: true,
      detail,
    });

    // Dispatch the event
    return this.dispatchEvent(event);
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    render(null, this.shadowRoot); // Unmount component
  }

  static get observedAttributes() {
    return ['type', 'isTableFlow', 'hardValidation'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal !== newVal) this.render();
  }

  render() {
    const type = this.getAttribute('type');
    const isTableFlow = BoolFromString(this.getAttribute('isTableFlow'));

    const hardValidation = isValidJSON(this.getAttribute('hardValidation'))
      ? JSON.parse(this.getAttribute('hardValidation'))
      : { front: null, side: null };

    render(
      <>
        {type && (
          <Camera
            type={type}
            saveFront={(value: string) => this._emitEvent('saveFront', { file: value })}
            saveSide={(value: string) => this._emitEvent('saveSide', { file: value })}
            isTableFlow={isTableFlow}
            hardValidation={hardValidation}
            disableTableFlow={() => this._emitEvent('disableTableFlow')}
            turnOffCamera={() => this._emitEvent('turnOffCamera')}
            onClickDone={() => this._emitEvent('onClickDone')}
            isFrontPhotoPoseValidated={(value: boolean) => this._emitEvent('isFrontPhotoPoseValidated', { isFrontPhotoPoseValidated: value })}
            isSidePhotoPoseValidated={(value: boolean) => this._emitEvent('isSidePhotoPoseValidated', { isSidePhotoPoseValidated: value })}
            setDeviceCoordinates={(value: Coordinates) => this._emitEvent('setDeviceCoordinates', { ...value })}
          />)}
      </>,
      this.shadowRoot
    );
  }
}

customElements.define('camera-web-component', CameraWebComponent);
