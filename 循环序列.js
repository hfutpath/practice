
// 传说在公元 1 世纪的犹太战争中， 犹太历史学家弗拉维奥·约瑟夫斯和他的 40 个同胞
// 被罗马士兵包围。 犹太士兵决定宁可自杀也不做俘虏， 于是商量出了一个自杀方案。 他
// 们围成一个圈， 从一个人开始， 数到第三个人时将第三个人杀死， 然后再数， 直到杀光
// 所有人。 约瑟夫和另外一个人决定不参加这个疯狂的游戏， 他们快速地计算出了两个位
// 置， 站在那里得以幸存。 写一段程序将 n 个人围成一圈， 并且第 m 个人会被杀掉， 计算
// 一圈人中哪两个人最后会存活。 使用循环链表解决该问题。


function LList() {
  this.head = new Node(1);
  this.head.next = this.head;
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
}

function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

function findLast() {
	var currNode = this.head;
  while (!(currNode.next == null)) {
  	currNode = currNode.next;
  }
  return currNode;
}

function remove(item) {
  var prevNode = this.findPrevious(item);
  if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
  }
}

function find(item) {
  var currNode = this.head;
  while (currNode.element != item) {
  	currNode = currNode.next;
  }
  return currNode;
}

function findPrevious(item) {
  var currNode = this.head;
  while (!(currNode.next == null) &&
  (currNode.next.element != item)) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

function display() {
  var currNode = this.head;
  console.log(this.head.element)
  console.log(this.head.next.element)
  while (!(currNode.next == null) &&
    !(currNode.next.next == currNode)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}
function test(length) {
  var kill = new LList();

  for (var i = 1; i < length; i++) {
    kill.insert(i+1, i);
  }

  var currNode = kill.head;
  while(currNode.next.next !== currNode) {
    if (currNode.next.next === kill.head) {
      kill.head = currNode.next.next.next;
    }
    kill.remove(currNode.next.next.element)
    currNode = currNode.next.next;
  }


  // while()
  kill.display();
}

test(666)
