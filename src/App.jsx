import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { request } from './api/request';
import './App.scss';
import { PeopleList } from './components/PeopleList';

const App = () => {
  const [people, setPeople] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [loadMoreButton, setLoadMoreButton] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    getPeople();
  }, [pageCount]);

  const getPeople = async() => {
    setShowLoader(true);

    const data = await request(pageCount);

    setShowLoader(false);

    setPeople(people.concat(data.results));

    if (!data.next) {
      setLoadMoreButton(false);
    }
  };

  return (
    <main className="App">
      <h1>
        List of people
      </h1>

      <PeopleList
        people={people}
      />

      {showLoader
        && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />
        )
      }

      {loadMoreButton
        && (
        <button
          type="button"
          className="load-more-button"
          onClick={() => setPageCount(pageCount + 1)}
        >
          Load more
        </button>
        )
      }
    </main>
  );
};

export default App;
