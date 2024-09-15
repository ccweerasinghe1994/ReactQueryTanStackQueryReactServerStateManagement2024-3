import {TPost} from "./components/Posts.tsx";

export async function fetchPosts(): Promise<TPost[]> {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&`
    );
    if (!response.ok) {
        throw new Error("Failed to update post");
    }
    return response.json();
}

export async function fetchComments(postId: number) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    return response.json();
}

export async function deletePost(postId: number) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {method: "DELETE"}
    );
    return response.json();
}

export async function updatePost(postId: number): Promise<TPost> {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title: "REACT QUERY FOREVER!!!!"})
        }
    );

    if (!response.ok) {
        throw new Error("Failed to update post");
    }

    return response.json();
}