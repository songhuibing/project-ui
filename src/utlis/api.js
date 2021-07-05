import { get, post } from './request.js'

export const login = params => post('/users/login', params);
export const pageDataList = params => get('/users/pageData/list', params);