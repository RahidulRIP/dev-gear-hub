"use client";

import { Award, Target, Heart, Zap } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Our Mission",
      desc: "To empower developers by providing high-quality, ergonomic, and aesthetic tools that enhance productivity and comfort.",
    },
    {
      icon: <Award className="w-8 h-8 text-indigo-600" />,
      title: "Quality First",
      desc: "Every product in our collection is hand-tested by developers to ensure it meets the highest industry standards.",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Innovation",
      desc: "We stay ahead of the curve, bringing you the latest in mechanical keyboard tech and desk setup trends.",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Community",
      desc: "We are more than just a store; we are a hub for tech enthusiasts to build their dream workspace together.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20 lg:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            We Help Developers <br />
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Build Better Workspaces
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Founded in 2024, DevGear Hub started with a simple goal: to curate
            the best tech accessories for the people who build the future.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200"
                alt="Workspace"
                width={400}
                height={400}
                className="rounded-3xl shadow-2xl border-8 border-gray-50"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                As developers ourselves, we spent hours searching for the right
                mechanical keyboard and the perfect desk setup. We realized that
                there was no single place that focused solely on the needs of
                developers.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                That is why we created <strong>DevGear Hub</strong>. We source
                premium gear from around the world—from ergonomic chairs to
                custom keycaps—so you can focus on what you do best: writing
                great code.
              </p>
              <div className="flex gap-10">
                <div>
                  <h4 className="text-3xl font-bold text-blue-600">10k+</h4>
                  <p className="text-gray-500 font-medium uppercase tracking-widest text-xs mt-1">
                    Customers
                  </p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-indigo-600">500+</h4>
                  <p className="text-gray-500 font-medium uppercase tracking-widest text-xs mt-1">
                    Products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">What Drives Us</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-blue-600 rounded-[3rem] py-16 px-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to upgrade your desk?
            </h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto">
              Join thousands of developers who have already transformed their
              daily workflow with our curated gear.
            </p>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg">
              Browse the Collection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
