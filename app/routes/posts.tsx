import { Outlet } from "@remix-run/react";

export default function PostAdmin() {
    return (
        <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-4 gap-6">
                <main className="col-span-8 md:col-span-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
