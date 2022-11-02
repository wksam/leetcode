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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    let level = 0
    let levelOrder = []
    
    let levelOrderHelper = function(root, levelOrder, level) {
        if(root == null) return;
        if(levelOrder[level] == undefined) levelOrder[level] = []
        levelOrder[level].push(root.val)

        level++
        levelOrderHelper(root.left, levelOrder, level)
        levelOrderHelper(root.right, levelOrder, level)
    }
    
    levelOrderHelper(root, levelOrder, level)
    
    return levelOrder
};