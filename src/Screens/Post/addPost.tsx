import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "../../components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { uploadPostFormValues, uploadPostSchema } from '../../utils/schemas/Post';
import { uploadPost } from '../../Services/APIs/post';
import { useNavigate } from 'react-router-dom';
import { routePath } from '../../route/routePath';

export function UploadPost() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<uploadPostFormValues>({
        resolver: zodResolver(uploadPostSchema),
    });

    const onSubmit = async (values: uploadPostFormValues) => {
        try {
            setIsLoading(true);
            await uploadPost(values);
            navigate(routePath.home);
        } catch (error) {
            console.error("Error uploading post:", error);
        } finally {
            setIsLoading(false);
        }

        form.reset();
    };

    return (
        <section className='h-[calc(100vh-100px)] flex justify-center items-center'>
            <Card className="w-full max-w-md mx-auto">
                <CardHeader>
                    <CardTitle>Upload New Post</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            {/* Image URL input */}
                            <FormField
                                control={form.control}
                                name="image_url"
                                render={({ field }) => (
                                    <FormItem className="text-left">
                                        <FormLabel>Image URL</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter image URL"
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Provide a URL for the image you want to share.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Caption section */}
                            <FormField
                                control={form.control}
                                name="caption"
                                render={({ field }) => (
                                    <FormItem className="text-left">
                                        <FormLabel>Caption</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Write a caption..." {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Add a caption to your post. Max 2200 characters.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Submit button */}
                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? "Posting..." : "Post"}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </section>
    );
}
