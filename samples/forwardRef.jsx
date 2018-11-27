import React from "react";

const FancyInput = React.forwardRef((props, ref) => (
    <input {...props} ref={ref} className="fancy-input" />
));

class App extends React.Component {
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
                <FancyInput
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
