export default function About() {
    const tools = [
        { name: 'vscode', icon: '/assets/vscode.png', },
        { name: 'cursor', icon: '/assets/cursor_ide.png', },
        { name: 'git', icon: '/assets/git.png', },
        // { name: 'mongodb', icon: '/assets/mongodb.png', },
        // { name: 'figma', icon: '/assets/figma.png', },
        // { name: 'firebase', icon: '/assets/firebase.png', },
    ];
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-24">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo">About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="max-w-max mx-auto relative">
                    <img src='/assets/my-image.jpeg' alt="" className="w-64 sm:w-80 rounded-3xl max-w-none" />

                    <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center overflow-hidden">
                        <svg className="w-full h-full animate-spin_slow" viewBox="0 0 200 200">
                            <defs>
                                <path id="circle" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                                <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#b820e6" />
                                    <stop offset="100%" stopColor="#da7d20" />
                                </linearGradient>
                            </defs>
                            <text fill="url(#textGradient)" fontSize="16" fontFamily="Arial, sans-serif" fontWeight="600">
                                <textPath href="#circle" startOffset="0%">
                                    ✦ Full Stack Developer ✦ Full Stack Developer ✦ Full Stack
                                </textPath>
                            </text>
                        </svg>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] flex items-center justify-center shadow-lg">
                            <img src="/assets/code-icon.png" alt="Code" className="w-8 h-8 dark:hidden" />
                            <img src="/assets/code-icon-dark.png" alt="Code" className="w-8 h-8 hidden dark:block" />
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-full">
                    <p className="mb-6 max-w-2xl font-Ovo">I&apos;m a results-driven Full Stack Developer with experience building end-to-end web applications using React on the frontend and FastAPI / Node.js on the backend. I focus on clean architecture, performance optimization, and seamless integration between client and server.</p>
                    
                    <p className="mb-6 max-w-2xl font-Ovo">At Swara Tech, I work on full-stack development, API optimization, real-time messaging, database design, and CMS-based websites using WordPress and Webflow.</p>

                    <p className="mb-10 max-w-2xl font-Ovo">I love building AI-powered applications, chatbots and real-time systems, scalable full-stack apps, CMS-based websites, and intelligent resume & document tools. My goal is to become a top-tier Full Stack + AI Developer and build meaningful tech products.</p>

                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools i use</h4>

                    <ul className="flex items-center gap-3 sm:gap-5">
                        {tools.map((tool) => (
                            <li key={tool.name} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}