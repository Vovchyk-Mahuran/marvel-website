let menuBtn = document.querySelector('.menu');
let menuList = document.querySelector('.menu-list');

menuBtn.addEventListener('click', function () {
    menuList.classList.toggle('active');
    menuBtn.classList.toggle('active');
});

$(function () {
    
    let filter = $("[data-filter]");
    filter.on("click", function (event) {
        event.preventDefault();
        
        let category = $(this).data('filter');
        if (category == 'all') {
            $("[data-category]").removeClass('hide');
        } else {
        
            $("[data-category]").each(function () {
            
                let currentCategory = $(this).data('category');
            
                if (currentCategory != category) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
});

});
