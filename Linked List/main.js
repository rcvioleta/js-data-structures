function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
    const newNode = new Node(value, this.head, null);
    this.head ? this.head.prev = newNode : this.tail = newNode;
    this.head = newNode;
}

LinkedList.prototype.addToTail = function(value) {
    const newNode = new Node(value, null, this.tail);
    this.tail ? this.tail.next = newNode : this.head = newNode;
    this.tail = newNode;
}

LinkedList.prototype.removeHead = function() {
    if (!this.head) return null;
    const val = this.head.value;
    this.head = this.head.next;

    if (this.head) this.head.prev = null;
    else this.tail = null;

    return val;
}

LinkedList.prototype.removeTail = function() {
    if (!this.tail) return null;
    const val = this.tail.value;
    this.tail = this.tail.prev;

    if (this.tail) this.tail.next = null;
    else this.head = null;

    return val;
}

LinkedList.prototype.search = function(value) {
    let currentNode = this.head; 

    while (currentNode) {
        if (currentNode.value === value) return currentNode.value;
        currentNode = currentNode.next;
    }
    return null;
}

LinkedList.prototype.indexOfNode = function(value) {
    let indexes = [];
    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode) {
        if (currentNode.value === value) indexes.push(currentIndex);
        currentNode = currentNode.next;
        currentIndex++;
    }
    return indexes;
}