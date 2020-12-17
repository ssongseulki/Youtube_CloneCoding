const moreBtn = document.querySelector(".info .metadata .moreBtn");
const title = document.querySelector(".info .metadata .title");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});


function upBtnClick() {
  const upBtn = document.querySelector("#upNum");
  const upNum = Number(upBtn.innerHTML);
  upBtn.innerHTML = upNum + 1 ;
};

function downBtnClick() {
  const downBtn = document.querySelector("#downNum");
  const downNum = Number(downBtn.innerHTML);
  downBtn.innerHTML = downNum + 1 ;
};

function saveBtnClick() { 
  alert("저장되었습니다.");
}

function reportBtnClick() {
 const inputReport =  prompt("신고내용을 입력하세요.");
  
  if (inputReport != null) {
    alert("신고되었습니다.");
  };
}
