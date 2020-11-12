/*
What is node ? (in the context of dom)
Node: Every item in the dom tree is called a node. There are two types of node 1.Text Node 2.Element Node
1.Text Node: Node that has text 2.Element Node: Node that has element. Child,parent,descendent,sibling
*/

// ***************** Query / Get Elements *********************
// preferred way
const hero = document.querySelector('.hero')
const heroes = document.querySelectorAll('.hero')
// old way
const app = document.getElementById('app')
const hero = document.getElementsByClassName('hero')
const h1 = document.getElementsByTagName('h1')


// ***************** Create / Clone Element ***************
let para = document.createElement('p')
let text = document.createTextNode('I love it')
node.cloneNode()
node.textContent = 'some text here'

// ******************* Add node to document/Insert/ Remove ***************
node.append(p)
node.append('hi')
node.append('hi',p)
node.appendChild(nodeToAdd)

node.prepend(p)
node.prepend('hi')
node.prepend('hi',p)
parentNode.insertBefore(nodeToAdd, childNode)

node.after(p) //as a sibling
node.after('hi')
node.after(p,'hi.)
target.insertAdjacentElement('afterend', element);
           
node.before() //as a sibling
node.before('hi')
node.before(p,'hi')
target.insertAdjacentElement('beforebegin', element);
           
childNode.remove()
parentNode.removeChild(nodeToRemove)

app.replaceChild(newChild, oldChild)
el.replaceWith()
// ************* Positioning ******************
h1.insertAdjacentHTML('beforebegin', '<span>cool</span>')
// beforebegin => placed before h1 as a sibling
// afterbegin => placed inside h1 as a first child
// beforeend => placed inside h1 as a last child
// afterend => placed after h1 as a sibling

// ***************** Get element details *****************
node.parentElement  
node.children
node.nextElementSibling
node.previousElementSibling
node.firstElementChild
node.lastElementChild 

// ********************** Modify Element / Attribute ****************
node.style.color = 'red'
node.style.padding = '10px'
node.style.fontSize = '200%'

node.getAttribute('href')
node.setAttribute('attr-name','attr-value')
node.removeAttribute('attr-name')

// ******************* Get and modify element class ***************
node.classList
node.classList.add('class-name',...) 
node.classList.remove('class-name',...)
node.classList.toggle('class-name')
node.classList.contains('app') // =>true if app present
node.classList.replace('old','new')

// Events **********
node.addEventListener('event-name', cb)
node.removeEventListener('event-name', cb)



// ******************************************
let val;

val = document;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);
// **************************************************\
const items = document.querySelectorAll('ul.collection li.collection-item');
items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
});
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');
liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});
for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
}
