import {helper} from './lintRunner';
import {Rule} from './noTruthyFalsyRule';

const rule = 'no-truthy-falsy';

describe('noTruthyFalsyRule test', () => {
    it(`use of toBeTruthy`, () => {
        const src = `expect(xyz).toBeTruthy();`;
        const failure = helper({src, rule}).failures[0];

        expect(failure.getFailure()).toBe(Rule.FAILURE_STRING);
    });

    it(`use of toBeTruthy`, () => {
        const src = `expect(xyz).toBeTruthy();`;
        const result = helper({src, rule});

        expect(result.errorCount).toBe(1);
    });

    it(`use of toBeTruthy`, () => {
        const src = `expect(xyz).toBeTruthy();`;
        const failure = helper({src, rule}).failures[0];

        expect(failure.getFailure()).toBe(Rule.FAILURE_STRING);
    });

    it(`use of toBeTruthy`, () => {
        const src = `expect(xyz).toBeTruthy();`;
        const startPosition = src.indexOf('toBeTruthy');
        const endPosition = startPosition + 'toBeTruthy'.length;
        const failure = helper({src, rule}).failures[0];

        expect(failure.getStartPosition().getPosition()).toEqual(startPosition);
        expect(failure.getEndPosition().getPosition()).toEqual(endPosition);
    });

    it(`use of toBeFalsy`, () => {
        const src = `expect(xyz).toBeFalsy();`;
        const result = helper({src, rule});

        expect(result.errorCount).toBe(1);
    });

    it(`testing success example`, () => {
        const src = `expect(xyz).toBe(1);`;
        const result = helper({src, rule});

        expect(result.errorCount).toBe(0);
    });
});
