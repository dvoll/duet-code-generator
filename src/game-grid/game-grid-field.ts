export enum FieldType {
    EMPTY_EMPTY = 0, // 7
    EMPTY_TARGET = 1, // 5
    TARGET_EMPTY = 2, // 5
    TARGET_TARGET = 3, // 3
    TARGET_BOMB = 4, // 1
    BOMB_TARGET = 5, // 1
    EMPTY_BOMB = 6, // 1
    BOMB_EMPTY = 7, // 1
    BOMB_BOMB = 8, // 1
}
export enum SingleFieldType {
    EMPTY = 'empty',
    TARGET = 'target',
    BOMB = 'bomb',
}

export default class GameGridField {
    private field: FieldType;

    constructor(field: FieldType) {
        this.field = field;
    }

    getPrimaryValue() {
        const fieldTypeString = FieldType[this.field];
        const [first] = fieldTypeString.split('_');
        return first.toLocaleLowerCase() as SingleFieldType;
    }
    getPrimaryEmoji() {
        return GameGridField.getEmoji(this.getPrimaryValue());
    }
    getSecondaryValue() {
        const fieldTypeString = FieldType[this.field];
        const [, second] = fieldTypeString.split('_');
        return second.toLocaleLowerCase() as SingleFieldType;
    }
    getSecondaryEmoji() {
        return GameGridField.getEmoji(this.getSecondaryValue());
    }

    getType() {
        return this.field;
    }

    private static getEmoji(field: SingleFieldType) {
        switch (field) {
            case SingleFieldType.EMPTY:
                return '&#x26AA;';
            case SingleFieldType.TARGET:
                return '&#9989;';
            case SingleFieldType.BOMB:
                return '&#x1F4A3;';

            default:
                return '-';
        }
    }
}
