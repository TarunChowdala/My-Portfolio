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
            icon1: '/assets/code-icon.png',
            icon2: '/assets/code-icon-dark.png',
            description: 'React.js, Tailwind CSS, Bootstrap, Responsive UI',
        },
        {
            name: 'Backend',
            icon1: '/assets/code-icon.png',
            icon2: '/assets/code-icon-dark.png',
            description: 'FastAPI (Python), Node.js, Express.js, REST APIs',
        },
        {
            name: 'Databases',
            icon1: '/assets/code-icon.png',
            icon2: '/assets/code-icon-dark.png',
            description: 'PostgreSQL, SQLite, MongoDB',
        },
        {
            name: 'State Management',
            icon1: '/assets/code-icon.png',
            icon2: '/assets/code-icon-dark.png',
            description: 'React Hooks, Context API, Zustand, React Query',
        },
        {
            name: 'Cloud & Tools',
            icon1: '/assets/code-icon.png',
            icon2: '/assets/code-icon-dark.png',
            description: 'Google Cloud, Vercel, Render, Git/GitHub, Postman, VS Code, Cursor IDE',
        },
        {
            name: 'CMS / No-Code',
            icon1: '/assets/code-icon.png',
            icon2: '/assets/code-icon-dark.png',
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
                        <img src={skill.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                        <img src={skill.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                        <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{skill.name}</h3>
                        <p className="text-gray-600 text-sm dark:text-white/80">{skill.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
