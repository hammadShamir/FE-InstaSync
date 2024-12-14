import * as React from "react"
import { Heart, MessageCircle, Bookmark, MoreHorizontal, Send, X } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { InstagramGridProps } from "@/utils/Interfaces/post"




export function InstagramGrid({ posts, className }: InstagramGridProps) {
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null)

    return (
        <>
            <div className={cn("grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4", className)}>
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

