import React from 'react';

export default class ProgramCard extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.millisecondstoSeconds = this.millisecondstoSeconds.bind(this);
    }

    millisecondstoSeconds(milliseconds) {
        let minutes = Math.floor(milliseconds / 60000);
        let seconds = ((milliseconds % 60000) / 1000).toFixed(0);

        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
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
                    <p className="duration">&#128336;&nbsp;{this.millisecondstoSeconds(card.PrimaryAsset.DurationInMilliseconds)}</p>
                </a>
            </div>
        );
    }
};