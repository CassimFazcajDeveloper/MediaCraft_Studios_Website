"use client";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
  courseUrl: string;
  
  language: string
};

const Projectcard = ({
  title,
  description,
  image,
  courseUrl,
  language,
}: Props) => {
  return (
    <div className="group relative bg-gray-800 shadow-md rounded-2xl overflow-hidden">
      {/* image container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* card content below image*/}
      <div className="p-6">
        <h3 className="text-xl text-gray-400 dark:text-white font-semibold mb-2 group-hover:text-blue-500 transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {description}
        </p>

        <p className="text-gray-400 pb-2"> <span className="text-yellow-300">Language :</span> {language}</p>
        <p className="text-gray-400 pb-6"> <span className="text-yellow-300">Price :</span> Not Set</p>

        {/* buttons */}
        <div className="flex items-center gap-3">
          {
            <Button size="sm" className="flex-1 min-w-0  bg-yellow-600">
              <a
                href={courseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center whitespace-nowrap"
              >
                
                Enroll
              </a>
            </Button>
          }
        </div>
      </div>
    </div>
  );
};

export default Projectcard;
