import React from 'react'
import { Form, Input} from '../MainPage/styles'

const ConfirmationForm = (props) => {
  
  
  return (
    <Form>
      <label>
        Data de nascimento:
        <Input placeholder="dd/mm/yyyy" type="date" value={props.nasc} onChange={props.onChangeNasc} />
      </label>
      <label>
        Número de telefone:
        <Input type="text" value={props.tel} onChange={props.onChangeTel}/>
      </label>
      <label>
        Gênero:{' '}
        <select value={props.genero} onChange={props.onChangeGenero}>
          <option value="homem cis">Homem cisgênero</option>
          <option value="mulher cis">Mulher cisgênero</option>
          <option value="homem trans">Homem trans</option>
          <option value="mulher trans">Mulher trans</option>
          <option value="pessoa nao binaria">Pessoa não binária</option>
          <option value="none">Prefiro não dizer</option>
        </select>
      </label>
      <label>
        Cor:{' '}
        <select value={props.cor} onChange={props.onChangeCor}>
          <option value="negro">Negro</option>
          <option value="branco">branco</option>
          <option value="pardo">pardo</option>
          <option value="amarelo">amarelo</option>
          <option value="indigena">indígena</option>
          <option value="none">prefiro não dizer</option>
        </select>
      </label>

      <label>Integral: {' '}
      <input type="radio" name="integral" value="integral" onChange={props.onChangePeriodo}/>
      </label>
      <label>Noturno: {' '}
      <input type="radio" name="integral" value="noturno" onChange={props.onChangePeriodo}/> 
      </label>

      <label>Tem ensino Médio: {' '}
      <input type="checkbox" onChange={props.onChangeMedio}/> 
      </label>
      <label>Tem disponibilidade para participar das atividades: {' '}
      <input type="checkbox" onChange={props.onChangeDispo}/> 
      </label>

      <button onClick={props.finalizar}>Enviar dados</button>
      </Form>
  )
}

export default ConfirmationForm