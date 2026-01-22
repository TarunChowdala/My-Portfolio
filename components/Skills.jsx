export default function Skills() {
    const skills = [
        {
            name: 'Languages',
            icon1: '/assets/code-icon.png',
            icon2: '/assets/code-icon-dark.png',
            description: 'JavaScript, Python, HTML, CSS',
        },
        {
            name: 'Frontend',
            icon: (
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
                    <path d="M9 20h6v2H9z"/>
                </svg>
            ),
            description: 'React.js, Tailwind CSS, Bootstrap, Responsive UI',
        },
        {
            name: 'Backend',
            icon: (
                <svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="#000000" strokeWidth="1.5"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#000000" strokeWidth="1.5" fill="none"/>
                </svg>
            ),
            description: 'FastAPI (Python), Node.js, Express.js, REST APIs',
        },
        {
            name: 'Databases',
            icon: (
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v6c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zm0 4v6c0 2.21 3.58 4 8 4s8-1.79 8-4v-6c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
                </svg>
            ),
            description: 'PostgreSQL, SQLite, MongoDB',
        },
        {
            name: 'State Management',
            icon: (
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v6c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zm0 4v6c0 2.21 3.58 4 8 4s8-1.79 8-4v-6c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
                </svg>
            ),
            description: 'React Hooks, Context API, Zustand, React Query',
        },
        {
            name: 'Cloud & Tools',
            icon: (
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"/>
                </svg>
            ),
            description: 'Google Cloud, Vercel, Render, Git/GitHub, Postman, VS Code, Cursor IDE',
        },
        {
            name: 'CMS / No-Code',
            icon: (
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
            ),
            description: 'WordPress, Webflow',
        },
    ];

    return (
        <div id="skills" className="w-full px-[12%] py-10 scroll-mt-24">
            <h4 className="text-center mb-2 text-lg font-Ovo">What I know</h4>
            <h2 className="text-center text-5xl font-Ovo">Skills</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Technologies and tools I use to build modern web applications.</p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {skills.map((skill) => (
                    <li key={skill.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                        {skill.icon1 && skill.icon2 ? (
                            <>
                                <img src={skill.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={skill.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                            </>
                        ) : (
                            <div className="text-gray-700 dark:text-white mt-3">
                                {skill.icon}
                            </div>
                        )}
                        <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{skill.name}</h3>
                        <p className="text-gray-600 text-sm dark:text-white/80">{skill.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
