import Link from "next/link";


const mockUrls = [
  "https://utfs.io/f/fb1e1817-5448-4ce5-837f-b72ddb1babbd-qxabi4.png",
  "https://utfs.io/f/5ae41a7d-694b-4069-93c5-2f81efe65723-js9elp.jpg"
]


const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,

}))


export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} />
          </div>
        ))}
     </div>
    </main>
  );
}
