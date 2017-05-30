import React from 'react';

export default class LoadMore extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <button onClick={() => this.props.loadMore()}>
                    <span className="plus">&#x2295;</span>
                    <span className="text">Load more</span>
                </button>
            </footer>
        );
    }
};