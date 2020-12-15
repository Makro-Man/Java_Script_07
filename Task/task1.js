function useQuerySelector() {
    let element = document.querySelectorAll('ul>li');
    for (let i = 0; i < element.length; i++) {
        let curentElement = element[i];
        console.log(curentElement.innerHTML)
        curentElement.innerHTML = 'Someting';
    }
}

function countLi() {
    let count = 0;
    let element = document.querySelectorAll('ul>li');
    for (let i = 0; i < element.length; i++) {
        count++;
    }
    alert(count);
}