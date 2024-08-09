import { useLoaderData, Await, Link } from "@remix-run/react";
import { defer, MetaFunction } from "@remix-run/node";
import { Suspense } from "react";
import Posts from "~/modules/Posts";

export const meta: MetaFunction = () => {
    return [
        {
            title: "Posts",
        },
        { name: "description", content: "List of posts" },
    ];
};

export async function loader() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    if (!response.ok) {
        return defer({
            error: "Network response was not ok",
            status: 500,
        });
    }
    const data = await response.json();
    return defer({ posts: data });
}

// PostType definition
export type PostType = {
    body: string;
    id: number;
    userId: number;
    title: string;
};

export default function PostsComp() {
    const loaderData = useLoaderData<typeof loader>();
    if ("error" in loaderData) {
        return <div>Error: {loaderData.error}</div>;
    }

    return (
        <>
            <h1 className="my-6 mb-2 pb-4 border-b-2 text-center text-3xl">
                Blog Posts{" "}
                <Link
                    className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded float-end"
                    to="/posts/new"
                >
                    +
                </Link>
            </h1>
            <Suspense fallback={<LoadingSpinner />}>
                <Await resolve={loaderData.posts}>
                    {(posts: PostType[]) => (
                        <>
                            <Posts posts={posts} />
                        </>
                    )}
                </Await>
            </Suspense>
        </>
    );
}

function LoadingSpinner() {
    return <div className="spinner">Loading...</div>;
}
