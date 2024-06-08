import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/cd35e25b-f609-4dd2-ae6e-4a1b04e2a020-1d.jpg",
  "https://utfs.io/f/755b4085-a137-4629-b99f-145da630aa5a-1e.jpg",
  "https://utfs.io/f/60135e58-2958-4cce-8090-2c6f89917a55-1f.jpg",
  "https://utfs.io/f/9235d038-b22f-4f65-bbae-2be9ebbbc081-1g.jpg",
  "https://utfs.io/f/f2ffc76c-930e-49a6-8a8f-aa93142d8b9c-1h.jpg"
]

//idhar mera index kaise pass ho rha hai ? 
const mockImages = mockUrls.map((url,index)=>({
  id: index + 1,
  url
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages,...mockImages,...mockImages].map((image)=>(
          <div key={image.id} className="w-48">
            <img src={image.url}/>  {/*idhar mujhe alt text daalna hai*/}
          </div>
        ))}
      </div>
    </main>
  );
}
