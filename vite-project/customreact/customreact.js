function customRender (ReactElement,container){

    const domElement = document .createElement
    
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    const domeElement = dpcument.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribuute(prop, reactElement.props
            [prop])
    } 
    

    container.appendChild(domeElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'

    },
    children: 'Click me to visit google'
}
const mainContainer = document.querySelector('#root')


customerRender(reactElement, mainContainer)