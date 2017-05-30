import React from 'react';

export default class ChannelList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="channel-list">
                <figure>
                    <a href="http://www.dr.dk">
                        <img src="http://www.dr.dk/mu-online/Areas/HelpPage/Assets/img/dr-logo-dr-large.png" alt=""/>
                    </a>
                </figure>
                <nav>
                    <ul>
                        {this.props.channels.map((channel, index) =>
                            <li
                                key={index}
                                onClick={() => this.props.setChannel(index)}
                                className={this.props.activeIndex === index ? 'active' : ''}>
                                {channel.name}
                            </li>
                        )}
                    </ul>
                </nav>
            </header>
        );
    }
};