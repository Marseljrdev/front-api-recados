import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RecadosType from "../../types/recados.type";
import { AddRecados, ApiService, addRecados } from "../../services/api.services";

interface ListRecadosProps {
  id: string;
}


interface AddRecadosProps extends ListRecadosProps, AddRecados {}

export const recadosAction = createAsyncThunk(
  "recados/list",
  async (props: ListRecadosProps) => {
    const result = await ApiService.listRecados(props.id);
    console.log("log result async thunk recados", result);

    return result;
  }
);
export const addRecadosAction = createAsyncThunk(
  "recados/add",
  async (props: AddRecadosProps) => {
    const { id, descricao, detalhes } = props;
    const result = await addRecados(id, {descricao, detalhes});
    console.log("log result async thunk recados", result);
    return result;
  }
);

const recadosSlice = createSlice({
  name: "recados",
  initialState: [] as RecadosType[],
  reducers: {  },
  extraReducers(builder) {
    builder.addCase(recadosAction.pending, () => {
      console.log("Requisicao recados iniciou...");
    });
    builder.addCase(recadosAction.fulfilled, (_, action) => {
      console.log('log action recados payload', action);
      return action.payload.data;
    });
    builder.addCase(addRecadosAction.fulfilled, (_, action) => {
      console.log('log addRecadosAction recados payload', action);
      return action.payload.data;
    })
  },
});

export default recadosSlice.reducer;
