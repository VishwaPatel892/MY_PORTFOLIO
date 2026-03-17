import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Loader, Github } from 'lucide-react';
import { projects } from '../data/projects';

const LiveDemo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    // Find project safely
    const project = projects.find(p => p.id === parseInt(id));

    // Redirect if project not found
    useEffect(() => {
        if (!project) {
            navigate('/');
        }
    }, [project, navigate]);

    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 bg-gray-900 flex flex-col h-screen">
            {/* Header bar */}
            <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4 flex items-center justify-between shadow-md z-10">
                <div className="flex items-center gap-4">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors font-medium"
                    >
                        <ArrowLeft size={20} />
                        Back to Portfolio
                    </Link>
                    <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-2 hidden sm:block"></div>
                    <h1 className="font-bold text-gray-800 dark:text-white text-lg truncate hidden sm:block">
                        {project.title} <span className="text-gray-500 font-normal text-sm ml-2">Live Demo</span>
                    </h1>
                </div>

                <div className="flex items-center gap-3">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                            <Github size={16} />
                            View Code
                        </a>
                    )}
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                        Open in New Tab <ExternalLink size={16} />
                    </a>
                </div>
            </div>

            {/* Iframe Container */}
            <div className="flex-1 relative bg-gray-100 dark:bg-black w-full h-full">
                {isLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                        <Loader className="animate-spin mb-2" size={32} />
                        <p>Loading demo...</p>
                    </div>
                )}
                <iframe
                    src={project.link}
                    title={`${project.title} Live Demo`}
                    className="w-full h-full border-0"
                    onLoad={() => setIsLoading(false)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default LiveDemo;
