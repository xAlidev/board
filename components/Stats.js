// components/Stats.js
import React, { useState } from 'react';
import Card from './Card';
import { RadioGroup } from '@headlessui/react';
import PlanOption from './PlanOption';
import { FiCopy } from 'react-icons/fi';

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

const Stats = () => {
    const plans = [
        { ram: '2GB', cpus: '2 CPUs', disk: '20GB SSD' },
        { ram: '4GB', cpus: '4 CPUs', disk: '40GB SSD' },
        { ram: '8GB', cpus: '8 CPUs', disk: '80GB SSD' },
    ];

    const [selected, setSelected] = useState(plans[0]);

    const copyText = (text) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="p-4 text-white">
            <h2 className="text-4xl font-semibold mb-8">Stats</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                <Card
                    icon="fas fa-chart-line"
                    title="Stat 1"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <Card
                    icon="fas fa-users"
                    title="Stat 2"
                    description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <Card
                    icon="fas fa-cog"
                    title="Stat 3"
                    description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
            </div>

            <RadioGroup value={selected} onChange={setSelected}>
                <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                <div className="space-y-4">
                    {plans.map((plan, index) => (
                        <PlanOption key={index} plan={plan} onCopy={copyText} />
                    ))}
                </div>
            </RadioGroup>
        </div>
    );
};

export default Stats;
