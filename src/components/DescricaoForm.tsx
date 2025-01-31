import { Box, TextareaAutosize, Typography } from "@mui/material";
import FDescricaoForm from "./descricao/descricaoForm";
import { useCallback, useEffect } from "react";
import { TNotaFiscal } from "./NF";
import { createNotaById, updateNota } from "../api/usuarios/UsuariosService";

export const DescricaoForm = ({
  id,
  numero,
  data,
  cnpj,
  descricao,
  valor,
  src
}: TNotaFiscal) => {
  const { errors, handleSubmit, register, setValue, handleDataSubmit } =
    FDescricaoForm();

  const handleSetValues = useCallback(() => {
    setValue("id", id);
    setValue("numero", numero);
    setValue("data", data);
    setValue("cnpj", cnpj);
    setValue("valor", valor);
    setValue("descricao", descricao);
    setValue("src", src);
  }, []);

  useEffect(() => {
    handleSetValues();
  }, [handleSetValues, numero, data, cnpj, descricao, valor, src]);

  const handleConsoleData = (data: any) => {
    console.log(data);
  }

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        justifyContent: "space-between",
        width: "50%",
      }}
      onSubmit={handleSubmit(updateNota)}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ fontWeight: 600 }}>Data: </Typography>
          <input
            style={{
              border: "none",
              outline: "none",
              padding: ".5em",
              backgroundColor: "#fff",
              fontSize: "1.05rem",
            }}
            type="text"
            {...register("data")}
            disabled
          />
          
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ fontWeight: 600 }}>CNPJ: </Typography>
          <input
            style={{
              border: "none",
              outline: "none",
              padding: ".5em",
              backgroundColor: "#fff",
              fontSize: "1.05rem",
            }}
            type="text"
            {...register("cnpj")}
            disabled
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ fontWeight: 600 }}>Nº NF: </Typography>
          <input
            style={{
              border: "none",
              outline: "none",
              padding: ".5em",
              backgroundColor: "#fff",
              fontSize: "1.05rem",
            }}
            type="text"
            {...register("numero")}
            disabled
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ fontWeight: 600 }}>Valor: R$</Typography>
          <input
            style={{
              border: "none",
              outline: "none",
              padding: ".5em",
              backgroundColor: "#fff",
              fontSize: "1.05rem",
            }}
            type="text"
            {...register("valor")}
            disabled
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Typography sx={{ fontWeight: 600 }}>Descrição: </Typography>
          <TextareaAutosize
            required
            minRows={4}
            style={{
              border: "1px solid #838383",
              padding: ".5em",
              backgroundColor: "#fff",
              fontSize: "1.01rem",
              width: "100%",
              boxSizing: "border-box",
            }}
            {...register("descricao")}
            onClick={() => console.log(id)}
          />
          <input type="hidden" {...register("src")}/>
          <input type="hidden" {...register("id")}/>
        </Box>
      </Box>
      <button
        style={{
          border: "none",
          padding: ".5em",
          fontSize: "1.05rem",
          cursor: "pointer",
          backgroundColor: "#4222f8",
          color: "#fff",
        }}
      >
        Enviar
      </button>
    </form>
  );
};
