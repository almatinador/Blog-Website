import { GraduationCap } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="bg-slate-950 text-white">
            <div className="container mx-auto px-6 py-24">
                <div className="max-w-4xl">
                    <span className="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                        <GraduationCap /> Welcome to Our Blog
                    </span>

                    <h1 className="mt-24 text-5xl font-bold leading-tight md:text-7xl">
                        Discover Stories,
                        <span className="block text-blue-500">
                            Ideas & Insights
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg text-slate-300">
                        Explore articles on web development, technology, design,
                        productivity, and much more. Learn new skills and stay updated
                        with the latest trends.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700">
                            Read Blogs
                        </button>

                        <button className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:bg-slate-800">
                            Learn More
                        </button>
                    </div>

                    <div className="mt-12 flex gap-10">
                        <div>
                            <h3 className="text-3xl font-bold">500+</h3>
                            <p className="text-slate-400">Articles</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold">50K+</h3>
                            <p className="text-slate-400">Readers</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold">100+</h3>
                            <p className="text-slate-400">Authors</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}