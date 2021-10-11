import reducer, { INITIAL_STATE } from 'store/moods/moods.slice';
import moods from 'utils/mocks/moods';
import { addMood } from 'store/moods/moods.actions';

describe('MoodReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('adds a new mood', () => {
    expect(reducer(INITIAL_STATE, addMood(moods[0])))
      .toEqual({ ...INITIAL_STATE, byIds: [moods[0].id], all: { [moods[0].id]: moods[0] } });
  });
});
