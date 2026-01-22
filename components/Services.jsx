export default function Services() {
    const reasons = [
        {
            name: 'Complete Full-Stack Systems',
            icon: '/assets/web-icon.png',
            description: 'I build complete full-stack systems — frontend + backend + DB',
        },
        {
            name: 'Modern Tech Stack',
            icon: '/assets/mobile-icon.png',
            description: 'Skilled with React, FastAPI, Node.js, PostgreSQL, Firebase',
        },
        {
            name: 'AI Workflows',
            icon: '/assets/ui-icon.png',
            description: 'Strong understanding of AI workflows (RAG, LangChain, Gemini)',
        },
        {
            name: 'Real-Time Systems',
            icon: '/assets/graphics-icon.png',
            description: 'Experience with real-time messaging using WebSockets',
        },
        {
            name: 'Production-Ready',
            icon: '/assets/web-icon.png',
            description: 'I build production-ready UI & API architecture',
        },
        {
            name: 'Fast Learner',
            icon: '/assets/mobile-icon.png',
            description: 'I adapt fast, learn fast, and deliver high-quality solutions',
        },
        {
            name: 'Versatile Tools',
            icon: '/assets/ui-icon.png',
            description: 'Hands-on experience in CMS, cloud, and modern developer tools',
        }
    ];
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-24">
            <h4 className="text-center mb-2 text-lg font-Ovo">Why choose me</h4>
            <h2 className="text-center text-5xl font-Ovo">Why Hire Me?</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I bring a unique combination of full-stack development skills and real-world AI integration experience.</p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {reasons.map((reason) => (
                    <div key={reason.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={reason.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{reason.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{reason.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}