$("#navIcon").on("click", function(){
    $(".mobileNav").sideToggle();
    $("#navIcon").toggleClass("fa=bars");
    $("#navIcon").toggleClass("fa-xmark");
})