import React from 'react';
import ProgramCard from 'components/program-card.jsx';

export default class ProgramCards extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="program-cards">
                {this.props.cards.map((card, index) =>
                    <ProgramCard
                        key={index}
                        card={card}
                    />
                )}
            </ul>
        );
    }
};