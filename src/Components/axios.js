import axios from 'axios';
import { baseUrl } from '../constants/constants';
 export const instance = axios.create({
    baseURL: baseUrl,
  });

