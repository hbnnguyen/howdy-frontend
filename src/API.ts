import axios, { AxiosError } from "axios";
import { UserFormData } from "./user";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 */

export class FriendlyApi {
  static token?: string;

  static async request(endpoint: string, data = {}, method = "get") {
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${FriendlyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error("API Error:", err.response);
        let message = err.response?.data.error.message;
        throw Array.isArray(message) ? message : [message];
      } else {
        console.error(err);
      }
    }
  }

  // Individual API routes

  static async registerUser(user: UserFormData) {
    let res = await this.request(`auth/register`, user, "post");
    return res.token;
  }

}