import Image from 'next/image';
export default function NavbarCheckout() {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-center">
        <a role="button">
          <Image src="../src/images/staylogo.svg" width={100} height={39} alt="Stay Logo" />
        </a>
      </div>
    </div>
  );
}
