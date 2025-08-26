import { Link } from 'expo-router'
import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

const MovieCard = ({id,poster_path,title,vote_average,release_date}) => {
  return (
   <Link href={`/movies/${id}`} asChild>
    <TouchableOpacity className='w-[30%]'>
        <Image 
        source={{
            uri:poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`

            : 'https://placeholder.co/600x400/1a1a1a/ffffff.png'
    
        }}

        className='w-full h-52 rounded-lg'
        resizeMode='cover'
        
        />
       
       <Text className='text'

      
    </TouchableOpacity>
   </Link>
  )
}

export default MovieCard