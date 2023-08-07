import { LitElement, PropertyValues, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { GameGrid } from './game-grid';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/**
 * An example element.
 *
 */
@customElement('duet-game-grid')
export class DuetGameGrid extends LitElement {
    @property({ attribute: 'game-code' })
    gameCode: string = '';

    @property()
    side: string = 'A';

    @state()
    grid: GameGrid;

    @state()
    isInvalid: boolean = false;

    constructor() {
        super();
        this.grid = new GameGrid(this.gameCode !== '' ? GameGrid.getValuesFromCode(this.gameCode) : undefined);
    }

    willUpdate(changedProperties: PropertyValues<this>) {
        // only need to check changed properties for an expensive computation.
        if (changedProperties.has('gameCode')) {
            if (this.gameCode !== '') {
                const grid = new GameGrid(GameGrid.getValuesFromCode(this.gameCode));
                if (grid.isValid) {
                    this.grid = grid;
                    this.isInvalid = false;
                } else {
                    console.error('Invalid game code');
                    const invalidCodeEvent = new Event('invalid-game-code', {
                        bubbles: true,
                        composed: true,
                    });
                    this.dispatchEvent(invalidCodeEvent);
                    this.isInvalid = true;
                }
            } else {
                this.grid = new GameGrid();
                const newCodeEvent = new CustomEvent('new-game-code', {
                    detail: { code: this.grid.getCode() },
                    bubbles: true,
                    composed: true,
                });
                this.dispatchEvent(newCodeEvent);
            }
        }
    }

    render() {
        return html`
            ${this.side === 'A'
                ? html`
                      <div class="grid">
                          ${this.grid
                              .getAllFields()
                              .map(
                                  (field) =>
                                      html`<span
                                          >${this.isInvalid
                                              ? unsafeHTML('&#128683;')
                                              : unsafeHTML(field.getPrimaryEmoji())}</span
                                      >`
                              )}
                      </div>
                  `
                : html`
                      <div class="grid">
                          ${this.grid
                              .getAllFields()
                              .map(
                                  (field) =>
                                      html`<span
                                          >${this.isInvalid
                                              ? unsafeHTML('&#128683;')
                                              : unsafeHTML(field.getSecondaryEmoji())}</span
                                      >`
                              )}
                      </div>
                  `}
        `;
    }

    static styles = css`
        :host {
            text-align: center;
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            border: 2px solid black;
            border-radius: 25px;
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
