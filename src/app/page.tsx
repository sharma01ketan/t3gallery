import Link from "next/link";
import { db } from "~/server/db";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { getMyImages } from "~/server/queries";
import Image from "next/image";


export const dynamic = "force-dynamic"

async function Images(){

  const images = await getMyImages()
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
        {images.map((image)=>(
          <div key={image.id} className="flex h-48 w-48 flex-col ">
            <Link href={`/img/${image.id}`}>
              <Image 
              src={image.url} 
              style={{objectFit: "contain"}}
              width={192} 
              height={192}  
              alt={image.name}
              />
              <div>{image.name}</div>
            </Link>
          </div>
        ))}
      </div>
  )
}


export default async function HomePage() {

  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please Sign In Above</div>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>
    </main>
  );
}
