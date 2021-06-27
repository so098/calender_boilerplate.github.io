const tableBody = document.querySelector('.table_body');
const toDate = document.querySelector('.monthDay__area p');
const monthYear = document.querySelector('.current_monthYear');
const tBody = document.querySelector('.table_body');
const tBodyCount = document.querySelectorAll('.table_body div');
const monthDayAreaDate = document.querySelector('.monthDay__area p');
const prevBtn = document.querySelector('.chevron_left');
const nextBtn = document.querySelector('.navigate_next');

const date = new Date();

function allTimeSet(){
    const day =date.getDay();
    const getDate = date.getDate();
    const getMonth = date.getMonth();
    const getFullYear = date.getFullYear();
let months =[
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC'
]
monthYear.innerHTML =`${months[getMonth]} ${getFullYear}`;
console.log(months[getMonth]);
console.log(day,getDate,getMonth,getFullYear);

//오늘의 현재 요일 표기
//오늘의 현재 날짜 표기
//오늘의 현재 월 표기
//오늘의 현재 연도 표기


let firstDays = new Date(getFullYear,getMonth,1).getDay();
let lastDays = new Date(getFullYear,getMonth-1,0).getDate();

console.log(lastDays);

let t ='';

//현재 월의 1일이 무슨 요일인지 판별하고, 해당 요일 라벨링에 1일 표기하기
for(let j =1; j<=firstDays; j++){
    console.log(j);
   
    t += `<div class="firstBlank">0</div>`;
}

//현재 월의 마지막 날짜까지 달력에 표기하기

for(let i=1; i<=lastDays; i++){
    t += `<div data-id=${i}>${i}</div>`;
    tableBody.innerHTML = t;
}
}
allTimeSet();


//좌측 화살표를 클릭 했을때, 이전 달의 요일 및 날짜 표기
prevBtn.addEventListener('click',()=>{
    date.setMonth(date.getMonth()-1);
    allTimeSet();
});
//우측 화살표를 클릭 했을때, 다음 달의 요일 및 날짜 표기
nextBtn.addEventListener('click',()=>{
    date.setMonth(date.getMonth()+1);
    allTimeSet();
});
//특정 날짜를 클릭 했을때, 상단의 요일 및 날짜 반영하기
tBody.addEventListener('click',(event)=>{

    let target = event.target.dataset.id;
    
    if(target){
    
    monthDayAreaDate.innerHTML =`${target}일 입니다`;
    
    }
    
    });
    
    
    