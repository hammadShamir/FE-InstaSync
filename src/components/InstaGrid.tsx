import * as React from "react"
import { Heart, MessageCircle, Bookmark, MoreHorizontal, Send, X } from 'lucide-react'

import { cn } from "../lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Button } from "../components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "../components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "../components/ui/dialog"

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

export function InstagramGrid() {
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null)

    return (
        <>
            <div className={cn("grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4")}>
                {posts.map((post) => (
                    <Card key={post.id} className="overflow-hidden">
                        <CardHeader className="flex flex-row items-center space-x-4 p-4">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={post.userImage} alt={post.username} />
                                <AvatarFallback>{post.username[0]}</AvatarFallback>
                            </Avatar>
                            <a href="#" className="font-semibold">
                                {post.username}
                            </a>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="ml-auto">
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">More options</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>Report</DropdownMenuItem>
                                    <DropdownMenuItem>Unfollow</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <div
                                        className="h-60 relative cursor-pointer"
                                        onClick={() => setSelectedImage(post.image)}
                                    >
                                        <img
                                            src={post.image}
                                            alt={post.caption}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </DialogTrigger>
                            </Dialog>
                        </CardContent>
                        <CardFooter className="flex flex-col space-y-4 p-4">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex space-x-4">
                                    <Button variant="ghost" size="icon" className="hover:text-red-500">
                                        <Heart className="h-4 w-4" />
                                        <span className="sr-only">Like</span>
                                    </Button>
                                    <Button variant="ghost" size="icon">
                                        <MessageCircle className="h-4 w-4" />
                                        <span className="sr-only">Comment</span>
                                    </Button>
                                    <Button variant="ghost" size="icon">
                                        <Send className="h-4 w-4" />
                                        <span className="sr-only">Share</span>
                                    </Button>
                                </div>
                                <Button variant="ghost" size="icon">
                                    <Bookmark className="h-4 w-4" />
                                    <span className="sr-only">Save</span>
                                </Button>
                            </div>
                            <div className="space-y-1 text-sm w-full">
                                <p className="font-semibold">{post.likes.toLocaleString()} likes</p>
                                <p>
                                    <a href="#" className="font-semibold mr-2">
                                        {post.username}
                                    </a>
                                    {post.caption}
                                </p>
                                <p className="text-muted-foreground">
                                    View all {post.comments} comments
                                </p>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                <DialogContent className="max-w-3xl w-full h-full flex items-center justify-center">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 top-4 rounded-full"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                    </Button>
                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Selected post"
                            className="max-w-full max-h-[80vh] object-contain"
                        />
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}

