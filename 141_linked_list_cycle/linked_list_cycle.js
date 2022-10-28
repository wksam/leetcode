/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    let faster = head
    
    while(faster && faster.next) {
        head = head.next
        faster = faster.next.next
        
        if(head == faster) return true
    }
    return false
};