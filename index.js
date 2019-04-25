import { render } from 'preact'

import App from './app'

import './polyfill'











class MyPreact extends HTMLElement {

	connectedCallback() {

		render(<App />, this)

	}

}






customElements.define('my-preact', MyPreact)

const child = document.createElement('my-preact')

document.querySelector('body').appendChild(child)
