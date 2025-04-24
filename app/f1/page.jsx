import Link from "next/link";

export default function F1() {
    return (
        <>
            <h1 className="text-xl">F1 Page</h1>
            <div>
                <Link href="/f1/f2" className="text-l">
                    F2
                </Link>
            </div>
        </>
    );
}
