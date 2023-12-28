window.onload = () => {
    const noticiasSelectors = document.querySelectorAll('td[data-nro]');
    for (const selector of noticiasSelectors) {
        selector.onclick = () => {
            const noticia = document.querySelector(`.noticia[data-nro="${selector.getAttribute('data-nro')}"]`);
            noticia.scrollIntoView();
        }
    }
}

const mybutton = document.getElementById("up-button");
mybutton.onclick = () => {
    topFunction();
}
window.onscroll = () => {
    scrollFunction()
};
scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 