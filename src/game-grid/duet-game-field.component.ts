import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { SingleFieldType } from './game-grid-field';

enum SingleFieldInvalidType {
    INVALID = 'invalid',
}
type SingleFieldTypeWithInvalid = SingleFieldType | SingleFieldInvalidType;

@customElement('duet-game-field')
export class DuetGameField extends LitElement {
    @property({ type: String })
    fieldType: SingleFieldTypeWithInvalid = SingleFieldType.EMPTY;

    render() {
        return (
            this.fieldType &&
            html`<span style="background-color: ${DuetGameField.getColor(this.fieldType)}"
                >${unsafeHTML(DuetGameField.getEmoji(this.fieldType))}</span
            >`
        );
    }

    private static getEmoji(field: SingleFieldTypeWithInvalid) {
        switch (field) {
            case SingleFieldType.EMPTY:
                return '';
            case SingleFieldType.TARGET:
                return '&#9989;';
            case SingleFieldType.BOMB:
                return '&#x1F4A3;';

            default:
                return '&#128683;';
        }
    }

    private static getColor(field: SingleFieldTypeWithInvalid) {
        switch (field) {
            case SingleFieldType.EMPTY:
                return 'rgba(215 198 167 / 0.5)';
            case SingleFieldType.TARGET:
                return 'hsl(120 70% 70% / .5)';
            case SingleFieldType.BOMB:
                return 'hsl(0 0% 30% / .5)';
            default:
                return 'rgba(0 0 0, 0)';
        }
    }

    static styles = css`
        :host {
            display: contents;
        }
        span {
            place-self: stretch;
            aspect-ratio: 3/2;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            font-size: 1.5rem;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'duet-game-field': DuetGameField;
    }
}
