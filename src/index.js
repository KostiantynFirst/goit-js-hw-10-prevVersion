import './css/styles.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';
import {inputField} from './inputField'


const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const searchCountries = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchCountries.addEventListener('input', debounce(inputField, DEBOUNCE_DELAY))

        

