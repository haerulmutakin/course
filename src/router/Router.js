import React from 'react'
import { Route } from 'react-router-dom'
import { App } from './../App'
import { Login } from './../components/common/Login'

class AppRouter extends React.Component {
    render() {
        return (
            <React.Fragment>
                <App />
                <Route path="/login" component={Login} />
            </React.Fragment>
        )
    }
}

export default AppRouter;