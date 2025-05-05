
import React from "react";
import Layout from "../components/layout/Layout";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  
  // This would typically come from an API call based on the ID
  // For now using static content
  const post = {
    id: id,
    title: "How to Choose the Right Credit Card for Your Lifestyle",
    date: "May 1, 2025",
    author: "Jane Smith",
    category: "Credit Cards",
    tags: ["Credit Cards", "Personal Finance", "Rewards"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: `
      <p>Credit cards are a powerful financial tool when used responsibly. They can help you build credit, earn rewards, and provide financial flexibility. However, with so many options available, choosing the right card can be overwhelming.</p>
      
      <h2>Consider Your Spending Habits</h2>
      <p>The first step in choosing the right credit card is to analyze your spending habits. Different cards offer rewards for different categories:</p>
      <ul>
        <li><strong>Travel cards:</strong> If you travel frequently, look for cards that offer miles or points for flights and hotels.</li>
        <li><strong>Cashback cards:</strong> For everyday expenses like groceries and gas, cashback cards typically offer the best value.</li>
        <li><strong>Dining and entertainment:</strong> Some cards offer higher rewards for restaurants, movies, and events.</li>
      </ul>
      
      <h2>Evaluate the Fees</h2>
      <p>Many premium rewards cards come with annual fees. Make sure the benefits you'll receive outweigh these costs:</p>
      <ul>
        <li>Calculate the potential rewards based on your spending</li>
        <li>Consider the welcome bonus and if you'll meet the spending requirement</li>
        <li>Look at additional benefits like travel insurance, purchase protection, or airport lounge access</li>
      </ul>
      
      <h2>Interest Rates Matter</h2>
      <p>If you plan to carry a balance (which we generally don't recommend), the card's interest rate becomes extremely important. Look for cards with:</p>
      <ul>
        <li>Low ongoing APR</li>
        <li>Introductory 0% APR offers</li>
        <li>Balance transfer options if you're consolidating debt</li>
      </ul>
      
      <h2>Check Your Credit Score</h2>
      <p>Your credit score will determine which cards you're eligible for. Premium rewards cards typically require good to excellent credit (scores above 700). If your score is lower, consider:</p>
      <ul>
        <li>Secured credit cards</li>
        <li>Cards specifically designed for building credit</li>
        <li>Becoming an authorized user on someone else's account</li>
      </ul>
      
      <h2>Final Thoughts</h2>
      <p>The perfect credit card aligns with your lifestyle and financial goals. Take time to research and compare options before applying. Remember that each credit card application can temporarily lower your credit score, so apply strategically.</p>
      
      <p>Need personalized advice? Contact our financial experts for a customized credit card recommendation based on your unique profile.</p>
    `,
    relatedPosts: [
      {
        id: 2,
        title: "Understanding Credit Card Reward Programs",
        excerpt: "Make the most of your points and miles with these expert strategies.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 3,
        title: "How to Improve Your Credit Score",
        excerpt: "Practical steps to boost your credit score and qualify for better cards.",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      }
    ]
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="text-center">
            <Link to="/blog" className="text-slate-light hover:text-white mb-4 inline-block">
              &larr; Back to Blog
            </Link>
            <h1 className="title-xl mb-6">{post.title}</h1>
            <div className="flex flex-wrap justify-center gap-6 text-slate-light">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                <span>{post.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-gray">
        <div className="container-tight">
          <div className="bg-white rounded-lg shadow-soft overflow-hidden mb-10">
            <div className="h-96 bg-gray">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12">
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>
            </div>
          </div>

          {/* Tags and Share */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
            <div>
              <h4 className="text-sm text-slate font-medium mb-2">Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-white rounded-full text-sm text-slate">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm text-slate font-medium mb-2">Share:</h4>
              <div className="flex space-x-3">
                <a href="#" className="h-8 w-8 rounded-full bg-navy text-white flex items-center justify-center hover:bg-teal transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="h-8 w-8 rounded-full bg-navy text-white flex items-center justify-center hover:bg-teal transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="h-8 w-8 rounded-full bg-navy text-white flex items-center justify-center hover:bg-teal transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {post.relatedPosts.map((relatedPost) => (
              <div key={relatedPost.id} className="bg-white rounded-lg shadow-soft overflow-hidden hover-scale">
                <div className="h-48 bg-gray">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{relatedPost.title}</h3>
                  <p className="text-slate mb-4">{relatedPost.excerpt}</p>
                  <Link to={`/blog/${relatedPost.id}`} className="text-teal font-medium flex items-center">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
