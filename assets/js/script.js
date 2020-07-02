$('#modal').on('show.bs.modal', function (event) {
    let button = $(event.relatedTarget), 
        recipient = button.data('whatever'), 
        modal = $(this);

    modal.find('.modal-title').text(recipient);
});

$('.nav-item a').on('click', function () {
    $('.navbar-collapse').removeClass('show'); // закрываем меню на мобильных, при клике на пункт меню
});

// плавный переход из меню до блоков
$(".scroll").on("click", "a", function () { 
    
    event.preventDefault(); // исключаем стандартную реакцию браузера

    let id = $(this).attr('href'), // получем идентификатор блока из атрибута href
        top = $(id).offset().top; // находим высоту, на которой расположен блок

    $('html').animate({ // анимируем переход к блоку 
        scrollTop: top
    }, 400); // время: 400 мс
});

// подсвечивает пункты меню при соответствии с блоком
$(window).scroll(function () {
    let sections = $('section');
    
    sections.each(function () {
        let top = $(this).offset().top - 100, // видит блок на 100px раньше
            id = $(this).attr('id'),
            scroll = $(window).scrollTop();
            
        if (scroll > top) {
            $('.nav-item a').removeClass('active');
            $('.nav-item a[href="#' + id + '"]').addClass('active');
        }
    });

});

AOS.init({
    // Global settings:
    disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 50, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'center-bottom', // defines which position of the element regarding to window should trigger the animation
});