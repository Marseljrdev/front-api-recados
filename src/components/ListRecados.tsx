import React, { useMemo, useState } from 'react';
import RecadosType from '../types/recados.type';
import { Avatar, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface ListRecadosProps {
  recados: RecadosType[];
}

const ListRecados: React.FC<ListRecadosProps> = ({ recados }) => {

  // console.log(recados);

  const listTarefas = useMemo(() => {
    return recados.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <ListItem
            key={index}
            alignItems="flex-start"
            secondaryAction={
              <>
                <IconButton  edge="end" aria-label="edit">
                  <EditIcon />
                </IconButton>

                <IconButton  edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemAvatar>
              <Avatar alt="Remy Sharp">{item.descricao[0].toUpperCase()}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.descricao}
              secondary={
                <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                  {item.detalhes}
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      );
    });
  }, [recados]);
  return (
    <React.Fragment>
      <List>{listTarefas}</List>
    </React.Fragment>
  );
};

export default ListRecados;
