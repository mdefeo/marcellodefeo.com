"use client";
import Image from "next/image";
import Link from "next/link";
import Signature from "@/components/ui/Signature";
import ExperienceListItem from '@/components/ui/ExperienceListItem';
import summaryData from '@/data/experience/summaryData.json';
import SocialMediaLinks from "@/data/socialMediaData.json";
import SocialMediaNavigation from "@/components/navigation/SocialMediaNavigation";

export default function SummarySection({ showSignature }: { showSignature: boolean }) {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = document.getElementById(targetId!);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="summary" aria-labelledby="summary-heading" role="region">
      <div className="summary-grid">        
        <div className="summary-left-col">
          <article>
            {summaryData.map((item, index) => (
              <ExperienceListItem
                id={index}
                key={index}
                logoSrc={item.logoSrc}
                altText={item.altText}
                institutionName={item.institutionName}
                duration={item.duration}
                title={item.degree}
                location={item.location}
                description={item.description}
              />
            ))}
          </article>
            <p className="mt-4 text-center">
             Download my CV <Link href="/files/Marcello_De_Feo_CV.pdf" target="_blank" rel="noopener noreferrer">here</Link>.
             Want to chat? <Link href="/Marcello_De_Feo_CV.pdf" target="_blank" rel="noopener noreferrer">Click here</Link>.
            </p>
        </div>

        <div className="summary-right-col">
          <Link
            href="https://linkedin.com/in/marcellodefeo"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-image-container"
          >
            <Image
              src="/images/marcello-de-feo.png"
              alt="Marcello De Feo"
              height={320}
              width={320}
              className="profile-image"
              priority
            />
          </Link>
          <div className="signature-set-height">
            {showSignature && <Signature />}
          </div>
          <SocialMediaNavigation links={SocialMediaLinks} />
        </div>
      </div>
    </section>
  );
}