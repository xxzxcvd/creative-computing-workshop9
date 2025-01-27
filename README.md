# creative-computing-workshop9

https://xxzxcvd.github.io/creative-computing-workshop9/

1. Task Overview
This workshop focuses on creating an experimental "smart mirror". Through real-time video capture technology, combined with pixel-level operations on the video, unique visual effects are achieved. Using the p5.js library, we can easily obtain the real-time video stream of the camera and perform various processing on the pixels in the video, such as edge detection, to create a creative interactive experience.
2. Functional Features
- Real-time video capture: With the help of the createCapture function of p5.js, the video stream of the camera can be obtained in real time.
- Pixel-level operation: Process each pixel of the video to achieve a specific visual effect. Here, edge detection based on the Sobel operator is mainly implemented.
Dynamic display: Display the processed video on the web page in real time to form a smart mirror effect
3. code
  - Import the p5.js library to provide graphics drawing and interactive function support for subsequent JavaScript code.
  - Introduce the sketch.js file, which contains specific video processing and edge detection logic.
 
setup function:
 - createCanvas(640, 480): Create a 640x480 canvas to display the processed video.
 - video = createCapture(VIDEO): Create a video capture object to get the real-time video stream of the camera.
 - video.size(width, height): Set the video size to match the canvas.
 - video.hide(): Hide the original video element, and then display the processed video.
draw function:
 - background(220): Set the canvas background color to gray.
 - video.loadPixels(): Load the pixel data of the video into the pixels array.
 - Create the newPixels array to temporarily store the processed pixel data.
Perform edge detection: Use the Sobel operator to calculate the gradient magnitude of each pixel, and set the pixel color based on the comparison result between the magnitude and the threshold edgeThreshold.Copy the processed pixel data from newPixels back to the pixels array.
 - video.updatePixels(): Update the pixel data of the video.
 - image(video, 0, 0): Display the processed video in the upper left corner of the canvas.

4. Usage
Save index.html and sketch.js files to the same directory.
Open the index.html file, the browser will request permission to access the camera, and allow the request.
The browser page will display the video image processed by edge detection in real time, just like a smart mirror with edge detection function.
5. Dependent library
p5.js: An open source JavaScript library that provides easy-to-use graphics drawing and interactive functions for video capture and pixel operations.
