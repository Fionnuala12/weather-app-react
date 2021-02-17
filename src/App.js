import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App() {
  
  let weatherData = {
    city: "Paris",
    date: "Monday, 1st Feb",
    description: "Sunny",
    temperature: 22,
    humidity: 97,
    wind: 1,
    maxTemp: 5,
    minTemp: 0,
    img: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
  };

  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form>
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="Enter city...."
                    className="form-control mb-3"
                  />
                </div>
                <div className="col-6">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary"
                  />
                  <button className="btn btn-secondary">
                    Current Location
                  </button>
                </div>
              </div>
            </form>
            <h1>{weatherData.city}</h1>
            <h2>{weatherData.date}</h2>

            <div className="row">
              <div className="col-6">
                <div className="clearfix">
                  <img src={weatherData.img} alt={weatherData.description} />
                  <div className="main-weather">
                    <span className="today-weather-temp">
                      {weatherData.temperature}
                    </span>
                    <a href="/" className="active">
                      °C
                    </a>{" "}
                    |{" "}
                    <a href="/" className="inactive">
                      F°
                    </a>
                    <div className="text-capitalize">
                      {weatherData.description}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="container grid">
                  <div className="row row-cols-2">
                    <div className="col box">
                      {weatherData.humidity}%
                      <div>
                        <i className="fas fa-tint"></i> Humidity
                      </div>
                    </div>
                    <div className="col box">
                      {weatherData.wind}kmh
                      <div>
                        <i className="fas fa-wind"></i> Wind
                      </div>
                    </div>
                    <div className="col box">
                      {weatherData.maxTemp}°C
                      <div>
                        <i className="fas fa-thermometer-three-quarters"></i>{" "}
                        Max Temp
                      </div>
                    </div>
                    <div className="col box">
                      {weatherData.minTemp}°C
                      <div>
                        <i className="fas fa-thermometer-quarter"></i>{" "}
                        Min. Temp
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="row weather-forecast">
                  <div class="col-2"> 
                  <h4> Sun </h4>
                  <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy" />
                  <div class="weather-forecast-temperature">
                    <strong> 17°</strong> 15°
                  </div>
                  </div>
                  <div class="col-2"> 
                  <h4> Mon </h4>
                  <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy" />
                  <div class="weather-forecast-temperature">
                    <strong> 17°</strong> 15°
                  </div>
                  </div>
                  <div class="col-2"> 
                  <h4> Tues </h4>
                  <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy" />
                  <div class="weather-forecast-temperature">
                    <strong> 17°</strong> 15°
                  </div>
                  </div>
                  <div class="col-2"> 
                  <h4> Wed </h4>
                  <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy" />
                  <div class="weather-forecast-temperature">
                    <strong> 17°</strong> 15°
                  </div>
                  </div>
                  <div class="col-2"> 
                  <h4> Thurs </h4>
                  <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy" />
                  <div class="weather-forecast-temperature">
                    <strong> 17°</strong> 15°
                  </div>
                  </div>
                  <div class="col-2"> 
                  <h4> Fri </h4>
                  <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy" />
                  <div class="weather-forecast-temperature">
                    <strong> 17°</strong> 15°
                  </div>
                  </div>
          </div>
        </div>
      </div>
      <small> 
    <p>
    <a href="https://github.com/Fionnuala12/weather-app-final-project">Open-source code</a> by Fionnuala Wilson
    </p>
</small>
    </div>
 </div>
  );
}

export default App;
