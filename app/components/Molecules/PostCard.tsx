import React, { MouseEvent } from "react";
import { PostType } from "~/routes/posts._index";

export default function PostCard({
    post,
    onClickPost,
}: {
    post: PostType;
    onClickPost?: (e: MouseEvent<HTMLDivElement>) => void;
}) {
    return (
        <div
            className="bg-white shadow-md cursor-pointer rounded-lg overflow-hidden"
            {...(onClickPost ? { onClick: onClickPost } : {})}
        >
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{post.body}</p>
            </div>
        </div>
    );
}
