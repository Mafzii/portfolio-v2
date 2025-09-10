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
                                <div className="flex gap-4 mt-2">
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline text-neutral-400 hover:text-neutral-100">Live</a>
                                    )}
                                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="underline text-neutral-400 hover:text-neutral-100">GitHub</a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </BaseLayout>
    );
}
