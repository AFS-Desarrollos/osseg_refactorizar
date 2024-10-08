import axios from "axios";
import * as https from "https";

export const apiClient = axios.create({
  baseURL: "https://app-afiliados.audifarmsalud.com:50000/b1s/v1",
  headers: { "Content-Type": "application/json" },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

const loginParams = {
  CompanyDB: "SBOAUDIFRPRDAR",
  UserName: "blx",
  Password: "Audi.2021",
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