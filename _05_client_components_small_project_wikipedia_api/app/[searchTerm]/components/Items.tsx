import Image from "next/image";
import Link from "next/link";

type Props = {
  result: Result;
};

export default function Items({ result }: Props) {
  // console.log("result = ", result);

  const ItemTextCol = (
    <>
      <h2>
        <Link
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target="_blank"
          className="text-xl font-bold underline"
        >
          {result.title}
        </Link>
      </h2>
      <p>{result.extract}</p>
    </>
  );

  return (
    <div
      className="flex flex-col justify-center my-3" /* key={result.pageid} */
    >
      {result?.thumbnail?.source ? (
        <article className="m-4 max-wl-lg">
          <div className="flex flex-row gap-4">
            <div className="flex flex-col justify-center">
              <Image
                src={result.thumbnail.source}
                alt={result.title}
                width={result.thumbnail.width}
                height={result.thumbnail.height}
                loading="lazy"
              />
            </div>
            {ItemTextCol}
          </div>
        </article>
      ) : (
        <article className="m-4 max-w-lg">{ItemTextCol}</article>
      )}
    </div>
  );
}
