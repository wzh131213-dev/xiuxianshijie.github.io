/**
 * 3D 画面大小与响应式自适应控制器 (script.js)
 * 专门负责管理 Three.js 画布尺寸、高宽比例、像素比以及窗口监听。
 */

class ScreenController {
    constructor(renderer, camera, containerId = 'three-canvas') {
        this.renderer = renderer;
        this.camera = camera;
        this.canvas = document.getElementById(containerId);
        this.container = this.canvas ? this.canvas.parentElement : null;
        
        // 绑定上下文
        this.initListeners();
    }

    /**
     * 初始化窗口变动和屏幕旋转监听
     */
    initListeners() {
        if (!this.canvas || !this.renderer || !this.camera) {
            console.warn("ScreenController: 缺少必要的 Three.js 实例或画布 DOM。");
            return;
        }

        // 监听窗口大小调整
        window.addEventListener('resize', () => {
            this.resizeThreeCanvas();
        });

        // 监听移动端屏幕旋转
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                this.resizeThreeCanvas();
            }, 250); // 延迟以等待手机布局完成重绘
        });

        // 初始执行一次
        this.resizeThreeCanvas();
    }

    /**
     * 核心画面大小自适应函数
     * 根据父容器的高宽自动修正摄像机纵横比与渲染器分辨率
     */
    resizeThreeCanvas() {
        if (!this.canvas || !this.renderer || !this.camera || !this.container) return;

        // 获取当前容器动态计算的宽高
        const width = this.container.clientWidth || window.innerWidth;
        const height = this.container.clientHeight || 180; // 默认给一个最小高度

        // 1. 更新摄像机纵横比 (Aspect Ratio) 防止画面拉伸变形
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        // 2. 调整渲染器视图大小 (第三个参数 false 防止重置 CSS 样式)
        this.renderer.setSize(width, height, false);

        // 3. 限制像素比最高为 2，兼顾画质与移动端发热/性能
        const pixelRatio = Math.min(window.devicePixelRatio, 2);
        this.renderer.setPixelRatio(pixelRatio);

        console.log(`[ScreenController] 画面已调整: 宽 ${width}px, 高 ${height}px, 像素比 ${pixelRatio}`);
    }

    /**
     * 动态切换画布容器高度（例如全屏或沉浸式模式）
     * @param {string} heightCssValue - CSS 高度值，如 '240px' 或 '50vh'
     */
    setContainerHeight(heightCssValue) {
        if (this.container) {
            this.container.style.height = heightCssValue;
            this.resizeThreeCanvas();
        }
    }
}

// 导出或挂载到全局供主游戏调用
window.ScreenController = ScreenController;
