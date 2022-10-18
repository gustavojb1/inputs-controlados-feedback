import React, { useState } from "react";
import { MainContainer } from "./styles";
import NameForm from "../NameForm/NameForm";
import ConfirmationForm from "../ConfirmationForm/ConfirmationForm";

const MainPage = () => {
  


  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");

  const [nasc, setNasc] = useState("");
  const [tel, setTel] = useState("");
  const [genero, setGenero] = useState("");
  const [cor, setCor] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [medio, setMedio] = useState("Não");
  const [dispo, setDispo] = useState("Não");

  

  const [formFlow, setFormFlow] = useState(1); //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeEmail1 = (event) => {
    setEmail1(event.target.value);
  };
  const onChangeEmail2 = (event) => {
    setEmail2(event.target.value);
  };

  const onChangeNasc = (event) => {
    setNasc(event.target.value);
  };

  const onChangeTel = (event) => {
    setTel(event.target.value);
  };

  const onChangeGenero = (event) => {
    setGenero(event.target.value);
  };

  const onChangeCor = (event) => {
    setCor(event.target.value);
  };

  const onChangePeriodo = (event) => {
    setPeriodo(event.target.value);
  };

  const onChangeMedio = (event) => {
    if(medio==="Não"){
      setMedio("Sim")
    }else{
      setMedio("Não")
    }
  };

  const onChangeDispo = (event) => {
    if(dispo==="Não"){
      setDispo("Sim")
    }else{
      setDispo("Não")
    }
  };


  const sendData = () => {
    //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos
    if (
      age >= 18 &&
      name.length >= 10 &&
      email1 === email2 &&
      email1.indexOf("@") !== -1 &&
      email1.indexOf(".") !== -1
    ) {
      setFormFlow(2);
    } else {
      if (age < 18) {
        alert("idade incorreta");
      } else if (name.length < 10) {
        alert("Nome incorreto");
      } else if (email1 !== email2) {
        alert("email de confirmação incorreta");
      } else if (email1.indexOf("@") === -1 || email1.indexOf(".") === -1) {
        alert("formato do email incorreto");
      }
    }
  };

  const finalizar=()=>{
    console.log(nasc)
    if(nasc!=="" && tel!=="" && genero!=="" && cor!=="" && periodo!==""){
      alert("Parabens Você finalizou o cadastro")
    }else{
      alert("faltando informações")
    }
  }






  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? (
        <NameForm
          // insira aqui suas props
          name={name}
          onChangeName={onChangeName}
          age={age}
          onChangeAge={onChangeAge}
          email1={email1}
          onChangeEmail1={onChangeEmail1}
          email2={email2}
          onChangeEmail2={onChangeEmail2}
          sendData={sendData}
        />
      ) : (
        <ConfirmationForm
          nasc={nasc}
          tel={tel}
          genero={genero}
          cor={cor}
          periodo={periodo}
          medio={medio}
          dispo={dispo}
          onChangeNasc={onChangeNasc}
          onChangeTel={onChangeTel}
          onChangeGenero={onChangeGenero}
          onChangeCor={onChangeCor}
          onChangePeriodo={onChangePeriodo}
          onChangeMedio={onChangeMedio}
          onChangeDispo={onChangeDispo}
          finalizar={finalizar}
        />
      )}
    </MainContainer>
  );
};

export default MainPage;
