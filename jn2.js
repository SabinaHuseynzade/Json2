fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
    .then((response) => response.json())
    .then((result) => {
        comments = result
    })


const container = document.querySelector('.container')

function setLike(elem){
    elem.style.fill = 'red'
}

function handleClick(e){
    if(e.target.tagName === 'path'){
        setLike(e.target)
    }
}

container.addEventListener('click', handleClick)