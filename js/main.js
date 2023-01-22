$(document).ready(function () {
    // mo-menu -----------------------------

    // menu-toggle-btn 클릭하면 #gnb-mo 모바일 메뉴 나오게 함
    $(function () {
        $('.menu-toggle-btn').on('click', function (event) {
            event.preventDefault();

            $(this).toggleClass('active'); //햄버거메뉴에 class .active가 붙으면서 모양이 바뀜
            $('.overlay').toggleClass('visible');
            //모바일 메뉴에 .visible class를 붙여줌으로써 visibility: hidden;에서 visible이 되어 등장하게 됨
        });
    });
    //li 클릭하면 #gnb-mo 모바일 메뉴 닫히게 함
    //mobile 메뉴의 ul li 클릭 시 해당 section으로 이동하며, 메뉴를 노출 시켰던 .overlay class가 remove되면서 숨겨지게 됨
    $('.hover-line').click(function () {
        $('.overlay').removeClass('visible');
    });

    // intro -----------------------------
    const content = '웹 퍼블리셔 김현지 입니다.'
    const txt = document.querySelector('.txt');
    let n = 0;

    const typing = function () {
        txt.innerHTML += content[n++]; //.txt엘리먼트에 위에 content의 변수에 저장한 문자를 순차적으로 뿌려줌
        if (n > content.length) { // content의의 변수 길이가 넘으면 제안을 설정한다.
            txt.innerHTML = ''; // .txt엘리먼트에 위에 빈문자가 뿌려짐
            n = 0; // 동시에 n번째를 0으로 초기화 됨
        }
        //content[i++]를 이용하여 한 글자씩 더해주고, if문을 사용하여 전체 콘텐츠 길이보다 i가 커지게되면 콘텐츠를 비우고 i를 0으로 만드는 방법으로 타이핑이 반복되게 함
    };

    setInterval(typing, 200); //반복


    // skill -----------------------------
    // coding-skill
    var $gauge = [
            "85", "80", "70", "70", "50"
        ],
        $skillCoding = $("#section2 .left .coding-box .skill span");
    $skillDesign = $("#section2 .left .design-box .skill span");

    //skill을 담은 span태그 에 hover하면 right박스에 저장한 문자 중 해당하는 문자를 뿌려줌
    $skillCoding.hover(function () {
        var i = $(this).index();
        console.log(i);

        $("#section2 .right div h2").text($gauge[i]); //문자가 뿌려지는 곳
        $(this).css("text-decoration", "underline"); //hover할 시 나타날 효과
    }, function () {
        $(this).css("text-decoration", ""); //hover하지 않았을 때 상태
    });

    // design-skill (위의 코드 반복)
    var $gauge2 = [
            "90", "85", "95"
        ],
        $skillDesign = $("#section2 .left .design-box .skill span");

    $skillDesign.hover(function () {
        var i = $(this).index();
        console.log(i);

        $("#section2 .right div h2").text($gauge2[i])
        $(this).css("text-decoration", "underline");
    }, function () {
        $(this).css("text-decoration", "");
    });

    // skroll-spy -----------------------------
    //Masgic Scroll---------------------
    const spyEls = document.querySelectorAll("section.scroll-spy");
    //forEach -> 배열함수
    spyEls.forEach(function (spyEl) {
        new ScrollMagic.Scene({
                triggerElement: spyEl, //보여질 부분 감지할 요소 지정
                triggerHook: 0.8, //0.8초 동안 훅이 실행됨
            })
            //토글 할 요소 생성 및 제거
            //.setClassToggle(토글 할 요소, "넣었다 뺐다 할 class 이름 생성")
            .setClassToggle(spyEl, "show")
            .addTo(new ScrollMagic.Controller());
    });

    // skill -----------------------------

    
    // skill -----------------------------



})