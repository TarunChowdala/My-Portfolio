export default function Header() {
    return (
        <div id="top" className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 mt-10 md:mt-0">
            <img src="/assets/my-image-short.jpeg" alt="" className="rounded-full w-32" />
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi, I&apos;m Tarun Chowdala
                <img src="/assets/hand-icon.png" alt="" className="w-6 mb-1" />
            </h3>
            
            <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-orange-500/10 border border-purple-500/20 dark:border-purple-400/30 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Currently exploring Generative AI</span>
            </div>
            
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">Full Stack Developer & AI Enthusiast</h1>
            <p className="max-w-2xl mx-auto font-Ovo">I build scalable full-stack applications using React, FastAPI, Node.js, and modern cloud technologies. I specialize in creating responsive UIs, efficient backend systems, and AI-powered features for real-world products.</p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 text-sm text-gray-600 dark:text-white/70">
                <span>📍 Srikakulam, Andhra Pradesh</span>
                <span>📞 +91 79896 85788</span>
                <a href="mailto:tarunchowdala300@gmail.com" className="hover:text-gray-800 dark:hover:text-white">📧 tarunchowdala300@gmail.com</a>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="https://drive.google.com/file/d/1nqM_KYQr5NMCC1Hju85HXbPHOeJlTSuH/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent">
                    View Resume <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
                </a>

                <a href="#contact"
                    className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white">
                    Contact Me <img src="/assets/download-icon.png" alt="" className="w-4 dark:invert" />
                </a>
            </div>
        </div>
    )
}