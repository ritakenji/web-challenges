import useSWR from "swr";

export default function HomePage() {
  const { data, isLoading } = useSWR(id ? `/api/products/${id}` : null);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return null;
  }

  console.log("data: ", data);
  return (
    <ul>
      {data.map((product) => {
        return (
          <li key={product.id}>
            <h1>{product.name}</h1>
          </li>
        );
      })}
    </ul>
  );
}
