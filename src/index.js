document.querySelector('.navbar__toggleBtn').addEventListener('click', event => {
    // First Get current Display status of navList
    let displayStatus = getComputedStyle(document.querySelector('.navbar__navList')).display;

    // if list is hidden show, if shown hide
    if (displayStatus == 'none') {
        document.querySelector('.navbar__navList').style.display = 'block';
    }
    if (displayStatus == 'block') {
        document.querySelector('.navbar__navList').style.display = 'none';
    }
});


// This closes the navlist menu in mobile view when a link is clicked
document.querySelectorAll('.navbar__navLink').forEach(el => {
    el.addEventListener('click', event => {
        document.querySelector('.navbar__navList').style.display = 'none';
    })
})

