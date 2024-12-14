export interface Post {
    id: string
    username: string
    userImage: string
    image: string
    caption: string
    likes: number
    comments: number
}

export interface InstagramGridProps {
    posts: Post[]
    className?: string
}
