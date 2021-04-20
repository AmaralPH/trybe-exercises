import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class ClientList extends Component {
  render() {
    const { authenticated, clientList } = this.props;

    return (
      <div>
        <h1>{authenticated ? "Lista" : 'Login não efetuado'}</h1>
        <ul>
          {authenticated ? clientList.map((item) => {
            return (
              <li>
                <table>
                  <tr>
                    <td>{item.nome}</td>
                    <td>{item.idade}</td>
                    <td>{item.email}</td>
                  </tr>
                </table>
              </li>
            )
          }) : <li></li> }
        </ul>
        <Link to="/new-client">
          <button>Pagina de cadastro</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.authReducer.authenticated,
  clientList: state.newClientReducer.clientes,
})

export default connect(mapStateToProps, null)(ClientList);
