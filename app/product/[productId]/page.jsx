export default async function ProductDetails({ params }) {
    const productId = (await params).productId;
    return <h1>Details about Product {productId}</h1>;
}
