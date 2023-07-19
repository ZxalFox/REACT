import React from "react";

const App = () =>{

  const ativo = true;

  return(
    <button disabled={!ativo} > {ativo ? 'Ativado' : 'Desativado'} </button>
  );
}

export default App
