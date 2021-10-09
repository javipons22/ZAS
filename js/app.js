jQuery(document).ready(()=>{

    jQuery('.main-header__link--menu-mobile').click(() => {
        jQuery('.main-header__menu--mobileabsolute').fadeIn();
        jQuery('.main-header__menu--mobileabsolute').css("display","flex");
    });
    jQuery('.main-header__menu--mobileabsolute menu a').click(() => {
        jQuery('.main-header__menu--mobileabsolute').fadeOut();
        
    });
    jQuery('.close-button').click(() => {
        jQuery('.main-header__menu--mobileabsolute').fadeOut();
        
    });
});
