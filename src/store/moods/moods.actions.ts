import { IMood } from 'types';
import { ADD_MOOD } from './moods.types';

export const addMood = (data: IMood) => ({
  type: ADD_MOOD,
  data,
});