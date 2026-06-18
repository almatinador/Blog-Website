type Post = {
    id: number;
    title: string;
    category: string;
    description: string;
    author: string;
    date: string;
};

const featuredPosts: Post[] = [
    {
        id: 1,
        title: "Getting Started with Next.js",
        category: "Development",
        description:
            "Learn how to build modern web applications using Next.js and TypeScript.",
        author: "John Doe",
        date: "June 15, 2026",
    },
    {
        id: 2,
        title: "Mastering Tailwind CSS",
        category: "CSS",
        description:
            "Build beautiful and responsive user interfaces faster with Tailwind CSS.",
        author: "Sarah Smith",
        date: "June 12, 2026",
    },
    {
        id: 3,
        title: "10 Productivity Tips for Developers",
        category: "Productivity",
        description:
            "Increase your efficiency and stay focused while working on projects.",
        author: "Alex Johnson",
        date: "June 10, 2026",
    },
];

export default function FeaturedPosts() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="mb-12 text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        Featured Articles
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-slate-900">
                        Featured Posts
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                        Explore our most popular and hand-picked articles written by
                        experienced authors.
                    </p>
                </div>

                {/* Posts Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {featuredPosts.map((post) => (
                        <article
                            key={post.id}
                            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            {/* Thumbnail */}
                            <div className="h-52 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

                            <div className="p-6">
                                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                    {post.category}
                                </span>

                                <h3 className="mt-4 text-xl font-bold text-slate-900">
                                    {post.title}
                                </h3>

                                <p className="mt-3 text-slate-600">
                                    {post.description}
                                </p>

                                <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                                    <span>{post.author}</span>
                                    <span>{post.date}</span>
                                </div>

                                <button className="mt-6 w-full rounded-lg bg-slate-900 py-3 font-medium text-white transition hover:bg-slate-800">
                                    Read More
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}