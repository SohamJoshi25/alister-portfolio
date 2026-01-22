import Image from "next/image";

import { articles } from "@/data/articles";

const ArticlesPage = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-20">
      <h1 className="text-5xl font-semibold mb-16">Articles</h1>

      <div className="space-y-20" >
        {articles.sort((a,b)=> b.publishedAt.getTime()-a.publishedAt.getTime()).map((article) => (
          <article
            key={article.id}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {/* Cover Image */}
            <div className="md:col-span-1" title="Click to know more">
               <a href={`${article.link}`} target="_blank" title="Click to know more">
              <Image
                src={article.coverImage}
                alt={article.title}
                width={400}
                height={260}
                className="object-cover rounded-md shadow-md"
              />
              </a>
            </div>

            {/* Content */}
            <div className="md:col-span-2">
              <a href={`${article.link}`} target="_blank" title="Click to know more">
                <h2 className="text-xl md:text-2xl font-medium leading-snug hover:underline underline-offset-4">
                  {article.title} | {article.publication}
                </h2>
              </a>

              {/* Meta */}
              <div className="mt-3 text-sm text-neutral-600 flex flex-wrap gap-x-2 gap-y-1">
                <span>{article.location}</span><span>•</span>
                <span>{article.publishedAt.getDate()}-{article.publishedAt.getMonth()}-{article.publishedAt.getFullYear()} </span><span>•</span>
                <span>{article.readTime}</span><span>•</span>
                <span>{article.comments} comments</span><span>•</span>
                <span>{article.likes} likes</span>
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-3">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs uppercase tracking-normal text-neutral-600 border rounded-lg border-neutral-400 px-1.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Excerpt */}
              <p className="mt-6 text-neutral-700 leading-relaxed">
                {article.excerpt} <span>{article.content || ""}</span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ArticlesPage;
