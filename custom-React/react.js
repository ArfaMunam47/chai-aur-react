
function custom(reactElement,root){
    const domElement= document.createElement(reactElement.type);
    domElement.innerHTML= reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    root.appendChild(domElement);
};

const reactElement={
    type:'a',
    props:{
        href:'https://www.w3schools.com',
        target:'_blank',
    },
    children:'Click here to visit W3Schools.com!!!',
}


const root= document.querySelector('#root')
custom(reactElement,root)