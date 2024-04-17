import React from 'react';

const Blog = () => {
  return (
    <section className="animate__animated animate__bounceInDown  py-6 sm:py-12 bg-base-200 text-gray-100">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold text-black">Unlocking Property Insights: Expert Blog</h2>
			<p className="font-serif text-sm lg:text-2xl text-black">Hotels: luxury, comfort, travel, hospitality, amenities <br /> accommodation, convenience, relaxation, service, experience.</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			<article className="flex flex-col bg-gray-300">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
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
			<article className="flex flex-col bg-gray-300">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?2" />
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
			<article className="flex flex-col bg-gray-300">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?3" />
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
			<article className="flex flex-col bg-gray-300">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?4" />
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
  );
};

export default Blog;
