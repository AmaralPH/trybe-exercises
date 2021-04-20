export const AUTH = 'AUTH';

export const NEW_CLIENT = 'NEW_CLIENT';

export const authenticate = (authenticated) => {
  return {
    type: AUTH,
    authenticated,
  }
}

export const clientAction = (nome, idade, email) => {
  return {
    type: NEW_CLIENT,
    nome,
    idade,
    email,
  }
}
