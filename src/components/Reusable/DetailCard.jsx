import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function DetailCard() {
  const clickedArticle = useSelector(state => state.clickedArticle);
  useEffect(() => {
    if(clickedArticle){
      console.log(clickedArticle);
    }
  },[])
  return (
    <div>
      {clickedArticle && <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-x-4 py-20 lg:px-20'>
        <div className='lg:w-[600px] w-[300px]'>
        {clickedArticle ? 
          <img src={clickedArticle.urlToImage}/>
          :
          <div className='bg-gray-300 h-[600px]'>
            Sorry we don't have the current image !
          </div>
        }
        </div>
        <div className='flex flex-col gap-y-3 lg:w-[700px] w-[300px]'>
        <h1 className='text-xl'>{clickedArticle.title}</h1>
        <p className='text-gray-700'>{clickedArticle.description}</p>
        </div>
      </div>}
    </div>
  )
}

export default DetailCard
