import './css/styles.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';

const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const searchCountries = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');


const inputField = (e) => {
    const countryName = e.target.value.trim();
    if(!countryName) {
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';
        return;
    }

    fetchCountries(countryName)
    .then(buildCountriesMarkup)
    .catch(() => {
        Notify.failure('Oops, there is no country with that name');
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';
    });

}

const buildCountriesMarkup = (data) => { 
    if (data.length > 10) {
      Notify.warning(
        'Too many matches found. Please enter a more specific name.'
      );
      return;
    } else if (data.length >= 2 && data.length < 10) {
      countryInfo.innerHTML = '';
      countryList.innerHTML = data.map(el => {
        return `
        <li><img src=${el.flags.svg} width="20" height="20"></img><span>${el.name.official}</span></li>
        `
      }).join('');
      return;
    } else {
      countryList.innerHTML = '';
      const country = data[0];
      countryInfo.innerHTML = `<div class="container"><img src=${
        country.flags.svg
      } width="40" height=auto></img><span>${
        country.name.official
      }</span></div>
      <p>Capital: <span>${country.capital}</span></p>
      <p>Population: <span>${country.population}</span></p>
      <p>Languages: <span>${Object.values(
        country.languages
      ).join(", ")}</span></p>
        `;
    }

  };

searchCountries.addEventListener('input', debounce(inputField, DEBOUNCE_DELAY))

        

