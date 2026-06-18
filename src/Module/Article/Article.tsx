type Article = {
    id: number;
    title: string;
    category: string;
    date: string;
    excerpt: string;
};

const articles: Article[] = [
    {
        id: 1,
        title: "Why TypeScript Is Worth Learning",
        category: "Programming",
        date: "June 18, 2026",
        excerpt:
            "Discover how TypeScript helps developers write safer and more maintainable code.",
    },
    {
        id: 2,
        title: "Top 10 Tailwind CSS Tips",
        category: "CSS",
        date: "June 16, 2026",
        excerpt:
            "Improve your workflow and build modern interfaces faster with these tips.",
    },
    {
        id: 3,
        title: "Getting Started with Next.js",
        category: "Web Development",
        date: "June 15, 2026",
        excerpt:
            "Learn the fundamentals of building scalable React applications using Next.js.",
    },
    {
        id: 4,
        title: "The Future of Artificial Intelligence",
        category: "Technology",
        date: "June 14, 2026",
        excerpt:
            "Explore emerging AI trends and how they may impact our daily lives.",
    },
    {
        id: 5,
        title: "Building Better UI Designs",
        category: "Design",
        date: "June 13, 2026",
        excerpt:
            "Simple design principles that can dramatically improve user experience.",
    },
    {
        id: 6,
        title: "Remote Work Productivity Guide",
        category: "Productivity",
        date: "June 12, 2026",
        excerpt:
            "Practical techniques to stay productive while working remotely.",
    },
];

export default function LatestArticles() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mb-12 text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        Recent Posts
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-slate-900">
                        Latest Articles
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                        Stay updated with our newest articles, tutorials, and insights.
                    </p>
                </div>

                {/* Articles Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <article
                            key={article.id}
                            className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-lg"
                        >
                            <div className="h-52 bg-gradient-to-r from-sky-500 to-indigo-600" />

                            <div className="p-6">
                                <span className="text-sm font-medium text-blue-600">
                                    {article.category}
                                </span>

                                <h3 className="mt-3 text-xl font-bold text-slate-900">
                                    {article.title}
                                </h3>

                                <p className="mt-3 text-slate-600">
                                    {article.excerpt}
                                </p>

                                <div className="mt-5 flex items-center justify-between">
                                    <span className="text-sm text-slate-500">
                                        {article.date}
                                    </span>

                                    <button className="font-medium text-blue-600 hover:text-blue-700">
                                        Read More →
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}