import MoodHistory from 'components/organisms/MoodHistory';
import MoodSelector from 'components/organisms/MoodSelector';
import React from 'react';
import 'scss/app.scss';

function HomePage() {
  return (
    <>
      <main className="container">
        <div className="mood-tracker">
          <MoodSelector />
          <MoodHistory />
        </div>
      </main>
    </>
  );
}

export default HomePage;
