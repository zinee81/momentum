// 1. 현재시간
// 2. 인사말 + 글자생성 효과
// 3. 명언

// timer를 출력할 div element를 가져옴
const timer = document.getElementById("timer");
const ment = document.getElementById("ment");
const todo = document.getElementById("todo");
const saying = document.getElementById("saying");
const nameDiv = document.getElementById("nameDiv");
let name = "";
const nameBtn = document.getElementById("nameBtn");

// 현재시간, 인사말 출력 함수 호출
nowTime();

function nowTime() {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  // let second = today.getSeconds();
  // 현재 시간을 출력 (시간이나 분이 10보다 작을때 앞에 0을 붙임)
  let curTme = `${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute}`; //:${second < 10 ? "0" + second : second}
  // timer div에 시간 출력
  timer.textContent = curTme;

  name === null ? (name = document.getElementById("name").value) : name;

  if (hour > 0 && hour < 12) {
    ment.textContent = `Good morning, ${name}`;
  } else if (hour > 12 && hour < 18) {
    ment.textContent = `Good afternoon, ${name}`;
  } else if (hour >= 18 && hour < 21) {
    ment.textContent = `Good evening, ${name}`;
  } else if (hour >= 21 && hour <= 23) {
    ment.textContent = `Good night, ${name}`;
  }
}
// 현재 시간을 1초 마다 반복
setInterval(nowTime, 1000);

// 이름 입력받기
nameBtn.addEventListener("click", () => {
  name = document.getElementById("name").value + "!";
  nameDiv.textContent = "";
});

// todo 리스트
const todoBtn = document.getElementById("todoBtn"); //버튼
let addValue = document.getElementById("addValue"); //할일 입력
let result = document.getElementById("result"); // 추가된 할일

//할일 추가시
function addTodo() {
  if (addValue.value == false) {
    alert("내용을 입력하세요!");
  } else {
    let list = document.createElement("li");
    list.innerHTML = addValue.value;
    let del = document.createElement("button");
    del.innerText = "X"; //삭제버튼에 들어갈 'x'자 문자
    del.style.fontSize = "13px";
    del.style.border = "none";
    del.style.float = "right";
    del.style.backgroundColor = "#666666";
    del.style.marginTop = "5px";
    del.style.cursor = "pointer";
    del.addEventListener("click", deleteList); //삭제버튼 클릭시 리스트지우기 이벤트 실행
    del.style.position = "relative";
    list.appendChild(del); //할일 리스트 추가시 삭제버튼도 추가
    result.appendChild(list); //추가된 할일에 할일 리스트 추가하기

    /*할일 추가할 때마다 삭제버튼도 같이 추가돼기-이 방법도 가능 */
    // list.innerHTML += "<button type='button' id ='removeBtn' onclick='deleteList()'><i class='fa-solid fa-xmark'></i></button>";

    addValue.value = ""; //할일 입력창 초기화
    addValue.focus(); //강제 커서 깜빡임
    list.addEventListener("click", function () {
      //할일 완료 후 클릭시 밑줄로 표시
      list.style.textDecoration = "line-through";
      list.style.color = "gray"; //클릭시 색변환
    });
  }
}
//할일 목록 삭제시
function deleteList(e) {
  //삭제 버튼(x) 클릭시
  let removeOne = e.target.parentElement; //선택한 목록 한개만 지우기(부모 객체를 지운다)
  removeOne.remove();
}
// 모두 삭제시
function allClearList(e) {
  if (confirm("정말 삭제하시겠습니까?") == true) {
    //취소메시지가 true(ok)일때
    if (result.innerText == "") {
      //목록칸이 비어있다면
      alert("삭제할 목록이 없습니다"); //삭제할 목록이 없다는 경고창뜨기
    } else {
      //삭제할 목록이 있다면
      result.innerText = ""; //전체 삭제
    }
  } else {
    //취소메시지가 false(no)일때
    return false; //삭제 취소
  }
}

// 명언 랜덤 출력
const sayingArr = [
  "앞에서 할 수 없는 말은 뒤에서도 하지마라.",
  "목소리의 톤이 높아질수록 뜻은 왜곡된다.",
  "칭찬에는 발이 달렸다면, 험담에는 날개가 달려있다.",
  "혀를 다스리는 건 나이지만, 내뱉어진 말은 나를 다스린다.",
  "말을 독점하면 적이 많아진다. 적게 말하고 많이 들어라.",
  "내가 하고 싶어하는 말보다, 상대방이 듣고싶은 말을 해라.",
];
saying.textContent = sayingArr[Math.floor(Math.random() * sayingArr.length)];
