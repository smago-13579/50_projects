const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClass();
        panel.classList.add('active');
    })
});

function removeActiveClass() {
    
    /*      code from video     */
    // panels.forEach(panel => {
    //     panel.classList.remove('active');
    // });

    for (let i = 0; i < panels.length; i++) {
        if (panels[i].classList.contains('active')) {
            panels[i].classList.remove('active');
            console.log(panels[i]);
            break;
        }
    }
}