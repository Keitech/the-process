import React from 'react';
import riot from 'assets/riot3.svg';
import fractal from 'assets/frac.svg';
import apple from 'assets/appl.svg';

type Props = {};

const inspoItems = [
  {
    name: 'Riot Games',
    link: 'https://www.riotgames.com/en',
    id: 0,
    image: riot,
  },
  {
    name: 'Apple',
    link: 'https://www.apple.com/',
    id: 1,
    image: apple,
  },
  {
    name: 'Fractal',
    link: 'https://www.fractal-design.com/',
    id: 2,
    image: fractal,
  },
];

interface CardProps {
  name: string;
  link: string;
  id: number;
  image: string;
}

const InspoCard = ({ item }: { item: CardProps }) => {
  return (
    <div className='w-full lg:w-[30%] py-[20%] lg:py-[12%] bg-bwgradient flex items-center justify-center relative rounded-[10px]'>
      <div className='text-white p-2 bg-black font-semibold absolute top-5 left-5 rounded-[10px] '>
        {item.name}
      </div>
      <div className='overflow-hidden'>
        <a href={item.link} target='_blank' rel='noopener noreferrer'>
          <img
            className='scale-90 hover:scale-100 transform transition duration-300 h-[100px] w-[100px] cursor-pointer'
            src={item.image}
            alt={item.name}
          />
        </a>
      </div>
    </div>
  );
};

const Inspo = (props: Props) => {
  return (
    <div className='flex justify-between flex-col gap-10 lg:flex-row'>
      {inspoItems.map((item) => (
        <InspoCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Inspo;
