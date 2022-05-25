import { HomePage, PostForm, NotFoundPage } from './pages/indexPages'
import { Route, Routes } from "react-router-dom";
import { PostContainer } from './context/postContext';

export default function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 container bg-red-100 m-auto rounded">
        <PostContainer>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/new" element={<PostForm/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </PostContainer>
      </div>
    </div>
  )
}
