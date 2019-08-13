import React, { useContext } from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';
import Login from './Login';
import Configuration from './Configuration';
import { ProtectedRoute} from '../routes/protectedRoute'


const Container = ({ history }) => {
    const { token } = useContext(AuthContext);
    return (
        <Wrapper>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={() => token ? <Redirect to="/landing" /> : <Redirect to="/login" />}
                />
                <ProtectedRoute exact path="/landing" component={Configuration} />
                <Route exact path="/login" component={Login} />
                <Route path="*" component={() => <h2>404 Page not found</h2>} />
            </Switch>
        </Wrapper>
    )
}

export default Container;

const Wrapper = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif !important;
  margin-bottom: 20px;
`