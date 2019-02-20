import React from 'react'
import './Login.css'

export class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            index: 0
        }
    }

    clicking = () => {
        let currentIndex;
        if (this.state.index === 0) {
            currentIndex = 1;
        } else {
            currentIndex = 0
        }
        this.setState({
            index: currentIndex
        })

        console.log(this.state.index);
    }

    render() {
        const apa = {
            transform: `translateX(-${this.state.index*100}%)`,
            transitionDelay: this.state.index === 0 ? `800ms` : `0ms`
        }

        const ipi = {
            transform: `translateX(-${this.state.index*100}%)`,
            transitionDelay: this.state.index === 0 ? `0ms` : `800ms`
        }
        return (
            <div id="login-container">
                <div id="login-wrapper">
                    <div id="mover" style={{transform: `translateX(${this.state.index*100}%)`}}></div>
                    <div id="login-area">
                    <div className="login-form">
                            <p className="auth-title">Create account</p>
                            <p className="mail-auth">Register with gmail</p>
                            <div className="form">
                                <div className="input-group">
                                    <input type="text" placeholder="Username"/>
                                </div>
                                <div className="input-group">
                                    <input type="text" placeholder="Email"/>
                                </div>
                                <div className="input-group">
                                    <input type="text" placeholder="Password"/>
                                </div>
                                <button>SIGN UP</button>
                            </div>
                        </div>
                    </div>
                    <div id="register-area">
                        
                    <div className="login-form">
                            <p className="auth-title">Sign in to Course</p>
                            <p className="mail-auth">Login with gmail</p>
                            <div className="form">
                                <div className="input-group">
                                    <input type="text" placeholder="Username/email"/>
                                </div>
                                <div className="input-group">
                                    <input type="text" placeholder="Password"/>
                                </div>
                                <p id="forgot-password">Forgot password?</p>
                                <button>SIGN IN</button>
                            </div>
                        </div>
                    </div>
                    <div id="animated-form" onClick={() => this.clicking()} style={{transform: `translateX(${this.state.index*100}%)`}}>
                       
                    </div>
                    <div id="animated-wrapper" style={apa}>
                        <div>
                        <p id="animated-title">Don't have account?</p>
                        <p id="animated-desc">Enter your personal detail, and start learn many thing wit us</p>
                        <button id="register-call" onClick={() => this.clicking()}>Create account</button>
                        </div>
                    </div>

                    <div id="animated-wrapper-right" style={ipi}>
                        <div>
                        <p id="animated-title-right">Already resgistered?</p>
                        <p id="animated-desc-right">Keep connection to get free course and discussion woth us</p>
                        <button id="register-call-right" onClick={() => this.clicking()}>Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}