export default function CTA() {
    return (
        <section className="bg-slate-950 py-24">
            <div className="container mx-auto px-6">
                <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 md:p-16">
                    <div className="mx-auto max-w-3xl text-center text-white">
                        <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
                            🚀 Join Our Community
                        </span>

                        <h2 className="mt-6 text-4xl font-bold md:text-5xl">
                            Never Miss a New Article
                        </h2>

                        <p className="mt-6 text-lg text-blue-100">
                            Get the latest insights on web development, technology,
                            productivity, and design delivered straight to your inbox.
                        </p>

                        <form className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 rounded-xl bg-white px-5 py-4 text-slate-900 outline-none"
                            />

                            <button
                                type="submit"
                                className="rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
                            >
                                Subscribe
                            </button>
                        </form>

                        <p className="mt-4 text-sm text-blue-100">
                            No spam. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
