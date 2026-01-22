export default function Work() {
    const work = [
        {
            name: 'SmartChat AI Platform',
            icon: '/assets/smartchatai.webp',
            description: 'React, FastAPI, Python, Firebase',
            link: 'https://smartchataiapp.vercel.app/',
            highlights: 'Real-time AI chat assistant using Gemini + LangChain, RAG-based Document Q&A, AI-powered resume analyzer, Resume generator, FastAPI backend with Firebase data storage',
            liveDemo: true,
        },
        {
            name: 'E-Commerce Web Application',
            icon: '/assets/ecommerce.webp',
            description: 'React, Node.js, SQLite, Razorpay',
            link: 'https://ecommerce-frontend-kohl-eight.vercel.app/',
            highlights: 'JWT-based authentication, Product browsing, cart, checkout, Razorpay payment gateway integration, SQLite backend with Express APIs',
            liveDemo: true,
        }
    ];
    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-24">
            <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">Featured Projects</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Explore a collection of projects showcasing my expertise in full-stack development, AI integration, and modern web applications.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-5 dark:text-black">
                {work.map((workItem, index) => (
                    <a 
                        key={workItem.name} 
                        href={workItem.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden block" 
                        style={{ backgroundImage: `url(${workItem.icon})` }}
                    >
                        <div className="bg-white w-11/12 rounded-md absolute bottom-4 left-1/2 -translate-x-1/2 py-3 px-4 flex items-start justify-between duration-500 group-hover:bottom-6">
                            <div className="flex-1 min-w-0 pr-2">
                                <div className="flex items-center gap-2 mb-1">
                                    <h2 className="font-semibold text-sm sm:text-base truncate">{workItem.name}</h2>
                                    {workItem.liveDemo && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Live Demo</span>}
                                </div>
                                <p className="text-xs sm:text-sm text-gray-700 mt-1">{workItem.description}</p>
                                <p className="text-xs text-gray-600 mt-1 line-clamp-4">{workItem.highlights}</p>
                            </div>
                            <div className="border rounded-full border-black w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-gradient-to-r group-hover:from-[#b820e6] group-hover:to-[#da7d20] transition flex-shrink-0">
                                <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

        </div>
    )
}