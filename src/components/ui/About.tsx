import Image from 'next/image';
import React from 'react';
import about from '../../assets/about-us.webp';
import { Button, Col, Row } from 'antd';
import Link from 'next/link';
const About = () => {
  return (
    <section className='container pb-32 my-0'>
      <h1 className='sub-title sub-title-style mb-20 text-center mt-0  '>
        About Us
      </h1>

      <div className='flex   flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0'>
        <Image
          src={about}
          width={360}
          height={314}
          alt='how_it_works'
          className='  md:w-[360px]  md:h-[314px] w-full h-full  '
        />
        <div className='text-base font-normal text-[#212529]   m-auto space-y-4 text-justify'>
          <p>
            <strong>Cross Road Initiative</strong> একটি অবিন্নমূল্যে এজেন্সি যা
            ছাত্র-ছাত্রীদেরকে বিদেশে অধ্যয়ন করতে সাহায্য করতে কাজ করছে। আমাদের
            সেবাগুলি ছাত্র-ছাত্রীদের বিদেশের শিক্ষার পথে এবং পরবর্তী ক্যারিয়ার
            উন্নতির সাথে মিলিত। আমাদের দক্ষ পরামর্শকারী দল ছাত্র-ছাত্রীদের সঠিক
            গাইডেন্স এবং সহানুভূতি সরবরাহ করতে প্রবৃদ্ধি করে যাচ্ছে। আমরা
            বিশ্ববিদ্যালয় এবং পাঠশালা বেছে নিতে সাহায্য করতে পারি, এবং শিক্ষার
            প্রস্তুতি সম্পর্কিত আপনার সকল প্রয়োজনের সমর্থন করতে একটি পূর্ণাঙ্গ
            প্ল্যাটফর্ম তৈরি করতে গুরুত্ব দিয়েছি।.
          </p>
          <p>
            একাডেমিক যাত্রার সময়ে আমরা ছাত্র-ছাত্রীদেরকে অবশ্যই তাদের
            প্রয়োজনীয় মার্গনির্দেশন এবং মানবাণিজ্যিক সহায়তা প্রদান করি, যাতে
            তারা তাদের লক্ষ্যে পৌঁছতে সক্ষম হতে পারে। আমাদের মূল উদ্দেশ্য হল
            শিক্ষা ও ক্যারিয়ার উন্নতির পথে ছাত্র-ছাত্রীদের সাথে থাকা এবং
            তাদেরকে একটি উন্নত ভবিষ্যদ্বাণি তৈরি করার জন্য সাহায্য করা ।
          </p>
          <p>
            সম্পূর্ণাঙ্গ এজেন্সি সেবা, বিশেষজ্ঞ পরামর্শ, এবং একক ছাত্র-ছাত্রীর
            প্রয়োজনীয় সাহায্য দেওয়ার জন্য{' '}
            <strong>Cross Road Initiative</strong> প্রতিশ্রুতি করে।
          </p>

          <div className='pt-4'>
            <Link href='/about' className='no-underline'>
              <Button
                size='large'
                className='  bg-secondary  text-white roun rounded-full text-base font-medium '
              >
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
