class MyComponent extends React.PureComponent {
    render() {
        /* only rerenders if props change */
    }
}

const MyComponent = React.memo(function MyComponent(props) {
    /* only rerenders if props change */
});