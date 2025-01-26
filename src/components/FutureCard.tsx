import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@nextui-org/react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
};
