import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "product", name: "Product Updates" },
    { id: "engineering", name: "Engineering" },
    { id: "industry", name: "Industry Insights" },
    { id: "guides", name: "Guides" }
  ];

  const featuredPost = {
    id: 1,
    title: "Introducing QRPH Integration: Unified QR Payments for the Philippines",
    excerpt: "We're excited to announce our full integration with QRPH, the Philippine QR payment standard. Now accept payments from any QRPH-enabled bank or e-wallet through a single integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    category: "product",
    author: "DirectPay Team",
    date: "January 10, 2024",
    readTime: "5 min read"
  };

  const posts = [
    {
      id: 2,
      title: "Understanding PCI-DSS Compliance for Philippine Merchants",
      excerpt: "A comprehensive guide to PCI-DSS compliance requirements and how DirectPay helps you stay compliant.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
      category: "guides",
      author: "Security Team",
      date: "January 8, 2024",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "The Rise of E-Wallet Payments in the Philippines",
      excerpt: "Exploring the rapid growth of GCash, Maya, and other e-wallets in the Philippine payment landscape.",
      image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=400&h=250&fit=crop",
      category: "industry",
      author: "Market Research",
      date: "January 5, 2024",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Building Resilient Payment Systems with Redundancy",
      excerpt: "How we architect our payment infrastructure for 99.99% uptime and instant failover.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      category: "engineering",
      author: "Engineering Team",
      date: "January 3, 2024",
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "New Feature: Real-time Settlement Tracking",
      excerpt: "Track your settlements in real-time with our new dashboard feature. Know exactly when your funds will arrive.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "product",
      author: "Product Team",
      date: "December 28, 2023",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Integrating DirectPay with Shopify: A Step-by-Step Guide",
      excerpt: "Complete guide to setting up DirectPay payments on your Shopify store in under 30 minutes.",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=250&fit=crop",
      category: "guides",
      author: "Developer Relations",
      date: "December 25, 2023",
      readTime: "7 min read"
    },
    {
      id: 7,
      title: "BSP's Digital Payment Roadmap: What It Means for Merchants",
      excerpt: "Breaking down the Bangko Sentral ng Pilipinas' vision for digital payments and its impact on businesses.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      category: "industry",
      author: "Policy Team",
      date: "December 20, 2023",
      readTime: "6 min read"
    },
    {
      id: 8,
      title: "Optimizing Webhook Delivery for High-Volume Merchants",
      excerpt: "Technical deep-dive into our webhook infrastructure and best practices for reliable event handling.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop",
      category: "engineering",
      author: "Backend Team",
      date: "December 18, 2023",
      readTime: "12 min read"
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      product: "bg-blue-500/10 text-blue-600",
      engineering: "bg-purple-500/10 text-purple-600",
      industry: "bg-green-500/10 text-green-600",
      guides: "bg-orange-500/10 text-orange-600"
    };
    return colors[category] || "bg-gray-500/10 text-gray-600";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-10 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-6">
              Blog & Resources
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
              Insights & Updates from
              <br />
              <span className="text-gradient-light">DirectPay</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/70">
              Stay informed with the latest news, product updates, and industry insights
              from the DirectPay team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b border-border sticky top-16 lg:top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {selectedCategory === "all" && !searchQuery && (
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className={`w-fit mb-4 ${getCategoryColor(featuredPost.category)}`}>
                    Featured
                  </Badge>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Button className="w-fit group">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group cursor-pointer"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <Badge className={`mb-3 ${getCategoryColor(post.category)}`}>
                      {categories.find(c => c.id === post.category)?.name}
                    </Badge>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No articles found matching your search.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Subscribe to our newsletter for the latest updates, product news, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button>
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
