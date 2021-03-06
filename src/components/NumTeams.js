import React from 'react';
import '../App.css';
import { InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  select: {
    width: '150px',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold'
    
  }
}));

const NumTeams = ({ setNumTeams }) => {

    const classes = useStyles();

    return (
        <div id="leftPanelTopInfoDiv">
          <FormControl className={classes.formControl}>
            <InputLabel id="label-id">Number of Teams</InputLabel>
            <Select labelId="label-id" id="select" onChange={setNumTeams} className={classes.select}>
              {Array(14).fill(1).map((num, i) => (
                  <MenuItem key={i} value={i + 3}>{i + 3}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
    )
}

export default NumTeams;