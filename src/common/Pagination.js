// function to get an array of each page

import _ from "lodash"

export function pagination(items, pageNumber, pageSize){
    const startingIndex = (pageNumber-1)*pageSize
    return _(items).slice(startingIndex).take(pageSize).value()
    }