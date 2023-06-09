// components/PlanOption.js
import React from 'react';
import { RadioGroup } from '@headlessui/react';
import { FiCopy } from 'react-icons/fi';

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

const PlanOption = ({ plan, onCopy }) => {
    return (
        <RadioGroup.Option
            value={plan}
            className={({ checked, active }) =>
                classNames(
                    checked ? 'border-transparent' : 'border-neutral-800',
                    active ? 'border-indigo-500 ring-2 ring-indigo-500' : '',
                    'relative block cursor-pointer rounded-lg border bg-neutral-950 px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between'
                )
            }
        >
            {({ active, checked }) => (
                <>
                    <span className="flex items-center">
                        <span className="flex flex-col text-sm">
                            <RadioGroup.Description as="span" className="text-gray-200">
                                <span className="block sm:inline">
                                    {plan.ram} / {plan.cpus}
                                </span>{' '}
                                <span className="hidden sm:mx-1 sm:inline" aria-hidden="true">
                                    &middot;
                                </span>{' '}
                                <span className="block sm:inline">{plan.disk}</span>
                            </RadioGroup.Description>
                        </span>
                    </span>
                    <RadioGroup.Description
                        as="span"
                        className="mt-2 flex text-sm sm:mt-0 sm:ml-4 sm:flex-col sm:text-right"
                    >
                        <button
                            className="font-medium text-indigo-500 flex items-center"
                            onClick={() => onCopy(`${plan.ram} / ${plan.cpus} / ${plan.disk}`)}
                        >
                            <FiCopy className="mr-1" />
                        </button>
                    </RadioGroup.Description>
                    <span
                        className={classNames(
                            active ? 'border' : 'border-2',
                            checked ? 'border-indigo-500' : 'border-transparent',
                            'pointer-events-none absolute -inset-px rounded-lg'
                        )}
                        aria-hidden="true"
                    />
                </>
            )}
        </RadioGroup.Option>
    );
};

export default PlanOption;
