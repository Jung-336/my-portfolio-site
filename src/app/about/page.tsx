'use client';

import React from 'react';
import AbstractBackground from '../../components/SpaceBackground';
import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';

export default function About() {
  const coreValues = [
    {
      title: '혁신',
      description: '최신 기술과 방법론을 적극적으로 도입하여 새로운 가치를 창출합니다.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: '품질',
      description: '높은 품질의 결과물을 위해 세심한 주의와 꼼꼼한 검증을 진행합니다.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: '협업',
      description: '팀원들과의 원활한 소통과 협력을 통해 시너지를 극대화합니다.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: '학습',
      description: '지속적인 학습과 성장을 통해 전문성을 향상시킵니다.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ];

  return (
    <main className="relative min-h-screen">
      <AbstractBackground />
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 mt-16">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-gray-300 mb-12 text-lg leading-relaxed">
            LLM과 Multi-Agent 시스템 분야에서 15년 이상의 경험을 보유한 전문가입니다. 
            데이터 사이언스와 AI 기술을 활용하여 혁신적인 솔루션을 개발하고 있습니다.
          </p>

          <h3 className="text-2xl font-bold mb-8 text-center">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className="text-blue-500 mr-4">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white">{value.title}</h4>
                </div>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
} 