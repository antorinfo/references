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

// ******************* Add node to document***************
parentNode.appendChild(nodeToAdd)
parentNode.insertBefore(nodeToAdd, childNode)

// ***************** Get element details *****************
node.nextElementSibling
node.firstElementChild
node.lastElementChild 
node.parentElement 
node.children 

// ********************** Modify Element ****************
node.style.color = 'red'
node.style.padding = '10px'
node.style.fontSize = '200%'

node.setAttribute('attr-name','attr-value')
node.removeAttribute('attr-name')

// ******************* Get and modify element class ***************
node.classList
node.classList.add('class-name',...) 
node.classList.remove('class-name',...)
node.classList.toggle('class-name')
node.classList.contains('app') // true if app present
node.classList.replace('old','new')

// ***************** Remove / Replace Node **************
childNode.remove()
parentNode.removeChild(nodeToRemove)

app.replaceChild()
el.replaceWith()

// ************* Positioning ******************
h1.insertAdjacentHTML('beforebegin', '<span>cool</span>')
// beforebegin => placed before h1 as a sibling
// afterbegin => placed inside h1 as a first child
// beforeend => placed inside h1 as a last child
// afterend => placed after h1 as a sibling

// Events **********
node.addEventListener('event-name', cb)
node.removeEventListener('event-name', cb)
