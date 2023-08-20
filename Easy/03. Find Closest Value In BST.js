class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findClosestValueInBST(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, closest) {
  // Base condition
  if (tree === null) {
    return closest;
  }
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  // If the target is present in the left subtree
  if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest);
  }
  // If the target is present in the right subtree
  else if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}

// Here we are creating the BST
const root = new TreeNode(8);
root.left = new TreeNode(5);
root.right = new TreeNode(14);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(6);
root.left.right.left = new TreeNode(8);
root.left.right.right = new TreeNode(7);
root.right.right = new TreeNode(24);
root.right.right.left = new TreeNode(22);

let closestValue = findClosestValueInBST(root, 3);
console.log("The closest value is: " + closestValue);

closestValue = findClosestValueInBST(root, 19);
console.log("The closest value is: " + closestValue);
