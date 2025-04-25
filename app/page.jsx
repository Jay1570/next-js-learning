import Image from "next/image";
import Hello from "./components/hello";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1>Server Component</h1>
            <Hello />
            <Link href="/product" className="text-xl">
                Go to Products
            </Link>
            <br />
            <Link href="/f1" className="text-xl">
                Go to F1
            </Link>
            <br />
            <Link href="/photo-feed" className="text-xl">
                Go to Photo Feed
            </Link>
            <br />
            <Link href="/users" className="text-xl">
                Go to Users
            </Link>
            <br />
            <Link href="/products-db" className="text-xl">
                Go to Products
            </Link>
        </>
    );
}
