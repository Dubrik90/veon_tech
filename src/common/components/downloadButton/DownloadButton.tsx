import React from 'react';

interface DownloadButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    url: string;
    fileName: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ url, fileName, className, style, children }) => {
    const handleDownloadClick = () => {
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button className={className} style={style} onClick={handleDownloadClick}>
            {children}
        </button>
    );
};



