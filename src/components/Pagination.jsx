import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../ArticleStore/articleSlice';

function Pagination() {
    const totalPages = 4;
    const dispatch = useDispatch();
    const page = useSelector(state => state.page);
    const nextPage = () => {
        dispatch(setPage(page < totalPages ? page + 1 : totalPages))
    }
    const prevPage = () => {
        dispatch(setPage(page === 1 ? page : page - 1));
    }
  return (
    <div className='flex justify-center items-center gap-x-5 fixed bottom-0 py-2 bg-gray-100 w-full border-2 border-[#b4b4b4] border-b-0 border-x-0'>
      <button onClick={() => prevPage()} className='bg-black text-white p-2'>Prev</button>
      <p>{page} of {totalPages}</p>
      <button onClick={() => nextPage()} className='bg-black p-2 text-white'>Next</button>
    </div>
  )
}

export default Pagination
