const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  tree = [];

  getVals() {
    return this.tree.map(node => node.data);
  }

  findVal(data) {
    return this.getVals().indexOf(data);
  }

  root() {
    return this.tree.length === 0 ? null : this.tree[0];
  }

  add(data) {
    this.tree.push(new Node(data));
  }

  has(data) {
    return (this.findVal(data) === -1 ? false : true);
  }

  find(data) {
    const index = this.findVal(data);
    return index === -1 ? null : this.tree[index];
  }

  remove(data) {
    const index = this.findVal(data);
    if (index !== -1) this.tree.splice(index, 1);
  }

  min() {
    return Math.min(...(this.getVals()))
  }

  max() {
    return Math.max(...(this.getVals()))
  }
}

module.exports = {
  BinarySearchTree
};
