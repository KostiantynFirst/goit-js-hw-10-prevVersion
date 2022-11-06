import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';
import {buildCountriesMarkup} from './buildCountriesMarkup'

const searchCountries = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

export const inputField = (e) => {
    const countryName = e.target.value.trim();
    if(!countryName) {
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';
        return;
    }

    fetchCountries(countryName)
    .then(buildCountriesMarkup)
    .catch(() =>
        Notify.failure('Oops, there is no country with that name')
    );
}