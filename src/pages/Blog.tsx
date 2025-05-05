
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();
  
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right Credit Card for Your Lifestyle",
      excerpt: "Not all credit cards are created equal. Learn how to match your spending habits with the right rewards program.",
      date: "May 1, 2025",
      category: "Credit Cards",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Understanding Personal Loan Interest Rates",
      excerpt: "What factors affect your personal loan interest rate and how to secure the best possible terms.",
      date: "April 25, 2025",
      category: "Loans",
      image: "https://images.unsplash.com/photo-1579621970590-9d624316904b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "5 Things to Know Before Using Buy Now, Pay Later",
      excerpt: "BNPL services are convenient, but come with important considerations. Here's what you need to know.",
      date: "April 18, 2025",
      category: "BNPL",
      image: "https://images.unsplash.com/photo-1563914572107-b51ca42e46d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "How to Improve Your Credit Score in 90 Days",
      excerpt: "Practical steps you can take today to boost your credit score and unlock better financial opportunities.",
      date: "April 10, 2025",
      category: "Credit Advice",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Business Financing: Traditional Loans vs. Alternative Options",
      excerpt: "Exploring the pros and cons of different financing routes for your small business.",
      date: "April 5, 2025",
      category: "Business",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Saving for a Home: Strategies to Build Your Down Payment",
      excerpt: "Effective approaches to save for a home purchase in today's competitive real estate market.",
      date: "March 28, 2025",
      category: "Mortgages",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const categories = ["All", "Credit Cards", "Loans", "BNPL", "Credit Advice", "Business", "Mortgages"];

  // Filter blog posts by category
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Handler for clicking on a blog post
  const handlePostClick = (postId: number) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="text-center">
            <h1 className="title-xl mb-4">Financial Insights & Blog</h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Expert tips, guides, and analysis to help you make smarter financial decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="py-16 bg-gray">
        <div className="container-wide">
          {/* Category Filter */}
          <div className="mb-10 overflow-x-auto">
            <div className="flex space-x-4 min-w-max">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full shadow-soft transition-colors ${
                    activeCategory === category 
                      ? "bg-teal text-white" 
                      : "bg-white text-slate hover:bg-teal hover:text-white"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <div className="mb-12">
              <div 
                className="bg-white rounded-lg shadow-soft overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.01]" 
                onClick={() => handlePostClick(filteredPosts[0].id)}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-64 md:h-auto bg-gray">
                    <img
                      src={filteredPosts[0].image}
                      alt={filteredPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-sm text-teal font-medium">{filteredPosts[0].category}</span>
                    <h2 className="text-2xl font-bold mt-2 mb-4">{filteredPosts[0].title}</h2>
                    <p className="text-slate mb-4">{filteredPosts[0].excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate">{filteredPosts[0].date}</span>
                      <Link to={`/blog/${filteredPosts[0].id}`} className="text-teal font-medium flex items-center">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <div 
                key={post.id} 
                className="bg-white rounded-lg shadow-soft overflow-hidden hover-scale cursor-pointer"
                onClick={() => handlePostClick(post.id)}
              >
                <div className="h-48 bg-gray">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-teal font-medium">{post.category}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
                  <p className="text-slate mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate">{post.date}</span>
                    <Link to={`/blog/${post.id}`} className="text-teal font-medium flex items-center">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State - When no posts match filter */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold mb-4">No posts found in this category</h3>
              <p className="text-slate mb-6">Try selecting another category or check back later for new content.</p>
              <button 
                className="px-6 py-2 bg-teal text-white rounded-full shadow-soft"
                onClick={() => setActiveCategory("All")}
              >
                View All Posts
              </button>
            </div>
          )}

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-slate">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full text-slate hover:bg-white transition-colors">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full text-slate hover:bg-white transition-colors">
                3
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full text-slate hover:bg-white transition-colors">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-navy text-white">
        <div className="container-tight text-center">
          <h2 className="title-lg mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Get the latest financial tips, guides, and insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md flex-grow"
            />
            <button className="cta-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
