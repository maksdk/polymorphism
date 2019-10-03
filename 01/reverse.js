class Node {
   constructor(value, node = null) {
      this.next = node;
      this.value = value;
   }

   getNext() {
      return this.next;
   }

   getValue() {
      return this.value;
   }
}

function reverse(list) {
   const iter = (node, next) => {
      if (!node) return next;
      return iter(node.getNext(), new Node(node.getValue(), next));
   };
   return iter(list.getNext(), new Node(list.getValue()));
}

const numbers = new Node(1, new Node(2, new Node(3)));
reverse(numbers);