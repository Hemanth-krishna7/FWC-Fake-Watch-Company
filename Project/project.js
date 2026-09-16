/* Phase-1 */
/* ScrollReveal Setup */

document.addEventListener('DOMContentLoaded',()=>{

    const sr = ScrollReveal({
        distance:'60px',
        duration:1200,
        delay:400,
        reset:true
    });


    sr.reveal('.text',{delay:200,origin:'top'});

    sr.reveal('.heading',{delay:100,origin:'top'});

    sr.reveal('.watches-container .box',{delay:100,origin:'top'});

    sr.reveal('.collections-container .collection-box',{delay:100,origin:'top'});

    sr.reveal('.features-container .feature-box',{delay:100,origin:'top'});

    sr.reveal('.about-container .about-text',{delay:100,origin:'top'});

    sr.reveal('.new-arrivals-container .box',{delay:100,origin:'top'});

    sr.reveal('.best-sellers-container .box',{delay:100,origin:'top'});

    sr.reveal('.reviews-container .review-box',{delay:100,origin:'top'});

    sr.reveal('.newsletter-container',{delay:100,origin:'bottom'});

});