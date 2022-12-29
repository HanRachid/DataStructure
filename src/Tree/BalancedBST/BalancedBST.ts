export class BalancedBST {
  array: number[];
  root: Node | null;

  constructor(array: number[], root: Node | null = null) {
    this.array = array;
    this.root = root;
  }
  buildTree(): number {
    let sizeofArray = this.array.length;
    let middle = Math.floor((sizeofArray - 1) / 2);
    return this.array[middle];
  }
}
