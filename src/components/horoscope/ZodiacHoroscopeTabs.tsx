'use client';

import React from 'react';

type TabType = 'daily' | 'monthly' | 'yearly';

interface Props {
  activeTab: TabType;
  onChange: (tab: TabType) => void;
}

export default function ZodiacHoroscopeTabs({ activeTab, onChange }: Props) {
  const tabs: { label: string; value: TabType }[] = [
    { label: '每日运势', value: 'daily' },
    { label: '每月运势', value: 'monthly' },
    { label: '每年运势', value: 'yearly' },
  ];

  return (
    <div className="flex justify-center gap-4 mt-6">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`px-4 py-2 rounded-full border transition ${
            activeTab === tab.value
              ? 'bg-purple-600 text-white'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
          onClick={() => onChange(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
