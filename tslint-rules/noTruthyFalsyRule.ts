import * as Lint from 'tslint';
import * as ts from 'typescript';

export class Rule extends Lint.Rules.AbstractRule
{
    public static FAILURE_STRING = 'Methods toBeTruthy/toBeFalsy not allowed, use more specific checks instead.';

    public apply (sourceFile: ts.SourceFile): Lint.RuleFailure[]
    {
        return this.applyWithFunction(sourceFile, walk);
    }
}

const walk = (ctx: Lint.WalkContext<void>) =>
{
    return ts.forEachChild(ctx.sourceFile, checkNode);

    function checkNode (node: ts.Node): void
    {
        if (node.kind === ts.SyntaxKind.Identifier)
        {
            if (node.getText() === 'toBeTruthy' || node.getText() === 'toBeFalsy')
            {
                return ctx.addFailureAtNode(node, Rule.FAILURE_STRING);
            }
        }
        return ts.forEachChild(node, checkNode);
    }
};
