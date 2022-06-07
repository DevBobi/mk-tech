import React from 'react'

const Skim = () => {
  return (
    <div>
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-start">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange">
              Skim
            </h1>
            <p class="mb-10 leading-relaxed">
              This is one of the most popular ads. After user’s click, this ad
              opens landing page in behind. So, the user experience is not
              hampered much.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 pr-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Learn more..
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skim