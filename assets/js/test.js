var magnets = document.querySelectorAll('.magnetic')
        var strength = 50

        magnets.forEach( (magnet) => {
        magnet.addEventListener('mousemove', moveMagnet );
        magnet.addEventListener('mouseout', function(event) {
            TweenMax.to( event.currentTarget, 1, {x: 0, y: 0, ease: Power4.easeOut})
        } );
        });

        function moveMagnet(event) {
        var magnetButton = event.currentTarget
        var bounding = magnetButton.getBoundingClientRect()

        //console.log(magnetButton, bounding)

        TweenMax.to( magnetButton, 1, {
            x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * strength,
            y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * strength,
            ease: Power4.easeOut
        })

        //magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
        }

        function page4Animation() {
            var elemC = document.querySelector("#elem-container");
            var fixed = document.querySelector("#fixed-image");
            var requestId;
            var hideTimeout;
        
            elemC.addEventListener("mouseenter", function () {
                fixed.style.display = "block";
            });
        
            elemC.addEventListener("mouseleave", function () {
                if (hideTimeout) clearTimeout(hideTimeout);
                hideTimeout = setTimeout(function () {
                    fixed.style.display = "none";
                }, 100); // Delay to prevent flickering
            });
        
            var elems = document.querySelectorAll(".elem");
            elems.forEach(function (e) {
                e.addEventListener("mouseenter", function () {
                    if (hideTimeout) clearTimeout(hideTimeout);
                    var image = e.getAttribute("data-image");
                    fixed.style.backgroundImage = `url(${image})`;
                    fixed.style.display = "block";
                });
            });
        
            elemC.addEventListener("mousemove", function (event) {
                if (requestId) {
                    cancelAnimationFrame(requestId);
                }
                requestId = requestAnimationFrame(function () {
                    var x = event.clientX;
                    var y = event.clientY;
                    fixed.style.left = x + 'px';
                    fixed.style.top = y + 'px';
                });
            });
        }
        
        function swiperAnimation() {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 100,
            });
        }
        
        function menuAnimation() {
            var menu = document.querySelector("nav h3");
            var full = document.querySelector("#full-scr");
            var navimg = document.querySelector("nav img");
            var flag = 0;
        
            menu.addEventListener("click", function () {
                if (flag == 0) {
                    full.style.top = 0;
                    navimg.style.opacity = 0;
                    flag = 1;
                } else {
                    full.style.top = "-100%";
                    navimg.style.opacity = 1;
                    flag = 0;
                }
            });
        }
        
        function loaderAnimation() {
            var loader = document.querySelector("#loader");
            setTimeout(function () {
                loader.style.top = "-100%";
            }, 4200);
        }
        
        swiperAnimation();
        page4Animation();
        menuAnimation();
        loaderAnimation();
        


        