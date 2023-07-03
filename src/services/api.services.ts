import axios from "axios";
import { LoginProps } from "../types/user.type";
import RecadosType from "../types/recados.type";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

export interface AddRecados {
  descricao: string;
  detalhes: string;
}

export class ApiService {
  public static async listRecados(id: string) {
    try {
      const result = await api.get(`/users/${id}/recados`);

      console.log("log result api service", result);
      return result.data;
    } catch (error: any) {
      console.log(error);
      return;
    }
  }
}

export const addRecados = async (id: string, props: AddRecados) => {
  try {
    const result = await api.post(`/users/${id}/recados`, {
      descricao: props.descricao,
      detalhes: props.detalhes,
    });

    return result.data;
  } catch (error: any) {
    console.log(error);
    return error.response.data;
  }
};

export const loginPost = async (props: LoginProps): Promise<ApiResponse> => {
  try {
    const result = await api.post("/users/login", {
      email: props.email,
      password: props.password,
    });

    console.log("log result axios", result);

    return result.data;
  } catch (error: any) {
    console.log(error);
    return error.response.data;
  }
};
