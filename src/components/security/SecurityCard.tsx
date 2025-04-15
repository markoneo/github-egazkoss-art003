import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SecurityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function SecurityCard({ icon: Icon, title, description }: SecurityCardProps) {
  return (
    <div className="bg-cream-100 p-6 rounded-lg border border-cream-200">
      <div className="icon-hover">
        <Icon className="w-12 h-12 text-cream-400 mb-4" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}