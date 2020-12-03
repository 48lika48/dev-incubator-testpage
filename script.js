//stop sending 
document.querySelector('form').addEventListener("click", function(event){
    event.preventDefault()
  });

//member info
let member1 = document.getElementById('member1');
let member1Info = document.getElementById('member1_info');
member1.addEventListener('mouseover', (event) => {
  member1Info.classList.add('active');
});
member1.addEventListener('mouseleave', (event) => {
  member1Info.classList.remove('active');
});

let member2 = document.getElementById('member2');
let member2Info = document.getElementById('member2_info');
member2.addEventListener('mouseover', (event) => {
  member2Info.classList.add('active');
});
member2.addEventListener('mouseleave', (event) => {
  member2Info.classList.remove('active');
});

let member3 = document.getElementById('member3');
let member3Info = document.getElementById('member3_info');
member3.addEventListener('mouseover', (event) => {
  member3Info.classList.add('active');
});
member3.addEventListener('mouseleave', (event) => {
  member3Info.classList.remove('active');
});

let member4 = document.getElementById('member4');
let member4Info = document.getElementById('member4_info');
member4.addEventListener('mouseover', (event) => {
  member4Info.classList.add('active');
});
member4.addEventListener('mouseleave', (event) => {
  member4Info.classList.remove('active');
});

let member5 = document.getElementById('member5');
let member5Info = document.getElementById('member5_info');
member5.addEventListener('mouseover', (event) => {
  member5Info.classList.add('active');
});
member5.addEventListener('mouseleave', (event) => {
  member5Info.classList.remove('active');
});

let member6 = document.getElementById('member6');
let member6Info = document.getElementById('member6_info');
member6.addEventListener('mouseover', (event) => {
  member6Info.classList.add('active');
});
member6.addEventListener('mouseleave', (event) => {
  member6Info.classList.remove('active');
});

// popup big img
let imageBlock = document.getElementById('image_block');
let work1 = document.getElementById('work1');
let work2 = document.getElementById('work2');
let work3 = document.getElementById('work3');
let work4 = document.getElementById('work4');
let work5 = document.getElementById('work5');
let work6 = document.getElementById('work6');
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');
let image4 = document.getElementById('image4');
let image5 = document.getElementById('image5');
let image6 = document.getElementById('image6');

work1.addEventListener('click', (event) => {
  imageBlock.classList.remove('hidden');
  image1.classList.remove('hidden');
});
work2.addEventListener('click', (event) => {
  imageBlock.classList.remove('hidden');
  image2.classList.remove('hidden');
});
work3.addEventListener('click', (event) => {
  imageBlock.classList.remove('hidden');
  image3.classList.remove('hidden');
});
work4.addEventListener('click', (event) => {
  imageBlock.classList.remove('hidden');
  image4.classList.remove('hidden');
});
work5.addEventListener('click', (event) => {
  imageBlock.classList.remove('hidden');
  image5.classList.remove('hidden');
});
work6.addEventListener('click', (event) => {
  imageBlock.classList.remove('hidden');
  image6.classList.remove('hidden');
});

image1.addEventListener('click', (event) => {
  imageBlock.classList.add('hidden');
  image1.classList.add('hidden');
});
image2.addEventListener('click', (event) => {
  imageBlock.classList.add('hidden');
  image2.classList.add('hidden');
});
image3.addEventListener('click', (event) => {
  imageBlock.classList.add('hidden');
  image3.classList.add('hidden');
});
image4.addEventListener('click', (event) => {
  imageBlock.classList.add('hidden');
  image4.classList.add('hidden');
});
image5.addEventListener('click', (event) => {
  imageBlock.classList.add('hidden');
  image5.classList.add('hidden');
});
image6.addEventListener('click', (event) => {
  imageBlock.classList.add('hidden');
  image6.classList.add('hidden');
});

//map 
//API key 9a714a10-db35-4b9b-8edc-358482264671
let myMap;
ymaps.ready(init);
function init () {
  myMap = new ymaps.Map('map', {
    center: [53.132341, 26.017609],
    zoom: 12
  }, {
    searchControlProvider: 'yandex#search'
  });
}
