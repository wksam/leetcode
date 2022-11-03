/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var cloneGraph = function(node) {
    let clone = {}
    return cloneNode(node)
    
    function cloneNode(node) {
        if(!node) return null
        if(!clone[node.val]) {
            clone[node.val] = new Node(node.val)
            clone[node.val].neighbors = node.neighbors.map(cloneNode)
        }
        return clone[node.val]
    }
};