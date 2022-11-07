import '../css/styles.css';
import { searchCountries } from './vars';
import { inputField } from './inputField';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

searchCountries.addEventListener('input', debounce(inputField, DEBOUNCE_DELAY))

        

