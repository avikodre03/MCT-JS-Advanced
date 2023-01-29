const searchInput = document.getElementById("input")
const card = document.getElementById("card")


async function func() {
    const location = searchInput.value
    const Responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`)
    const data = await Responce.json()

    if (location == "") {
        card.classList.remove("card")
        card.innerHTML = ""
        const alert = document.getElementById("alert")
        alert.innerHTML = `<i class="fa-solid fa-map-location-dot"></i> Please Enter a location`

    } else {
        const alert = document.getElementById("alert")
        alert.innerHTML = ""
        let card = document.getElementById("card")
        card.classList.add("card")

        if (data.name == undefined) {
            card.classList.remove("card");
            card.innerHTML = ""
            alert.innerHTML = `<i class="fa-solid fa-map-location-dot"></i> Please Enter a valid location`

        } else {
            const Month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
            const now = new Date()
            const name1 = Month[now.getMonth()];
            const date = now.getDate()

            card.innerHTML = `
            <h2 id="dynamicLocation"><i class="fa-solid fa-location-dot"></i> ${data.name}</h2>
            <p id="cal">Today, ${date}-${name1}</p>
            <h1 id="Temperature"><i class="fa-solid fa-temperature-three-quarters"></i> ${data.main.temp} ℃</h1>
            <h3 id="skyCondition">${data.weather[0].description}</h3>
            
            <div class="details">
            <div class="windSpeed"> 
            <div id="windSpeed1"><i class="fa-solid fa-wind"></i>wind</div> <div id="windSpeed2">${data.wind.speed} Km/h</div> 
            </div>
            <div class="humidity"> 
            <div id="humidity1"><i class="fa-solid fa-droplet"></i>humidity</div> <div id="humidity2" >${data.main.humidity} %</div>
             </div>
            <div class="feelslike"> 
            <div id="feelslike1"><i class="fa-solid fa-temperature-low"></i>feels like</div> <div id="feelslike2" >${data.main.feels_like} ℃</div>
             </div>
            <div class="pressure"> 
            <div id="pressure1"><i class="fa-solid fa-cloud"></i>pressure</div> <div id="pressure2" > ${data.main.pressure} hPa</div> 
            </div>
            </div>
            `

        }
    }
}
