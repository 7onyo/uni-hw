let pos = 0;

function showSlide(n) 
{
    let slides = document.querySelectorAll('.slides img');
    if (n >= slides.length) 
        pos = 0
    if (n < 0) 
        pos = slides.length - 1

    slides.forEach(slide => slide.style.display = 'none');
    slides[pos].style.display = 'block';
}
function nextSlide() 
{
    showSlide(++pos);
}

function prevSlide() 
{
    showSlide(--pos);
}

showSlide(pos);