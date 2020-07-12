import React, { useEffect } from 'react';
import PostsApiService from '../services/posts-api-service';

function App() {
  useEffect(() => {
    PostsApiService.printPosts()
      .then(res => {
        console.log(res)
      })
      .catch(res => {
        console.log(res)
    });
  })
  return (
    <main className='App'>
      {/* content goes here */}
    </main>
  );
}

export default App;