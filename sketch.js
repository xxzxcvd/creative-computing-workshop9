let video;

function setup() {
    createCanvas(640, 480);
    // 创建视频捕获对象
    video = createCapture(VIDEO);
    video.size(width, height);
    video.hide();
}

function draw() {
    background(220);
    // 加载视频的像素数据
    video.loadPixels();
    let pixels = video.pixels;

    // 创建一个临时数组来存储处理后的像素
    let newPixels = [];
    for (let i = 0; i < pixels.length; i++) {
        newPixels[i] = pixels[i];
    }

    let edgeThreshold = 50;
    for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
            let index = (y * width + x) * 4;
            let gx = 0;
            let gy = 0;

            // Sobel 算子的水平和垂直卷积核
            gx += -pixels[((y - 1) * width + (x - 1)) * 4] + pixels[((y - 1) * width + (x + 1)) * 4];
            gx += -2 * pixels[(y * width + (x - 1)) * 4] + 2 * pixels[(y * width + (x + 1)) * 4];
            gx += -pixels[((y + 1) * width + (x - 1)) * 4] + pixels[((y + 1) * width + (x + 1)) * 4];

            gy += -pixels[((y - 1) * width + (x - 1)) * 4] - 2 * pixels[((y - 1) * width + x) * 4] - pixels[((y - 1) * width + (x + 1)) * 4];
            gy += pixels[((y + 1) * width + (x - 1)) * 4] + 2 * pixels[((y + 1) * width + x) * 4] + pixels[((y + 1) * width + (x + 1)) * 4];

            let magnitude = Math.sqrt(gx * gx + gy * gy);

            if (magnitude > edgeThreshold) {
                newPixels[index] = 255;
                newPixels[index + 1] = 255;
                newPixels[index + 2] = 255;
            } else {
                newPixels[index] = 0;
                newPixels[index + 1] = 0;
                newPixels[index + 2] = 0;
            }
            // 保留透明度通道
            newPixels[index + 3] = pixels[index + 3];
        }
    }

    // 将处理后的像素数据复制回原始像素数组
    for (let i = 0; i < pixels.length; i++) {
        pixels[i] = newPixels[i];
    }

    // 更新视频的像素数据
    video.updatePixels();
    // 显示处理后的视频
    image(video, 0, 0);
}