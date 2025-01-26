import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import { SiPython, SiTypescript, SiReact } from 'react-icons/si';
import { Button, Card } from '@nextui-org/react';
import { ThreeBackground } from './components/ThreeBackground';
import { StatsCard } from './components/StatsCard';
import { FeatureCard } from './components/FeatureCard';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      <ThreeBackground />
      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            HydroRoll
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            下一代开源 TRPG 骰子机器人框架，为你的游戏体验带来无限可能
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
              size="lg"
              href="https://github.com/HydroRoll-Team"
              target="_blank"
              as="a"
            >
              <FaGithub className="mr-2" />
              加入 GitHub
            </Button>
            <Button
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
              size="lg"
            >
              <FaDiscord className="mr-2" />
              加入 Discord
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            核心特性
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<SiPython className="text-4xl text-blue-400" />}
              title="Python 驱动"
              description="基于 Python 构建，提供灵活且强大的插件系统"
            />
            <FeatureCard
              icon={<SiTypescript className="text-4xl text-blue-500" />}
              title="TypeScript 支持"
              description="完整的 TypeScript 类型支持，提供更好的开发体验"
            />
            <FeatureCard
              icon={<SiReact className="text-4xl text-cyan-400" />}
              title="现代化框架"
              description="采用现代化的框架设计，支持多平台部署"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatsCard title="GitHub Stars" value="1000+" />
            <StatsCard title="社区成员" value="500+" />
            <StatsCard title="插件数量" value="50+" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
