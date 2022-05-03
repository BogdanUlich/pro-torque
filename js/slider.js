$(document).ready(function () {
    $(".slider").slick({
        arrows: false,
        dots: true,
    })

    $(".header__search").click(function () {
        $(".header__search-input").addClass("active")
    })
    $(document).on("click", function (e) {
        if (!$(e.target).closest(".header__search").length) {
            $(".header__search-input").removeClass("active")
        }
        e.stopPropagation()
    })
})
