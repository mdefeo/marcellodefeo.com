"use client";

import Image from 'next/image';
import Link from 'next/link';
import entrepreneurshipData from '@/data/experience/entrepreneurshipData.json';
import ExperienceListItem from '@/components/ui/ExperienceListItem';
import ChatContainer from "@/components/chat/ChatContainer";

export default function EntrepreneurshipSection() {
  return (
    <section id="entrepreneurship" aria-labelledby="entrepreneurship-heading" role="contentinfo">
      <div className="grid grid-cols-1 lg:grid-cols-5 mx-auto w-full md:gap-8">
        
        <article className="w-full lg:col-span-3 lg:flex lg:flex-col lg:justify-center md:mb-10 mx-auto order-2 lg:order-1">
          <h2 className="mb-6">Entrepreneurship</h2>

          <div className="carousel w-full">
            {entrepreneurshipData.map((item, index) => (
              <div key={index} id={`item${index + 1}`} className="carousel-item w-full">
                <ExperienceListItem
                  id={index + 1}
                  logoSrc={item.logoSrc}
                  altText={item.altText}
                  institutionName={item.institutionName}
                  duration={item.duration}
                  title={item.title}
                  location={item.location}
                  description={item.description}
                />
              </div>
            ))}
          </div>

          <div className="flex w-full justify-center gap-4 py-4">
            {entrepreneurshipData.map((item, index) => (
              <Link 
                key={index} 
                href={`#item${index + 1}`} 
                className="p-2 hover:opacity-75 transition"
              >
                <Image 
                  src={item.logoSrc} 
                  alt={item.altText} 
                  width={50} 
                  height={50} 
                  className="object-contain rounded-full shadow-md"
                />
              </Link>
            ))}
          </div>
        </article>

        <aside className="w-full h-full flex justify-center items-center order-1 lg:order-2 lg:col-span-2">
          <ChatContainer />
        </aside>
      </div>
    </section>
  );
}