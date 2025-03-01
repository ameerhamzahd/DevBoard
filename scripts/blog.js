const backToDeskBtn = document.getElementById('back-to-desk-btn');

backToDeskBtn.addEventListener('click', (event) => {
    if(backToDeskBtn) {
        window.location.href = 'index.html';
    }
});