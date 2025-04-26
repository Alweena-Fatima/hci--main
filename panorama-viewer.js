document.addEventListener('DOMContentLoaded', function() {
    const panorama = document.getElementById('panorama-image');
    const container = document.getElementById('panorama-container');
    const rotateLeftBtn = document.getElementById('rotate-left');
    const rotateRightBtn = document.getElementById('rotate-right');
    const resetBtn = document.getElementById('reset-view');
   
    let isDragging = false;
    let startX, scrollLeft;
    let currentRotation = 0;
    const rotationSpeed = 2; // Higher = faster rotation
   
    // Mouse/touch drag interaction
    panorama.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - panorama.offsetLeft;
        scrollLeft = currentRotation;
        panorama.style.cursor = 'grabbing';
    });
   
    panorama.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].pageX - panorama.offsetLeft;
        scrollLeft = currentRotation;
    });
   
    document.addEventListener('mouseup touchend', () => {
        isDragging = false;
        panorama.style.cursor = 'grab';
    });
   
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - panorama.offsetLeft;
        const walk = (x - startX) * rotationSpeed;
        currentRotation = scrollLeft - walk;
        updatePanorama();
    });
   
    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.touches[0].pageX - panorama.offsetLeft;
        const walk = (x - startX) * rotationSpeed;
        currentRotation = scrollLeft - walk;
        updatePanorama();
    });
   
    // Button controls
    rotateLeftBtn.addEventListener('click', () => {
        currentRotation -= 50;
        updatePanorama();
    });
   
    rotateRightBtn.addEventListener('click', () => {
        currentRotation += 50;
        updatePanorama();
    });
   
    resetBtn.addEventListener('click', () => {
        currentRotation = 0;
        updatePanorama();
    });
   
    // Auto-rotation (optional)
    let autoRotateInterval;
    function startAutoRotate() {
        autoRotateInterval = setInterval(() => {
            currentRotation += 1;
            updatePanorama();
        }, 50);
    }
   
    function stopAutoRotate() {
        clearInterval(autoRotateInterval);
    }
   
    // Update panorama display
    function updatePanorama() {
        const imageWidth = panorama.naturalWidth;
        const visibleWidth = container.offsetWidth;
       
        // Normalize rotation to image width
        currentRotation = currentRotation % imageWidth;
        if (currentRotation < 0) currentRotation += imageWidth;
       
        panorama.style.transform = `translateX(-${currentRotation}px)`;
    }
   
    // Initialize after image loads
    panorama.onload = function() {
        panorama.style.width = panorama.naturalWidth + 'px';
        updatePanorama();
        // startAutoRotate(); // Uncomment for auto-rotation
    };
   
    // Pause auto-rotate on interaction
    container.addEventListener('mouseenter', stopAutoRotate);
    container.addEventListener('mouseleave', startAutoRotate);
});


