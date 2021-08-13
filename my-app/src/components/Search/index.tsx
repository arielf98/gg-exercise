import React, {useState} from 'react'
import './styles.css'


export default function Search(){

  type imagesType = {
    downsized_medium : {
      height: string,
      size: string,
      url: string,
      width: string,
    }
  }

  type giphyType = {
    images : imagesType,
    id: string, 
    title: string,
    url: string,
  }
  type handleType = {
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  } 

  const [query, setQuery] = useState<string>('');
  const [gifs, setGifs] = useState<Array<giphyType>>([]);

  const handleSeacrh = async ({e}: handleType ):Promise<void>=> {

      e.preventDefault()
      const api_key: string | undefined = process.env.REACT_APP_API_KEY 
      const limit = 12
      console.log('api key', api_key)

      try{
          const result = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${query}&limit=${limit}`, {
              headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
             }).then(response => response.json())
             console.log(result);
             setGifs(result.data);
      }catch(e){
          console.log(e)
      } 
  }

  return (
    <div className="container">
      <div className="search-input">
        <label htmlFor="query"> Cari </label>
        <input 
        type="text"
        id="query"
        name="query"
        onChange={(e) => setQuery(e.target.value)} />
         <button 
        type="submit"
        name="cari"
        onClick={(e) => handleSeacrh({e}) }> Cari </button>
      </div>

      <div className="image-container">
      {
          gifs.map(gif => {
            return <img src={gif.images.downsized_medium.url} alt="gifs" />
          })
        }
      </div>
      
    </div>
  )
}
