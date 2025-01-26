import React from 'react';
// import { motion } from 'framer-motion';
import * as motion from "motion/react-client";
import { Card } from '@nextui-org/react';

interface StatsCardProps {
  title: string;
  value: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">{value}</h3>
          <p className="text-gray-400">{title}</p>
        </div>
      </Card>
    </motion.div>
  );
};
