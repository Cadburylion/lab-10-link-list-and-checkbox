'use strict';

// 0 of 1
class SLL {
  constructor(value){
    this.value = value;
    this.next = null;
  }

// 0 of N
  appendNode(node){
    if(!(node instanceof SLL))
      return null;
    if(!this.next){
      this.next = node;
      return;
    }
    this.next.appendNode(node);
  }

// 0 of N
  forEach(callback){
    let current = this;
    while(current){
      callback(current, this);
      current = current.next;
    }
  }

// 0 of N
  findMiddle(){
    let slow, fast;
    slow = fast = this;
    while(fast && fast.next && fast.next.next){
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

//0 of N
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

//0 of N
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

module.exports = SLL;
