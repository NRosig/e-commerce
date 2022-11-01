import {data}from "../components/data"

 export function getData()  {
    return {
        type: "GET_DATA",
        payload: data,
    }
}