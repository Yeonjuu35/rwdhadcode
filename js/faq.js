$(function(){
    $("#faq h3").click(function(){
        // 이벤트는 반드시 실행식(function)을 받음
        $(this).parent().addClass("open").siblings().removeClass("open")
    })
})

window.addEventListener('load', function(){
    this.document.querySelectorAll("#faq h3").forEach(function(ele, idx){
        ele.addEventListener('click', function(){
            this.parentElement.classList.add('open')

            let siblings = this.parentElement.parentElement.children;
            // 항상 console로 객체 타입을 검수하기
            console.log("데이터 : " + siblings, "데이터타입 : " + typeof siblings, "데이터정렬 : " + Array.isArray(siblings), "키 : " + Object.keys(siblings))
                for (let sibling of siblings) {
                    // for of는 array는 아니면서 array형데이터에서 사용
                    // forEach 대신에 for of 사용하는 것이 더 가벼움
                    if (sibling !== this.parentElement) {
                        sibling.classList.remove('open');
                    }
                }
        
        })
    })
})