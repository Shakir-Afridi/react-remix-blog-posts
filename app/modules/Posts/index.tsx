import { useNavigate } from "@remix-run/react";
import React from "react";
import { PostType } from "~/routes/posts._index";
import PostCard from "~/components/Molecules/PostCard";

export default function Posts({ posts }: { posts: PostType[] }) {
    const navigate = useNavigate();
    return (
        <div className="bg-gray-100 flex justify-center items-center min-h-screen">
            <div className="max-w-3xl w-full p-6">
                <div className="space-y-6">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden relative"
                        >
                            <PostCard
                                post={post}
                                onClickPost={() =>
                                    navigate(`/posts/${post.id}`)
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
