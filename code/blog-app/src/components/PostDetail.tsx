import {TPost} from "./Posts.tsx";
import "./PostDetail.css";

export type Comment = {
    id: number;
    email: string;
    body: string;
};


export function PostDetail({post}: { post: TPost }) {
    // replace with useQuery
    const data: Comment[] = [];

    return (
        <>
            <h3 style={{color: "blue"}}>{post.title}</h3>
            <button>Delete</button>
            <button>Update title</button>
            <p>{post.body}</p>
            <h4>Comments</h4>
            {data.map((comment) => (
                <li key={comment.id}>
                    {comment.email}: {comment.body}
                </li>
            ))}
        </>
    );
}