'use client';

import React from 'react';
import SpaceBackground from '../../components/SpaceBackground';
import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: '면접 대행 AI Agent 개발',
      description: 'RAG 기술을 활용한 면접 대행 AI 에이전트 프로토타입 개발',
      technologies: ['OpenAI text-embedding-3-large', 'Claude 3.7 Sonnet', 'RAG'],
      status: '고도화 진행 중'
    },
    {
      title: '개인비서 Agent POC 개발',
      description: 'n8n을 활용한 개인비서 AI 에이전트 프로토타입 개발',
      technologies: ['n8n', 'Telegram', 'STT/TTS', 'Master/Sub Agent'],
      status: '기술 검증 완료'
    },
    {
      title: 'AI 빅데이터 분석 솔루션 i-STREAM',
      description: '엔터프라이즈급 AI 협업 솔루션 개발',
      technologies: ['자체 스크립트 언어', '빅데이터 분석', 'AI 모델링'],
      status: 'IR52 장영실상 수상'
    }
  ];

  return (
    <main className="relative min-h-screen">
      <SpaceBackground />
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 mt-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Projects
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm"
              >
                <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800/50 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-blue-400 font-semibold">{project.status}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
} 