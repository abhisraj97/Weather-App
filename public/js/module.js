
window.addEventListener("DOMContentLoaded", (event) => {
  
  const sB =  document.getElementById("submitBtn");
  const cityName =  document.getElementById("cityName");
  
  const city_name = document.getElementById('city_name');
  const temp_real = document.getElementById('temp_real');
  const tempStatus = document.getElementById('temp_status');
  const datahide = document.querySelector('.middle_layer')
  const getInfo = async(event) =>{
    
    event.preventDefault()
    const cityVal = cityName.value;
    
    if(cityVal === ""){
      city_name.innerText = 'Plz write the name before search';

    }else{
      try{
      
      const url = await `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=e19666e4245f6fa43d803a3fbd9f183e`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const arrData = [data];
      city_name.innerText  =` ${arrData[0].name}, ${arrData[0].sys.country}`;
      temp_real.innerText= arrData[0].main.temp;
      
      const tempMood =  arrData[0].weather[0].main;
      if(tempMood == "Clear"){
        tempStatus.innerHTML =
     "<i class='fas fa-sun' style='color:#eccc68;'></i>";
      }else if(tempMood == "Clouds"){
        tempStatus.innerHTML =
        "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
      }
      else if(tempMood == "Rain"){
        tempStatus.innerHTML =
        "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
      }
      else{
        tempStatus.innerHTML =
        "<i class='fas fa-sun' style='color:#eccc68;'></i>";
      }
    }catch{
      city_name.innerText='plz enter the city name peoperly';
    }
  }
};

// if(sB)
sB.addEventListener("click",getInfo,false);
});
  
  
