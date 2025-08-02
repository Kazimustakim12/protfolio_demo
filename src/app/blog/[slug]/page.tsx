import { blogPosts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Calendar, Tag } from 'lucide-react';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 max-w-4xl">
      <article className="prose prose-lg dark:prose-invert mx-auto">
        <header className="mb-8">
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-4">
             <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                data-ai-hint="programming blog"
              />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-3">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1.5">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Tag className="h-4 w-4" />
              <Badge variant="secondary">{post.category}</Badge>
            </div>
          </div>
        </header>
        
        <div 
          className="text-foreground/90"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

      </article>
    </div>
  );
}
