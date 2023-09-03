class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
root.left.left.left = new TreeNode(8);
root.left.left.right = new TreeNode(9);
root.left.right.left = new TreeNode(10);

function branchSum(rootNode) {
  const allSum = [];
  SumOFNodes(rootNode, 0, allSum);
  return allSum;
}

const SumOFNodes = (node, accSum = 0, sums) => {
  if (!node) return;
  const sum = accSum + node.value;

  if (!node.left && !node.right) {
    sums.push(sum);
    return;
  }

  if (node.left) SumOFNodes(node.left, sum, sums);
  if (node.right) SumOFNodes(node.right, sum, sums);
};

console.log(`sums : `, branchSum(root));
