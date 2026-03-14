"use client";
import { useState } from "react";

interface ProductShortDetails {
  slug: string;
  title: string;
}
export default function DemoForm({ products }: { products: ProductShortDetails[] }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [product, setProduct] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !mobile || !product) {
      alert("Please fill all fields");
      return;
    }

    const message = `
New Demo Request

Name: ${name}
Mobile: ${mobile}
Product: ${product}
    `;

    const encoded = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/918144210272?text=${encoded}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <h4 className="font-semibold text-lg">Request a Demo</h4>

      <div className="bg-white rounded-lg p-4 space-y-3">

        {/* NAME */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Your name"
          className="w-full px-4 py-3 border border-gray-200 rounded-md outline-none focus:border-primary"
        />

        {/* MOBILE */}
        <input
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          type="tel"
          placeholder="Mobile number"
          className="w-full px-4 py-3 border border-gray-200 rounded-md outline-none focus:border-primary"
        />

        {/* PRODUCT */}
        <select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-md outline-none focus:border-primary bg-white"
        >
          <option value="">Select product</option>

          {products.map((p) => (
            <option key={p.slug} value={p.title}>
              {p.title}
            </option>
          ))}
        </select>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full py-3 bg-primary text-white rounded-md font-medium hover:opacity-90 transition"
        >
          Request Demo
        </button>
      </div>
    </form>
  );
}
