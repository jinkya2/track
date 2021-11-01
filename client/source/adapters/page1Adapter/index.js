import { get, post } from "adapters/xhr";

// well-named functions
export function getData(){
  return get(someUrl);
}

export function setData(requestData){
  return post(someUrl, requestData);
}