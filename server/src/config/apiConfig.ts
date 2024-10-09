import axios from "axios";
import dotenv from 'dotenv';
import * as https from "https";

dotenv.config({ path: './.env' });

export const apiClient = axios.create({
  baseURL: process.env.BASE_URL,
  headers: { "Content-Type": "application/json" },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

const loginParams = {
  CompanyDB: process.env.COMPANY_DB,
  UserName: process.env.USER_NAME,
  Password: process.env.PASSWORD,
};

export async function loginToAPI() {
  try {
    const response = await apiClient.post("/Login", loginParams);
    
    return response.data.SessionId;
  } catch (error) {
    console.error("Error en la autenticación:", error);
    throw error;
  }
}