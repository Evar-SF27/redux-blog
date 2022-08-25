import React from 'react'
import PostAuthor from "./postAuthor"
import Time from "./time"
import ReactionButton from "./reactionButton"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectPostById } from './postSlice'

const PostExcerpt = ({ postId }) => {
  const post = useSelector(state => selectPostById(state, postId))
  return (
    <article>
        <h3>{post.title}</h3>
        <p className='excerpt'>{post.body.substring(0, 75)}</p>
        <p className="postCredit">
          <Link to={`post/${post.id}`}>View Post</Link>
            <PostAuthor userId={post.userId} />
            <Time timestamp={post.date} />
        </p>
        <ReactionButton post={post}/>
    </article>
  )
}

// PostExcerpt = React.memo(PostExcerpt)
export default PostExcerpt
