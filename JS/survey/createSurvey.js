let q_count = 0;

function createQuestion(question_name) {
    debugger
    
}
function addMultiAnswer() {
    debugger
}
function addOneAnswer() {
    debugger
}
function onRemove(me) {
    let nodeRemove = me.parentNode.parentNode;
    let nodeParent = nodeRemove.parentNode;
    nodeParent.removeChild(nodeRemove);
}