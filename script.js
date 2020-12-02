//stop sending 
document.querySelector('form').addEventListener("click", function(event){
    event.preventDefault()
  });

//member info
let member1 = document.getElementById('member1');
let member1Info = document.getElementById('member1_info');
member1.addEventListener('mouseover', (event) => {
  member1_info.classList.add('active');
});
member1.addEventListener('mouseleave', (event) => {
  member1_info.classList.remove('active');
});

let member2 = document.getElementById('member2');
let member2Info = document.getElementById('member2_info');
member2.addEventListener('mouseover', (event) => {
  member2_info.classList.add('active');
});
member2.addEventListener('mouseleave', (event) => {
  member2_info.classList.remove('active');
});

let member3 = document.getElementById('member3');
let member3Info = document.getElementById('member3_info');
member3.addEventListener('mouseover', (event) => {
  member3_info.classList.add('active');
});
member3.addEventListener('mouseleave', (event) => {
  member3_info.classList.remove('active');
});

let member4 = document.getElementById('member4');
let member4Info = document.getElementById('member4_info');
member4.addEventListener('mouseover', (event) => {
  member4_info.classList.add('active');
});
member4.addEventListener('mouseleave', (event) => {
  member4_info.classList.remove('active');
});

let member5 = document.getElementById('member5');
let member5Info = document.getElementById('member5_info');
member5.addEventListener('mouseover', (event) => {
  member5_info.classList.add('active');
});
member5.addEventListener('mouseleave', (event) => {
  member5_info.classList.remove('active');
});

let member6 = document.getElementById('member6');
let member6Info = document.getElementById('member6_info');
member6.addEventListener('mouseover', (event) => {
  member6_info.classList.add('active');
});
member6.addEventListener('mouseleave', (event) => {
  member6_info.classList.remove('active');
});
