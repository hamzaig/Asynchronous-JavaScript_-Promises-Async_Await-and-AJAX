'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////


// const getCountryData = (country) => {

//     const request = new XMLHttpRequest();
//     request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
//     request.send();

//     request.addEventListener("load", function () {
//         // const data = JSON.parse(this.responseText)[0];
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
//         const html = ` 
//         <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${((+data.population) / 1000000).toFixed(2)}M People</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//         </article>`;
//         countriesContainer.insertAdjacentHTML("beforeend", html);
//         countriesContainer.style.opacity = 1;

//     })
// };

// getCountryData("pakistan");



const renderCountry = function (data, className = "") {
  const html = ` 
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${((+data.population) / 1000000).toFixed(2)}M People</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
}

// const getCountryAndNeighbour = (country) => {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     renderCountry(data);
//     const [neighbour] = data.borders;
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener("load", function () {
//       const data1 = JSON.parse(this.responseText);
//       renderCountry(data1, "neighbour");
//     });
//   });
// };

// getCountryAndNeighbour("pakistan");

// Call Back Hell

// setTimeout(() => {
//   console.log("1 Second Passed");
//   setTimeout(() => {
//     console.log("2 Second Passed");
//     setTimeout(() => {
//       console.log("3 Second Passed");
//       setTimeout(() => {
//         console.log("4 Second Passed");
//         setTimeout(() => {
//           console.log("5 Second Passed");
//           setTimeout(() => {
//             console.log("6 Second Passed");
//             setTimeout(() => {
//               console.log("7 Second Passed");
//               setTimeout(() => {
//                 console.log("8 Second Passed");
//                 setTimeout(() => {
//                   console.log("9 Second Passed");
//                   setTimeout(() => {
//                     console.log("10 Second Passed");
//                     setTimeout(() => {
//                       console.log("11 Second Passed");
//                       setTimeout(() => {
//                         console.log("12 Second Passed");
//                       }, 1000);
//                     }, 1000);
//                   }, 1000);
//                 }, 1000);
//               }, 1000);
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);


const getCountryData = (country) => {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((respone) => respone.json())
    .then((data) => renderCountry(data[0]));
};

getCountryData("pakistan");