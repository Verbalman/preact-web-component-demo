import { h, render } from 'preact';
import Camera from '@3dlook/camera/src/Camera';
import { BoolFromString, isValidJSON } from "./camera-web-component.utils";

interface Coordinates {
  betaX: number;
  gammaY: number;
  alphaZ: number;
}

class CameraWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
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
    const type = BoolFromString(this.getAttribute('type'));
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
            setDeviceCoordinates={(value: Coordinates) => this._emitEvent('setDeviceCoordinates', { value })}
          />)}
      </>,
      this.shadowRoot
    );
  }
}

customElements.define('camera-web-component', CameraWebComponent);
