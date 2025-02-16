'use client';
import Image from "next/image";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Course {
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  alt: string;
  rating: number;
  path: string;
}

const ExploreCourses = () => {
  const [activeTab, setActiveTab] = useState('bestSelling');
  const router = useRouter();

  const bestSellingCourses: Course[] = [
    {
      title: 'Full Stack Web Development',
      description:
        'Learn frontend and backend with HTML, CSS, JavaScript, React, Node.js, and MongoDB.',
      shortDescription: 'Master Web Development',
      image: '/images/web.png',
      alt: 'Web Development Course',
      rating: 4.5,
      path: '/courses/web-dev',
    },
    {
      title: 'App Development',
      description:
        'Build mobile apps using React Native, Flutter, and native tools.',
      shortDescription: 'Mobile App Development',
      image: '/images/app.png',
      alt: 'App Development Course',
      rating: 4.2,
      path: '/courses/app-dev',
    },
    {
      title: 'Python Programming',
      description:
        'Learn Python from basics to advanced with data science and AI applications.',
      shortDescription: 'Python for Developers',
      image: '/images/python (2).png',
      alt: 'Python Course',
      rating: 4.8,
      path: '/courses/software-dev',
    },
  ];

  const otherCourses: Course[] = [
    {
      title: 'Digital Marketing',
      description:
        'Master SEO, content marketing, and paid ads to grow your brand.',
      shortDescription: 'Marketing Strategies',
      image: '/assets/digital.jpeg',
      alt: 'Digital Marketing Course',
      rating: 4.1,
      path: '/courses/digital-marketing',
    },
  ];

  const freeCourses: Course[] = [];

  const renderCourses = (courses: Course[]) => {
    return courses.map((course, index) => {
      const fullStars = Math.floor(course.rating);
      const emptyStars = 5 - fullStars;

      return (
        <div key={index} className='bg-[#080808] rounded-3xl border-2 border-[#1c1c1c] p-6'>
          <Image
            alt={course.alt}
            src={course.image}
            className='w-full h-56 object-cover rounded-lg'
            width={400}
            height={224}
            priority
          />
          <h2 className='text-xl font-medium text-gray-300 mt-4'>{course.title}</h2>
          <p className='text-gray-400 my-2 text-lg'>{course.shortDescription}</p>
          <p className='text-gray-400 mt-2 text-[1em] border-b-2 border-[#1c1c1c] pb-4'>
            {course.description}
          </p>

          <div className='flex items-center my-2'>
            <span className='text-yellow-500 text-2xl'>
              {'★'.repeat(fullStars)}{'☆'.repeat(emptyStars)}
            </span>
            <span className='text-gray-400 text-lg ml-2'>{course.rating}</span>
          </div>

          <div className='flex my-4'>
            <button
              onClick={() => router.push(course.path)}
              className='border-2 border-[#1c1c1c] text-gray-300 px-4 py-2 rounded-lg '
            >
              View Course
            </button>
            <button className='hover:shadow-xl bg-[#080808] border-2 border-[#1c1c1c] ml-4 text-gray-300 px-4 py-2 rounded-lg '>
              Contact Us
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className='bg-[#080808] text-gray-300 my-12'>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-5xl font-extralight text-center text-[#d0d0d0] mb-6'>
          Explore Our Courses
        </h1>
        <div className='mb-8 mt-10'>
          <div className='hidden sm:flex justify-center space-x-4'>
            {['bestSelling', 'otherCourses', 'freeCourses'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 rounded-full font-extralight transition-all duration-300 transform ${
                  activeTab === tab
                    ? 'bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 shadow-lg scale-110 border border-[#1c1c1c]'
                    : 'bg-[#080808] text-[#d0d0d0] border-2  border-[#1c1c1c]'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'bestSelling' ? 'Best Selling' : tab === 'otherCourses' ? 'Other Courses' : 'Free Courses'}
              </button>
            ))}
          </div>

          <div className='sm:hidden px-4'>
            <select
              className='w-full px-4 py-3 border border-gray-500 rounded-full text-gray-300 bg-[#080808] focus:outline-none focus:ring-2 focus:ring-gray-500'
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              <option value='bestSelling'>Best Selling</option>
              <option value='otherCourses'>Other Courses</option>
              <option value='freeCourses'>Free Courses</option>
            </select>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {activeTab === 'bestSelling' && renderCourses(bestSellingCourses)}
          {activeTab === 'otherCourses' && renderCourses(otherCourses)}
          {activeTab === 'freeCourses' &&
            (freeCourses.length > 0 ? (
              renderCourses(freeCourses)
            ) : (
              <div className='flex items-center justify-center w-full h-96'>
                <p className='text-center text-gray-400 text-lg'>
                  No free courses available at the moment.
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreCourses;
