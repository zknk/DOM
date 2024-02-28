

const btn=document.querySelector(".search button");

// console.log(city.value);

const apiKey="9baaa6389eceba1715227a336b1c4f8e";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";
// const api="https://api.openweathermap.org/data/2.5/weather?q=gaya&appid=9baaa6389eceba1715227a336b1c4f8e";


const checkWeather=async()=>{
    const city=document.querySelector(".search input").value;
    console.log(city);
  const response =await  fetch(apiUrl+`&q=${city}`+`&appid=${apiKey}`);
  var data=await response.json();
  console.log(data);

   document.querySelector(".city").innerHTML=data.name;
   document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
   document.querySelector(".humid").innerHTML=data.main.humidity+"%";
   document.querySelector(".speed").innerHTML=data.wind.speed;

}

btn.addEventListener('click',()=>{
    // console.log(city.value);
    checkWeather(); 
} );