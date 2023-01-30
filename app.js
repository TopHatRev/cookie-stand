function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

const seattle = {
  name: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  custPerHour: [],
  cookiesPerHour: [],
  calcCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numCust = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCust);
    }
    this.calcCookiesPerHour();
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < this.custPerHour.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.custPerHour[i] * 6.3));
    }
  },
  render: function () {
    this.calcCustPerHour();
    const seattleDiv = document.getElementById("seattle");

    const h2 = document.createElement("h2");
    h2.textContent = seattle.name;
    seattleDiv.appendChild(h2);

    const ul = document.createElement("ul");
    seattleDiv.appendChild(ul);

    for (let i = 0; i < seattle.cookiesPerHour.length; i++) {
      const li = document.createElement("li");
      li.textContent = seattle.cookiesPerHour[i] + " cookies";
      ul.appendChild(li);
      console.log(seattle.cookiesPerHour[i]);
    }
  },
};
seattle.render();

const tokyo = {
  name: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  custPerHour: [],
  getCustPerHour: function() {
    for(let i = 0; i < hours.length; i++) {
      let numCusts = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCusts)
    }
  }
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

tokyo.getCustPerHour();
console.log(tokyo)

const dubai = {
  name: "Dubai",
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  custPerHour: [],
  getCustPerHour: function() {
    for(let i = 0; i < hours.length; i++) {
      let numCusts = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCusts)
    }
  }
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

dubai.getCustPerHour();
console.log(dubai)

const paris = {
  name: "Paris",
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  custPerHour: [],
  getCustPerHour: function() {
    for(let i = 0; i < hours.length; i++) {
      let numCusts = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCusts)
    }
  }
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

paris.getCustPerHour();
console.log(paris)

const lima = {
  name: "Lima",
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  custPerHour: [],
  getCustPerHour: function() {
    for(let i = 0; i < hours.length; i++) {
      let numCusts = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCusts)
    }
  }
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

lima.getCustPerHour();
console.log(lima)


