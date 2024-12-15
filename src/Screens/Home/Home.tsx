import { InstagramGrid } from '../../components/InstaGrid'
import * as React from 'react'

const Home = () => {
    const posts = [
        {
            id: "1",
            username: "johndoe",
            userImage: "/placeholder-user.jpg",
            image: "https://plus.unsplash.com/premium_photo-1666901328734-3c6eb9b6b979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww",
            caption: "Beautiful sunset at the beach! 🌅",
            likes: 1234,
            comments: 56,
        },
        {
            id: "2",
            username: "janedoe",
            userImage: "/placeholder-user.jpg",
            image: "https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tfGVufDB8fDB8fHww",
            caption: "Perfect morning coffee ☕️",
            likes: 987,
            comments: 43,
        },
        {
            id: "3",
            username: "photography",
            userImage: "/placeholder-user.jpg",
            image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
            caption: "City lights 🌃",
            likes: 2468,
            comments: 89,
        },
        {
            id: "3",
            username: "photography",
            userImage: "/placeholder-user.jpg",
            image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
            caption: "City lights 🌃",
            likes: 2468,
            comments: 89,
        },
    ]

    return (
        <main className='py-6'>
            <InstagramGrid posts={posts} />
        </main>
    )
}

export default Home
