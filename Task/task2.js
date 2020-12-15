function changeBackground() {
    let element = document.getElementsByTagName('a');
    for (let i = 0; i < element.length; i++) {
        let curentElem = element[i];
        if ((curentElem.innerHTML.includes("http://") || curentElem.innerHTML.includes("ftp://"))
            && !curentElem.innerHTML.includes("http://internal.com")) {

            curentElem.classList.add('external-red');

        }

    }
}