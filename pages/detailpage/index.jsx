import Navbar from '../../Components/Navbar';
import Image from 'next/image';
import star from '../../src/images/star.png';
import detail1 from '../../src/images/img-details-1.png';
import detail2 from '../../src/images/img-details-2.png';
function DetailPage() {
  return (
    <div className=" m-20">
      <Navbar />
      <section>
        <div className="pt-6">
          <h3 className="text-md font-semibold text-primary pb-5">Alterra Villa Indah</h3>
          <p className=" text-xs text-secondary font-extralight"> Jl. Dr. Setiabudi No.430 , Ledeng, Kecamatan Cidadap, Jawa Barat, Setiabudi, Bandung, Jawa Barat, Indonesia, 40143</p>
          <Image src={star} alt="5 star" width={195} height={27.48} />
        </div>
        <div className="grid grid-flow-row">
          <div className="cols ">
            <Image src={detail1} alt="image 1" className="w-1/2  " width={643} height={500} />
          </div>
          <div className="cols ">
            <Image src={detail2} alt="image 1" className="w-1/2 " width={487} height={245} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailPage;
