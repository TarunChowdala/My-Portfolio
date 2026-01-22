export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="#top">
                    <img src="/assets/venture.png" alt="Tarun Chowdala" className="w-36 mx-auto mb-2 dark:hidden" />
                    <img src="/assets/venture_white.png" alt="Tarun Chowdala" className="w-36 mx-auto mb-2 hidden dark:block" />
                </a>

                <div className="w-max flex items-center gap-2 mx-auto mb-4">
                    <img src="/assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="/assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />
                    <a href="mailto:tarunchowdala300@gmail.com" className="hover:text-gray-500 dark:hover:text-gray-300 transition">tarunchowdala300@gmail.com</a>
                </div>

                <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-sm text-gray-600 dark:text-white/70">📍 Srikakulam, Andhra Pradesh</span>
                    <span className="text-sm text-gray-600 dark:text-white/70">📞 +91 79896 85788</span>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 dark:border-white/20 mx-[10%] mt-12 py-3">
                <p className="text-sm text-gray-600 dark:text-white/70">© {new Date().getFullYear()} Tarun Chowdala • All rights reserved.</p>
                <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
                    <li><a target='_blank' href="https://github.com/TarunChowdala" rel="noopener noreferrer" className="text-gray-600 dark:text-white/70 hover:text-gray-500 dark:hover:text-white transition">GitHub</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/tarun-chowdala-77214125b/" rel="noopener noreferrer" className="text-gray-600 dark:text-white/70 hover:text-gray-500 dark:hover:text-white transition">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    )
}