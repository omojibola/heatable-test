import React, { useState } from 'react';
import toast from 'react-hot-toast';
import TinderCard from 'react-tinder-card';

const images = [
  '/poki-1.png',
  '/poki-2.jpeg',
  '/poki-3.jpeg',
  '/poki-4.jpeg',
  '/poki-5.jpeg',
];

function CardView({ characters }) {
  const [lastDirection, setLastDirection] = useState();
  const [randomImg, setRandomImg] = useState(0);

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
  };

  return (
    <div>
      <div className='cardContainer'>
        {characters.slice(0, 20)?.map((character) => (
          <TinderCard
            className='swipe'
            key={character.name}
            onSwipe={(dir) => {
              swiped(dir, character.name);
              setRandomImg(Math.floor(Math.random() * images.length));
            }}
            onCardLeftScreen={() => outOfFrame(character.name)}
            preventSwipe={['up', 'down']}
          >
            <div className='card'>
              <img src={images[randomImg]} alt='' />

              <h3>{character.name}</h3>

              <button
                className='card-btn'
                onClick={(e) => {
                  toast.success(<p>You just liked {character.name}</p>);
                }}
              >
                Like character
              </button>
            </div>
          </TinderCard>
        ))}
      </div>
      {/* {lastDirection ? (
        <p className='infoText'>You swiped {lastDirection}</p>
      ) : (
        <h2 className='infoText' />
      )} */}
    </div>
  );
}

export default CardView;
