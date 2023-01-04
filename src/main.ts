import "./style.css";
import typescriptLogo from "./typescript.svg";
import { setupCounter } from "./counter";
import { BalancedBST } from "./Tree/BalancedBST/BalancedBST";
import { LinkedList } from "./Lists/LinkedList";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div>
<a href="https://vitejs.dev" target="_blank">
  <img src="/vite.svg" class="logo" alt="Vite logo" />
</a>
<a href="https://www.typescriptlang.org/" target="_blank">
  <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
</a>
<h1>Vite + TypeScript</h1>
<div class="card">
  <button id="counter" type="button"></button>
</div>
<p class="read-the-docs">
  Click on the Vite and TypeScript logos to learn more
</p>
</div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
let testtree = new BalancedBST([1, 2, 3, 4, 5, 6, 7, 8, 9]);

testtree.prettyPrint();
console.log(testtree.depth(4));

console.log(testtree.isBalanced());

testtree.insert(12);
testtree.insert(10);
testtree.insert(11);
console.log(testtree.isBalanced());

testtree.prettyPrint();

testtree.reBalance();

testtree.prettyPrint();
console.log(testtree.isBalanced());

let testlist = new LinkedList();
testlist.append(2);
testlist.append(3);
testlist.prepend(3);
console.log(testlist.toString());
