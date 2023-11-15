import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from './postSlice';

const PostsView = () => {
  //use selector
  const {isLoading, posts, error} = useSelector((state) => state.posts);
  //use dispatch
  const dispatch = useDispatch();
  //use effect
  useEffect(() => {
    dispatch(fetchPost());
  }, []);
  
  return (
    <div>
      <section>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {posts && posts.map((post) => {
        return <article>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </article>
      })}
      </section>
    </div>
  )
}

export default PostsView;