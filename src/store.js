import {proxy} from 'valtio'

const state = proxy({
    count: 4
})

export default state