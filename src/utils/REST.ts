import REST from "ft-rest";

REST.prototype._bodyToQueryParams = (body = null) => {
  return "input=" + encodeURIComponent(JSON.stringify(body));
};

REST.prototype._responseResolver = (res) => {
  return res.data.result.data.json;
};

REST.prototype._errorResolver = (res) => {
  return res.response.data.error.json;
};

export default REST;
