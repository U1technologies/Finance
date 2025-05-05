
import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Sitemap = () => {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "Credit Cards", path: "/credit-cards" },
        { name: "Loans", path: "/loans" },
        { name: "Buy Now Pay Later", path: "/bnpl" },
        { name: "About Us", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Loan Pages",
      links: [
        { name: "Personal Loans", path: "/loans/personal" },
        { name: "Home Loans", path: "/loans/home" },
        { name: "Business Loans", path: "/loans/business" }
      ]
    },
    {
      title: "Account",
      links: [
        { name: "Login", path: "/login" },
        { name: "Register", path: "/register" },
        { name: "Apply Now", path: "/apply" }
      ]
    },
    {
      title: "Legal & Information",
      links: [
        { name: "Terms & Conditions", path: "/terms" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "FAQs", path: "/faqs" },
        { name: "Sitemap", path: "/sitemap" }
      ]
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="text-center">
            <h1 className="title-xl mb-4">Sitemap</h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Find your way around our website with this comprehensive guide to our pages.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Section */}
      <section className="py-16 bg-gray">
        <div className="container-tight">
          <div className="bg-white rounded-lg shadow-soft p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {sitemapSections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl font-semibold mb-6">{section.title}</h2>
                  <ul className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link to={link.path} className="flex items-center group">
                          <ArrowRight className="h-4 w-4 mr-2 text-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span className="text-slate hover:text-teal transition-colors">{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sitemap;
