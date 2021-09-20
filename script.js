'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

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

const renderError = (msg) => {
    countriesContainer.insertAdjacentText("beforeend", msg);
    countriesContainer.style.opacity = 1;
}

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


// const getCountryData = (country) => {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((respone) => respone.json())
//     .then((data) => renderCountry(data[0]));
// };

// getCountryData("pakistan");


//chaining Promises
// const getCountryData = (country) => {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((respone) => respone.json())
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
//     }).then(response => {
//       return response.json();
//     })
//     .then(data => renderCountry(data, "neighbour"))
//     .catch(err => renderError(err))
//     .finally(() => countriesContainer.style.opacity = 1);
// };


// btn.addEventListener("click", () => {
//   getCountryData("pakistan");
// })



// const whereAmI = (lat, lng) => {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => response.json())
//     .then(data => console.log(data));
// }

// whereAmI(52.508, 13.381);



//////////////////////////////
// navigator.geolocation.getCurrentPosition(location => {
//     console.log(location);
// }, error => {
//     console.error(error);
// })

// const getPosition = () => {
//     return new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(resolve, reject)
//     })
// };

// getPosition().then(pos => console.log(pos))

// const wait = (sec) => {
//     return new Promise(resolve => {
//         setTimeout(resolve, sec * 1000);
//     })
// }

// const imageContainer = document.querySelector(".images");

// const createImage = (imgPath) => {
//     return new Promise((resolve, reject) => {
//         let img = document.createElement("img");
//         img.src = imgPath;

//         img.addEventListener("load", () => {
//             imageContainer.append(img);
//             resolve(img);
//         })

//         img.addEventListener("error", () => {
//             reject(new Error("Image is not Found"));
//         })
//     })
// }

// let currImage;

// createImage("img/img-1.jpg")
//     .then(res => {
//         currImage = res;
//         console.log("Image 1 is loaded")
//         return wait(2);
//     })
//     .then(() => {
//         currImage.style.display = "none";
//         return wait(2);
//     })
//     .then(() => {
//         return createImage("img/img-2.jpg");
//     })
//     .then(res => {
//         currImage = res;
//         console.log("Image 2 is loaded")
//         return wait(2);
//     })
//     .then(() => {
//         currImage.style.display = "none";
//     })
//     .catch(err => console.log(err));

const whereIAm = async (country) => {
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
    const data = await response.json();
    renderCountry(data[0]);
    console.log("Hello");
}
whereIAm("canada");
console.log("End");