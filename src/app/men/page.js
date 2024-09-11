import Link from "next/link";
import "./men.css";

export default function Men() {
  return (
    <div>
      <h1 className="men-title">Viskas apie vyru drabuzius</h1>
      <h2>Kategorijos</h2>
      <div>
        <Link href="/men/shoes">Batai</Link>
        <Link href="/men/shirts">Marškiniai</Link>
      </div>
    </div>
  );
}
