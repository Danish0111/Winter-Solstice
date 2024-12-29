window.onload = function () {

    // <div class="left_cloud">
    //     <img src="cloud.png" alt="">
    // </div>
    // <div class="right_cloud">
    //     <img src="cloud.png" alt="">
    // </div>
    // Create the left cloud div
    const leftCloudDiv = document.createElement('div');
    leftCloudDiv.classList.add('left_cloud');
    const leftCloudImg = document.createElement('img');
    leftCloudImg.src = 'cloud.png';
    leftCloudImg.alt = 'Left Cloud';
    leftCloudDiv.appendChild(leftCloudImg);

    // Create the right cloud div
    const rightCloudDiv = document.createElement('div');
    rightCloudDiv.classList.add('right_cloud');
    const rightCloudImg = document.createElement('img');
    rightCloudImg.src = 'cloud.png';
    rightCloudImg.alt = 'Right Cloud';
    rightCloudDiv.appendChild(rightCloudImg);

    // Append both cloud divs to the body or a specific container
    document.body.appendChild(leftCloudDiv);
    document.body.appendChild(rightCloudDiv);
    // <i class="fa-regular fa-snowflake" style="color: #74C0FC;"></i>
    const basesnowIcon = document.createElement('i');
    const headings = document.getElementsByTagName('h2');
    basesnowIcon.classList.add('fa-regular', 'fa-snowflake', 'fa-spin');

    basesnowIcon.style.color = "#74C0FC";
    for (let heading of headings) {
        const snnowIcon = basesnowIcon.cloneNode(true);
        heading.insertBefore(snnowIcon, heading.firstChild);
    }

    const isMobile = window.innerWidth <= 600;
    const numOfSnowflakes = 100; // Number of snowflakes to generate

    // Generate snowflakes
    for (let i = 0; i < numOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Random size and speed
        const size = Math.random() * 4 + 2 + 'px'; // Random size between 2px and 6px
        const animationDuration = Math.random() * 5 + 5 + 's'; // Random speed between 5s and 10s
        const delay = Math.random() * 5 + 's'; // Random delay to offset animations

        // Random horizontal movement (drift), from 0% to 100% of the screen width
        const xMovement = isMobile ? Math.random() * 250 + 'vw' : Math.random() * 100 + 'vw'; // Use larger movement for mobile screens
        // Set CSS custom properties dynamically
        snowflake.style.width = size;
        snowflake.style.height = size;
        snowflake.style.animationDuration = animationDuration;
        snowflake.style.animationDelay = delay;
        snowflake.style.setProperty('--x', xMovement); // Horizontal drift

        // Append the snowflake to the body directly
        document.body.appendChild(snowflake);
    }
    
}


document.addEventListener('scroll', () => {
    const leftCloud = document.querySelector('.left_cloud img');
    const rightCloud = document.querySelector('.right_cloud img');
    const mainHeader = document.querySelector('#main-header');
    const headerBottom = mainHeader.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition < headerBottom) {
        leftCloud.classList.remove('visible');
        rightCloud.classList.remove('visible');
    } else {
        leftCloud.classList.add('visible');
        rightCloud.classList.add('visible');
    }
});



{/* <div class="lantern_left">
        <img src="lantern.png" alt="">
    </div>
    <div class="lantern_right">
        <img src="lantern.png" alt="">
    </div> */}