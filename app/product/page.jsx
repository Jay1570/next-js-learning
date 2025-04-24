import Link from "next/link";

export default function Products() {
    let ids = [];
    for (let i = 1; i <= 100; i++) {
        ids.push(i);
    }
    return (
        <div>
            <h3 className="text-3xl">List of Products</h3>
            <ul>
                {ids.map((value) => {
                    return (
                        <li key={value}>
                            <Link href={`/product/${value}`}>
                                Product {value}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
