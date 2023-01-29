import axios from "axios";
const API_URL: string = process.env.REACT_APP_API_URL as string;

export const fetchTaxBrackets = async (enpoint: string) => {
  try {
    const response = await axios.get(`${API_URL}${enpoint}`);
    return response;
  } catch (error) {
    throw error;
  }
};
