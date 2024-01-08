import { LitElement, PropertyValues, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { GameGrid } from './game-grid';
import './duet-game-field.component';

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
            <div class="grid">
                ${this.grid
                    .getAllFields()
                    .map(
                        (field) =>
                            html`<duet-game-field
                                .fieldType=${this.isInvalid
                                    ? 'invalid'
                                    : this.side !== 'A'
                                    ? field.getPrimaryValue()
                                    : field.getSecondaryValue()}
                            ></duet-game-field>`
                    )}
            </div>
        `;
    }

    static styles = css`
        :host {
            text-align: center;
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            /* border: 2px solid black; */
            /* border-radius: 25px; */
            margin-bottom: 2rem;
            overflow: hidden;
            gap: 0.25rem;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'duet-game-grid': DuetGameGrid;
    }
}
