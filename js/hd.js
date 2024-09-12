// window.onload = init;

// function init(){
//    const mbtn = document.querySelector('#m_menu');
//    const hd = document.querySelector("#hd");

//    mbtn.addEventListener('click', function(){
//         hd.classList.toggle('active')
//    })
// }


// window.onload = function(){
//    const mbtn = document.querySelector('#m_menu');
//    const hd = document.querySelector("#hd");

//    mbtn.addEventListener('click', function(){
//         hd.classList.toggle('active')
//    })
// }


// window.onload = function(){
//    const mbtn = document.querySelectorAll('#m_menu');
//    const hd = document.querySelector("#hd");

//    mbtn[0].addEventListener('click', function(){
//         hd.classList.toggle('active')
//    })
// }


window.onload = function(){
   const mbtn = document.getElementById('m_menu');
   const hd = document.getElementById("hd");

   // mbtn[0].addEventListener('click', function(){
   //      hd.classList.toggle('active')
   // })
   mbtn,onclick = function(){
      hd.classList.toggle('active')
   }
}
// 웹에서 주로 사용
// 웹은 이미 html로 작성이 되어있기 때문에 태그들이 있음 > getElementBy~ 사용 가능
// element들만 이벤트메서드들을 호출 가능

// element로 부른건 태그 취급을 하지 않기 때문에 이벤트메서드 사용 불가능