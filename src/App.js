import './App.css';
import './index.css';

import React from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QuoteCard />
      </header>
    </div>
  );
}

class QuoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      quote: [
        {
          quote: "\"Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.\"",
          author: "Tyrion Lannister",
          img: "https://styles.redditmedia.com/t5_yde4t/styles/profileIcon_vj2cpyru6lu41.jpg?width=256&height=256&frame=1&crop=256:256,smart&s=18d029e3f5dda75b7d845ba5a2559980d7943656",
        },
        {
          quote: "\"Any man who must say, 'I am the king,' is no true king. I'll make sure you understand that when I've won your war for you.\"",
          author: "Tywin Lannister",
          img: "https://pm1.narvii.com/6966/318847f9fb6207a0db0c1d3cd882d85b662b96c6r1-600-300v2_128.jpg"
        },
        {
          quote: "\"The things I do for love.\"",
          author: "Jaime Lannister",
          img: "https://www.kialo.com/images/6ffa7320-2be4-4687-abb8-c0f39bb389c6_128x128@2x.jpeg",
        },
        {
          quote: "\"You know nothing, Jon Snow.\"",
          author: "Ygritte",
          img: "https://avatarfiles.alphacoders.com/108/thumb-350-108614.jpg",
        },
        {
          quote: "\"When you play the game of thrones, you win or you die. There is no middle ground.\"",
          author: "Cersei",
          img: "https://pbs.twimg.com/profile_images/589085291467649024/O8wn280E_400x400.jpg"
        },
      ],
    }
  }

  // Let's Randomize The Quote on Start
  componentWillMount() {
    this.numberOfQuotes = this.state.quote.length;
    this.randomQuote = (max) => {
      return Math.floor(Math.random() * max)
    }
    this.setState({ index: this.randomQuote(this.numberOfQuotes) });
  }

  // Let's Randomize The Quote onClick
  handleSubmit() {
    this.randomQuote = (max = this.state.quote.length) => {
      return Math.floor(Math.random() * max)
    }

    let notEqual = (number = this.randomQuote()) => {
      while (number === this.state.index) {
        number = this.randomQuote()
      }
      return number
    }

    this.setState({ index: notEqual() })
  }


  render() {

    // CSS Tailwind
    const quoteCard = "max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700";
    const quoteSeparator = "flex flex-row justify-between mt-10";

    const buttonStyle = "px-3 py-2 text-sm font-normal text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800";
    const buttonStyleTwitter = "px-3 py-2 text-sm font-normal text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800";
    const quoteStyle = "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white";
    const authorStyle = "mb-3 font-normal text-gray-700 dark:text-gray-400";

    //Twitter Link
    const twiterLink = "https://twitter.com/intent/tweet?hashtags=quotes&text=" + this.state.quote[this.state.index].quote + " " + this.state.quote[this.state.index].author

    return (
      <div id="quote-box" className={quoteCard}>
        <div>
          <p id="text" className={quoteStyle}>{this.state.quote[this.state.index].quote}</p>
          <p id="author" className={authorStyle}>{this.state.quote[this.state.index].author}</p>
          <img alt="quote author" className='inline-block h-12 w-12 rounded-full ring-2 ring-white' src={this.state.quote[this.state.index].img}></img>
        </div>
        <div className={quoteSeparator}>
          <button id="new-quote" className={buttonStyle} onClick={this.handleSubmit.bind(this)}>Get a New Quote!</button>
          <a href={twiterLink} target="_blank" rel="noreferrer" id="tweet-quote" className={buttonStyleTwitter}><button>Tweet This 🐦</button></a>
        </div>
      </div>
    )
  }
}

export default App;
