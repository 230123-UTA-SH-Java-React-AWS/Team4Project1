import './resources/font/Font.css';
import './App.css';
import Nav from './component/Nav/Nav';
import navBackgroundImg from './resources/images/vector-jan-2021-19_generated.jpg';
import { loremIpsum } from 'react-lorem-ipsum';
import { MdAccountBalanceWallet, MdAccountBalance, MdAccountBox } from 'react-icons/md';
import aboutBackgroundImg from './resources/images/vecteezy_businessman-hand-working-with-finances-about-cost-and__23.jpg';
import { useState } from 'react';

const App = () => { 

  const [divWidth, setDivWidth] = useState<string>('20px');
  
  const handleIsOver = () => {
    setDivWidth('310px');
  }

  const handleIsOut = () => {
    setDivWidth('20px');
  }

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
            <p>{loremIpsum({avgWordsPerSentence: 20, avgSentencesPerParagraph: 1})}</p>
          </div>
          <div className='feature-group'>
            <span className='feature-icon'><MdAccountBalance style={{ fill: 'url(#orange-gradient)' }}/></span>
            <p>{loremIpsum({avgWordsPerSentence: 20, avgSentencesPerParagraph: 1})}</p>
          </div>
          <div className='feature-group'>
            <span className='feature-icon'><MdAccountBox style={{ fill: 'url(#orange-gradient)' }}/></span>
            <p>{loremIpsum({avgWordsPerSentence: 20, avgSentencesPerParagraph: 1})}</p>
          </div>
        </div>
      </section>
      <section className='about-section'>
        <div className='image-container' style={{backgroundImage: `url(${aboutBackgroundImg})`}}></div>
        <div className='text-container'>
          <h2>About Us</h2>
          <p>{loremIpsum({avgWordsPerSentence: 22, avgSentencesPerParagraph: 1})}</p>
          <h4>Who we are</h4>
          <p>{loremIpsum({avgWordsPerSentence: 15, avgSentencesPerParagraph: 1})}</p>
        </div>
      </section>
      <section className='services-section'>
        <div className='text-container'>
          <h2>Services</h2>
          <p>{loremIpsum({avgWordsPerSentence: 16, avgSentencesPerParagraph: 1})}</p>
          <div className='contact-us-container'>
            <h6 className='contact-us' onMouseOver={() => handleIsOver()} onMouseOut={() => handleIsOut()}>Want to get in touch? Contact us here</h6>
            <div className='contact-us-div' style={{width: divWidth}}></div>
          </div>
        </div>
        <div className='services'>
          <div className='service-group'>
            <span className='service-icon'></span>
            <h4>Filler Text</h4>
            <p>{loremIpsum({avgWordsPerSentence: 18, avgSentencesPerParagraph: 1})}</p>
          </div>          
          <div className='service-group'>
            <span className='service-icon'></span>
            <h4>Filler Text</h4>
            <p>{loremIpsum({avgWordsPerSentence: 18, avgSentencesPerParagraph: 1})}</p>
          </div>        
          <div className='service-group'>
            <span className='service-icon'></span>
            <h4>Filler Text</h4>
            <p>{loremIpsum({avgWordsPerSentence: 18, avgSentencesPerParagraph: 1})}</p>
          </div>          
          <div className='service-group'>
            <span className='service-icon'></span>
            <h4>Filler Text</h4>
            <p>{loremIpsum({avgWordsPerSentence: 18, avgSentencesPerParagraph: 1})}</p>
          </div>
        </div>
      </section>
    </main>);
}

export default App;
