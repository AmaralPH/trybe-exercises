import { NEW_CLIENT } from '../actions/index';

const initialState = {
  clientes: [],
}

const newClientReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_CLIENT:
      return {
        ...state,
        clientes: [
          ...state.clientes,
          {
            'nome': action.nome,
            'idade': action.idade,
            'email': action.email,
          }
        ]
      }
    default:
      return state;
  }
}

export default newClientReducer;
