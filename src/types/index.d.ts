export interface IEmoji {
  label: string,
  symbol: string,
  type: string
}

export interface IMood extends IEmoji {
  id: string,
  date: string,
  time: string
}

export interface IAddMoodAction {
  addMood: (mood: IMood) => void
}

export interface IMoodRootState {
  byIds: string[],
  all: {
    [key: string]: IMood
  }
}

export interface IRootState {
  moods: IMoodRootState
}
