import React, { FC } from 'react';
import { connect } from 'react-redux';
import { IMood, IRootState } from 'types';
import { getMoods } from 'store/moods/moods.slice';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import EmptyState from 'components/atoms/EmptyState';
import MoodPanel from 'components/molecules/MoodPanel';
import { EMPTY_STATE_TEXT } from 'utils/constants';

const smallCat = require('assets/images/cat-small.png');

interface IMoodHistoryProps {
  moods: IMood[]
}

const MoodHistory: FC<IMoodHistoryProps> = ({ moods }) => {
  return (
    <div className="o-moodhistory">
      <h5 className="o-moodhistory__title">
        <img src={smallCat} alt="small cat" />
        <span>Cat mood tracker™</span>
      </h5>
      <h6 className="o-moodhistory__subtitle">mood history</h6>
      {!moods.length ? (<EmptyState text={EMPTY_STATE_TEXT} />) : null}
      {moods.length ? (
        <div className="o-moodhistory__container">
          <TransitionGroup>
            {
              moods.map(({type, label, symbol, id}) => (
                <CSSTransition
                  key={id}
                  timeout={500}
                  classNames="o-moodhistory__item"
                >
                  <MoodPanel type={type} label={label} symbol={symbol} />
                </CSSTransition>
              ))
            }
          </TransitionGroup>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state: IRootState) => ({
  moods: getMoods(state),
});

export default connect(
  mapStateToProps,
)(MoodHistory);
