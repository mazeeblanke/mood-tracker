import {
  ADD_MOOD
} from 'store/moods/moods.types';

export const INITIAL_STATE: any = {
  byIds: [],
  all: {},
};

const getMoods = (state: any): any => (
  state.moods.byIds.map((i: number) => state.moods.all[i])
);

export { getMoods };

export default (state = INITIAL_STATE, payload: any) => {
  const { type, data } = payload;
  switch (type) {
    case ADD_MOOD: {
      const byIds = [data.id, ...state.byIds]
      const all = {
        ...state.all, 
        [data.id]: data
      }
      return {
        ...state,
        byIds,
        all
      };
    }
    default:
      return state;
  }
};
