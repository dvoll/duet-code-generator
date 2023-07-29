import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { GameGrid } from './game-grid';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 */
@customElement('duet-game-grid')
export class DuetGameGrid extends LitElement {
    @property({ attribute: true })
    gameCode: string = '';

    /**
     * The number of times the button has been clicked.
     */
    @property({ type: Number })
    count = 0;

    @state()
    grid: GameGrid;

    @property({ type: Boolean })
    show: boolean = false;

    @property()
    site: string = 'A';

    constructor() {
        super();
        this.grid = new GameGrid(this.gameCode !== '' ? GameGrid.getValuesFromCode(this.gameCode) : undefined);
    }

    render() {
        return html`
            <slot></slot>
            <label for="code">Code</label>
            <input name="code" id="code" .value=${this.gameCode} @input=${this._onCodeChange} />
            <label for="site">Seite</label>
            <select name="site" id="site" .value=${this.site} @input=${this._onSiteSelect}>
                <option value="A">A</option>
                <option value="B">B</option>
            </select>
            <button type="submit" @click=${this._onClick}>Anzeigen</button>
            ${this.show
                ? html`
                      ${this.site === 'A'
                          ? html`
                                <div class="grid">
                                    ${this.grid
                                        .getAllFields()
                                        .map((field) => html`<span>${unsafeHTML(field.getPrimaryEmoji())}</span>`)}
                                </div>
                            `
                          : html`
                                <div class="grid">
                                    ${this.grid
                                        .getAllFields()
                                        .map((field) => html`<span>${unsafeHTML(field.getSecondaryEmoji())}</span>`)}
                                </div>
                            `}
                  `
                : ''}
            <pre>Card Code: ${this.grid.getCode()}</pre>
        `;
    }

    private _onClick() {
        if (this.gameCode !== '') {
            this.grid = new GameGrid(GameGrid.getValuesFromCode(this.gameCode));
        }
        this.show = true;
    }
    private _onCodeChange(event: InputEvent) {
        console.log('event', event);
        this.gameCode = (event.target as HTMLInputElement | undefined)?.value ?? '';
    }
    private _onSiteSelect(event: InputEvent) {
        console.log('event', event);
        this.site = (event.target as HTMLInputElement | undefined)?.value ?? '';
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
