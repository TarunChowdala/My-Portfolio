export default function Experience() {
    const experiences = [
        {
            title: 'Full Stack Developer',
            company: 'Swara Tech',
            period: 'Sep 2024 – Present | Hyderabad (Onsite)',
            description: 'At Swara Tech, I work across both frontend and backend, contributing to production-grade applications.',
            responsibilities: [
                'Built responsive and reusable UI components with React',
                'Managed global state using Context API, Zustand',
                'Implemented React Query for caching & optimized API performance',
                'Developed REST APIs using FastAPI (Python)',
                'Designed & integrated PostgreSQL schemas',
                'Implemented real-time messaging with WebSockets',
                'Built websites using WordPress & Webflow',
                'Optimized frontend + backend performance (rendering, APIs, DB queries)',
                'Ensured smooth integration between all layers of the stack',
                'Collaborated closely with product, design, and backend teams',
            ],
            tech: 'React, FastAPI, Node.js, PostgreSQL, WebSockets, WordPress, Webflow',
        },
    ];

    return (
        <div id="experience" className="w-full px-[12%] py-10 scroll-mt-24">
            <h4 className="text-center mb-2 text-lg font-Ovo">My journey</h4>
            <h2 className="text-center text-5xl font-Ovo">Experience</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Professional experience building real-world AI applications and full-stack solutions.</p>

            <div className="max-w-4xl mx-auto">
                {experiences.map((exp, index) => (
                    <div key={index} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-10 mb-6 hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-1">{exp.title}</h3>
                                <p className="text-gray-600 dark:text-white/80 font-semibold">{exp.company}</p>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-white/60 mt-2 sm:mt-0">{exp.period}</span>
                        </div>
                        <p className="text-gray-600 dark:text-white/80 mb-4">{exp.description}</p>
                        <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-2">Key responsibilities:</h4>
                            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-white/80 space-y-1">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-white/80">
                            <span className="font-semibold">Tech used:</span> {exp.tech}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
