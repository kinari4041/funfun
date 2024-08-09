// 데이터 연동준비를 위한 Sample Json 형식 파일
const projectData = [
    {
        "rank":1,
        "id":1,
        "name":"제품1",
        "title":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "rate":"5.0",
        "like":"1234",
        "achive":"100",
        "author":"창작자1",
        "category":"식품"
    },
    {
        "rank":2,
        "id":2,
        "name":"제품2",
        "title":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "rate":"4.2",
        "like":"1234",
        "achive":"1200",
        "author":"창작자2",
        "category":"커피"
    },
    {
        "rank":3,
        "id":3,
        "name":"제품3",
        "title":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "rate":"5.0",
        "like":"1234",
        "achive":"300",
        "author":"창작자3",
        "category":"향초"
    },
    {
        "rank":4,
        "id":4,
        "name":"제품4",
        "title":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "rate":"4.9",
        "like":"1234",
        "achive":"420",
        "author":"창작자4",
        "category":"반려 동물"
    },
    {
        "rank":5,
        "id":5,
        "name":"제품5",
        "title":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "rate":"4.3",
        "like":"1234",
        "achive":"1200",
        "author":"창작자5",
        "category":"헬스케어"
    },
    {
        "rank":6,
        "id":6,
        "name":"제품6",
        "title":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "rate":"4.8",
        "like":"1234",
        "achive":"12000",
        "author":"창작자6",
        "category":"디지털 미디어"
    },
    {
        "rank":7,
        "id":7,
        "name":"제품7",
        "title":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "rate":"4.2",
        "like":"1234",
        "achive":"1600",
        "author":"창작자7",
        "category":"홈/리빙"
    },
    {
        "rank":8,
        "id":8,
        "name":"제품8",
        "title":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "rate":"4.9",
        "like":"1234",
        "achive":"7000",
        "author":"창작자8",
        "category":"패션"
    },
    {
        "rank":9,
        "id":9,
        "name":"제품9",
        "title":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "rate":"3.9",
        "like":"1234",
        "achive":"4500",
        "author":"창작자9",
        "category":"문구"
    },
    {
        "rank":10,
        "id":10,
        "name":"제품10",
        "title":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "rate":"4.0",
        "like":"1234",
        "achive":"1523",
        "author":"창작자10",
        "category":"커피"
    },
    {
        "rank":11,
        "id":1,
        "name":"제품11",
        "title":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "rate":"5.0",
        "like":"1234",
        "achive":"100",
        "author":"창작자11",
        "category":"식품"
    },
    {
        "rank":12,
        "id":2,
        "name":"제품12",
        "title":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "rate":"4.2",
        "like":"1234",
        "achive":"1200",
        "author":"창작자12",
        "category":"커피"
    },
    {
        "rank":13,
        "id":3,
        "name":"제품13",
        "title":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "rate":"5.0",
        "like":"1234",
        "achive":"300",
        "author":"창작자13",
        "category":"향초"
    },
    {
        "rank":14,
        "id":4,
        "name":"제품14",
        "title":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "rate":"4.9",
        "like":"1234",
        "achive":"420",
        "author":"창작자14",
        "category":"반려 동물"
    },
    {
        "rank":15,
        "id":5,
        "name":"제품15",
        "title":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "rate":"4.3",
        "like":"1234",
        "achive":"1200",
        "author":"창작자15",
        "category":"헬스케어"
    },
    {
        "rank":16,
        "id":6,
        "name":"제품16",
        "title":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "rate":"4.8",
        "like":"1234",
        "achive":"12000",
        "author":"창작자16",
        "category":"디지털 미디어"
    },
    {
        "rank":17,
        "id":7,
        "name":"제품17",
        "title":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "rate":"4.2",
        "like":"1234",
        "achive":"1600",
        "author":"창작자17",
        "category":"홈/리빙"
    },
    {
        "rank":18,
        "id":8,
        "name":"제품18",
        "title":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "rate":"4.9",
        "like":"1234",
        "achive":"7000",
        "author":"창작자18",
        "category":"패션"
    },
    {
        "rank":19,
        "id":9,
        "name":"제품19",
        "title":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "rate":"3.9",
        "like":"1234",
        "achive":"4500",
        "author":"창작자19",
        "category":"문구"
    },
    {
        "rank":20,
        "id":10,
        "name":"제품20",
        "title":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "rate":"4.0",
        "like":"1234",
        "achive":"1523",
        "author":"창작자20",
        "category":"커피"
    },
    {
        "rank":21,
        "id":21,
        "name":"제품21",
        "title":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "rate":"4.0",
        "like":"1234",
        "achive":"1523",
        "author":"창작자21",
        "category":"문구"
    },
    {
        "rank":22,
        "id":22,
        "name":"제품22",
        "title":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "rate":"4.0",
        "like":"1234",
        "achive":"1523",
        "author":"창작자22",
        "category":"헬스케어"
    },
    {
        "rank":23,
        "id":23,
        "name":"제품23",
        "title":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "rate":"4.9",
        "like":"1224",
        "achive":"4204",
        "author":"창작자23",
        "category":"반려 동물"
    }
]

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