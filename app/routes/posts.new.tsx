import { useActionData, useNavigation, Form } from "@remix-run/react";
import { ActionFunctionArgs, MetaFunction, redirect } from "@remix-run/node";
import TextField from "~/components/Atoms/TextField";
import Textarea from "~/components/Atoms/Textarea";
import Button from "~/components/Atoms/Button";
import ErrorMessage from "~/components/Atoms/ErrorMessage";

export const meta: MetaFunction = () => {
    return [
        {
            title: "New Post",
        },
        { name: "description", content: "New Post" },
    ];
};

export default function NewPost() {
    const actionData = useActionData<typeof action>();
    const navigation = useNavigation();

    return (
        <>
            <h1 className="my-6 mb-2 pb-4 border-b-2 text-center text-3xl">
                New Post
            </h1>
            <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
                <Form method="post" className="space-y-4">
                    <TextField
                        label="Title"
                        id="title"
                        name="title"
                        placeholder="Enter text"
                    />
                    <Textarea
                        label="Body"
                        id="body"
                        name="body"
                        placeholder="Enter details"
                    />
                    <Button
                        type="submit"
                        label={
                            navigation.state === "submitting" ||
                            navigation.state === "loading"
                                ? "Submitting..."
                                : "Submit"
                        }
                    />
                    {actionData?.error && (
                        <ErrorMessage message={actionData.error} />
                    )}
                </Form>
            </div>
        </>
    );
}

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();

    const title = formData.get("title");
    const body = formData.get("body");

    if (!title || !body) {
        return { error: "All fields are required" };
    }

    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts`,
            {
                method: "POST",
                body: JSON.stringify({
                    title,
                    body,
                }),
            }
        );
        if (!response.ok) {
            return { error: "Network response was not ok" };
        }

        return redirect("/posts");
    } catch (error) {
        return { error: "Something went wrong" };
    }
}
