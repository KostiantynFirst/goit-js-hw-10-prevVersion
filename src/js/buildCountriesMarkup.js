import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { countryInfo, countryList } from './vars';

export const buildCountriesMarkup = (data) => { 
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