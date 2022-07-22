import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Collapse,
  Box,
  Typography
} from "@mui/material";
import { v4 as uuid } from "uuid";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

function createData(
  receipt: string,
  id: string,
  names: string,
  phone: number,
  last_payment: string,
  previous_payment: string,
  payments: string,
  historial_payments: string,
  category: string,
  image: string,
  price: number,
  complementary_messages: {id_message: string, autor: string, message: string, date_message: string}[],
) {
  return {
    receipt,
    id,
    names,
    phone,
    last_payment,
    previous_payment,
    payments,
    historial_payments,
    category,
    image,
    price,
    complementary_messages,
    history_payments: [
      {
        id_payment: uuid(),
        total_credit: 150000,
        number_payment: 1,
        date_payment: 'Junio-1-21',
        value_payment: 30000
      },
      {
        id_payment: uuid(),
        total_credit: 120000,
        number_payment: 2,
        date_payment: 'Junio-1-21',
        value_payment: 30000
      },
      {
        id_payment: uuid(),
        total_credit: 90000,
        number_payment: 3,
        date_payment: 'Junio-1-21',
        value_payment: 30000
      },
      {
        id_payment: uuid(),
        total_credit: 60000,
        number_payment: 4,
        date_payment: 'Junio-1-21',
        value_payment: 30000
      },
      {
        id_payment: uuid(),
        total_credit: 30000,
        number_payment: 5,
        date_payment: 'Junio-1-21',
        value_payment: 30000
      },
      {
        id_payment: uuid(),
        total_credit: 0,
        number_payment: 6,
        date_payment: 'Junio-1-21',
        value_payment: 30000
      },
    ]
  };
}

const Row = (
  {
    receipt, 
    names, 
    phone, 
    last_payment, 
    previous_payment, 
    payments, 
    category, 
    image, 
    price, 
    history_payments,
    complementary_messages
  }: ReturnType<typeof createData>) => {

  const [open, setOpen] = useState(false);
  
  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align="center" component="th" scope="row">{receipt} </TableCell>
        <TableCell align="center">{names}</TableCell>
        <TableCell align="center">{phone}</TableCell>
        <TableCell align="center">{last_payment}</TableCell>
        <TableCell align="center">{previous_payment}</TableCell>
        <TableCell align="center">{payments}</TableCell>
        <TableCell align="center">
          <IconButton
            aria-label="expand payments"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center">{category}</TableCell>
        <TableCell align="center">{image}</TableCell>
        <TableCell align="center">{price}</TableCell>
        <TableCell align="center">
          <IconButton
            aria-label="expand messages"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center">
          <IconButton
            aria-label="add client to Bad one list"
            size="small"
            onClick={() => alert("add client to Bad one list")}
          >
            <PlaylistRemoveIcon />  
          </IconButton>
          <IconButton
            aria-label="add client to God one list"
            size="small"
            onClick={() => alert("add client to God one list")}
          >
            <PlaylistAddCheckIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: '10px', paddingTop: '10px', border: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography align="center" variant="h6" gutterBottom component="div">
                Historial de Cuotas
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Precio Total</TableCell>
                    <TableCell align="center"># Cuota</TableCell>
                    <TableCell align="center">Fecha</TableCell>
                    <TableCell align="center">Valor</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {history_payments.map(history_payment => {
                    const { total_credit, number_payment, date_payment, value_payment, id_payment } = history_payment;
                    return (
                      <TableRow key={id_payment}>
                        <TableCell align="center" component="th" scope="row">{total_credit}</TableCell>
                        <TableCell align="center">{number_payment}</TableCell>
                        <TableCell align="center">{date_payment}</TableCell>
                        <TableCell align="center">{value_payment}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      
        <TableCell style={{ paddingBottom: '10px', paddingTop: '10px', border: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography align="center" variant="h6" gutterBottom component="div">
                Mensajes Cobrador
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Usuario</TableCell>
                    <TableCell align="center">Fecha</TableCell>
                    <TableCell align="center">Mensaje</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {complementary_messages.map(complementary_message => {
                    const { id_message, message, date_message, autor } = complementary_message;
                    return (
                      <TableRow key={id_message}>
                        <TableCell align="center" component="th" scope="row">{autor}</TableCell>
                        <TableCell align="center">{date_message}</TableCell>
                        <TableCell align="center">{message}</TableCell>
                      </TableRow>
                    )
                  })} 
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
};

const dataRows = [
  createData(
    "0215",
    uuid(),
    "Christian Chavez",
    3106909066,
    "12/8",
    "12/7",
    "2/8",
    "historial",
    "cuadro",
    "sagrado corazón",
    110000,
    [
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        date_message: "Junio-1-21",
      },
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        date_message: "Junio-1-21",
      },
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        date_message: "Junio-1-21",
      },
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        date_message: "Junio-1-21",
      },
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        date_message: "Junio-1-21",
      },
    ]
  ),
  createData(
    "0215",
    uuid(),
    "Christian Chavez",
    3106909066,
    "12/8",
    "12/7",
    "2/8",
    "historial",
    "cuadro",
    "sagrado corazón",
    110000,
    [
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        date_message: "Junio-1-21",
      },
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        date_message: "Junio-1-21",
      },
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        date_message: "Junio-1-21",
      },
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        date_message: "Junio-1-21",
      },
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        date_message: "Junio-1-21",
      },
    ]
  ),
  createData(
    "0215",
    uuid(),
    "Christian Chavez",
    3106909066,
    "12/8",
    "12/7",
    "2/8",
    "historial",
    "cuadro",
    "sagrado corazón",
    110000,
    [
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        date_message: "Junio-1-21",
      },
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        date_message: "Junio-1-21",
      },
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        date_message: "Junio-1-21",
      },
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        date_message: "Junio-1-21",
      },
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        date_message: "Junio-1-21",
      },
    ]
  ),
  createData(
    "0215",
    uuid(),
    "Christian Chavez",
    3106909066,
    "12/8",
    "12/7",
    "2/8",
    "historial",
    "cuadro",
    "sagrado corazón",
    110000,
    [
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        date_message: "Junio-1-21",
      },
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        date_message: "Junio-1-21",
      },
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        date_message: "Junio-1-21",
      },
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        date_message: "Junio-1-21",
      },
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        date_message: "Junio-1-21",
      },
    ]
  ),
  createData(
    "0215",
    uuid(),
    "Christian Chavez",
    3106909066,
    "12/8",
    "12/7",
    "2/8",
    "historial",
    "cuadro",
    "sagrado corazón",
    110000,
    [
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          date_message: "Junio-1-21",
      },
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          date_message: "Junio-1-21",
      },
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          date_message: "Junio-1-21",
      },
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        date_message: "Junio-1-21",
      },
      {
        id_message: uuid(),
        autor: "Stella",
        message:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        date_message: "Junio-1-21",
      },
    ]
  ),
];

 type TableTypes = {
  testId: string,
 }
const TableGalery = ({ testId }:TableTypes) => {

  const dataCells = [
    { title: "Pedido", id: uuid() },
    { title: "Nombres", id: uuid() },
    { title: "Celular", id: uuid() },
    { title: "Última cuota", id: uuid() },
    { title: "Próxima cuota", id: uuid() },
    { title: "# cuotas", id: uuid() },
    { title: "Historial cuotas", id: uuid() },
    { title: "Artículo", id: uuid() },
    { title: "Imágen", id: uuid() },
    { title: "Precio", id: uuid() },
    { title: "Mensajes complementarios", id: uuid() },
    { title: "Calificación", id: uuid() },
  ];

  return (
    <TableContainer 
      component={Paper}  
      aria-label='este es una tabla donde se muestra la información de los clientes'
      data-testid={testId}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {dataCells.map((dataCell) => (
              <TableCell align="center" key={dataCell.id} id={dataCell.id}>
                {dataCell.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataRows.map(dataRow => <Row key={dataRow.id} {...dataRow} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableGalery;
