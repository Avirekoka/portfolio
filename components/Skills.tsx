'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'
import { projects } from '@/utils/data';
import Image from 'next/image';

const Skills = () => {
    return (
        <div className='flex mt-8'>
            <div className="ml-10 w-0.5 min-h-screen bg-gray-600"></div>
            <div>
                {
                    projects.map((project) => {
                        return (
                            <div className='flex w-32 items-center my-10' key={project.id}>
                                <hr className="border-2 bg-gray-600 w-4" />
                                <motion.div
                                    className='w-28'
                                >
                                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-5" style={{ width: "350px" }}>
                                        <div className="flex flex-col items-center pb-10">
                                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/large.png" alt="Bonnie image" />
                                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{project.projectName}</h5>
                                            <div className="flex mt-4 space-x-3 md:mt-6">
                                                <Link href={project.githubLink} className="items-center p-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">Github</Link>
                                                <Link href={project.deployedLink} className="items-center p-2 font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ">Deployed</Link>
                                            </div>
                                        </div>
                                    </div>

                                </motion.div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills;