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

export class GameGrid {
    // matrix: FieldType[][];
    // this.matrix = Array.from(Array(5), () => new Array(5));
    private list: FieldType[];

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

    constructor(code?: string) {
        this.list = new Array(25).fill(undefined);
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

    getCode() {
        const decimal = BigInt(parseInt(this.list.join(''), 10));
        console.log('decimal', decimal);
        const base36String = decimal.toString(36);
        console.log('base36String', base36String);
        return base36String;
    }

    generate() {
        this.list = new Array(25).fill(undefined);
        GameGrid.frequencyMapping.forEach((map) => {
            for (let i = 0; i < map[1]; i++) {
                this.setListField(map[0]);
            }
        });
    }

    private getFromCode() {}

    private setListField(fieldType: FieldType) {
        const realEmptyFields = this.list.reduce<number[]>((prev, curr, currIndex) => {
            return curr === undefined ? prev.concat([currIndex]) : prev;
        }, []);
        const realEmptyFieldIndex = realEmptyFields[this.getRandomNumber(realEmptyFields.length - 1)];
        this.list[realEmptyFieldIndex] = fieldType;
    }

    private getRandomNumber(max = 10) {
        return Math.round(Math.random() * max);
    }
}
