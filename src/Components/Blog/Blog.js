import React from "react";
import reactRouter from "../../images/reactRouter.jpg";
import useRef from "../../images/useRef.jpg";
import react from "../../images/react.png";

const Blog = () => {
  return (
    <div>
      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              What is the purpose of React Router?
            </h1>
            <p className='mb-8 leading-relaxed text-justify'>
              React Router is a standard library for routing in React. It
              enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL. <br />
              React Router, and dynamic, client-side routing, allows us to build
              a single-page web application with navigation without the page
              refreshing as the user navigates. React Router uses component
              structure to call components, which display the appropriate
              information. By preventing a page refresh, and using Router or
              Link, which is explained in more depth below, the flash of a white
              screen or blank page is prevented. This is one increasingly common
              way of having a more seamless user experience. React router also
              allows the user to utilize browser functionality like the back
              button and the refresh page while maintaining the correct view of
              the application.
            </p>
            <div className='flex justify-center'></div>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <img
              className='object-cover object-center rounded h-[168px] w-[300px]'
              alt='hero'
              src={reactRouter}
            />
          </div>
        </div>
      </section>
      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              How does Context API work?
            </h1>
            <p className='mb-8 leading-relaxed text-justify'>
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on.
              <br />
              In other words, Context provides a way to pass data through the
              component tree without having to pass props down manually at every
              level.
            </p>
            <div className='flex justify-center'></div>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <img
              className='object-cover object-center rounded h-[168px] w-[300px]'
              alt='hero'
              src={react}
            />
          </div>
        </div>
      </section>
      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              What does useRef() do?
            </h1>
            <p className='mb-8 leading-relaxed text-justify'>
              useRef returns a mutable ref object whose .current property is
              initialized to the passed argument (initialValue). The returned
              object will persist for the full lifetime of the component.
              <br />
              The useRef Hook allows you to persist values between renders. It
              can be used to store a mutable value that does not cause a
              re-render when updated. It can be used to access a DOM element
              directly.
            </p>
            <div className='flex justify-center'></div>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <img
              className='object-cover object-center rounded'
              alt='hero'
              src={useRef}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
