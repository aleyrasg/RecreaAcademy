import React from "react";
import { SearchIcon, AddIcon } from '@chakra-ui/icons'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputAddon,
  Input,
  Button,
} from '@chakra-ui/react';



function SearchAndAdd({ searchTerm, setSearchTerm, onAddClick }) {
  return (
    <div className="search-container">
      <FormControl>
      <Input
        placeholder="Buscar proyectos"
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </FormControl>

      <Button
        variant="contained"
        //AddIcon={<AddIcon />}
        onClick={onAddClick}
        sx={{
          borderRadius: "10px",
          backgroundColor: "#FF004C",
          textTransform: "none",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#d60042",
          },
        }}
      >
        Nuevo proyecto
      </Button>
    </div>
  );
}

export default SearchAndAdd;
