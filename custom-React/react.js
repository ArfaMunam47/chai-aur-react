
function check(reactElement,container){
    const domElement= document.createElement(reactElement.type)
    // domElement.setAttribute('href',reactElement.prop.href)
    // domElement.setAttribute('target',reactElement.prop.target)
for (const prop in reactElement.props){
    if(prop == 'reactElement.props') continue
    domElement.setAttribute(prop,reactElement.props[prop])
}
domElement.innerHTML=reactElement.children
root.appendChild(domElement)
}

const reactElement={
    type:'a',
    props:{
        href:'https://www.w3school.com',
        target:'_blank'
    },
    children:'click me to visit the actual site and it will open in a new tab'
}
const root= document.querySelector('#root')
check(reactElement,root)