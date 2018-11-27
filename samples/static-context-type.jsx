const MyContext = React.createContext();

class MyClass extends React.Component {
    static contextType = MyContext;
    componentDidMount() {
        let value = this.context;
    }
    render() {
        let value = this.context;
    }
}