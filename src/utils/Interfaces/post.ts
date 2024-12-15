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

export interface InstagramPost {
    id: string;
    caption: string;
    media_type: "IMAGE" | "VIDEO";
    media_url: string;
    thumbnail_url?: string;
    timestamp: string;
}
