import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    available: true,
    pending: false,
    sold: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { available, pending, sold } = state;
  const error = [available, pending, sold].filter((v) => v).length !== 2;

  

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend"></FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={ available } onChange={handleChange} name="available" />}
            label="Available"
          />
          <FormControlLabel
            control={<Checkbox checked={pending} onChange={handleChange} name="pending" />}
            label="Pending"
          />
          <FormControlLabel
            control={<Checkbox checked={sold} onChange={handleChange} name="sold" />}
            label="Sold"
          />
        </FormGroup>
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl required error={error} component="fieldset" className={classes.formControl}>
        {/* <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={available} onChange={handleChange} name="available" />}
            label="available Gray"
          />
          <FormControlLabel
            control={<Checkbox checked={pending} onChange={handleChange} name="pending" />}
            label="pending Killian"
          />
          <FormControlLabel
            control={<Checkbox checked={sold} onChange={handleChange} name="sold" />}
            label="sold Llorca"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText> */}
      </FormControl>
    </div>
  );
}
