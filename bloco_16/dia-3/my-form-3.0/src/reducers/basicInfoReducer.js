import { CHANGE_INFO } from '../actions/index';

const inicialState = {
  nome: '',
  email: '',
  CPF: '',
  endereco: '',
  cidade: '',
  estado: 'Acre (AC)',
  moradia: '',
}

const basicInfoReducer = (state = inicialState, action) => {
  switch (action.type) {
    case CHANGE_INFO:
      return {
        ...state,
        [action.info]: action.value,
      }
    default:
      return state;
  }
}

export default basicInfoReducer;
