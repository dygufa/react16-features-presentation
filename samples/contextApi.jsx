const ThemeContext = React.createContext("light");

class ThemeProvider extends React.Component {
    state = { theme: "light" };

    render() {
        return (
            <ThemeContext.Provider value={this.state.theme}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

class ThemedButton extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {theme => <Button theme={theme} />}
            </ThemeContext.Consumer>
        );
    }
}

function App() {
    return (
        <ThemeProvider>
            <ThemedButton>Clica aqui</ThemedButton>
        </ThemeProvider>
    );
}
