import { IEmoji } from "types";

const EMOJIS: IEmoji[] = [
  {
    label: "wasn’t having it",
    symbol: '😖',
    type: 'danger'
  },
  {
    label: 'indifferent',
    symbol: '😐',
    type: 'warning'
  },
  {
    label: 'super excited!',
    symbol: '😃',
    type: 'success'
  }
]

const EMPTY_STATE_TEXT = 'No mood history to show yet';

export { EMOJIS, EMPTY_STATE_TEXT };