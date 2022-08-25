import { useSelector } from "react-redux"
import { selectPostIds, getPostsError, getPostsStatus } from "./postSlice"
import React from 'react'
import PostExcerpt from "./postExcerpt"

const PostList = () => {
    const orderedPosts = useSelector(selectPostIds)
    const postStatus = useSelector(getPostsStatus)
    const postError = useSelector(getPostsError)

    let content
    if (postStatus === 'loading') {
        content = <p>"Loading ...</p>
    } else if (postStatus === 'succeeded') {
        content = orderedPosts.map(postId => <PostExcerpt key={postId} postId={postId} />)
    } else if (postStatus === 'failed') {
        content = <p>{postError}</p>
    }

    return (
        <section>
            {content}
        </section>
    )
}

export default PostList
