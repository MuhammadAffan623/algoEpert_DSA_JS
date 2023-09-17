class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const root = new TreeNode(8);
root.left = new TreeNode(5);
root.right = new TreeNode(14);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(6);
root.left.right.left = new TreeNode(8);
root.left.right.right = new TreeNode(7);
root.right.right = new TreeNode(24);
root.right.right.left = new TreeNode(22);
// usimg stack
const nodeDepth = (root) => {
  const depths = [0];
  const stack = [root];
  let sumOfDepths = 0;
  while (stack.length > 0) {
    const node = stack.pop();
    const depth = depths.pop();
    sumOfDepths += depth;
    if (node.left) {
      stack.push(node.left);
      depths.push(depth + 1);
    }

    if (node.right) {
      stack.push(node.right);
      depths.push(depth + 1);
    }
  }

  return sumOfDepths;
};

// using recursion
const nodeDepths = (root, depth = 0) => {
    if(!root) return 0
    return depth + nodeDepths(root.left,depth+1) + nodeDepths(root.right,depth+1) 
} 
console.log(" stack method >", nodeDepth(root));
console.log(" recursion method >", nodeDepths(root));
