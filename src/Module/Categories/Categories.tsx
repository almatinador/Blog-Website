type Category = {
    id: number;
    name: string;
    posts: number;
    icon: string;
};

const categories: Category[] = [
    {
        id: 1,
        name: "Web Development",
        posts: 45,
        icon: "💻",
    },
    {
        id: 2,
        name: "Technology",
        posts: 38,
        icon: "🚀",
    },
    {
        id: 3,
        name: "UI/UX Design",
        posts: 24,
        icon: "🎨",
    },
    {
        id: 4,
        name: "Productivity",
        posts: 31,
        icon: "⚡",
    },
    {
        id: 5,
        name: "Programming",
        posts: 52,
        icon: "📚",
    },
    {
        id: 6,
        name: "Artificial Intelligence",
        posts: 18,
        icon: "🤖",
    },
];

export default function Categories() {
    return (
        <section className="bg-slate-50 py-20">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="mb-12 text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        Browse Topics
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-slate-900">
                        Categories
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                        Explore articles from different categories and discover content
                        that matches your interests.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="mb-4 text-4xl">
                                {category.icon}
                            </div>

                            <h3 className="text-xl font-semibold text-slate-900">
                                {category.name}
                            </h3>

                            <p className="mt-2 text-slate-500">
                                {category.posts} Articles
                            </p>

                            <button className="mt-5 font-medium text-blue-600 transition group-hover:translate-x-1">
                                Explore →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}