import { get } from '../get.js'

export function getHomeData(city) {
    return get('/api/2')
}

export function getListData(city, page) {
    return get('/api/1')
}