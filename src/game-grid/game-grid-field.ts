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

export enum SingleFieldColor {
    EMPTY = 'white',
    TARGET = 'green',
    BOMB = 'black',
}

export default class GameGridField {
    private field: FieldType;

    constructor(field: FieldType) {
        this.field = field;
    }

    getType() {
        return this.field;
    }

    getPrimaryValue() {
        const fieldTypeString = FieldType[this.field];
        const [first] = fieldTypeString.split('_');
        return first.toLocaleLowerCase() as SingleFieldType;
    }
    getSecondaryValue() {
        const fieldTypeString = FieldType[this.field];
        const [, second] = fieldTypeString.split('_');
        return second.toLocaleLowerCase() as SingleFieldType;
    }
}
