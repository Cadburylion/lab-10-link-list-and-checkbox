'use strict';

const expect = require('expect');
const SLL = require('../index.js');

describe('Testing Linked List methods', () => {

  describe('testing Linked List constructor', () => {
    it('should return a new Linked List', (done) => {
      let head = new SLL(0);
      expect(head).toEqual(new SLL(0));
      done();
    });
  });

  describe('testing Linked List appendNode method', () => {
    it('should return a linked list with a node appended', (done) => {
      let head = new SLL(0);
      let one = new SLL(1);
      head.appendNode(one);
      expect(JSON.stringify(head)).toEqual(JSON.stringify({value: 0, next: {value: 1, next: null}}));
      done();
    });
    it('should return a linked list with three nodes', (done) => {
      let head = new SLL(0);
      let one = new SLL(1);
      let two = new SLL(2);
      head.appendNode(one);
      head.appendNode(two);
      expect(JSON.stringify(head)).toEqual(JSON.stringify({value: 0, next: {value: 1, next: {value: 2, next: null}}}));
      done();
    });
    it('should return a linked list with four nodes', (done) => {
      let head = new SLL(0);
      let one = new SLL(1);
      let two = new SLL(2);
      let three = new SLL(3);
      head.appendNode(one);
      head.appendNode(two);
      head.appendNode(three);
      expect(JSON.stringify(head)).toEqual(JSON.stringify({value: 0, next: {value: 1, next: {value: 2, next: {value: 3, next: null}}}}));
      done();
    });
  });

  describe('testing Linked List remove() method', () => {
    it('should return a linked list selected node removed', (done) => {
      let head = new SLL(0);
      let one = new SLL(1);
      head.appendNode(one);
      head.removeNode(one);
      expect(JSON.stringify(head)).toEqual(JSON.stringify({value: 0, next: null}));
      done();
    });
    it('should return a linked list selected node removed', (done) => {
      let head = new SLL(0);
      let one = new SLL(1);
      let two = new SLL(2);
      head.appendNode(one);
      head.appendNode(two);
      head.removeNode(two);
      expect(JSON.stringify(head)).toEqual(JSON.stringify({value: 0, next: {value: 1, next: null}}));
      done();
    });
    it('should return a linked list selected node removed', (done) => {
      let head = new SLL(0);
      let one = new SLL(1);
      let two = new SLL(2);
      let three = new SLL(3);
      head.appendNode(one);
      head.appendNode(two);
      head.appendNode(three);
      head.removeNode(two);
      expect(JSON.stringify(head)).toEqual(JSON.stringify({value: 0, next: {value: 1, next: {value: 3, next: null}}}));
      done();
    });
  });
  
  describe('testing Linked List reverse method', () => {
    it('should reverse a Singly Linked List', (done) => {
      let head = new SLL(0);
      let one = new SLL(1);
      head.appendNode(one);
      head.reverse();
      expect(JSON.stringify(one)).toEqual(JSON.stringify({value: 1, next: {value: 0, next: null}}));
      done();
    });
    it('should reverse a Singly Linked List', (done) => {
      let head = new SLL(0);
      let one = new SLL(1);
      let two = new SLL(2);
      head.appendNode(one);
      head.appendNode(two);
      head.reverse();
      expect(JSON.stringify(two)).toEqual(JSON.stringify({value: 2, next: {value: 1, next: {value: 0, next: null}}}));
      done();
    });
    it('should reverse undefined', (done) => {
      let head = new SLL(0);
      let one = new SLL(1);
      let two = new SLL(2);
      head.appendNode(one);
      head.appendNode(two);
      expect(two.reverse()).toEqual(undefined);
      done();
    });
  });
});
