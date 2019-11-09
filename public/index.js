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



function contactFormSubmit() {
    document.querySelector('.loaderContainer').style.display = 'inline-block'
    document.querySelector('.contactForm').style.display = 'none'
    firebase.firestore().collection("messages").add({
        UserName: document.contactForm.name.value,
        UserEmail: document.contactForm.email.value,
        UserPhone: document.contactForm.phone.value,
        Message: document.contactForm.message.value
    })
    .then(()=>{
        alert("Your Message has been sent.\nPlease check your Email for a reply soon.");
        document.querySelector('.loaderContainer').style.display = 'none'
        document.querySelector('.contactForm').style.display = 'initial';
        document.contactForm.reset();
    })

    console.log()
}

function gifLoader() {
    // this method loads the portfolio gifs in the background and when the gifs are finished loading replaces the placeholder images with the gifs
    // Note: the method assumes the placeholder image and the GIf are name the same just the extension is different
    var imgTags = document.querySelectorAll('.portfolioSite__img');

    imgTags.forEach((el,) => {
        
        var imgSource = el.getAttribute('src');
        imgSource = imgSource.replace(/\.[^/.]+$/, ".gif"); // removes placeholder extension and replaces it with 'gif' extension

        var newImg = new Image();

        newImg.addEventListener('load', () => {
            el.src = newImg.src
        })
        newImg.src = imgSource;
    })
}
gifLoader();