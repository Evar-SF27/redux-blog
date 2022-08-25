import PostList from './features/post/postList'
import AddPostForm from './features/post/addPostForm'
import SinglePostPage from './features/post/singlePostPage'
import EditPostForm from './features/post/editPostForm';
import Layout from './components/layout';
import { Routes, Route, Navigate } from 'react-router-dom'
import UsersList from './features/users/usersList';
import UserPage from './features/users/userPage';

function App() {
  return (
    <Routes>
      <Route path='*' element={<Layout />}>

        <Route index element={<PostList />} />

        <Route path='post'>
          <Route index element={<AddPostForm />} />
          <Route path=':postId' element={<SinglePostPage />} />
          <Route path='edit/:postId' element={<EditPostForm />} />
        </Route>

        <Route path='user'>
          <Route index element={<UsersList />} />
          <Route path=':userId' element={<UserPage />} />
        </Route>

        <Route path='*' element={<Navigate to='/' replace />} />

      </Route>
    </Routes>
  );
}

export default App;
