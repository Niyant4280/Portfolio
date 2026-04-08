import React, { Suspense } from 'react';
import './SplineScene.css';

const SplineScene = () => {
    return (
        <div 
            className="spline-container"
            dangerouslySetInnerHTML={{
                __html: `<spline-viewer url="https://prod.spline.design/yEsxr72sUJFmx6hL/scene.splinecode" class="spline-viewer"></spline-viewer>`
            }}
        />
    );
};

export default SplineScene;
