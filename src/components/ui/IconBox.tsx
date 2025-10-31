import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface IconBoxProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function IconBox({ icon: Icon, title, description }: IconBoxProps) {
  return (
    <div className="group bg-white p-8 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors duration-300">
        <Icon className="w-7 h-7 text-gray-600 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}