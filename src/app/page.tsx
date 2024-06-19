import { db } from "~/server/db";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";


export const dynamic = "force-dynamic";

async function Images() {

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  });
  return (
    <div className="flex flex-wrap gap-4">

      {[...images, ...images, ...images].map((image, index) => (
        <div key={image.id + "-" + index} className="flex flex-col w-48">
          <img src={image.url} />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  )
}


export default async function HomePage() {


  return (


    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl">
          Please sign in to view the gallery
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
