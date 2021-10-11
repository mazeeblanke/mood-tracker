import { IEmoji } from "types";

const EMOJIS: IEmoji[] = [
  {
    label: 'super excited!',
    symbol: '😃',
    type: 'success'
  },
  {
    label: 'indifferent',
    symbol: '😐',
    type: 'warning'
  },
  {
    label: "wasn’t having it",
    symbol: '😖',
    type: 'danger'
  }
]

const EMPTY_STATE_TEXT = 'No mood history to show yet';

export { EMOJIS, EMPTY_STATE_TEXT };