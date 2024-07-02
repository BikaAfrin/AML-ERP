import axios from "axios"; //JavaScript library for making HTTP requests to APIs
import { UserProfileToken } from "../Models/User";
import { handleError } from "../Helpers/ErrorHandler";

export const loginAPI = async (username: string, password: string) => {
  try {
    // Simulating an API call with a delay
    const data = await new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (username === 'Bima' && password === '123') {
          console.log("authservice");
          resolve(username);  // Return the username as a string
        } else {console.log("................................");
          reject(Error);
        }
      }, 1000);
    });
    console.log(data);
    return data;
  } catch (error) {
    //handleError(error);
    console.log("catch");
    return 'Invalid credentials';
  }
};