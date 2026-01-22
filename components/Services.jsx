export default function Services() {
    const services = [
        {
            name: 'Full-Stack Web Development',
            icon: '/assets/web-icon.png',
            description: 'End-to-end web applications with React frontend and FastAPI/Node.js backend. From UI design to database architecture.',
        },
        {
            name: 'AI Integration & Development',
            icon: '/assets/ui-icon.png',
            description: 'AI-powered applications, chatbots, RAG systems, and LangChain integrations. Build intelligent solutions with Gemini, OpenAI, and more.',
        },
        {
            name: 'API Development & Optimization',
            icon: '/assets/dev-icon.png',
            description: 'RESTful APIs, real-time systems with WebSockets, database design, and performance optimization for scalable applications.',
        },
        {
            name: 'CMS & No-Code Solutions',
            icon: '/assets/graphics-icon.png',
            description: 'WordPress and Webflow websites. Fast deployment with modern design and functionality.',
        },
        {
            name: 'Frontend Development',
            icon: '/assets/mobile-icon.png',
            description: 'Responsive, modern UIs with React, Tailwind CSS. State management, performance optimization, and seamless user experiences.',
        },
        {
            name: 'Backend Development',
            icon: '/assets/code-icon.png',
            description: 'Server-side development with FastAPI (Python) and Node.js. Database design, authentication, and API architecture.',
        },
    ];

    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-24">
            <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
            <h2 className="text-center text-5xl font-Ovo">Services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Comprehensive development services for your next project. From concept to deployment, I deliver production-ready solutions.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                        <img src={service.icon} alt="" className="w-10 mb-4" />
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">{service.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-white/80 leading-relaxed">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
