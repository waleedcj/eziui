import { createFileRoute } from "@tanstack/react-router";
import { Components } from "../pages/Components";

export const Route = createFileRoute("/components")({
	component: Components,
});
