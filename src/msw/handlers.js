import { rest } from "msw";

export const handlers = [
    rest.get("https://jsonplaceholder.typicode.com/users", (_, res, ctx) => {
        return res(
            ctx.status(500),
            ctx.json([
                {
                    name: "test - 1",
                },
                {
                    name: "test - 2",
                },
                {
                    name: "test - 3",
                },
                {
                    name: "test - 4",
                },
            ]),
        );
    }),
];
