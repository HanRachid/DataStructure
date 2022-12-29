import { describe, it } from "vitest";
import { BalancedBST } from "../src/Tree/BalancedBST/BalancedBST";
// The two tests marked with concurrent will be run in parallel
describe("suite", () => {
  it("works", () => {
    let tree = new BalancedBST([1, 2, 3, 4, 5, 6, 7, 8]);

    console.log(tree.buildTree());
  });
});
