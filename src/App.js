import { useState } from 'react';
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';
import './App.css';
// 평상시 값
function App() {
  const [yourItem, setYourItem] = useState('');
  const [comItem, setComItem] = useState('');
  const [zeroTry, zeroTryState] = useState(true);
  const items = ['rock', 'paper', 'scissors'];
  const chooseComputerItem = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    setComItem(items[randomIndex]);
  };
  const chooseYourItem = yourChoice => {
    if (zeroTry === true) zeroTryState(false);
    setYourItem(yourChoice);
    chooseComputerItem();
  };
  let consequence = "LET'S START THIS GAME";
  let yourGottenName = 'TIE';
  let comGottenName = 'TIE';
  if ((yourItem === 'scissors' && comItem === 'paper') || (yourItem === 'rock' && comItem === 'scissors') || (yourItem === 'paper' && comItem === 'rock')) {
    consequence = 'WIN';
    yourGottenName = 'WINNER';
    comGottenName = 'LOSER';
  } else if (yourItem !== comItem) {
    consequence = 'LOSE';
    yourGottenName = 'LOSER';
    comGottenName = 'WINNER';
  } else {
    consequence = 'TIE';
    yourGottenName = 'TIE';
    comGottenName = 'TIE';
  }
  return (
    <div className="container">
      <header className="title">
        <h1>묵찌빠 게임</h1>
      </header>
      <main className="main-container">
        <div className="battle-field-container">
          <div className={'battle-field ' + yourGottenName.toLowerCase() + '-border'}>
            <div className="player">YOU</div>
            <div className="item-image">
              <img src={zeroTry ? '/images/items/rock.png' : '/images/items/' + yourItem + '.png'} alt="" />
            </div>
            <div className={'gotten-name ' + yourGottenName.toLowerCase() + '-backcolor'}>{yourGottenName}</div>
          </div>
          <div className={'battle-field ' + comGottenName.toLowerCase() + '-border'}>
            <div className="player">COMPUTER</div>
            <div className="item-image">
              <img src={zeroTry ? '/images/items/rock.png' : '/images/items/' + comItem + '.png'} alt="" />
            </div>
            <div className={'gotten-name ' + comGottenName.toLowerCase() + '-backcolor'}>{comGottenName}</div>
          </div>
        </div>
        <div className="selection-field">
          <div className="rock">
            <button
              onClick={() => {
                chooseYourItem('rock');
              }}>
              <FaHandRock />
            </button>
          </div>
          <div className="scissor">
            <button
              onClick={() => {
                chooseYourItem('scissors');
              }}>
              <FaHandScissors />
            </button>
          </div>
          <div className="paper">
            <button
              onClick={() => {
                chooseYourItem('paper');
              }}>
              <FaHandPaper />
            </button>
          </div>
        </div>
        <div className="small-letter-field">
          <span>{zeroTry ? 'CHOOSE\u00A0 YOUR\u00A0  ITEM' : consequence}</span>
        </div>
      </main>
    </div>
  );
}

export default App;
