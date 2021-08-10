$(function () {

    // const home = $('.home-wrapper');
    // const hairStyles = $(".hair-styles-wrapper");
    // const meniuItems = $('.menu-item');
    // const navPages = $('.target-item');

    // meniuItems.click(function (e) {
    //     let data = $(this).data('link-item');

    //     navPages.each(function (index, item) {

    //         if (!$(item).hasClass('hidden')) {
    //             $(item).addClass('hidden')
    //         }

    //         if (data == index) {
    //             $(item).removeClass('hidden')
    //         }
    //     })
        
    // })

    // <----------contact-lens------------->

    const overlayContactLens = $('.overlay-contact-lens');
    const imgLensWrapper = $(".lens-img-wrapper");
    let contactLens = $("#contact-lens-wrapper");
    const arrows = overlayContactLens.find("i");
    const contactLensIdArr = [];
    
    let getRandomInt = function(max) {
        return Math.floor(Math.random() * Math.floor(max));
    };

    contactLensArr.forEach(function (lensItem) {
        let contactLensItem = `<div data-id=${lensItem.id} data-img=${lensItem.imgUrl} class="contact-lens-item" style="background-image: url(poze/${lensItem.imgUrl})"></div>`
        contactLens.append(contactLensItem);

        contactLensIdArr.push(lensItem.id);
    })

    contactLens.on('click', '.contact-lens-item', function() {
        imgLensWrapper.css({backgroundImage: `url(poze/${$(this).data('img')}`})
        imgLensWrapper.data('id', $(this).data('id'));

        // overlayContactLens.removeClass('hidden');
        overlayContactLens.fadeIn();
    })

    let galleryIterator = contactLensIdArr.indexOf($(this).data('id'));

    setInterval(function() {
        if (galleryIterator >= contactLensIdArr.length) {
            galleryIterator = 0;
        } else {
            galleryIterator++;
        }

        for(let i = 0; i < contactLensArr.length; i++) {
            if(contactLensIdArr[getRandomInt(contactLensArr.length - 1)] === contactLensArr[i].id) {
                imgLensWrapper.attr('style', `background-image: url(poze/${contactLensArr[i].imgUrl})`);
                imgLensWrapper.attr('data-id', contactLensArr[i].id);
            }
        }
    }, 2000);


    arrows.click(function(ev) {
        ev.stopPropagation();
        let direction = $(this).data('direction');
        let currentLensId = $(this).parents('.overlay-contact-lens').find(".lens-img-wrapper").data('id');

        let galleryIterator = contactLensIdArr.indexOf(currentLensId);

        switch(direction) {
            case 'right': 
                if(galleryIterator >= contactLensIdArr.length - 1) {
                    galleryIterator = 0;
                } else {
                    galleryIterator++;
                }
                break;
            case 'left':
                if(galleryIterator <= 0) {
                    galleryIterator = contactLensIdArr.length - 1;
                } else {
                    galleryIterator--;
                }
                break;
        }

        for(let i = 0; i < contactLensArr.length; i++) {
            if(contactLensIdArr[galleryIterator] === contactLensArr[i].id) {
                imgLensWrapper.attr('style', `background-image: url(poze/${contactLensArr[i].imgUrl})`);
                imgLensWrapper.attr('data-id', contactLensArr[i].id);
            }
        }
    })

    overlayContactLens.click(function() {
        // $(this).addClass('hidden')
        $(this).fadeOut();
    })







})