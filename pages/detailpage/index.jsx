import Navbar from '../../Components/Navbar';
import Image from 'next/image';
import { GoLocation } from 'react-icons/go';
import star from '../../src/images/star.png';
import detail1 from '../../src/images/img-details-1.png';
import detail2 from '../../src/images/img-details-2.png';
import detail3 from '../../src/images/img-details-3.png';
import detail4 from '../../src/images/img-details-4.png';
import Footer from '../../Components/Footer';
import DatePicker from '../../Components/DatePicker';
function DetailPage() {
  return (
    <div className="max-w-screen">
      <div className=" m-20">
        <Navbar />
        <section>
          <div className=" mt-10 py-2.5 bottom-0  bg-blue-400 text-primary text-left">
            <div className="flex items-center mb-3">
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-star" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-star" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-star" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Third star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-star" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Fourth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-star" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Fourth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <h1 className="font-bold text-lg">Blue Origin Fams</h1>
            <p className="flex">
              <GoLocation className="mt-1" />
              Bali, Indonesia
            </p>
          </div>
          <div class="grid grid-cols-2 gap-6 my-10">
            <div className="row-span-3">
              <Image src={detail1} alt="image 1" className="w-full  " width={643} height={500} />
            </div>
            <div className=" row">
              <Image src={detail4} alt="image 1" className="w-full  " width={643} height={400} />
            </div>
          </div>
          <div class="grid grid-cols-4 gap-6">
            <div className="col">
              <Image src={detail2} alt="image 1" className="w-full  " width={643} height={500} />
            </div>
            <div className=" row">
              <Image src={detail3} alt="image 1" className="w-full  " width={643} height={500} />
            </div>
            <div className="col">
              <Image src={detail2} alt="image 1" className="w-cover  " width={643} height={500} />
            </div>
            <div className=" row">
              <Image src={detail3} alt="image 1" className="w-cover  " width={643} height={500} />
            </div>
          </div>
        </section>
        <div>
          <h3 className="text-primary text-bold mt-20">About the Place</h3>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="col">
            <div className="grid grid-row-3 gap-4 text-secondary text-thin mt-5">
              <p className="row">
                Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally
                developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.
              </p>
              <p className="row">
                Such trends saw the demise of the soul-infused techno that typified the original Detroit sound. Robert Hood has noted that he and Daniel Bell both realized something was missing from techno in the post-rave era.
              </p>
              <p className="row">
                Design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process.
                The national agency for design: enabling Singapore to use design for economic growth and to make lives better.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 r">
            <div className=" flex justify-end">
              <DatePicker />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailPage;
