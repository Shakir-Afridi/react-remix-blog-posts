import { LoaderFunctionArgs } from "@remix-run/node";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import React from "react";
import { PostType } from "./posts._index";
import PostCard from "~/components/Molecules/PostCard";

export const meta: MetaFunction = () => {
    return [
        {
            title: "Selected Post",
        },
        { name: "description", content: "Selected Post" },
    ];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.id}`
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error: any) {
        return { error: error.message, status: 500 };
    }
};

export default function SelectedPost() {
    const data: PostType = useLoaderData<typeof loader>();

    return (
        <>
            <h1 className="my-6 mb-2 pb-4 border-b-2 text-center text-3xl">
                Selected Post
            </h1>
            <PostCard post={data} />
        </>
    );
}
