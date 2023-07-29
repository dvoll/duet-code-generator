import { beforeEach, describe, expect, it } from 'vitest';
import { FieldType, GameGrid } from './game-grid';

describe('Game Grid Model', async () => {
    let grid: GameGrid;

    beforeEach(() => {
        grid = new GameGrid();
        grid.generate();
    });

    it('should have 3 bomb fields', () => {
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field === FieldType.BOMB_BOMB ||
                        field === FieldType.BOMB_EMPTY ||
                        field === FieldType.BOMB_TARGET
                ).length
        ).equals(3);
    });
    it('should have 9 target fields', () => {
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field === FieldType.TARGET_TARGET ||
                        field === FieldType.TARGET_EMPTY ||
                        field === FieldType.TARGET_BOMB
                ).length
        ).equals(9);
    });
    it('should have 13 empty fields', () => {
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field === FieldType.EMPTY_EMPTY ||
                        field === FieldType.EMPTY_BOMB ||
                        field === FieldType.EMPTY_TARGET
                ).length
        ).equals(13);
    });
    it('should have no real empty fields', () => {
        expect(grid.getAllFields().filter((field) => field === undefined).length).equals(0);
    });

    it('companion should have 3 bomb fields', () => {
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field === FieldType.BOMB_BOMB ||
                        field === FieldType.EMPTY_BOMB ||
                        field === FieldType.TARGET_BOMB
                ).length
        ).equals(3);
    });
    it('companion should have 9 target fields', () => {
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field === FieldType.TARGET_TARGET ||
                        field === FieldType.EMPTY_TARGET ||
                        field === FieldType.BOMB_TARGET
                ).length
        ).equals(9);
    });
    it('companion should have 13 empty fields', () => {
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field === FieldType.EMPTY_EMPTY ||
                        field === FieldType.BOMB_EMPTY ||
                        field === FieldType.TARGET_EMPTY
                ).length
        ).equals(13);
    });

    it('should have 1 common bomb field', () => {
        expect(grid.getAllFields().filter((field) => field === FieldType.BOMB_BOMB).length).equals(1);
    });
    it('should have 3 common target fields', () => {
        expect(grid.getAllFields().filter((field) => field === FieldType.TARGET_TARGET).length).equals(3);
    });

    it('should have 1 bomb field where companion has a target field', () => {
        expect(grid.getAllFields().filter((field) => field === FieldType.BOMB_TARGET).length).equals(1);
    });
    it('should have 1 bomb field where companion has an empty field', () => {
        expect(grid.getAllFields().filter((field) => field === FieldType.BOMB_EMPTY).length).equals(1);
    });
    it('should have 5 empty fields where companion has target fields', () => {
        expect(grid.getAllFields().filter((field) => field === FieldType.EMPTY_TARGET).length).equals(5);
    });
    it('should have 5 target fields where companion has empty fields', () => {
        expect(grid.getAllFields().filter((field) => field === FieldType.TARGET_EMPTY).length).equals(5);
    });
    it('should have 7 empty fields where companion has empty fields', () => {
        expect(grid.getAllFields().filter((field) => field === FieldType.EMPTY_EMPTY).length).equals(7);
    });
    it('should have 1 empty field where companion has a bomb field', () => {
        expect(grid.getAllFields().filter((field) => field === FieldType.EMPTY_BOMB).length).equals(1);
    });
    it('should have 1 target field where companion has a bomb field', () => {
        expect(grid.getAllFields().filter((field) => field === FieldType.TARGET_BOMB).length).equals(1);
    });

    it('should have all rules statisfied on one instance', () => {
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field === FieldType.BOMB_BOMB ||
                        field === FieldType.BOMB_EMPTY ||
                        field === FieldType.BOMB_TARGET
                ).length
        ).equals(3);
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field === FieldType.TARGET_TARGET ||
                        field === FieldType.TARGET_EMPTY ||
                        field === FieldType.TARGET_BOMB
                ).length
        ).equals(9);
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field === FieldType.EMPTY_EMPTY ||
                        field === FieldType.EMPTY_BOMB ||
                        field === FieldType.EMPTY_TARGET
                ).length
        ).equals(13);
        expect(grid.getAllFields().filter((field) => field === undefined).length).equals(0);
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field === FieldType.BOMB_BOMB ||
                        field === FieldType.EMPTY_BOMB ||
                        field === FieldType.TARGET_BOMB
                ).length
        ).equals(3);
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field === FieldType.TARGET_TARGET ||
                        field === FieldType.EMPTY_TARGET ||
                        field === FieldType.BOMB_TARGET
                ).length
        ).equals(9);
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field === FieldType.EMPTY_EMPTY ||
                        field === FieldType.BOMB_EMPTY ||
                        field === FieldType.TARGET_EMPTY
                ).length
        ).equals(13);
        expect(grid.getAllFields().filter((field) => field === FieldType.BOMB_BOMB).length).equals(1);

        expect(grid.getAllFields().filter((field) => field === FieldType.TARGET_TARGET).length).equals(3);
        expect(grid.getAllFields().filter((field) => field === FieldType.BOMB_TARGET).length).equals(1);
        expect(grid.getAllFields().filter((field) => field === FieldType.BOMB_EMPTY).length).equals(1);
        expect(grid.getAllFields().filter((field) => field === FieldType.EMPTY_TARGET).length).equals(5);
        expect(grid.getAllFields().filter((field) => field === FieldType.TARGET_EMPTY).length).equals(5);
        expect(grid.getAllFields().filter((field) => field === FieldType.EMPTY_EMPTY).length).equals(7);
        expect(grid.getAllFields().filter((field) => field === FieldType.EMPTY_BOMB).length).equals(1);
        expect(grid.getAllFields().filter((field) => field === FieldType.TARGET_BOMB).length).equals(1);
    });

    it('should have a code with max length of 20', () => {
        expect(grid.getCode().length).is.below(20);
    });

    it('should be diffrent', () => {
        let lastValue = grid.getAllFields().reduce<number>((prev, curr, currIndex) => prev + curr * currIndex, 0);
        for (let i = 0; i < 2; i++) {
            grid.generate();
            const currValue = grid.getAllFields().reduce<number>((prev, curr, currIndex) => prev + curr * currIndex, 0);

            grid.getCode();
            expect(currValue).not.equals(lastValue);
            lastValue = currValue;
        }
    });
});

// describe('Game grid', () => {
//     let grid: GameGrid;
//     beforeEach(() => {
//         grid = new GameGrid();
//         grid.generate();
//     })
// })
