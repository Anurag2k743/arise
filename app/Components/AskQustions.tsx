"use client";

import React, { useState } from 'react';
import { BsQuestionCircleFill } from 'react-icons/bs';

const AskQuestions = () => {
    const [question, setQuestion] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (question.trim() === '') return;
        console.log('Question Submitted:', question);
        setQuestion('');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.target.value);
    };

    return (
        <section className="bg-[#00020F] mt-12 px-4 ">
            <div className="container mx-auto flex justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-[380px] sm:max-w-[430px]"
                >
                    <div className="bg-[#00041F] rounded-full p-2 border border-[#131839] flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 flex-grow min-w-0 ml-1">
                            <div className="bg-[#1C1F3A] p-2 rounded-full flex-shrink-0">
                                <BsQuestionCircleFill className="text-white" size={18} />
                            </div>
                            <input
                                type="text"
                                value={question}
                                onChange={handleInputChange}
                                placeholder="Still Have a Question"
                                className="w-full bg-transparent text-white placeholder-white font-medium focus:outline-none text-sm sm:text-base"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] rounded-full py-2 px-5 sm:py-3 sm:px-6 font-semibold text-sm sm:text-base whitespace-nowrap"
                        >
                            Ask Question
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AskQuestions;
