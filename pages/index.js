import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const {
    data: character,
    error,
    isLoading,
  } = useSWR("/api/random-character", fetcher);

  if (isLoading) return <p>Character Loading</p>;
  if (error) return <p>Error</p>;

  console.log(character);
  return (
    <>
      <h1>
        {character.firstName} {character.lastName}
      </h1>
      <p>
        {character.firstName} {character.lastName} likes pets. That is why{" "}
        {character.firstName} lives with {character.pet}. The{" "}
        {character.lastName} households net income is {character.income}
      </p>
    </>
  );
}
