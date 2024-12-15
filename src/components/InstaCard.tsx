import { format } from 'date-fns';
import { Card, CardContent, CardFooter } from "./ui/card"
import { AspectRatio } from "./ui/aspect-ratio"
import { Button } from "./ui/button"
import { Heart, MessageCircle, Send } from 'lucide-react'
import { InstagramPost } from '../utils/Interfaces/post';

export function InstagramCard({ post }: { post: InstagramPost }) {
    return (
        <Card className="overflow-hidden">
            <CardContent className="p-0">
                <AspectRatio ratio={1 / 1}>
                    {post.media_type === "IMAGE" ? (
                        <img
                            src={post.media_url}
                            alt={post.caption}
                            className="object-cover w-full h-full"
                        />
                    ) : (
                        <img
                            src={post.thumbnail_url || post.media_url}
                            alt={post.caption}
                            className="object-cover w-full h-full"
                        />
                    )}
                </AspectRatio>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-2">
                <div className="flex justify-between w-full">
                    <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                            <Heart className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <MessageCircle className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Send className="w-4 h-4" />
                        </Button>
                    </div>
                    <span className="text-sm text-gray-500">
                        {format(new Date(post.timestamp), 'MMM d, yyyy')}
                    </span>
                </div>
                <p className="text-sm line-clamp-2">{post.caption}</p>
            </CardFooter>
        </Card>
    )
}

