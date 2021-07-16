    let local = document.querySelector('.location')
    let description = document.querySelector('.weather')
    let temperature = document.querySelector('.temp')
    let maxTemp = document.querySelector('.temp_max')
    let minTemp = document.querySelector('.temp_min')
    let feels = document.querySelector('.feels_like')

    document.getElementById('txtcidade').focus()

    // When ENTER pressed
    var input = document.getElementById('txtcidade');
    input.addEventListener('keyup', function(event) {
     if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('submit').click();
            }
        });
    // When ENTER pressed

function tempo(){
    
    let city = document.getElementById('txtcidade').value 
   
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=ce732c3be985adc1e2e1e1ab360eaad2",function(data){

    
    console.log(data);

    var city = data.name
    var country = data.sys.country
    var location = city + ', ' + country
    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
    var temp = Math.floor(data.main.temp) + 'ºC'
    var temp_max = Math.floor(data.main.temp_max) + 'ºC'
    var temp_min = Math.floor(data.main.temp_min) + 'ºC'
    var weather = data.weather[0].description
    var feels_like = Math.floor(data.main.feels_like) + 'ºC'
     
    
    local.innerHTML = location
    $('.icon').attr('src', icon)
    description.innerHTML = weather   
    temperature.innerHTML = temp
    maxTemp.innerHTML = temp_max
    minTemp.innerHTML = temp_min
    feels.innerHTML = feels_like

    document.getElementById('txtcidade').value = ""
    document.getElementById('txtcidade').focus()
   
    /* 
    $('.location').append(location) //.location - class location 
    $('.temp').append(temp)
    $('.weather').append(weather)
    $('.temp_max').append(temp_max)
    $('.temp_min').append(temp_min)
    $('.feels_like').append(feels_like) 
    */
   
});

}

function forecast() {
   /* $.getJSON("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=ce732c3be985adc1e2e1e1ab360eaad2",function(data){
*/
$.getJSON("https://api.openweathermap.org/geo/1.0/direct?q=Lisbon&limit=5&appid=ce732c3be985adc1e2e1e1ab360eaad2", function(data) {
        console.log(data)


        let lat = [0].lat
        let long =[0].lon
        let geo = lat + ',' + long

        $('.geo').append(geo)

        document.getElementById('txtcidade').value = ""
    });

}