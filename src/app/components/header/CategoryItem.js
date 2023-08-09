import Link from "next/link";
import React from "react";

const CategoryItem = () => {
  return (
    <ul className="p-2 z-10">
      <li>
        <Link href="/monitor">Monitor</Link>
      </li>
      <li>
        <Link href="/ram">Ram</Link>
      </li>
      <li>
        <Link href="/powersupply">Power Supply</Link>
      </li>
      <li>
        <Link href="/storage">Storage</Link>
      </li>
      <li>
        <Link href="/cpu">CPU</Link>
      </li>
      <li>
        <Link href="/motherboard">Motherboard</Link>
      </li>
    </ul>
  );
};

export default CategoryItem;
