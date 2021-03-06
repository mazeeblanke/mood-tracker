import { IEmoji } from "types";

const EMOJIS: IEmoji[] = [
  {
    label: "wasnât having it",
    symbol: 'ð',
    type: 'danger'
  },
  {
    label: 'indifferent',
    symbol: 'ð',
    type: 'warning'
  },
  {
    label: 'super excited!',
    symbol: 'ð',
    type: 'success'
  }
]

const EMPTY_STATE_TEXT = 'No mood history to show yet';

export { EMOJIS, EMPTY_STATE_TEXT };