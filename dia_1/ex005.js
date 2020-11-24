window.onload = () => {
    const btnCount = document.querySelector('.btn-count');
    const counter = document.querySelector('.counter');
    let clickCount = 0;

    btnCount.addEventListener('click', () => {
        clickCount += 1;
        counter.innerHTML = `${clickCount} cliques no botão`;
    })
}