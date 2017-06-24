'use strict';


class SLL {
  constructor(value){
    this.value = value;
    this.next = null;
  }

  appendNode(node){
    //if node is not an instance of SLL return null
    if(!(node instanceof SLL))
      return null;
    //if this does not have a next node, set node to this's next and return
    if(!this.next){
      this.next = node;
      return;
    }
    //if this does have a next, invoke appendNode on this's next node
    this.next.appendNode(node);
  }

  forEach(callback){
    let current = this;
    while(current){
      callback(current, this);
      current = current.next;
    }
  }


  findMiddle(){
    let slow, fast;
    slow = fast = this;
    while(fast && fast.next && fast.next.next){
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  removeNode(node){
    if(this === null) return;

    let current = this;
    while (current.next != null) {
      if (current.next === node) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

//0ofN
  reverse(){
    if(!this.next) return;
    let current = this;
    let previous = null;

    while(current){
      let save = current.next;
      current.next = previous;
      previous = current;
      current = save;
    }
    return previous;
  }
}

try {
//   console.log('testing SLL')
//
  let head = new SLL(4)
  let one = new SLL(5)
  let two = new SLL(6)
  let three = new SLL(7)
  let four = new SLL(8)
  let five = new SLL(9)


  // console.assert(head.value === 4)

  head.appendNode(one);
  head.appendNode(two);
  head.appendNode(three);
  head.appendNode(four);
  head.appendNode(five);
  // // head.removeNode(two);
  head.reverse();
  // console.assert(head.next === null)
  //
  // head.appendNode(new SLL(87))
  // head.appendNode(new SLL(43))

  // console.assert(head.value == 4)
  // console.assert(head.next.value == 87)
  // console.assert(head.next.next.value == 43)
  // console.assert(head.next.next.next == null)
  console.dir(five, {depth: 100})

  // console.log(head.findMiddle())
  //
  // // how to prepend
  // let tmp = new SLL(8)
  // tmp.next = head;
  // head = tmp;
  //
  // // prepend again
  // tmp = new SLL(0)
  // tmp.next = head;
  // head = tmp;
  //
  // let sum = 0;
  // head.forEach((node, list) => {
  //   console.assert(list === head)
  //   sum += node.value
  // })
  //
  // console.assert(sum == 142)
  //
  // // 0 ->  8 -> (4) -> 87 -> 43 -> null
  // let middle = head.findMiddle()
  // console.log('middle.value', middle.value)
  // console.assert(middle.value === 4)
  //
  console.log('success')
} catch (err) {
  console.error('failed', err)
}





// // bonus
//   findNthNode(n) {
//
// }
//
// //bonus
//   findMiddleNode() {
//     let slow, fast;
//     slow = fast = this;
//     while(fast && fast.next && fast.next.next) {
//       slow = slow.next;
//       fast = fast.next.next;
//     }
//     return slow;
//   }
// }

module.exports = SLL;
