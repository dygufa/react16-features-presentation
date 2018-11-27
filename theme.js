import theme from "mdx-deck/themes";
import okaidia from "react-syntax-highlighter/styles/prism/okaidia";

export default {
    ...theme,
    prism: {
        style: okaidia,
    },
    colors: {
        ...theme.colors,
        text: 'palevioletred',
        background: 'papayawhip',
        link: 'lightblue'
    },
};
