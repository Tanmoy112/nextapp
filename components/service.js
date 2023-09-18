import axios from "axios";

let HTTP = axios.create({
  baseURL: "https://fakestoreapi.com/",
});
const getProduct = () => {
  return HTTP.get(`products`)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      return err;
    });
};
export { getProduct };
