!(function (d){

    var itemClassName = "carousel-photo";
        items = d.getElementsByClassName(itemClassName),
        totalItems = items.length,
        slide = 0,
        moving= true;
    

    function setInitialClasses() {
        items[totalItems - 1].classList.add("prev"); // last item is the previous item of the first element
        items[0].classList.add("active");
        items[1].classList.add("next");
    }

    function setEventListeners() {
        var next = d.getElementsByClassName("carousel-button-next")[0],
            prev = d.getElementsByClassName("carousel-button-prev")[0];
        
        next.addEventListener('click', moveNext);
        prev.addEventListener('click', movePrev);
    }

    function moveNext() {
        if(!moving) {
            if(slide === (totalItems -1)) slide = 0;
            else slide++;
        }
        let dirn = 1;
        moveCarouselTo(slide, dirn);
    }

    function movePrev() {
        if(!moving) {
            if(slide === 0) slide = totalItems -1;
            else slide--;
        }
        let dirn = -1;
        moveCarouselTo(slide, dirn);
    }
    function disableInteraction() {
        moving = true;
        setTimeout(function() { //exexcutes after 500ms which is the transition time
            moving = false;
        }, 500);
    }

    function moveCarouselTo(slide, dirn) {

        if(!moving) {
            disableInteraction();
            if(totalItems > 3) {
                alert(totalItems);
                var newPrevious = slide - 1,
                    newNext = slide + 1,
                    oldPrevious, oldNext;
                if(dirn === 1){
                    oldPrevious = slide - 2;
                    oldNext = slide;
                    if(slide === (totalItems - 1)) newNext = 0;
                    if(slide === 0){
                        newPrevious = totalItems - 1;
                        oldPrevious = newPrevious - 1;
                    }
                }
                else {
                    oldPrevious = slide;
                    oldNext = slide + 2;
                    if(slide === 0) newPrevious = totalItems - 1;
                    if(slide === (totalItems - 1)){
                        newNext = 0;
                        oldNext = 1;
                    }
                }
                
                items[oldPrevious].className = itemClassName;
                items[oldNext].className = itemClassName;

                items[newPrevious].className = itemClassName + " prev";
                items[slide].className = itemClassName + " active";
                items[newNext].className = itemClassName + " next";
            }
            
        }
    }

    function initCarousel(){
        setInitialClasses();
        setEventListeners();

        moving = false;
    }

    initCarousel();
} (document));