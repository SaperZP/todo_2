import React from 'react';
import BreadCustomIcon from '../assets/icons/categoryIcons/bread.svg?react';
import BriefcaseCustomIcon from '../assets/icons/categoryIcons/briefcase.svg?react';
import SportCustomIcon from '../assets/icons/categoryIcons/sport.svg?react';
import DesignCustomIcon from '../assets/icons/categoryIcons/design.svg?react';
import MortarboardCustomIcon from '../assets/icons/categoryIcons/mortarboard.svg?react';
import MegaphoneCustomIcon from '../assets/icons/categoryIcons/megaphone.svg?react';
import MusicCustomIcon from '../assets/icons/categoryIcons/music.svg?react';
import HeartbeatCustomIcon from '../assets/icons/categoryIcons/heartbeat.svg?react';
import MovieCustomIcon from '../assets/icons/categoryIcons/movie.svg?react';
import HomeCustomIcon from '../assets/icons/categoryIcons/home.svg?react';

type categoryType = {
  id: string;
  name: string;
  icon: React.FC;
  backgroundColor: string;
};

const categoriesList: categoryType[] = [
  {
    id: 'grocery',
    name: 'Grocery',
    icon: BreadCustomIcon,
    backgroundColor: '#CCFF80',
  },
  {
    id: 'work',
    name: 'Work',
    icon: BriefcaseCustomIcon,
    backgroundColor: '#FF9680',
  },
  {
    id: 'sport',
    name: 'Sport',
    icon: SportCustomIcon,
    backgroundColor: '#80FFFF',
  },
  {
    id: 'design',
    name: 'Design',
    icon: DesignCustomIcon,
    backgroundColor: '#80FFD9',
  },
  {
    id: 'university',
    name: 'University',
    icon: MortarboardCustomIcon,
    backgroundColor: '#809CFF',
  },
  {
    id: 'social',
    name: 'Social',
    icon: MegaphoneCustomIcon,
    backgroundColor: '#FF80EB',
  },
  {
    id: 'music',
    name: 'Music',
    icon: MusicCustomIcon,
    backgroundColor: '#FC80FF',
  },
  {
    id: 'health',
    name: 'Health',
    icon: HeartbeatCustomIcon,
    backgroundColor: '#80FFA3',
  },
  {
    id: 'movie',
    name: 'Movie',
    icon: MovieCustomIcon,
    backgroundColor: '#80D1FF',
  },
  {
    id: 'home',
    name: 'Home',
    icon: HomeCustomIcon,
    backgroundColor: '#FF8080',
  },
];

export default categoriesList;
