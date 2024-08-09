$(document).ready(function() {
    
    // ----------------------------------------------------------------
    //                      테스트용 임시 데이터
    // ----------------------------------------------------------------
    
    // 프로젝트 목록 데이터
    const projectData = [
        { rank: 1, id: 1, name: "제품1", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", rate: "5.0", like: "1234", achive: "100", author: "창작자1"},
        { rank: 2, id: 2, name: "제품2", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", rate: "4.2", like: "1234", achive: "1200", author: "창작자2"},
        { rank: 3, id: 3, name: "제품3", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", rate: "5.0", like: "1234", achive: "300", author: "창작자3"},
        { rank: 4, id: 4, name: "제품4", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", rate: "4.9", like: "1234", achive: "420", author: "창작자4"},
        { rank: 5, id: 5, name: "제품5", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", rate: "4.3", like: "1234", achive: "1200", author: "창작자5"},
        { rank: 6, id: 6, name: "제품6", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", rate: "4.8", like: "1234", achive: "12000", author: "창작자6"},
        { rank: 7, id: 7, name: "제품7", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", rate: "4.2", like: "1234", achive: "1600", author: "창작자7"},
        { rank: 8, id: 8, name: "제품8", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", rate: "4.9", like: "1234", achive: "7000", author: "창작자8"},
        { rank: 9, id: 9, name: "제품9", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", rate: "3.9", like: "1234", achive: "4500", author: "창작자9"},
        { rank: 10, id: 10, name: "제품10", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", rate: "4.0", like: "1234", achive: "1523", author: "창작자10"},
    ];

    // 카테고리 세부 아이템 데이터
    const cateItems = [
        { id:'반려 동물', title: "사료"},
        { id:'반려 동물', title: "간식"},
        { id:'반려 동물', title: "놀이기구"},
        { id:'반려 동물', title: "관리용품"},
        { id:'반려 동물', title: "고양이 모래"},
        { id:'반려 동물', title: "의류"},
        { id:'반려 동물', title: "파충류"},
        { id:'반려 동물', title: "어류"},
        { id:'반려 동물', title: "기타"},
        { id:'헬스 케어', title: "건강식품"},
        { id:'헬스 케어', title: "헬스 기구"},
        { id:'헬스 케어', title: "보충제"},
        { id:'헬스 케어', title: "영양제"},
        { id:'헬스 케어', title: "건강식품"},
        { id:'헬스 케어', title: "스포츠 웨어"},
        { id:'디지털 미디어', title: "도서"},
        { id:'디지털 미디어', title: "음악"},
        { id:'디지털 미디어', title: "게임"},
        { id:'디지털 미디어', title: "웹툰"},
        { id:'디지털 미디어', title: "클래스"},
        { id:'디지털 미디어', title: "아트"},
        { id:'향초', title: "캔들"},
        { id:'향초', title: "캔들워머"},
        { id:'향초', title: "방향제"},
        { id:'향초', title: "향수/공병"},
        { id:'향초', title: "인센스"},
        { id:'향초', title: "차량용 방향제"},
        { id:'향초', title: "디퓨저"},
        { id:'향초', title: "오일"},
        { id:'커피', title: "원두"},
        { id:'커피', title: "콜드브루"},
        { id:'커피', title: "커피용품"},
        { id:'커피', title: "머신"},
        { id:'커피', title: "캡슐"},
        { id:'커피', title: "드립커피"},
        { id:'커피', title: "디카페인"},
        { id:'식품', title: "냉동식품"},
        { id:'식품', title: "안주류"},
        { id:'식품', title: "고기류/육류"},
        { id:'식품', title: "빵/간식"},
        { id:'식품', title: "비건"},
        { id:'식품', title: "음료"},
        { id:'식품', title: "해산물"},
        { id:'식품', title: "와인"},
        { id:'식품', title: "전통주"},
        { id:'식품', title: "요리책"},
        { id:'식품', title: "푸드 페스티벌"},
        { id:'홈/리빙', title: "침실"},
        { id:'홈/리빙', title: "욕실"},
        { id:'홈/리빙', title: "주방"},
        { id:'홈/리빙', title: "화훼/원예"},
        { id:'홈/리빙', title: "청소/세탁"},
        { id:'홈/리빙', title: "인테리어"},
        { id:'홈/리빙', title: "DIY"},
        { id:'패션', title: "주얼리"},
        { id:'패션', title: "의류"},
        { id:'패션', title: "가방"},
        { id:'패션', title: "신발"},
        { id:'패션', title: "언더웨어"},
        { id:'패션', title: "패션소품"},
        { id:'패션', title: "한복"},
        { id:'패션', title: "홈웨어"},
        { id:'패션', title: "키즈"},
        { id:'문구', title: "캘린더"},
        { id:'문구', title: "다이어리"},
        { id:'문구', title: "스티커"},
        { id:'문구', title: "파우치"}
    ];

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

    $(function () {
        $('.search-submit').click(function() {
            let searchValue = $('.search-field').val();
            if (searchValue.length > 1) {
                location.href = "/search/" + searchValue + "/";
            } else {
                alert("입력한 단어가 너무 짧거나 없습니다.");
                $('input[type="search"]').focus();
                return false;
            }
        })
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
                        <p class="project-subject-title"><i class="${data.icon}"></i>${data.category}</p>
                        <a class="project-subject-more" href="#">더 보기</p>
                    </div>
                    <a class="project-cate-thumb-wrap" href="/projects">
                        <div class="project-cate-thumb"> <!-- 이미지 썸네일 영역 -->
                            <img src="https://picsum.photos/400/400?random=${data.num}">
                        </div>
                        <p class="project-cate title"> <!-- 프로젝트 제목 영역 -->
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
    //                   섹션별 프로젝트 목록 렌더링 함수
    // ----------------------------------------------------------------
    
    $(() => {
        // 차후 데이터는 쿼리문의 select * from where section = "${section}" 과 같은 형식으로 불러옴
        projectData.forEach(function (data) {
            const template = `
                <div class="list-project-wrap">
                    <img src="https://picsum.photos/400/400?random=${data.id}">
                    <p class="project-cate title"> [${data.name}] ${data.title} </p>
                    <div class="project-cate rate">
                        <p class="project-cate-rate percent"> <b>${data.achive}%</b> 달성 </p>
                        <p class="project-cate-rate star"> ★ ${data.rate} </p>
                    </div>
                    <p class="project-cate name">${data.author}</p>
                </div>
                `;
            $(".list-page").append(template);
            $(".trend-project-list").append(template);
        });
    });


    // ----------------------------------------------------------------
    //           트렌드 프로젝트 버튼 눌렀을때 가로 스크롤 이동
    // ----------------------------------------------------------------
    
    $(function () {
        let elCurScroll = $('.trend-project-btn').siblings('.trend-project-block').scrollLeft();
        (elCurScroll === 0) ? $('.trend-project-btn.left').hide() : $('.trend-project-btn.left').show();

        $('.trend-project-btn').click(function() {
            const btnEl = $(this).siblings('.trend-project-block');
            const elWidth = $(btnEl).children('.trend-project-list').children('.list-project-wrap').width();
            let curScroll = $(btnEl).scrollLeft();
            
            if ($(this).attr('class') === 'trend-project-btn right') {
                $(btnEl).animate({scrollLeft : curScroll + (elWidth*2)}, 400);
            } else {
                $(btnEl).animate({scrollLeft : curScroll - (elWidth*2)}, 400);
            }
            
            $('.trend-project-block').on('scroll', () => {
                ($(btnEl).scrollLeft() > 0) ? 
                    $(btnEl).siblings('.trend-project-btn.left').show() : 
                        $(btnEl).siblings('.trend-project-btn.left').hide();
                ($(btnEl).scrollLeft() < 950) ? 
                    $(btnEl).siblings('.trend-project-btn.right').show() : 
                        $(btnEl).siblings('.trend-project-btn.right').hide();
            });
        })
    })

    
    // ----------------------------------------------------------------
    //                     실시간 프로젝트 랭킹순위
    // ----------------------------------------------------------------
    
    $(() => {
        // 차후 데이터는 쿼리문의 select * from where section = "${section}" 과 같은 형식으로 불러옴
        projectData.forEach(function (data) {
            const template = `
                <li>
                    <a href="">
                        <div class="rank-items">
                            <div class="rank-items__front">
                                <p class="rank-number">${data.rank}</p>
                                <p class="rank-title">${data.title}</p>
                            </div>
                            <div class="rank-items__back">
                                <p class="rank-number">${data.rank}</p>
                                <p class="rank-title">${data.author}</p>
                            </div>
                        </div>
                    </a>
                </li>
                `;
            $(".rank-wrap").append(template);
        });
    });

    
    // ----------------------------------------------------------------
    //                      로그인 체크 양식 (임시)
    // ----------------------------------------------------------------
    
    $(function () {
        $('.login').click(function () {
            if($('input[id="id"]').val().length === 0) {
                alert("아이디를 입력해주세요.");
                $('input[id="id"]').focus();
                return false;
            } else if ($('input[id="pw"]').val().length === 0) {
                alert("비밀번호를 입력해주세요.");
                $('input[id="pw"]').focus();
                return false;
            }  else {
            
            }
        });
    })


    // ----------------------------------------------------------------
    //                       세부 카테고리 목록
    // ----------------------------------------------------------------
    
    $(function() {
        let prevElData;

        // 카테고리 세부 목록 DIV 양식
        const template = `
            <div class="cate-item">
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
