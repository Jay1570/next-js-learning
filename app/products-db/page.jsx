import { getProducts } from "@/prisma-db";
import Link from "next/link";
import { ProductDetail } from "./product-detail";

export default async function ProductsDBPage({ seachParams }) {
    //const { query } = await seachParams;
    const products = await getProducts();

    return (
        <>
            <Link href="/create-product" className="text-l">
                Add Product
            </Link>
            <br />
            <Link href="/create-product-without-api" className="text-l">
                Add Product without API
            </Link>
            <ProductDetail products={products} />
        </>
    );
}
