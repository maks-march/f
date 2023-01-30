const text = document.getElementById('love');

text.addEventListener('click',() => {
    if (text.innerText !== 'Данис любит иру') {
        text.innerText = 'Данис любит иру';
    } else {
    text.innerText = 'Данис  ебет иру';
    }
});
