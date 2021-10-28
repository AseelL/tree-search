class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
    addChild(newChild) {
        this.children.push(newChild);
    }
    breadthFirstSearch(value) {
        let collection = [this];
        let path = [];
        while (collection.length) {
            let node = collection.shift();
            path.push(node.value)
            if (node.value === value) {
                return path // set for duplicate paths
            } else {
                collection.push(...node.children)
            }
        }
        return 'Did not find a node with that value: ' + value
    }
    depthFirstSearch(value) {
        let collection = [this];
        let path = [];
        while (collection.length) {
            let node = collection.shift();
            path.push(node.value)
            if (node.value === value) {
                return path // set for duplicate paths
            } else {
                collection.unshift(...node.children)
            }
        }
        return 'Did not find a node with that value'
    }
}

// declaring nodes
const a = new TreeNode('A');
const b = new TreeNode('B');
const c = new TreeNode('C');
const d = new TreeNode('D');
const e = new TreeNode('E');
const f = new TreeNode('F');
const g = new TreeNode('G');
const h = new TreeNode('H');
const i = new TreeNode('I');
const j = new TreeNode('J');
// linking nodes as a tree
a.addChild(d);
a.addChild(c);
a.addChild(b);
c.addChild(e);
c.addChild(g);
d.addChild(f)
d.addChild(e);
e.addChild(h);
f.addChild(j);
f.addChild(i);

document.getElementById("bfs").innerHTML = JSON.stringify('Breadth first: ' + a.breadthFirstSearch('G'), null, 2);
document.getElementById("dfs").innerHTML = JSON.stringify('Depth first: ' + a.depthFirstSearch('G'), null, 2);