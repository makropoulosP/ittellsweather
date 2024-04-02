class View {
  _errMessage = "Invalid city name :(";
  _parentElement = document.querySelector(".form");

  addHandlerSearch(handler) {
    this._parentElement.addEventListener(
      "submit",
      function (e) {
        e.preventDefault();
        const query = this.getQuery();
        handler(query);
      }.bind(this)
    );
  }
  getQuery() {
    const query = document.getElementById("input-field").value;
    this._clearInput();
    return query;
  }

  renderResult(result) {
    document.querySelector(".weather").innerHTML = "";
    const htmlText = this._generateHTML(result);
    document
      .querySelector(".weather")
      .insertAdjacentHTML("afterbegin", htmlText);
  }
  renderErrorMsg(err) {
    document.querySelector(".weather").innerHTML = "";
    document
      .querySelector(".weather")
      .insertAdjacentHTML("afterbegin", this._errMessage);
  }
  _generateHTML(result) {
    return `
    <img src="../images/${result.weather}.png" alt="weather-image" class="weather-icon" />
    <h1 class="temp">${result.temp}°C</h1>
    <h2 class="city">${result.name}</h2>
    <div class="details">
      <div class="col">
        <img src="images/humidity.png" alt="image" />
        <div>
          <p class="humidity">${result.humidity}%</p>
          <p>Humidity</p>
        </div>
      </div>
      <div class="col">
        <img src="images/wind.png" alt="image" />
        <div>
          <p class="wind">${result.windSpeed} km/h</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>`;
  }
  _clearInput() {
    document.getElementById("input-field").value = "";
  }
}
export default new View();
