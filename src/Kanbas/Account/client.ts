// src/Kanbas/Account/client.ts

import axios from "axios";
import { Credentials, User } from "./types";

const axiosWithCredentials = axios.create({ withCredentials: true });
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || 'http://localhost:4000';
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const signin = async (credentials: Credentials) => {
  try {
    const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
    return response.data;
  } catch (error) {
    console.error("Error during signin:", error);
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Signin failed");
    }
    throw error;
  }
};

export const profile = async () => {
  try {
    const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
    return response.data;
  } catch (error) {
    console.error("Error during profile fetch:", error);
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Profile fetch failed");
    }
    throw error;
  }
};

export const signup = async (user: User) => {
  try {
    const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
    return response.data;
  } catch (error) {
    console.error("Error during signup:", error);
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Signup failed");
    }
    throw error;
  }
};

export const signout = async () => {
  try {
    const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
    return response.data;
  } catch (error) {
    console.error("Error during signout:", error);
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Signout failed");
    }
    throw error;
  }
};

export const findUserById = async (id: string) => {
  try {
    const response = await axiosWithCredentials.get(`${USERS_API}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error during findUserById:", error);
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Find user by ID failed");
    }
    throw error;
  }
};
