import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IProps {
    text: string;
}

export class HTMLComment extends React.Component<IProps> {
    private node: Comment;
    private ref$rootDiv = React.createRef<HTMLDivElement>();

    constructor(props: IProps) {
        super(props);

        this.node = typeof window !== "undefined" ? window.document.createComment(props.text) : null;
    }

    componentDidMount() {
        if (this.node && this.ref$rootDiv && this.ref$rootDiv.current) {
            const divElement = this.ref$rootDiv.current;

            // Tell React not to update/control this node
            ReactDOM.unmountComponentAtNode(divElement);

            // Replace the div with our comment node
            this.ref$rootDiv.current.replaceWith(this.node);
        }
    }

    componentDidUpdate(prevProps: IProps) {
        if (this.node && prevProps.text !== this.props.text) {
            this.node.textContent = this.props.text;
        }
    }

    componentWillUnmount() {
        this.node?.remove();
    }

    render() {
      if (typeof window === "undefined") {
        return null;
      }
        return (
            <div
                ref={this.ref$rootDiv}
                style={{
                    display: 'none',
                }}
            />
        );
    }
}

export default HTMLComment;
