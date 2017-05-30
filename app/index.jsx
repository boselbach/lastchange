import React from 'react';
import ReactDOM from 'react-dom';

import ProgramCards from 'components/program-cards.jsx';
import ChannelList from 'components/channel-list.jsx';
import LoadMore from 'components/loadmore.jsx';

import ProgramService from 'services/program-service';

class TVShows extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      channels: [
        {name: 'DR1', slug: 'dr1'},
        {name: 'DR2', slug: 'dr2'},
        {name: 'DR3', slug: 'dr3'},
        {name: 'DR Ramasjang', slug: 'dr-ramasjang'},
        {name: 'DR K', slug: 'dr-k'},
        {name: 'DR Ultra', slug: 'dr-ultra'}
      ],
      activeChannel: '',
      activeIndex: 0
    };
  }

  setChannel(index) {
    let channel = this.state.channels[index].slug;

    try {
      if (this.state.selectedChannel !== channel) {
        ProgramService.get(channel)
        .then(response => {
          this.setState({
            cards: response.Items,
            activeChannel: channel,
            activeIndex: index
          });
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  loadMore() {
    let channel = this.state.activeChannel;

    ProgramService.loadMore(channel)
    .then(response => {
      let items = response.Items;

      this.setState((prevState, props) => {
        return {
          cards: prevState.cards.concat(items)
        };
      });

      document.body.scrollTop = document.body.scrollHeight;
    });
  }

  componentDidMount() {
    let channel = this.state.channels[0].slug;

    ProgramService.get(channel)
    .then(response => {
      this.setState({
        cards: response.Items,
        activeChannel: channel
      });
    })
    .catch(e => {
      console.log(e);
    });
  }

  render() {
    return (
      <article>
        <ChannelList
          channels={this.state.channels}
          setChannel={this.setChannel.bind(this)}
          activeIndex={this.state.activeIndex}
        />
        <ProgramCards
          cards={this.state.cards}
        />
        <LoadMore
          loadMore={this.loadMore.bind(this)}
        />
      </article>
    )
  }
}

ReactDOM.render(
  <TVShows />,
  document.getElementById('app')
)
