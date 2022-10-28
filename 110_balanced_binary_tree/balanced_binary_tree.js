/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function(root) {
    return calcHeight(root) >= 0
};

var calcHeight = function(currentNode) {
    if(currentNode == null) return 0
    
    let leftHeight = calcHeight(currentNode.left)
    if(leftHeight == -1) return -1
    
    let rightHeight = calcHeight(currentNode.right)
    if(rightHeight == -1) return -1
    
    if(Math.abs(leftHeight -rightHeight) > 1)
        return -1
    
    return Math.max(leftHeight, rightHeight) + 1
}