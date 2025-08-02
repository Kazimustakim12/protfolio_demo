import { BlogCard } from '@/components/BlogCard';
import { blogPosts } from '@/lib/data';
import { motion } from 'framer-motion';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
        My Blog
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </div>
  );
}
