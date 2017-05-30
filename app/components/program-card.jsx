import React from 'react';

export default class ProgramCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let card = this.props.card;
        let classNames = ['program-card'];

        if (card.ExpiresSoon) {
            classNames.push('expire-soon');
        }

        return (
            <div
                className={classNames.join(' ')}>
                <a href={card.PresentationUri} target="_blank">
                    <p className="title">{card.Title}</p>
                    <img src={card.PrimaryImageUri} alt=""/>
                </a>
            </div>
        );
    }
};