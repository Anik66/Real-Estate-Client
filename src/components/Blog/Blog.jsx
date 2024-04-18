import React from 'react';
import Hotel from "../../assets/Hotel-Blog.jpg"
import Motel from "../../assets/motel-blog.jpg"
import Resort from "../../assets/resort-blog.jpg"
import Guest from "../../assets/Guesthoues.jpg"

const Blog = () => {
  
  return (
 <div className='text-gray-100'>
	   <section className="  py-6 sm:py-12 bg-base-200 text-gray-100 lg:mt-0 mt-[50px] lg:mb-[200px]">
	<div className="container p-6 mx-auto space-y-8 animate__animated animate__bounceInDown">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold text-black animate__animated animate__bounceInDown">Unlocking Property Insights Expert Blog</h2>
			<p className="font-serif text-sm lg:text-2xl text-black animate__animated animate__bounceInDown"> luxury, comfort, travel, hospitality, amenities <br /> accommodation, convenience, relaxation, service, experience.</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 ">
			<article className="flex flex-col bg-gray-200 ">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 bg-gray-200" src={Hotel} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-blue-500">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-black">Discovering Luxe Escapes: Ultimate Travel Tips and Hotel Reviews</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-black">
						<span>March 1, 2024</span>
						<span>2.1K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col bg-gray-200">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 bg-gray-500" src={Motel} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-blue-800">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-black">Revamping Real Estate: Insights and Tips for Property Enthusiasts</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-black">
						<span>June 2, 2023</span>
						<span>2.2K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col bg-gray-200">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 bg-gray-500" src={Guest} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-blue-800">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-black">Cozy Corners: Your Guide to Memorable Guesthouse Escapes and Experiences</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-black ">
						<span className='text-black'>Febuary 28, 2024</span>
						<span className='text-black'>2.3K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col bg-gray-200">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 bg-gray-500" src={Resort}/>
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-blue-800">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-black">Checking In: Motel Reviews, Tips, and Travel Inspiration Blog </h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-black">
						<span>April 4, 2020</span>
						<span>2.4K views</span>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>
 </div>
  );
};

export default Blog;
