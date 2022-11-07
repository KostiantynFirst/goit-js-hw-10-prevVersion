import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';
import {buildCountriesMarkup} from './buildCountriesMarkup'
import { countryInfo, countryList } from './vars';

export const inputField = (e) => {
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