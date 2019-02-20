import React from 'react'

import { Header } from './Header'
import { Footer } from './/Footer'
export class Layout extends React.Component {
    render() {
        const isHeader = window.location.pathname === '/login' ? null : <Header />,
              isFooter = window.location.pathname === '/login' ? null : <Footer />
        return(
            <div>
                {isHeader}
                {this.props.children}
                {isFooter}
            </div>
        )
    }
}