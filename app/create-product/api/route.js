import { addProduct } from "@/prisma-db.js";

export async function POST(request) {
    const body = await request.json();
    const { title, price, description } = body;

    const product = await addProduct(title, parseInt(price), description);

    return new Response(JSON.stringify(product), {
        headers: { "Content-Type": "application/json" },
    });
}
