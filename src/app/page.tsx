'use client';

import React from 'react';
import SpaceBackground from '../components/SpaceBackground';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <SpaceBackground />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            LLM & Multi-Agent Specialist
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-6">
            데이터와 분석이라는 일관된 길을 걸으며 AI와 데이터 사이언스 분야의 전문성을 쌓아왔습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="px-4 py-2 bg-gray-800/50 rounded-full text-sm">#LLM전문가</span>
            <span className="px-4 py-2 bg-gray-800/50 rounded-full text-sm">#Agent개발</span>
            <span className="px-4 py-2 bg-gray-800/50 rounded-full text-sm">#장영실상수상</span>
            <span className="px-4 py-2 bg-gray-800/50 rounded-full text-sm">#AI솔루션</span>
            <span className="px-4 py-2 bg-gray-800/50 rounded-full text-sm">#데이터사이언스</span>
          </div>
        </motion.section>

        {/* Key Achievements */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">🏆 주요 성과</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">IR52 장영실상 수상</h3>
              <p className="text-gray-300">빅데이터 부문 (2018)</p>
              <p className="text-gray-400 mt-2">AI 기반 빅데이터 분석 솔루션(i-STREAM)의 기술 혁신성과 사업적 성과 인정</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">데이터아키텍처전문가(DAP)</h3>
              <p className="text-gray-300">한국데이터산업진흥원 (2012)</p>
              <p className="text-gray-400 mt-2">전사 데이터 아키텍처 설계 및 관리 전문성 검증</p>
            </div>
          </div>
        </motion.section>

        {/* Core Competencies */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">💡 핵심 역량</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Hard Skills</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• LLM 기술 기반 솔루션 기획/설계/개발</li>
                <li>• 데이터 엔지니어링/아키텍처</li>
                <li>• 소프트웨어/시스템 개발</li>
                <li>• 최신 AI/데이터 분석 도구 활용</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• 리더십/프로젝트 관리</li>
                <li>• 문제 해결/분석적 사고</li>
                <li>• 신기술 학습/적용</li>
                <li>• 커뮤니케이션/문서화</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Notable Projects */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">🎯 주요 프로젝트</h2>
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">면접 대행 AI Agent 개발</h3>
              <p className="text-gray-300">RAG 기술 활용 프로토타입 개발 완료, 현재 고도화 수행 중</p>
              <p className="text-gray-400 mt-2">OpenAI text-embedding-3-large, Claude 3.7 Sonnet 등 활용</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">개인비서 Agent POC 개발</h3>
              <p className="text-gray-300">n8n 기술 가능성 검증 및 개인비서 Agent POC 개발</p>
              <p className="text-gray-400 mt-2">Telegram 연동, STT/TTS, Master/Sub Agent 구현</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">AI 빅데이터 분석 솔루션 i-STREAM</h3>
              <p className="text-gray-300">엔터프라이즈급 AI 협업 솔루션 개발</p>
              <p className="text-gray-400 mt-2">자체 스크립트 언어 개발, IR52 장영실상 수상</p>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">🌟 Let's Connect</h2>
          <p className="text-gray-300 mb-6">
            AI와 데이터 사이언스 프로젝트에 관심이 있으신가요?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/bruce-ai-jsh/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/annajo0513/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
            <a
              href="https://www.facebook.com/bruce.jsh/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-[#1877F2] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
            <a
              href="https://github.com/Jung-336/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-[#333] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
} 