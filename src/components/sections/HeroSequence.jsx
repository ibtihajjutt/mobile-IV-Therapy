import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const frameCount = 81;
const images = [];

// Preload images function
const preloadImages = () => {
  if (images.length === frameCount) return;
  
  for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    const filename = `frame_${i.toString().padStart(3, '0')}.png`;
    img.src = `/assets/images/hero_images/${filename}`;
    images.push(img);
  }
};

const HeroSequence = ({ className = "" }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const { scrollY } = useScroll();
  
  const frameIndex = useTransform(scrollY, [0, 3000], [0, frameCount - 1]);

  useEffect(() => {
    preloadImages();
    
    // Check first image
    const firstImg = new Image();
    firstImg.src = '/assets/images/hero_images/frame_001.png';
    firstImg.onload = () => {
        setImagesLoaded(true);
        if (frameIndex.get() === 0) renderFrame(0);
    };
    // Also check if already loaded in memory
    if (images.length > 0 && images[0].complete) {
        setImagesLoaded(true);
    }
  }, []);

  const renderFrame = (index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const idx = Math.min(frameCount - 1, Math.max(0, Math.round(index)));
    const img = images[idx] || (images.length > 0 ? images[0] : null);

    if (!img || !img.complete) return; 

    // Handle high DPI
    const width = canvas.width;
    const height = canvas.height;
    
    if (width === 0 || height === 0) return;

    const imgRatio = img.width / img.height;
    const canvasRatio = width / height;
    
    let drawWidth, drawHeight, offsetX, offsetY;

    if (imgRatio > canvasRatio) {
      // Image is wider than canvas -> Cover by matching height
      const scale = height / img.height;
      drawWidth = img.width * scale;
      drawHeight = height;
      
      // Align Right: Anchor the right edge of the image to the right edge of the canvas.
      // If drawWidth > width, this will be negative (shifting image left to show right side).
      // If drawWidth < width, this will be positive (shifting image right).
      offsetX = width - drawWidth; 
      
      offsetY = 0;
    } else {
      // Image is taller -> Cover by matching width
      const scale = width / img.width;
      drawWidth = width;
      drawHeight = img.height * scale;
      offsetX = 0;
      offsetY = (height - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Handle Resize using ResizeObserver
  useEffect(() => {
    if (!containerRef.current) return;

    const updateSize = () => {
        if (!containerRef.current || !canvasRef.current) return;
        
        const { clientWidth, clientHeight } = containerRef.current;
        const dpr = window.devicePixelRatio || 1;
        
        // Update Canvas Dimensions
        canvasRef.current.width = clientWidth * dpr;
        canvasRef.current.height = clientHeight * dpr;
        
        canvasRef.current.style.width = `${clientWidth}px`;
        canvasRef.current.style.height = `${clientHeight}px`;
        
        // No context scaling needed because we draw to intrinsic width/height in renderFrame
        
        // Redraw
        renderFrame(frameIndex.get());
    };

    updateSize();

    const resizeObserver = new ResizeObserver(() => {
        updateSize();
    });

    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [imagesLoaded]); // Re-run if images load state changes to ensure initial draw? mostly updateSize is enough

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (imagesLoaded) {
      requestAnimationFrame(() => renderFrame(latest));
    }
  });

  // Re-render on load to ensure first frame shows if not scrolled
  useEffect(() => {
    if (imagesLoaded) renderFrame(frameIndex.get());
  }, [imagesLoaded]);

  return (
    <div ref={containerRef} className={`absolute inset-0 w-full h-full z-0 ${className}`}>
        <canvas 
          ref={canvasRef} 
          className="block w-full h-full "
        />
    </div>
  );
};

export default HeroSequence;
