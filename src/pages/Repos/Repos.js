import React from "react";
import PropTypes from "prop-types";

import logoGitHub from "../../static/images/github.svg";

import TextField from "../../components/TextField/TextField";
import Table from "../../components/Table";

import { Wrapper, Header, Logo, InputWrapper, TableWrapper } from "./styles";

class Repos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { user }
      }
    } = this.props;
    this.setState({ user });
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { user } = this.state;
    return (
      <Wrapper>
        <Header>
          <Logo src={logoGitHub} />
          <InputWrapper>
            <TextField
              onChange={this.handleChange}
              name="user"
              id="user"
              value={user}
            />
          </InputWrapper>
        </Header>
        <TableWrapper>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>REPOSITÓRIOS</Table.Th>
                <Table.Th>STARTS</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>Jill</Table.Td>
                <Table.Td>5</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Eve</Table.Td>
                <Table.Td>3</Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </TableWrapper>
      </Wrapper>
    );
  }
}

Repos.propTypes = {
  match: PropTypes.object
};

export default Repos;
