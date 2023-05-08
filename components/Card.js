import React from 'react';

const Card = ({ icon, title, description, button }) => {
    return (
        <div className="bg-neutral-950 rounded-lg p-6 shadow-md border border-neutral-800">
            <div className="flex items-center mb-4">
                <i className={`${icon} text-indigo-500 text-3xl mr-4`}></i>
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <p className="text-neutral-300">{description}</p>
            {button && <div className="mt-4">{button}</div>}
        </div>
    );
};

export default Card;
