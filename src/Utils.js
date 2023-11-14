import axios from "axios";

/**
 *
 * @param {string} path
 * @param {import("axios").Method} method
 * @param {object} data
 * @returns {object}
 */
export const makeRequest = async (
  client,
  path,
  method = "get",
  data = null
) => {
  const url = client.endpoint + path;
  const headers = { Authorization: client.token };

  axios.defaults.headers = headers;

  try {
    const res = await axios[method](url, data);
    return resResolver(res);
  } catch (error) {
    APIError("RequestError", error);
    return;
  }
};

/**
 *
 * @param {import("axios").AxiosResponse} res
 * @returns {Object}
 */
export const resResolver = (res) => {
  return res.data.result.data.json;
};

/**
 *
 * @param {import("axios").AxiosError} err
 * @returns {Object}
 */
export const errResolver = (err) => {
  console.log(err.response.data);
  return err.response.data.error.json;
};

export const APIError = (type, error) => {
  throw new Error(`${type || "API Error"}: ${errResolver(error).message}`);
};
