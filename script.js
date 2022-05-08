let loc=document.getElementById("location");
let tempvalue=document.getElementById("temp-value");
let icon=document.getElementById("temp-icon");
let climate=document.getElementById("climate");
let iconfile;

const searchinput=document.getElementById("search-input");
const searchbutton=document.getElementById("button");


searchbutton.addEventListener('click',(e)=>{
    e.preventDefault();
    getWeather(searchinput.value);
    searchinput.value='';
})

const getWeather=async (city)=>{
    try{

        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=254f74bd063a0d2a6483f751f03d59ad`);
        
        const weatherData=await response.json();
        console.log(weatherData);
        const{name}=weatherData;
        const{feels_like}=weatherData.main;
        const{id,main}=weatherData.weather[0];
        loc.textContent=name;
        climate.textContent=main;
        tempvalue.textContent=Math.round(feels_like-273);
        
            if(id<300 && id>200)
            {
                icon.src="./icons/thunderstrom.png";
            }
            else if(id<400 && id>300)
            {
                icon.src="./icons/thunderstrom.png";
            }
            else if(id<600 && id>500)
            {
                icon.src="./icons/snowman.png";
            }
            else if(id<800 && id>=700)
            {
                icon.src="./icons/atmospheric-pollution.png";
            }
            else if(id==800)
            {
                icon.src="./icons/sun.png";
            }
            else if(id<805 && id>=801)
            {
                icon.src="./icons/clouds.png";
            }
        
    }
    catch(error)
    {
        alert("City nit found");
    }
};

window.addEventListener('load',()=>{
    let long;
    let lat;

    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position)=>{
        long=position.coords.longitude;
        lat=position.coords.latitude;
        const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=254f74bd063a0d2a6483f751f03d59ad`

        fetch(api).then((response)=>{
            return response.json();

        })
        .then(data=>{
            const{name}=data;
            const{feels_like}=data.main;
            const{id,main}=data.weather[0];

            loc.textContent=name;
            climate.textContent=main;
            tempvalue.textContent=Math.round(feels_like-273);

            if(id<300 && id>200)
            {
                icon.src="./icons/thunderstrom.png";
            }
            else if(id<400 && id>300)
            {
                icon.src="./icons/thunderstrom.png";
            }
            else if(id<600 && id>500)
            {
                icon.src="./icons/snowman.png";
            }
            else if(id<800 && id>=700)
            {
                icon.src="./icons/atmospheric-pollution.png";
            }
            else if(id==800)
            {
                icon.src="./icons/sun.png";
            }
            else if(id<805 && id>=801)
            {
                icon.src="./icons/clouds.png";
            }
            console.log(data);
        })
        })
    }
})