import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostPreview from './PostPreview.jsx';


function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    const previews = data.map((prompt, index) => {
      return (
        <div key={index}>
          <PostPreview data={prompt}/>
        </div>
      );
    });
    return (
      <div>
        <h1>FTRI 4 Interview Questions</h1>
        {previews}
      </div>
    );
  }
}
// 	const previews = DUMMY_DATA.map((data, index) => {
    
// 		return (
// 			<div key={index} >
// 				<PostPreview index={index} data={data} />
// 			</div>
// 		);
// 	});

// 	return (
// 		<div>
// 			<h1>FTRI 4 Interview Questions</h1>
// 			{previews}
// 		</div>
// 	);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
