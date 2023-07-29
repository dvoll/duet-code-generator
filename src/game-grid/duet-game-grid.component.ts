import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import litLogo from '../assets/lit.svg';
import viteLogo from '/vite.svg';
import { GameGrid } from './game-grid';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('duet-game-grid')
export class DuetGameGrid extends LitElement {
    /**
     * Copy for the read the docs hint.
     */
    @property()
    docsHint = 'Click on the Vite and Lit logos to learn more';

    @property({ attribute: true })
    gameCode: string | undefined;

    /**
     * The number of times the button has been clicked.
     */
    @property({ type: Number })
    count = 0;

    grid: GameGrid;

    constructor() {
        super();
        this.grid = new GameGrid(this.gameCode !== undefined ? GameGrid.getValuesFromCode(this.gameCode) : undefined);
    }

    render() {
        return html`
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src=${viteLogo} class="logo w-12 h-3" alt="Vite logo" />
                </a>
                <a href="https://lit.dev" target="_blank">
                    <img src=${litLogo} class="logo lit" alt="Lit logo" />
                </a>
            </div>
            <slot></slot>
            <div class="card">
                <button @click=${this._onClick} part="button">count is ${this.count}</button>
            </div>
            <p class="read-the-docs">${this.docsHint}</p>
            <div class="grid">
                ${this.grid.getAllFields().map((field) => html`<span>${unsafeHTML(field.getPrimaryEmoji())}</span>`)}
            </div>
            <div class="grid">
                ${this.grid.getAllFields().map((field) => html`<span>${unsafeHTML(field.getSecondaryEmoji())}</span>`)}
            </div>
        `;
    }

    private _onClick() {
        this.count++;
    }

    static styles = css`
        :host {
            max-width: 1280px;
            margin: 0 auto;
            padding: 2rem;
            text-align: center;
        }

        .logo {
            height: 6em;
            padding: 1.5em;
            will-change: filter;
            transition: filter 300ms;
        }
        .logo:hover {
            filter: drop-shadow(0 0 2em #646cffaa);
        }
        .logo.lit:hover {
            filter: drop-shadow(0 0 2em #325cffaa);
        }

        .card {
            padding: 2em;
        }

        .read-the-docs {
            color: #888;
        }

        ::slotted(h1) {
            font-size: 3.2em;
            line-height: 1.1;
        }

        a {
            font-weight: 500;
            color: #646cff;
            text-decoration: inherit;
        }
        a:hover {
            color: #535bf2;
        }

        button {
            border-radius: 8px;
            border: 1px solid transparent;
            padding: 0.6em 1.2em;
            font-size: 1em;
            font-weight: 500;
            font-family: inherit;
            background-color: #1a1a1a;
            cursor: pointer;
            transition: border-color 0.25s;
        }
        button:hover {
            border-color: #646cff;
        }
        button:focus,
        button:focus-visible {
            outline: 4px auto -webkit-focus-ring-color;
        }

        @media (prefers-color-scheme: light) {
            a:hover {
                color: #747bff;
            }
            button {
                background-color: #f9f9f9;
            }
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            border: 2px solid black;
            border-radius: 25px;
            margin-bottom: 2rem;
        }

        .grid > * {
            aspect-ratio: 1/1;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'duet-game-grid': DuetGameGrid;
    }
}
