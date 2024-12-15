import { Card, CardContent, CardFooter } from "./ui/card"
import { Skeleton } from "./ui/skeleton"

export function SkeletonCard() {
    return (
        <Card className="overflow-hidden">
            <CardContent className="p-0">
                <Skeleton className="h-[300px] w-full" />
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-2 p-4">
                <div className="flex justify-between w-full">
                    <div className="flex gap-2">
                        <Skeleton className="h-8 w-8 rounded-full" />
                        <Skeleton className="h-8 w-8 rounded-full" />
                        <Skeleton className="h-8 w-8 rounded-full" />
                    </div>
                    <Skeleton className="h-4 w-[100px]" />
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
            </CardFooter>
        </Card>
    )
}

