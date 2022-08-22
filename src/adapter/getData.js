import axios from "axios";

export const getData = async () => {
  let covidInfo = new Promise(async (resolve, reject) => {
    try {
      covidInfo = await axios.get("https://covidnigeria.herokuapp.com/api");
    } catch (ex) {
      covidInfo = null;
      // error
      console.log(ex);
      reject(ex);
    }
    if (covidInfo) {
      // success
      const json = covidInfo.data;
      resolve(json);
    }
  });
  return covidInfo;
};
