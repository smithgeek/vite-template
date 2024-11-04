import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

// components
import { axiosInstance } from "@kubb/swagger-client/client";

axiosInstance.defaults.baseURL = `${location.origin}/api`;

function PageContent() {
	return (
		<>
			<main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
				<div className="mx-auto grid w-full max-w-6xl gap-2">
					<h1 className="text-3xl font-semibold"></h1>
				</div>
				<div className="mx-auto w-full max-w-6xl items-start gap-6">
					<Outlet />
				</div>
			</main>
		</>
	);
}

function Navbar() {
	return (
		<header className="px-2 flex gap-2 items-center h-14 sticky top-0 bg-background border-b z-50">
			<div className="flex-1"></div>
		</header>
	);
}

function PageStructure() {
	return (
		<div className="flex flex-col min-h-[100vh]">
			<Navbar />
			<div className="flex-1 flex flex-col">
				<PageContent />
			</div>
			<TanStackRouterDevtools />
		</div>
	);
}

export const Route = createRootRoute({
	component: () => <PageStructure />,
});
