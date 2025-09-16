import useSWR from "swr";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const url = `/api/products/${id}`;

  const { data, isLoading } = useSWR(url);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return null;
  }

  console.log("data: ", data);

  return (
    <>
      <h1>{data.name}</h1>
      <p>Description: {data.description}</p>
      <p>Category: {data.category}</p>
      <p>
        Price: {data.currency}
        {data.price}
      </p>
    </>
  );
}
