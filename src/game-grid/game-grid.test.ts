import { beforeEach, describe, expect, it } from 'vitest';
import { GameGrid } from './game-grid';
import GameGridField, { FieldType, SingleFieldType } from './game-grid-field';

describe('Game Grid Model', async () => {
    let grid: GameGrid;

    beforeEach(() => {
        grid = new GameGrid();
    });

    it('should have 3 bomb fields', () => {
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field.getType() === FieldType.BOMB_BOMB ||
                        field.getType() === FieldType.BOMB_EMPTY ||
                        field.getType() === FieldType.BOMB_TARGET
                ).length
        ).equals(3);
    });
    it('should have 9 target fields', () => {
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field.getType() === FieldType.TARGET_TARGET ||
                        field.getType() === FieldType.TARGET_EMPTY ||
                        field.getType() === FieldType.TARGET_BOMB
                ).length
        ).equals(9);
    });
    it('should have 13 empty fields', () => {
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field.getType() === FieldType.EMPTY_EMPTY ||
                        field.getType() === FieldType.EMPTY_BOMB ||
                        field.getType() === FieldType.EMPTY_TARGET
                ).length
        ).equals(13);
    });
    it('should have no real empty fields', () => {
        expect(grid.getAllFields().filter((field) => field.getType() === undefined).length).equals(0);
    });

    it('companion should have 3 bomb fields', () => {
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field.getType() === FieldType.BOMB_BOMB ||
                        field.getType() === FieldType.EMPTY_BOMB ||
                        field.getType() === FieldType.TARGET_BOMB
                ).length
        ).equals(3);
    });
    it('companion should have 9 target fields', () => {
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field.getType() === FieldType.TARGET_TARGET ||
                        field.getType() === FieldType.EMPTY_TARGET ||
                        field.getType() === FieldType.BOMB_TARGET
                ).length
        ).equals(9);
    });
    it('companion should have 13 empty fields', () => {
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field.getType() === FieldType.EMPTY_EMPTY ||
                        field.getType() === FieldType.BOMB_EMPTY ||
                        field.getType() === FieldType.TARGET_EMPTY
                ).length
        ).equals(13);
    });

    it('should have 1 common bomb field', () => {
        expect(grid.getAllFields().filter((field) => field.getType() === FieldType.BOMB_BOMB).length).equals(1);
    });
    it('should have 3 common target fields', () => {
        expect(grid.getAllFields().filter((field) => field.getType() === FieldType.TARGET_TARGET).length).equals(3);
    });

    it('should have 1 bomb field where companion has a target field', () => {
        expect(grid.getAllFields().filter((field) => field.getType() === FieldType.BOMB_TARGET).length).equals(1);
    });
    it('should have 1 bomb field where companion has an empty field', () => {
        expect(grid.getAllFields().filter((field) => field.getType() === FieldType.BOMB_EMPTY).length).equals(1);
    });
    it('should have 5 empty fields where companion has target fields', () => {
        expect(grid.getAllFields().filter((field) => field.getType() === FieldType.EMPTY_TARGET).length).equals(5);
    });
    it('should have 5 target fields where companion has empty fields', () => {
        expect(grid.getAllFields().filter((field) => field.getType() === FieldType.TARGET_EMPTY).length).equals(5);
    });
    it('should have 7 empty fields where companion has empty fields', () => {
        expect(grid.getAllFields().filter((field) => field.getType() === FieldType.EMPTY_EMPTY).length).equals(7);
    });
    it('should have 1 empty field where companion has a bomb field', () => {
        expect(grid.getAllFields().filter((field) => field.getType() === FieldType.EMPTY_BOMB).length).equals(1);
    });
    it('should have 1 target field where companion has a bomb field', () => {
        expect(grid.getAllFields().filter((field) => field.getType() === FieldType.TARGET_BOMB).length).equals(1);
    });

    it('should have all rules statisfied on one instance', () => {
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field.getType() === FieldType.BOMB_BOMB ||
                        field.getType() === FieldType.BOMB_EMPTY ||
                        field.getType() === FieldType.BOMB_TARGET
                ).length
        ).equals(3);
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field.getType() === FieldType.TARGET_TARGET ||
                        field.getType() === FieldType.TARGET_EMPTY ||
                        field.getType() === FieldType.TARGET_BOMB
                ).length
        ).equals(9);
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field.getType() === FieldType.EMPTY_EMPTY ||
                        field.getType() === FieldType.EMPTY_BOMB ||
                        field.getType() === FieldType.EMPTY_TARGET
                ).length
        ).equals(13);
        expect(grid.getAllFields().filter((field) => field.getType() === undefined).length).equals(0);
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field.getType() === FieldType.BOMB_BOMB ||
                        field.getType() === FieldType.EMPTY_BOMB ||
                        field.getType() === FieldType.TARGET_BOMB
                ).length
        ).equals(3);
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field.getType() === FieldType.TARGET_TARGET ||
                        field.getType() === FieldType.EMPTY_TARGET ||
                        field.getType() === FieldType.BOMB_TARGET
                ).length
        ).equals(9);
        expect(
            grid
                .getAllFields()
                .filter(
                    (field) =>
                        field.getType() === FieldType.EMPTY_EMPTY ||
                        field.getType() === FieldType.BOMB_EMPTY ||
                        field.getType() === FieldType.TARGET_EMPTY
                ).length
        ).equals(13);
        expect(grid.getAllFields().filter((field) => field.getType() === FieldType.BOMB_BOMB).length).equals(1);

        expect(grid.getAllFields().filter((field) => field.getType() === FieldType.TARGET_TARGET).length).equals(3);
        expect(grid.getAllFields().filter((field) => field.getType() === FieldType.BOMB_TARGET).length).equals(1);
        expect(grid.getAllFields().filter((field) => field.getType() === FieldType.BOMB_EMPTY).length).equals(1);
        expect(grid.getAllFields().filter((field) => field.getType() === FieldType.EMPTY_TARGET).length).equals(5);
        expect(grid.getAllFields().filter((field) => field.getType() === FieldType.TARGET_EMPTY).length).equals(5);
        expect(grid.getAllFields().filter((field) => field.getType() === FieldType.EMPTY_EMPTY).length).equals(7);
        expect(grid.getAllFields().filter((field) => field.getType() === FieldType.EMPTY_BOMB).length).equals(1);
        expect(grid.getAllFields().filter((field) => field.getType() === FieldType.TARGET_BOMB).length).equals(1);
    });

    it('should have a code with max length of 20', () => {
        expect(grid.getCode().length).is.below(20);
    });

    it('should be different', () => {
        let lastValue = grid.getAllFieldsAsList().reduce<number>((prev, curr, currIndex) => prev + curr * currIndex, 0);
        for (let i = 0; i < 2; i++) {
            grid = new GameGrid();
            const currValue = grid
                .getAllFieldsAsList()
                .reduce<number>((prev, curr, currIndex) => prev + curr * currIndex, 0);

            grid.getCode();
            expect(currValue).not.equals(lastValue);
            lastValue = currValue;
        }
    });

    it('should have same code for same grid', () => {
        const grid1Code = grid.getCode();
        const grid2 = new GameGrid(GameGrid.getValuesFromCode(grid1Code));
        const grid2Code = grid2.getCode();
        expect(grid1Code).to.be.equal(grid2Code);
    });

    it('should have different codes for different grids', () => {
        const gridList1 = new Array(25).fill(new GameGridField(1));
        const grid1 = new GameGrid(gridList1);
        const gridList2 = new Array(25).fill(new GameGridField(1));
        gridList2[24] = new GameGridField(8);
        const grid2 = new GameGrid(gridList2);
        expect(grid1.getCode()).not.be.equal(grid2.getCode());
    });

    it('should have code and can be generated of same code', () => {
        const code = grid.getCode();
        const grid2 = new GameGrid(GameGrid.getValuesFromCode(code));
        expect(grid.getAllFields().join('')).to.be.equal(grid2.getAllFields().join(''));
    });

    it('should validate new grid', () => {
        expect(grid.isValid).to.be.true;
    });

    it('should validate correct code with success', () => {
        const grid = new GameGrid(GameGrid.getValuesFromCode('dkknrb08m8mne1jr'));
        expect(grid.isValid).to.be.true;
    });

    it('should validate wrong code with error', () => {
        const grid = new GameGrid(GameGrid.getValuesFromCode('dkknrb08m8'));
        expect(grid.isValid).to.be.false;
    });
});

// describe('Game grid', () => {
//     let grid: GameGrid;
//     beforeEach(() => {
//         grid = new GameGrid();
//         grid.generate();
//     })
// })

describe('Game Grid Field', () => {
    it('should show primary and secondary field value', () => {
        const field = new GameGridField(FieldType.EMPTY_BOMB);
        expect(field.getPrimaryValue()).equals(SingleFieldType.EMPTY);
        expect(field.getSecondaryValue()).equals(SingleFieldType.BOMB);
    });
});
