import React, { useState, useEffect } from "react";
import { Button, Divider, Grid, TextField } from "@mui/material";
import ListRecados from "../components/ListRecados";
import RecadosType from "../types/recados.type";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  addRecadosAction,
  recadosAction,
} from "../store/modules/recados.slice";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const recados = useSelector((state: RootState) => state.recados);
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch<any>();
  const [descricao, setDescricao] = useState<string>("");
  const [detalhes, setDetalhes] = useState<string>("");

  function handleSave() {
    dispatch(
      addRecadosAction({
        id: user.id,
        descricao,
        detalhes,
      })
    );
  }

  const listRecados = async () => {
    const result = await dispatch(recadosAction({ id: user.id }));
    // console.log("log dispatch home recados", result);
    if (!result.payload.success) {
      if (result.payload.message === "User not found") {
        navigate("/");
        return;
      }
    }
  };
  useEffect(() => {
    // dispatch(recadosAction())
    const isUserLogged = !!user.id;
    if (!isUserLogged) {
      navigate("/");
      return;
    }
    listRecados();
  }, []);

  function handleClear() {
    setDescricao("");
    setDetalhes("");
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          id="outlined-description-input"
          label="Descrição"
          type="text"
          autoComplete="current-description"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-detail-input"
          type="text"
          label="Detalhes"
          autoComplete="current-detail"
          value={detalhes}
          onChange={(e) => setDetalhes(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <Button onClick={handleClear} variant="outlined" fullWidth>
          Limpar
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={handleSave} variant="contained" fullWidth>
          Salvar
        </Button>
      </Grid>
      <Divider />
      <Grid xs={12}>
        <ListRecados recados={recados} />
      </Grid>
    </Grid>
  );
};

export default Home;
