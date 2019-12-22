import { getFixedResult, helper } from './lintRunner';
import { Rule } from './noTruthyFalsyRule';

const rule = 'no-truthy-falsy';

describe('noTruthyFalsyRule test', () =>
{
    it(`use of toBeTruthy`, () =>
    {
        const src = `expect(xyz).toBeTruthy();`;
        const result = helper({ src, rule });

        expect(result.errorCount).toBe(1);
    });

    it(`use of toBeFalsy`, () =>
    {
        const src = `expect(xyz).toBeFalsy();`;
        const result = helper({ src, rule });

        expect(result.errorCount).toBe(1);
    });

    it(`testing success example`, () =>
    {
        const src = `expect(xyz).toBe(1);`;
        const result = helper({ src, rule });

        expect(result.errorCount).toBe(0);
    });


    // it(`testing not failure example`, () =>
    // {
    //     const src = `let storeDevTools = noDevTools;`;
    //     const result = helper({ src, rule });

    //     expect(result.errorCount).toBe(0);
    // });

    // it(`testing not failure example`, () =>
    // {
    //     const src = `const storeDevTools = noDevTools;`;
    //     const result = helper({ src, rule });

    //     expect(result.errorCount).toBe(0);
    // });
});
