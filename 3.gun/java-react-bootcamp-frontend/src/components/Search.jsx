import { TextField } from "@mui/material";
import React from "react";

function Search({setSearch}) {
  return (
    <TextField onChange={(e)=>{setSearch(e.target.value)}} margin="normal" label="Search" fullWidth variant="standard" />
  );
}

export default Search;
