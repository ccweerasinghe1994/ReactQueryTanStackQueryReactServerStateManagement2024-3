import {useState} from "react";
import {PostDetail} from "./PostDetail.tsx";
import {useQuery} from "@tanstack/react-query";
import {fetchPosts} from "../api.ts";

export type TPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
};


const maxPostPage = 10;

export function Posts() {
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedPost, setSelectedPost] = useState<TPost | null>(null);

    // replace with useQuery
    const {data, isLoading} = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <>
            <ul>
                {data && data.map((post) => (
                    <li
                        key={post.id}
                        className="post-title"
                        onClick={() => setSelectedPost(post)}
                    >
                        {post.title}
                    </li>
                ))}
            </ul>
            <div className="pages">
                <button disabled onClick={() => {
                }}>
                    Previous page
                </button>
                <span>Page {currentPage + 1}</span>
                <button disabled onClick={() => {
                }}>
                    Next page
                </button>
            </div>
            <hr/>
            {selectedPost && <PostDetail post={selectedPost}/>}
        </>
    );
}