import axios from "axios";

export const apiGet = async (url, headers = {}, body = {}) => {
  try {
    const response = await axios({
      method: "get",
      url,
      headers,
      data: body,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiPut = async (url, headers = {}, body = {}) => {
  try {
    const response = await axios({
      method: "put",
      url,
      headers,
      data: body,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
