var amountOfBrands = 21;

function createBrandHTML(index) {
    var brandsHTML = '<li class="splide__slide"><img src="img/marcas/logo ('+ index +').png" alt="Marca ' + index + '"></li>';
    return brandsHTML;
}

for (var i = 1; i <= amountOfBrands; i++) {
    var brandHTML = createBrandHTML(i);
    $('.marcas__container').append(brandHTML);
}

