//alert
alert("환영합니다!");
alert("환영합니다. " + name + "님");
alert(`환영합니다. ${name} 님. 오늘은 ${date} 입니다.`)

//prompt
const name = prompt("이름을 입력하세요.");
alert("환영합니다, " + name + "님");

const name = prompt("이름을 입력하세요.");
alert(`안녕하세요, ${name}님. 환영합니다.`);
//동일한 결과를 얻을 수 있다.
//백틱이 한번에 쓸 수 있단 점은 좋지만, 반대로 모듈처럼 만들어 불러오지 않으니 조심해야할 듯 하다.

//만약 입력 값을 안넣고 취소를 누르면?
const name = prompt("이름을 입력하세요.");
console.log(name) // null 값이 입력된다.

const name = prompt("예약일을 입력해주세요.", "2020-10-");// 이렇게 입력시 1번 값은 메시지, 2번 값은 값 입력 부분의 default 값이 된다.
//이를 백틱과 활용하면, 디폴트값을 유동적이게 적을 수 있을듯..

//confirm
const isAdult = confirm("당신은 성인입니까?");

console.log(isAdilt)
// 취소와 확인을 통해 들어오는 값이 달라진다(당연하게도) 

/*메시지 박스 사용의 편리한 점 대비 단점 
 * 1. 스크립트 일시 정지된다. : 창 닫기 전에는 다른 행동이 모두 정지됨. 
 * 	즉, 유튜브 등에서 영상이 재생된다고 할 때 알림이 온다고 해서 영상 재생이 멈추거나 한다면, 사용자 경험이 별로일 것이다.
 * 2. 스타일링 불가 : 해당 기능은 자체적으로 제공하는 것이고 정해져 있으므로 위치, 모양 변경 불가. 
 * 	브라우저마다 달라서 제품과 서비스 측면에서 안 좋을 수 있다.
 * → 그러나 이러한 단점들이 있어도 빠르고 간단하므로 사용이 되는 경우가 많다.
 */