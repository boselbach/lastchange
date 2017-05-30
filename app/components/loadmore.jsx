import React from 'react';

export default class LoadMore extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <footer>
                <button onClick={() => this.props.loadMore()}>Load more</button>
            </footer>
        );
    }
};