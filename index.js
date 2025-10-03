let currentPage = 0;
let isScrolling = false;

function goToPage(page) {
    isScrolling = true;
    window.scrollTo({
        top: page * window.innerHeight, // 100vh = altura da tela
        behavior: "smooth"
    });

    setTimeout(() => {s
        isScrolling = false;
    }, 800); // trava pra não pular várias telas
}

window.addEventListener("wheel", (e) => {
    if (isScrolling) return;

    if (e.deltaY > 0 && currentPage < document.body.scrollHeight / window.innerHeight - 1) {
        currentPage++;
        goToPage(currentPage);
    } else if (e.deltaY < 0 && currentPage > 0) {
        currentPage--;
        goToPage(currentPage);
    }
});

// Atualiza a página atual se o usuário redimensionar a tela
window.addEventListener("resize", () => {
    goToPage(currentPage);
});
