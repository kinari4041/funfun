$(document).ready(function() {

    // queryselect로 슬라이드를 구현할 요소 선택하여 크기 구하기
    const slide = document.querySelector(".popular-projects")
    const transitionTime = 0.8;
    let slideWidth = slide.clientWidth;

    // 이전 슬라이드, 다음 슬라이드 버튼 엘리먼트 선택하기
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    // 슬라이드 전체를 선택해 값을 변경해주기 위한 전체 선택문
    let slideItems = document.querySelectorAll(".slide-item");
    const maxSlide = slideItems.length;

    // 버튼을 클릭할 때 마다 현재 슬라이드 위치 저장하는 변수 생성
    let nowSlide = 1;

    // 페이지네이션 생성하기
    const pagination = document.querySelector(".slide-pagenation");
    pagination.innerHTML = `${nowSlide} / ${maxSlide}`;

    // const paginationItems = document.querySelectorAll(".slide-pagenation > li");

    // 슬라이드가 게속 반복되도록 시작과 끝 슬라이드 복사
    const slideStart = slideItems[0];
    const slideEnd = slideItems[slideItems.length - 1];
    const elmStart = document.createElement("div");
    const elmEnd = document.createElement("div");

    slideEnd.classList.forEach((c) => elmEnd.classList.add(c));
    elmEnd.innerHTML = slideEnd.innerHTML;

    slideStart.classList.forEach((c) => elmStart.classList.add(c));
    elmStart.innerHTML = slideStart.innerHTML;

    slideItems[0].before(elmEnd);
    slideItems[slideItems.length - 1].after(elmStart);

    slideItems = document.querySelectorAll(".slide-item");

    let offset = slideWidth + nowSlide;
    slideItems.forEach((i) => {
        i.setAttribute("style", `left: ${-offset}px`);
    });

    function nextSlide() {
        nowSlide++;

        if (nowSlide <= maxSlide) {
            const offset = slideWidth * nowSlide;
            slideItems.forEach((i) => {
                i.setAttribute("style", `left: ${-offset}px`);
            });
            pagination.innerHTML = `${nowSlide} / ${maxSlide}`;
            // paginationItems.forEach((i) => i.classList.remove("active"));
            // paginationItems[nowSlide - 1].classList.add("active");
        } else {
            nowSlide = 0;
            let offset = slideWidth * nowSlide;
            slideItems.forEach((i) => {
                i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
            });
            nowSlide++;
            offset = slideWidth * nowSlide;
            setTimeout(() => {
                slideItems.forEach((i) => {
                    i.setAttribute("style", `transition: ${transitionTime}s ease-in-out; left: ${-offset}px`);
                });
            }, 0);
            pagination.innerHTML = `${nowSlide} / ${maxSlide}`;
            // paginationItems.forEach((i) => i.classList.remove("active"));
            // paginationItems[nowSlide - 1].classList.add("active");
        }
    }

    function prevSlide() {
        nowSlide--;

        if (nowSlide > 0) {
            const offset = slideWidth * nowSlide;
            slideItems.forEach((i) => {
                i.setAttribute("style", `left: ${-offset}px`);
            });
            pagination.innerHTML = `${nowSlide} / ${maxSlide}`;
            // paginationItems.forEach((i) => i.classList.remove("active"));
            // paginationItems[nowSlide - 1].classList.add("active");
        } else {
            nowSlide = maxSlide + 1;
            let offset = slideWidth * nowSlide;
            slideItems.forEach((i) => {
                i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
            });
            nowSlide--;
            offset = slideWidth * nowSlide;
            setTimeout(() => {
                slideItems.forEach((i) => {
                    i.setAttribute("style", `transition: ${transitionTime}s ease-in-out; left: ${-offset}px`);
                });
            }, 0);
            pagination.innerHTML = `${nowSlide} / ${maxSlide}`;
            // paginationItems.forEach((i) => i.classList.remove("active"));
            // paginationItems[nowSlide - 1].classList.add("active");
        }
    }

    nextBtn.addEventListener("click", () => {
        nextSlide();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
    });

    window.addEventListener("resize", () => {
        slideWidth = slide.clientWidth;
    });

    // for (let i = 0; i < maxSlide; i++) {
    //     paginationItems[i].addEventListener("click", () => {
    //         nowSlide = i + 1;
    //         const offset = slideWidth * nowSlide;
    //         slideItems.forEach((i) => {
    //             i.setAttribute("style", `left: ${-offset}px`);
    //         });
    //         paginationItems.forEach((i) => i.classList.remove("active"));
    //         paginationItems[nowSlide - 1].classList.add("active");
    //     })
    // }

    // 드래그 이벤트를 위한 변수
    let pointStart = 0;
    let pointEnd = 0;

    slide.addEventListener("mousedown", (e) => {
        pointStart = e.pageX;
    });

    slide.addEventListener("mouseup", (e) => {
        pointEnd = e.pageX;
        if (pointStart < pointEnd) {
            prevSlide();
        } else if (pointStart > pointEnd) {
            nextSlide();
        }
    });

    slide.addEventListener("touchstart", (e) => {
        pointStart = e.touches[0].pageX;
    });

    slide.addEventListener("touchend", (e) => {
        pointEnd = e.changedTouches[0].pageX;
        if (pointStart < pointEnd) {
            prevSlide();
        } else if (pointStart > pointEnd) {
            nextSlide();
        }
    });

    let loopInterval = setInterval(() => {
        nextSlide();
    }, 5000);

    slide.addEventListener("mouseover", () => {
        clearInterval(loopInterval);
    });

    slide.addEventListener("mouseout", () => {
        loopInterval = setInterval(() => {
            nextSlide();
        }, 5000);
    });
});