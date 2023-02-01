import Card from '../Card/Card';
import { CardSwiper } from 'react-card-rotate-swiper';

const CardView = () => {
  const cards = [
    {
      image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
      color: '#55ccff',
    },
    {
      image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
      color: '#e8e8e8',
    },
    {
      image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
      color: '#0a043c',
    },
    {
      image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
      color: 'black',
    },
  ];

  const handleSwipe = (d) => {
    //fill this your callback
  };
  return (
    <>
      <div className='App'>
        <CardSwiper
          onSwipe={handleSwipe}
          className={'swiper'}
          contents={cards.map((card) => (
            <div>
              <Card image={card.image} />
              <Card image={card.image} />
            </div>
          ))}
        />
      </div>
    </>
  );
};

export default CardView;
