class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    const childNode = new Node(name);
    this.children.push(childNode);
    return childNode;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}

//       A
//     / \ \
//   B   C   D
//  / \     / \
// E   F    G  H
//    / \      \
//    I   J       K
// Create the corrected tree structure
const root = new Node("A");
const nodeB = root.addChild("B");
const nodeC = root.addChild("C");
const nodeD = root.addChild("D");

const nodeE = nodeB.addChild("E");
const nodeF = nodeB.addChild("F");

const nodeG = nodeD.addChild("G");
const nodeH = nodeD.addChild("H");

const nodeI = nodeF.addChild("I");
const nodeJ = nodeF.addChild("J");
const nodeK = nodeD.addChild("K");

// Perform depth-first search
const resultArray = [];
root.depthFirstSearch(resultArray);

console.log("Depth-First Search Result:", resultArray);
