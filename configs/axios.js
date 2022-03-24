import axios from "axios";

export default axios.create({
  baseURL: "https://api.foursquare.com/v3/places",
  headers: {
    Accept: "application/json",
    Authorization: "fsq3IzzTqjRrVfvf35OZgfIfKUuM6btbgm10RN/7h/WU410=",
  },
});
