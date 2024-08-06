$(document).ready(function() {
    
    // ----------------------------------------------------------------
    //                              검색 팝업
    // ----------------------------------------------------------------
    
    // PC의 경우 팝업을 ESC키로 닫을 수 있게 하기
    $(document).on('keydown', function(e) {
        if (e.keyCode === 27) {
            e.preventDefault();
            $('.search-form-wrap.search-activate').removeClass(
                'search-activate');
            $('.login-form-wrap.login-activate').removeClass(
                'login-activate');
        }
    });

    $(function doSearch() {
        $('.top-nav-menu-search .search-icon').click(function() {
            $('.top-nav-menu-search .search-form-wrap').toggleClass('search-activate');
            let element = document.querySelector('.search-form-wrap.search-activate');
            let focusable = element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            let firstFocusable = focusable[0];
            let lastFocusable = focusable[focusable.length - 1];
        })

        $('.top-nav-menu-search .search-form-close').click(function() {
            $('.top-nav-menu-search .search-form-wrap').removeClass('search-activate');
            let focusClass = $(this).data("focus");
            $('.' + focusClass).find('a').focus();
        });
    })


    // ----------------------------------------------------------------
    //                          로그인 팝업
    // ----------------------------------------------------------------
    
    $(function doLogin() {
        $('.top-nav-menu-login .login-button').click(function() {
            $('.top-nav-menu-login .login-form-wrap').toggleClass('login-activate');
            let element = document.querySelector('.login-form-wrap.login-activate');
            let focusable = element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            let firstFocusable = focusable[0];
            let lastFocusable = focusable[focusable.length - 1];
        })

        $('.top-nav-menu-login .login-form-close').click(function() {
            $('.top-nav-menu-login .login-form-wrap').removeClass('login-activate');
            let focusClass = $(this).data("focus");
            $('.' + focusClass).find('a').focus();
        });
    })


    // ----------------------------------------------------------------
    //      스크롤이 일정 이상 내려가면 네비게이션 상단에 붙는 스크립트
    // ----------------------------------------------------------------
    
    window.addEventListener('scroll', function() {
        const scrollY = window.pageYOffset;
        if (scrollY > 140) {
            $('#cate-nav').addClass("active");
        } else {
            $('#cate-nav').removeClass("active");
        }
    })


    // ----------------------------------------------------------------
    //                     주목할 만한 프로젝트 목록
    // ----------------------------------------------------------------

    $(function() {
        const mainProjectCate = [
            { num: 0, title: "[머신명] 내 마음대로 원하는 커피를 추출하는 신개념 커피머신", category: "커피", icon: "fa-solid fa-mug-hot"},
            { num: 1, title: "[향초명] 버튼만 누르면 알아서 켜지는 스마트 향초", category: "향초", icon: "fa-solid fa-fire-flame-simple"},
            { num: 2, title: "[기계명] 힘든 칼질 필요없이 원터치 다지기 기계", category: "식품", icon: "fa-solid fa-drumstick-bite"},
            { num: 3, title: "[도구명] 쓱쓱 빗으면 털들이 싹!", category: "반려 동물", icon: "fa-solid fa-paw"},
            { num: 4, title: "[게임명] 조선의 미스테리 사건을 밝히는 추리 게임", category: "디지털 콘텐츠", icon: "fa-solid fa-dice"},
            { num: 5, title: "[제품명] ", category: "헬스케어", icon: "fa-solid fa-heart"},
        ];

        mainProjectCate.forEach(function (data) {
            const title = ` `;
            const template = `
                <div class="project-cate-wrap">
                    <div class="project-subject">
                        <p class="project-subject-title font16"><i class="${data.icon} font22"></i>${data.category}</p>
                        <a class="project-subject-more font16" href="#">더 보기</p>
                    </div>
                    <a class="project-cate-thumb-wrap" href="/projects">
                        <div class="project-cate-thumb"> <!-- 이미지 썸네일 영역 -->
                            <img src="https://picsum.photos/400/400?random=${data.num}">
                        </div>
                        <p class="project-cate title font16"> <!-- 프로젝트 제목 영역 -->
                            ${data.title}
                        </p>
                        <div class="project-cate rate">
                            <p class="project-cate-rate percent font14"> <!-- 달성 % 표시 영역 -->
                                <b>100%</b> 달성
                            </p>
                            <p class="project-cate-rate star font14"> <!-- 달성 % 표시 영역 -->
                                ★ 4.0
                            </p>
                        </div>
                        <p class="project-cate name font14"> <!-- 창작자/단체명 영역 -->
                            창작자
                        </p>
                    </a>
                </div>
            `;

            $(".project-subject-title").append(title);
            $(".main-cate-project").append(template);
        });
    });

    
    // ----------------------------------------------------------------
    //                       최근 프로젝트 목록
    // ----------------------------------------------------------------
    $(function() {
        const recentProjectCate = [
            { id: 1, title: "최근 프로젝트"},
            { id: 2, title: "향초"},
            { id: 3, title: "식품"},
            { id: 4, title: "반려동물"},
            { id: 5, title: "디지털 콘텐츠"},
            { id: 6, title: "헬스케어"},
            { id: 7, title: "헬스케어"},
            { id: 8, title: "헬스케어"},
            { id: 9, title: "헬스케어"},
            { id: 10, title: "헬스케어"},
            { id: 11, title: "헬스케어"},
            { id: 12, title: "헬스케어"},
        ];

        recentProjectCate.forEach(function (data) {
            const template = `
                <!-- 최근 프로젝트 목록 영역 / 최대 10개 반복, 슬라이딩 -->
                <div class="recent-project-list wrapper">
                    <div class="recent-project-thumb"> <!-- 최근 프로젝트 목록 이미지 썸네일 -->
                        <img src="https://picsum.photos/400/400?random=${data.id}">
                    </div>
                    <p class="project-cate title"> <!-- 프로젝트 제목 영역 -->
                        [제품명] Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div class="project-cate rate">
                        <p class="project-cate-rate percent"> <!-- 달성 % 표시 영역 -->
                            <b>100%</b> 달성
                        </p>
                        <p class="project-cate-rate star"> <!-- 달성 % 표시 영역 -->
                            ★ 4.0
                        </p>
                    </div>
                    <p class="project-cate name"> <!-- 창작자/단체명 영역 -->
                        창작자
                    </p>
                </div>
                `;

            $(".recent-project").append(template);
        });
    });


    // ----------------------------------------------------------------
    //                       트렌드 프로젝트 목록
    // ----------------------------------------------------------------

    $(function() {
        const trendProjectCate = [
            { id: 1, title: "최근 프로젝트"},
            { id: 2, title: "향초"},
            { id: 3, title: "식품"},
            { id: 4, title: "반려동물"},
            { id: 5, title: "디지털 콘텐츠"},
            { id: 6, title: "헬스케어"},
            { id: 7, title: "헬스케어"},
            { id: 8, title: "헬스케어"},
            { id: 9, title: "헬스케어"},
            { id: 10, title: "헬스케어"},
            { id: 11, title: "헬스케어"},
            { id: 12, title: "헬스케어"},
        ];

        trendProjectCate.forEach(function (data) {
            const template = `
                <!-- 트렌드 프로젝트 목록 영역 / 최대 10개 반복, 슬라이딩 -->
                <div class="trend-project-list wrapper">
                    <div class="trend-project-thumb"> <!-- 최근 프로젝트 목록 이미지 썸네일 -->
                        <img src="https://picsum.photos/400/400?random=${data.id}">
                    </div>
                    <p class="project-cate title"> <!-- 프로젝트 제목 영역 -->
                        [제품명] Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div class="project-cate rate">
                        <p class="project-cate-rate percent"> <!-- 달성 % 표시 영역 -->
                            <b>100%</b> 달성
                        </p>
                        <p class="project-cate-rate star"> <!-- 달성 % 표시 영역 -->
                            ★ 4.0
                        </p>
                    </div>
                    <p class="project-cate name"> <!-- 창작자/단체명 영역 -->
                        창작자
                    </p>
                </div>
                `;

            $(".trend-project-block").append(template);
        });
    });


    // ----------------------------------------------------------------
    //           트렌드 프로젝트 버튼 눌렀을때 가로 스크롤 이동
    // ----------------------------------------------------------------
    
    $(function () {
        $('.trend-project-btn').click(function() {
            const btnEl = $(this).siblings('.trend-project-block');
            let curScroll = $(btnEl).scrollLeft();

            if ($(this).attr('class') === 'trend-project-btn right') {
                $(btnEl).animate({scrollLeft : curScroll+1000}, 400);
            } else {
                $(btnEl).animate({scrollLeft : curScroll-1000}, 400);
            }
        })
    })


    // ----------------------------------------------------------------
    //                       세부 카테고리 목록
    // ----------------------------------------------------------------
    
    $(function() {
        let prevElData;
        // 카테고리 세부 아이템 데이터
        const cateItems = [
            { id:'반려 동물', title: "펫 의류"},
            { id:'반려 동물', title: "펫 사료"},
            { id:'반려 동물', title: "펫 놀이기구"},
            { id:'반려 동물', title: "펫 관리용품"},
            { id:'헬스 케어', title: "건강식품"},
            { id:'헬스 케어', title: "헬스 장비"},
            { id:'헬스 케어', title: "보충식품"},
            { id:'헬스 케어', title: "영양제"},
            { id:'디지털 미디어', title: "책"},
            { id:'디지털 미디어', title: "음반"},
            { id:'디지털 미디어', title: "게임"},
            { id:'디지털 미디어', title: "컴퓨터"},
            { id:'디지털 미디어', title: "책"},
            { id:'디지털 미디어', title: "음반"},
            { id:'디지털 미디어', title: "게임"},
            { id:'디지털 미디어', title: "컴퓨터"},
            { id:'디지털 미디어', title: "책"},
            { id:'디지털 미디어', title: "음반"},
            { id:'디지털 미디어', title: "게임"},
            { id:'디지털 미디어', title: "컴퓨터"},
            { id:'향초', title: "향초"},
            { id:'향초', title: "캔들워머"},
            { id:'향초', title: "방향제"},
            { id:'향초', title: "향수/공병"},
            { id:'커피', title: "원두 커피"},
            { id:'커피', title: "콜드브루"},
            { id:'커피', title: "커피용품"},
            { id:'커피', title: "과일청"},
            { id:'식품', title: "냉동식품"},
            { id:'식품', title: "안주류"},
            { id:'식품', title: "고기류/육류"},
            { id:'식품', title: "빵/간식"}
        ];

        // 카테고리 세부 목록 DIV 양식
        const template = `
            <div class="cate-item font14">
                <div class="cate-item-wrap">
                    <div class="cate-items">
                    </div>
                </div>
            </div>
        `;

        // li 클래스명 cate-title-el로 마우스가 들어왔을 때
        $('.cate-title-el').mouseenter(function() {
            if ($('.cate-item').length === 0) {
                // div 아이디명 #cate-nav 에 template를 삽입
                $("#cate-nav").append(template);
                // 현재 선택한 li를 nowCateEl라는 변수로 선언
                const nowCateEl = $(this);
                // cateItems 데이터 수 만큼 반복
                cateItems.forEach(function (data) {
                    // 선택한 li의 데이터와 cateItems의 id를 비교해서
                    if (nowCateEl.data("text") === `${data.id}`) {
                        const items= `
                            <a href="#">${data.title}</a>
                        `;
                        // 일치한 id에 대한 리스트 요소를 만들어 집어넣기
                        $(".cate-items").append(items);
                    }
                });
            // 이미 세부 메뉴가 열려있는 상태에서
            } else {
                // 다른 메인 카테고리로 마우스가 옮겨갔을때
                if (prevElData !== $(this).data("text")) {
                    // 세부 목록 새로고침
                    $(".cate-item").remove();
                    $("#cate-nav").append(template);
                    const nowCateEl = $(this);
                    cateItems.forEach(function (data) {
                        if (nowCateEl.data("text") === `${data.id}`) {
                            const items= `
                                <a href="#">${data.title}</a>
                            `;
                            $(".cate-items").append(items);
                        }
                    });
                }
            }
            
            // 마우스가 선택했던 li 요소를 벗어나게 되면
            $(this).mouseleave(function() {
                // 이전에 선택했던 엘리먼트 데이터 변수에 값 저장
                prevElData = $(this).data("text");
                // 마우스가 네비게이션을 완전히 벗어나면
                $("#cate-nav").mouseleave(function() {
                    // 세부 메뉴 보이지 않게 만들기
                    $(".cate-item").remove();
                })
            })

        });
    });

});
