import { describe, expect, it, test } from "vitest";
import { BalancedBST } from "../src/Tree/BalancedBST/BalancedBST";
import { Node } from "../src/Tree/BalancedBST/Node";
// The two tests marked with concurrent will be run in parallel
let testtree = new BalancedBST([1, 2, 3, 5, 4, 6, 7, 8]);

let testNode = new Node(
  4,
  new Node(2, new Node(1), new Node(3)),
  new Node(6, new Node(5), new Node(7, null, new Node(8)))
);

let inserttestNode = new Node(
  4,
  new Node(2, new Node(1, null, new Node(2)), new Node(3)),
  new Node(6, new Node(5), new Node(7, null, new Node(8)))
);

let removeNode = new Node(
  5,
  new Node(2, new Node(1), new Node(3)),
  new Node(6, null, new Node(7, null, new Node(8)))
);

const prettyPrint = (node: Node | null, prefix = "", isLeft = true) => {
  if (node?.right !== null) {
    prettyPrint(node!.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node?.value}`);
  if (node?.left !== null) {
    prettyPrint(node!.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

describe("suite", () => {
  it("builds tree", () => {
    let tree = new BalancedBST([1, 2, 3, 5, 4, 6, 7, 8]);

    expect(tree.root).toMatchObject(testNode);
  });

  it("builds tree", () => {
    let tree = new BalancedBST([1, 2, 3, 5, 4, 6, 7, 8]);
    tree.insert(2);
    expect(tree.root).toMatchObject(inserttestNode);
  });

  it("removes node", () => {
    let tree = new BalancedBST([1, 2, 3, 5, 4, 6, 7, 8]);
    tree.remove(4);

    expect(tree.root).toMatchObject(removeNode);
  });
});
