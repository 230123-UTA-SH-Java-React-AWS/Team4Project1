import './resources/font/Font.css';
import './App.css';
import Nav from './component/Nav/Nav';
import navBackgroundImg from './resources/images/vector-jan-2021-19_generated.jpg';
import { loremIpsum } from 'react-lorem-ipsum';
import { MdAccountBalanceWallet, MdAccountBalance, MdAccountBox } from 'react-icons/md';

const App = () =>{

  return (
    <main className="main">
      
      <section className='nav-section' style={{backgroundImage: `url(${navBackgroundImg})`}}>
        <Nav />
        <h1 className='gradient-text'>Some Placeholder text</h1>
        <svg width='0' height='0'>
          <linearGradient id='orange-gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop stopColor='rgb(243, 106, 38)' offset='0%' />
            <stop stopColor='rgb(118, 52, 25)' offset='100%' />
          </linearGradient>
        </svg>
        <div className='features'>
          <div className='feature-group'>
            <span className='feature-icon'><MdAccountBalanceWallet style={{ fill: 'url(#orange-gradient)' }}/></span>
            {loremIpsum({avgWordsPerSentence: 20, avgSentencesPerParagraph: 1})}
          </div>
          <div className='feature-group'>
            <span className='feature-icon'><MdAccountBalance style={{ fill: 'url(#orange-gradient)' }}/></span>
            {loremIpsum({avgWordsPerSentence: 20, avgSentencesPerParagraph: 1})}
          </div>
          <div className='feature-group'>
            <span className='feature-icon'><MdAccountBox style={{ fill: 'url(#orange-gradient)' }}/></span>
            {loremIpsum({avgWordsPerSentence: 20, avgSentencesPerParagraph: 1})}
          </div>
        </div>
      </section>
    </main>);
}

export default App;
