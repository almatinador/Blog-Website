type Testimonial = {
    id: number;
    name: string;
    role: string;
    review: string;
};

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Frontend Developer",
        review:
            "One of the best blogs I've found for web development. The articles are practical, easy to understand, and always up to date.",
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "UI/UX Designer",
        review:
            "The design and productivity content has helped me improve my workflow significantly. Highly recommended!",
    },
    {
        id: 3,
        name: "Emily Davis",
        role: "Software Engineer",
        review:
            "I regularly visit this blog for technology insights. The quality of content is consistently excellent.",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-slate-50 py-24">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        Testimonials
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
                        What Our Readers Say
                    </h2>

                    <p className="mt-4 text-lg text-slate-600">
                        Thousands of readers trust our content to learn new skills,
                        stay informed, and grow professionally.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            {/* Stars */}
                            <div className="mb-4 flex text-yellow-400">
                                ★★★★★
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                "{testimonial.review}"
                            </p>

                            <div className="mt-6 flex items-center gap-4">
                                {/* Avatar */}
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                                    {testimonial.name.charAt(0)}
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-slate-500">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="mt-20 grid gap-8 rounded-3xl bg-slate-900 p-10 text-center text-white md:grid-cols-3">
                    <div>
                        <h3 className="text-4xl font-bold">50K+</h3>
                        <p className="mt-2 text-slate-300">Monthly Readers</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold">500+</h3>
                        <p className="mt-2 text-slate-300">Published Articles</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold">4.9/5</h3>
                        <p className="mt-2 text-slate-300">Average Rating</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
