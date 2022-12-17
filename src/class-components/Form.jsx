import React from "react";

export class Form extends React.Component {
    state = {
        name: 'geekbrains'
    }


    handleChangeName = (ev) => {
        this.setState({ name: ev.target.value })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        console.log(ev.target.elements.password.value)
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <p>Name: {this.state.name} </p>
            <input type="text" onChange={this.handleChangeName} name="login" />
            <input type="text" name="password" />
            <button>send form</button>

        </form>
    }
}