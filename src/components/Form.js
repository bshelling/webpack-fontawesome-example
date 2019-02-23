import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            messageState: "messageDisabled",
            formMessage: ""
        };
        this.signUp = this.signUp.bind(this);
    }

    signUp(e){
        e.preventDefault();
        this.setState({
            messageState: "",
            formMessage: "formMessage"
        });
    }

    render(){
        return(
            <div className="card">
                 <div className={'flashMessage ' + this.state.messageState}>
                    <div className="icon"><i className="fas fa-check-circle fa-3x"></i></div>
                    <p className="message">Thanks, we just sent an email to confirm your account</p>
                 </div>
                <form>
                   
                    <div className={'formGroup '+this.state.formMessage}>
                        <input type="text" className="form-control signinInput " placeholder="example@email.com"/>
                    </div>
                    <div className={'formGroup '+this.state.formMessage}>
                        <input type="password" className="form-control signinInput " placeholder="Password"/>
                    </div>
                    <div className={'formGroup '+this.state.formMessage}>
                        <button onClick={this.signUp} id="submitPayment" className="btn btn-primary payment-btn">Create Account</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;