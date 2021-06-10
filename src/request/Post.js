import axios from "axios";
import router from "../router";
import store from "../store";
import ErrorMessageParser from "@/parsers/ErrorMessageParser";
const postFunction = function (requestdata) {
  return new Promise((resolve, reject) => {
    axios
      .post(requestdata.url, requestdata.data, {})
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
        store.commit("setErrorMessage", ErrorMessageParser(error));
        console.log(error);
        if (
          error.response.status === 401 ||
          error.response.data.message === "404 Unauthorized"
        ) {
          console.log("redirect");
          router.push("/");
        }
      });
  });
}

const getFunction = function (requestdata) {
  return new Promise((resolve, reject) => {
    axios
      .get(requestdata.url, requestdata.data, {})
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
        store.commit("setErrorMessage", ErrorMessageParser(error));
        console.log(error.response);
        if (
          error.response.status === 401 ||
          error.response.data.message === "401 Unauthorized"
        ) {
          console.log("redirect");
          router.push("/");
        }
      });
  });
}
export {postFunction};
export {getFunction};