
import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../src/components/Form';



const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);

class App extends React.Component {

    render(){
        return (
            <div className="application">
                <Form/>
            </div>
        )
    }
}


ReactDOM.render(<App/>,document.getElementById('app'));



