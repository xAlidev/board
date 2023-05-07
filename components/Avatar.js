// components/Avatar.js
import React from 'react';

const Avatar = ({ src, alt, size = 8 }) => {
    const avatarStyle = {
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '50%',
        width: `${size}rem`,
        height: `${size}rem`,
    };

    return <div className={alt} style={avatarStyle}></div>;
};

export default Avatar;
