import React from "react";

// callback refs
class CallbackRefApp extends React.Component {
    input = null;
    state = {};

    componentDidMount() {
        if (this.input) {
            this.input.focus();
        }
    }

    render() {
        return (
            <form>
                <label>Digite seu nome de usuário</label>
                <input
                    ref={ref => (this.input = ref)}
                    value={this.state.username}
                    onChange={ev =>
                        this.setState({ username: ev.target.value })
                    }
                />
            </form>
        );
    }
}

// createRef
class CreateRefApp extends React.Component {
    inputRef = React.createRef();
    state = {};

    componentDidMount() {
        if (this.inputRef.current) {
            this.inputRef.current.focus();
        }
    }

    render() {
        return (
            <form>
                <label>Digite seu nome de usuário</label>
                <input
                    ref={this.inputRef}
                    value={this.state.username}
                    onChange={ev =>
                        this.setState({ username: ev.target.value })
                    }
                />
            </form>
        );
    }
}
