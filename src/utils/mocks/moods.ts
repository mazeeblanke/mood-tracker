import { v4 as uuidv4 } from 'uuid';

const moods: any = [
  {
    id: uuidv4(),
    type: 'danger',
    symbol: '😖',
    label: 'wasnt having it'
  },
  {
    id: uuidv4(),
    label: 'indifferent',
    symbol: '😐',
    type: 'warning'
  },
  {
    id: uuidv4(),
    type: 'danger',
    symbol: '😖',
    label: 'wasnt having it'
  },
  {
    id: uuidv4(),
    label: 'super excited!',
    symbol: '😃',
    type: 'success'
  },
];

export default moods;
