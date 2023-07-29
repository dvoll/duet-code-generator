import GameGridField, { FieldType } from './game-grid-field';

export class GameGrid {
    private list: GameGridField[];

    static frequencyMapping: [type: FieldType, frequency: number][] = [
        [FieldType.EMPTY_EMPTY, 7],
        [FieldType.EMPTY_TARGET, 5],
        [FieldType.TARGET_EMPTY, 5],
        [FieldType.TARGET_TARGET, 3],
        [FieldType.TARGET_BOMB, 1],
        [FieldType.BOMB_TARGET, 1],
        [FieldType.EMPTY_BOMB, 1],
        [FieldType.BOMB_EMPTY, 1],
        [FieldType.BOMB_BOMB, 1],
    ];

    constructor(values: GameGridField[] = GameGrid.getGeneratedList()) {
        this.list = values;
    }

    getField(x: number = 0, yLine?: number) {
        if (yLine !== undefined) {
            const index = x * yLine;
            if (index >= this.list.length) {
                throw new Error('No grid field for position');
            }
            return this.list[index];
        }
        return this.list[x];
    }

    getAllFields() {
        return [...this.list];
    }
    getAllFieldsAsList() {
        return this.list.reduce<number[]>((prev, curr) => prev.concat([curr.getType()]), []);
    }
    getAllFieldsAsString() {
        return this.list.reduce((prev, curr) => prev + curr.getType(), '');
    }

    getCode() {
        const decimal = BigInt(this.getAllFieldsAsString());
        // const decimal = BigInt(parseInt(this.list.join(''), 10));
        console.log('decimal', decimal);
        const base36String = decimal.toString(36);
        console.log('base36String', base36String);
        return base36String;
    }

    private static setFieldOnRandomPosition(list: GameGridField[], fieldType: FieldType) {
        const realEmptyFields = list.reduce<number[]>((prev, curr, currIndex) => {
            return curr === undefined ? prev.concat([currIndex]) : prev;
        }, []);
        const realEmptyFieldIndex = realEmptyFields[GameGrid.getRandomNumber(realEmptyFields.length - 1)];
        const newList = [...list];
        newList[realEmptyFieldIndex] = new GameGridField(fieldType);
        return newList;
    }

    static getGeneratedList() {
        let list = new Array(25).fill(undefined) as GameGridField[];
        GameGrid.frequencyMapping.forEach((map) => {
            for (let i = 0; i < map[1]; i++) {
                list = GameGrid.setFieldOnRandomPosition(list, map[0]);
            }
        });
        return list;
    }

    static getValuesFromCode(code: string) {
        const decimalCode = GameGrid.convertBaseStringToBigInt(code);
        let stringCode = decimalCode.toString();
        while (stringCode.length < 25) {
            stringCode = `0${stringCode}`;
        }
        const list = [];
        for (let i = 0; i < stringCode.length; i++) {
            list.push(new GameGridField(parseInt(stringCode[i], 10)));
        }
        return list;
    }

    private static getRandomNumber(max = 10) {
        return Math.round(Math.random() * max);
    }

    private static convertBaseStringToBigInt(value: string, radix: number = 36) {
        return Array.from(value).reduce((r, v) => r * BigInt(radix) + BigInt(parseInt(v, radix)), 0n);
    }
}
