import Stack from "./stack.js"

const llStack = new Stack();

llStack.push(1);
llStack.push(2);
llStack.pop();
llStack.dumpList();



const stack = [];
let pointer = 0;

function push(data){
    stack[pointer++] = data;
}

function pop(){
    return stack[--pointer];
}

console.log(llStack.getSize());