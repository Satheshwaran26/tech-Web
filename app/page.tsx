import { NextPage } from 'next';
import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import TrustedBrands from '@/components/TrustedBrands';
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions';
import WhyUs from '@/components/WhyUs';
import IdeaSection from '@/components/IdeaSection';
import ExploreCourses from '@/components/ExploreCourses';
import Testimonials from '@/components/Testimonials';
import StatsSection from '@/components/stats';
import TextFloat from '@/components/text-float';
import Works from '@/components/Work';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Divine Infotech</title>
        <meta name="description" content="Next-Generation AI Tools for Smarter Business" />
      </Head>
      <HeroSection />
      <TrustedBrands />
      <Works/>
<TextFloat/>
<StatsSection/>

      <FrequentlyAskedQuestions />
      <IdeaSection />
    </>
  );
};
export default Home;