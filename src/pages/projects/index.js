import Head from 'next/head';
import BaseLayout from '@/components/BaseLayout';
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
    const projectsDir = path.join(process.cwd(), 'projects');
    const files = fs.readdirSync(projectsDir);
    const projects = files.map(filename => {
        const file = fs.readFileSync(path.join(projectsDir, filename), 'utf-8');
        const data = JSON.parse(file);
        return data;
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
    return { props: { projects } };
}

export default function Projects({ projects }) {
    return (
        <BaseLayout additional="overflow-hidden">
            <Head>
                <title>Projects - Mustafa Afzal</title>
            </Head>
            <div className="flex flex-col h-full">
                <h1 className="text-4xl font-bold mb-4 flex-shrink-0">projects</h1>
                <ul className="flex-1 overflow-y-scroll pr-2">
                    {projects.map(project => (
                        <li key={project.slug} className="m-0">
                            <div className="block py-5 px-6 rounded-xl bg-neutral-800/70 shadow-md hover:bg-neutral-800/90 transition-colors duration-200 mb-2">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                    <span className="font-semibold text-xl text-neutral-100">{project.name}</span>
                                    <span className="text-sm text-neutral-400">{new Date(project.date).toLocaleDateString('en-GB')}</span>
                                </div>
                                <p className="text-neutral-300 mb-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.tech.map(tech => (
                                        <span key={tech} className="bg-neutral-900/60 text-neutral-200 px-2 py-1 rounded text-xs font-mono">{tech}</span>
                                    ))}
                                </div>
                                <div className="flex justify-end gap-4 mt-2">
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-neutral-400 hover:text-neutral-100 flex items-center">
                                            {/* Globe/External/Live icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm7.938 9h-3.062c-.13-2.33-.82-4.308-1.75-5.74A8.03 8.03 0 0 1 19.938 11ZM12 20c-1.16-1.36-2.01-3.77-2.13-7h4.26c-.12 3.23-.97 5.64-2.13 7Zm-2.13-9c.12-3.23.97-5.64 2.13-7 1.16 1.36 2.01 3.77 2.13 7h-4.26Zm-1.188-5.74C7.752 6.692 7.062 8.67 6.93 11H3.062A8.03 8.03 0 0 1 8.682 5.26ZM4.062 13H6.93c.13 2.33.82 4.308 1.75 5.74A8.03 8.03 0 0 1 4.062 13Zm11.246 5.74c.93-1.432 1.62-3.41 1.75-5.74h3.062a8.03 8.03 0 0 1-4.812 5.74Z"/></svg>
                                        </a>
                                    )}
                                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-neutral-400 hover:text-neutral-100 flex items-center">
                                        {/* GitHub icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.135 20.163 22 16.417 22 12c0-5.523-4.477-10-10-10Z"/></svg>
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </BaseLayout>
    );
}
