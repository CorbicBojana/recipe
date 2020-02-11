import React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(4),
      width: 400
    }
  },
  container: {
    display: "flex",
    flexDirection: "column"
  }
}));

const MyButton = styled(Button)({
  backgroundColor: "#ff77ff",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
  margin: "30px 0"
});

function Search() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.container}>
        <TextField
          id="outlined-basic"
          label="Search for recipes"
          variant="outlined"
        />
        <MyButton>Search</MyButton>
      </div>
    </form>
  );
}

export default Search;
