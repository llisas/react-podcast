import React from 'react'
import { useParams } from 'react-router-dom'


 const Podcast = () => {
  let { id } = useParams();
  return (
    <div>HELLO FROM PODACAST {id}</div>
  )
}
export default Podcast