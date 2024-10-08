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
    //                    주제별 추천 프로젝트 목록
    // ----------------------------------------------------------------

    $(function() {
        const cateWraps = $("[class^=project-cate-wrap]");
        const maxCount = 7;
        let count = 0;
        projectData.forEach(function (data) {
            if ($(cateWraps[count]).data("category") === `${data.category}`) {

                const tempData = projectData.filter(data => data.category === $(cateWraps[count]).data("category"));
                const index = (Math.floor(Math.random()*tempData.length));
                
                const template = `
                    <div class="project-subject">
                        <p class="project-subject-title"><i class="${tempData[index].icon}"></i>${tempData[index].category}</p>
                        <a class="project-subject-more" href="#">더 보기</p>
                    </div>
                    <a class="project-cate-thumb-wrap" href="/projects">
                        <div class="project-cate-thumb"> <!-- 이미지 썸네일 영역 -->
                            <img src="https://picsum.photos/400/400?random=${tempData[index].id}">
                        </div>
                        <p class="project-cate title"> <!-- 프로젝트 제목 영역 -->
                            ${tempData[index].title}
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
                            ${tempData[index].author}
                        </p>
                    </a>
                `;
                if (count < maxCount) {
                    $(cateWraps[count]).append(template);
                    count++;
                } 
            }
        });
    });

    
    // ----------------------------------------------------------------
    //                   섹션별 프로젝트 목록 렌더링 함수
    // ----------------------------------------------------------------
    
    $(() => {
        const maxCount = 10;
        let count = 0;
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
            if (count < maxCount) {
                $(".list-page").append(template);
                $(".trend-project-list").append(template);
                count++
            }
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
        const maxCount = 10;
        let count = 0;
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
                    if (count < maxCount) {
                        $(".rank-wrap").append(template);
                        count++;
                    } 
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
