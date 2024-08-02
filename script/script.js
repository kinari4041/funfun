$(document).ready(function() {
    
    // 메인 카테고리 영역 반복 6개
    const mainProjectCate = [
        { id: 0, title: "[머신명] 내 마음대로 원하는 커피를 추출하는 신개념 커피머신", category: "커피"},
        { id: 1, title: "[향초명] 버튼만 누르면 알아서 켜지는 스마트 향초", category: "향초"},
        { id: 2, title: "[기계명] 힘든 칼질 필요없이 원터치 다지기 기계", category: "식품"},
        { id: 3, title: "[도구명] 쓱쓱 빗으면 털들이 싹", category: "반려동물"},
        { id: 4, title: "[게임명] 조선의 미스테리 사건을 밝히는 추리 게임", category: "디지털 콘텐츠"},
        { id: 5, title: "[제품명] ", category: "헬스케어"},
    ];

    mainProjectCate.forEach(function (data) {
        const template = `
            <div class="project-cate-wrap">
                <div class="project-cate-thumb"> <!-- 이미지 썸네일 영역 -->
                    <img src="https://picsum.photos/400/400?random=${data.id}">
                </div>
                <p class="project-cate desc"> <!-- 프로젝트 요약 설명 영역 -->
                    ${data.category} 관련 프로젝트!
                </p>
                <p class="project-cate title"> <!-- 프로젝트 제목 영역 -->
                    ${data.title}
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

        $(".main-cate-project").append(template);
    });

    // 최근 프로젝트 영역 반복 최대 10개
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
