import React, { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
function App(props) {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=e9e8eb569fa64ea89e1beaef33971949',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return <NewsList></NewsList>;
}
export default App;
