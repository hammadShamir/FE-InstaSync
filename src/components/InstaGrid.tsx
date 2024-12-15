import { useState, useEffect } from 'react'
import { InstagramCard } from './InstaCard'
import { SkeletonCard } from './SkeletonCard'
import { getPosts } from '../Services/APIs/post'

interface InstagramPost {
    id: string
    caption: string
    media_type: "IMAGE" | "VIDEO"
    media_url: string
    thumbnail_url?: string
    timestamp: string
}

export function InstagramGrid() {
    const [posts, setPosts] = useState<InstagramPost[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const data = await getPosts()
                setPosts(data)
            } catch (error) {
                console.error('Failed to fetch posts:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchPost()
    }, [])

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">Instagram Feed</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {loading
                    ? Array.from({ length: 8 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))
                    : posts.map((post) => (
                        <InstagramCard key={post.id} post={post} />
                    ))}
            </div>
        </div>
    )
}

