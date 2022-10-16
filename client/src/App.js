import { HomePage, PostForm, NotFoundPage } from './pages/indexPages'
import { Route, Routes } from "react-router-dom";
import { PostProvider } from './context/postContext';
import { Toaster } from 'react-hot-toast'

export default function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-5 container m-auto rounded">
        <PostProvider>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/new" element={<PostForm/>}/>
            <Route path="/posts/:id" element={<PostForm/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
          <Toaster/>
        </PostProvider>
      </div>
    </div>
  )
}
