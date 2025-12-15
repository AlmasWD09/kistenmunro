import assets from "@/assets";
import SubTitle from "@/components/reusable/title";
import { Button } from "@/components/ui";
import { ArrowBlackRightIcon } from "@/icon";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import news1 from "@/assets/news1.png";
import news2 from "@/assets/news2.png";
import news3 from "@/assets/news3.png";
import news4 from "@/assets/news4.png";
import news5 from "@/assets/news5.png";

interface NewsDataProps {
  id: number;
  image: StaticImageData;
  title: string;
  postData: string;
}

// Sample service data
const NewsData: NewsDataProps[] = [
  {
    id: 1,
    title: "News title goes here",
    postData: "20th November, 2025",
    image: news1,
  },
  {
    id: 2,
    title: "News title goes here",
    postData: "20th November, 2025",

    image: news2,
  },
  {
    id: 3,
    title: "News title goes here",
    postData: "20th November, 2025",

    image: news3,
  },
  {
    id: 4,
    title: "News title goes here",
    postData: "20th November, 2025",

    image: news4,
  },
  {
    id: 5,
    title: "News title goes here",
    postData: "20th November, 2025",

    image: news5,
  },
  {
    id: 6,
    title: "News title goes here",
    postData: "20th November, 2025",

    image: news2,
  },
];

const LatestNews = () => {
  return (
    <div className="container px-4 pt-[35px] xl:pt-[48px]">
      <div className="pb-8">
        <SubTitle
          svg={false}
          text="Latest News and Updates on Document Legalisation"
        />
      </div>

      <main className="">
        {/* NewsData Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
          {NewsData.map((item) => (
            <div
              key={item.id}
              className="bg-secondary p-4 rounded-figma-sm! overflow-hidden  "
            >
              {/* Service Image */}
              <div className="relative w-full h-[220px] md:h-[250px] xl:h-[390px] bg-secondary overflow-hidden">
                <Image
                  src={item.image}
                  alt={"photo"}
                  fill
                  className="object-cover rounded-figma-sm! transition duration-300"
                />
              </div>

              {/* Service Info */}
              <div className="p-2 2xl:p-4">
                {/* Category */}
                <div className="flex flex-col 2xl:flex-row 2xl:justify-between 2xl:items-center gap-3 2xl:gap-0">
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className=" ">Posted on: {item.postData}</p>
                  </div>

                  <span className="text-[#000000] font-bold text-[16px] xl:text-[20px]">
                    <Link href={`/news/${item.id}`}>
                      <Button
                        className=" bg-transparent border border-primary text-black font-bold"
                        size={"lg"}
                        icon={false}
                      >
                        Read now
                        <ArrowBlackRightIcon className="text-black" />
                      </Button>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <Button className="bg-transparent text-black border rounded-full">
            See all
          </Button>
        </div>
      </main>
    </div>
  );
};

export default LatestNews;
