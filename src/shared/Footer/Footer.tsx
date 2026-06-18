export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300">
            <div className="container mx-auto px-6 py-16">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            BlogSphere
                        </h2>

                        <p className="mt-4 text-sm leading-relaxed">
                            Discover insightful articles on technology, web development,
                            design, productivity, and much more.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-white">
                                    Blogs
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-white">
                                    Categories
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-white">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Categories
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Web Development
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-white">
                                    Technology
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-white">
                                    UI/UX Design
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-white">
                                    Productivity
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Newsletter
                        </h3>

                        <p className="mb-4 text-sm">
                            Subscribe to receive the latest articles and updates.
                        </p>

                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                            />

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-12 border-t border-slate-800 pt-6">
                    <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
                        <p>
                            © {new Date().getFullYear()} BlogSphere. All rights reserved.
                        </p>

                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white">
                                Privacy Policy
                            </a>

                            <a href="#" className="hover:text-white">
                                Terms of Service
                            </a>

                            <a href="#" className="hover:text-white">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}