import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, sexo, planeta, episodio, peliculaId) {
  return {
    name,
    sexo,
    planeta,
    episodio,
    peliculaId,
    detalle: [
      { date: '1983', peliculaId: '11091700', nombrePelicula: 'Star Wars: episodio VI - el retorno del Jedi (Return of the Jedi)' },
      { date: '1999', peliculaId: '10541895', nombrePelicula: 'Star Wars: episodio I - la amenaza fantasma' },
      { date: '1977', peliculaId: '16511542', nombrePelicula: 'Star Wars: episodio IV - una nueva esperanza'},
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell component="th" scope="row">
          <Chip
          avatar={(row.sexo === "Masculino" ? <Avatar>M</Avatar> : <Avatar>F</Avatar>)}
          label={row.sexo}
          clickable
          color="primary"
          deleteIcon={<DoneIcon />}
          />
        </TableCell>
        <TableCell component="th" scope="row">
          <Chip
          label={row.planeta}
          clickable
          color="primary"
          deleteIcon={<DoneIcon />}
          />
        </TableCell>
        <TableCell component="th" scope="row">
          {row.episodio}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Detalle
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Fecha Estreno</TableCell>
                    <TableCell>peliculaId</TableCell>
                    <TableCell align="right">Nombre Pelicula</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.detalle.map((historyRow) => (
                    (historyRow.peliculaId === row.peliculaId ? 
                    <TableRow key={historyRow.date}>
                    <TableCell component="th" scope="row">
                      {historyRow.date}
                    </TableCell>
                    <TableCell>{historyRow.peliculaId}</TableCell>
                    <TableCell align="right">{historyRow.nombrePelicula}</TableCell>
                  </TableRow> : null)
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('Darth Vader','Masculino', 'Marte', 'Episodio 6', '11091700'),
  createData('Padme', 'Femenimo', 'Venus', 'Episodio 1', '10541895'),
  createData('Sabe', 'Femenino', 'Mercurio', 'Episodio 1', '10541895'),
  createData('Obi-Wan', 'Masculino', 'Saturno', 'Episodio 4', '16511542'),
  createData('Darth Maul', 'Masculino', 'Jupiter', 'Episodio 1', '10541895'),
];

export default function TableStarWars() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Personaje</TableCell>
            <TableCell>Sexo</TableCell>
            <TableCell>Planeta</TableCell>
            <TableCell>Episodio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}