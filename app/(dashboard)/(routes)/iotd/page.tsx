import { ideaCard } from '@/sanity/sanity-util'; // Assuming IdeaCard is the correct type
import { client } from '@/sanity/client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export const revalidate = 30;

async function getData() {
  const query = `
    *[_type == 'idea'] | order(_createdAt desc) {
      title,
      "currentSlug": slug.current,
      content
    }`;
  const data: ideaCard[] = await client.fetch(query);
  console.log(data)
  return data;
}

export default async function Home() {
  // const [ideaCards, setIdeaCards] = useState<ideaCard[]>([]);
  const data: ideaCard[] = await getData();
  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await getData();
  //     console.log(data)
  //     setIdeaCards(data);
  //   }
  //   fetchData();
  // }, []);

  // const solveIdea = (index: number, title: string) => {
  //   // Implement your solveIdea logic here
  // };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-center text-3xl font-bold mb-8">Idea of the Day</h1>
      <div className="coin-balance text-center text-2xl mb-4">{/* coinBalance */} Coins</div>
      <div className="potd-container">
        {data.map((item, index) => (
          <div key={index} className="potd-item border-b border-gray-300 pb-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">{item.currentSlug}</h2>


            <Link href={`/iotd/${item.currentSlug}`}>
              <Button className="w-full mt-7 bg-green-500">
                View
              </Button>
            </Link>



          </div>
        ))}
      </div>
    </div >
  );
}