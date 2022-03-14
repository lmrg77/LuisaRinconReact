import logo from './logo.svg';
import './App.css';
import TableStarWars from './components/tableStarWars';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <Grid className="App">
      <Grid container>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
          <TableStarWars />
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
