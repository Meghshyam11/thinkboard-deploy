import React from 'react'
import  {Route, Routes} from 'react-router'
import HomePage  from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetail from './pages/NoteDetailPage'
import toast,{Toaster} from 'react-hot-toast';

function App() {
  return (
    <div className='relative h-full w-full' >
      {/* <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient (125%-125%_at_50%_10%,#100_60%,#00FF9D40_100%)]'></div> */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#100010_60%,#00FF9D40_100%)]"></div>



      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/notes/:id" element={<NoteDetail />} />
      </Routes>
    </div>
  )
}

export default App
