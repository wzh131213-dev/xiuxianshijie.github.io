const REALMS = [
    { name: "凡人期", badge: "凡", maxXiuwei: 100, baseRate: 1 },
    { name: "炼气期", badge: "气", maxXiuwei: 500, baseRate: 3 },
    { name: "筑基期", badge: "基", maxXiuwei: 2500, baseRate: 10 },
    { name: "金丹期", badge: "丹", maxXiuwei: 12000, baseRate: 35 },
    { name: "元婴期", badge: "婴", maxXiuwei: 60000, baseRate: 120 },
    { name: "化神期", badge: "神", maxXiuwei: 300000, baseRate: 400 },
    { name: "合体期", badge: "合", maxXiuwei: 1500000, baseRate: 1500 },
    { name: "大乘期", badge: "乘", maxXiuwei: 8000000, baseRate: 5000 },
    { name: "渡劫飞升", badge: "仙", maxXiuwei: 50000000, baseRate: 20000 }
];

const STAGE_MONSTERS = [
    {
        waves: [
            { name: "偷谷野山鼠", icon: "🐭", hpMult: 1.0, atkMult: 1.0, rewardMult: 1.0 },
            { name: "拦路斑斓虎", icon: "🐅", hpMult: 2.2, atkMult: 1.8, rewardMult: 2.0 },
            { name: "百年树精", icon: "🌳", hpMult: 4.5, atkMult: 3.0, rewardMult: 3.5 }
        ],
        boss: { name: "【关卡霸主·千岁山魈王】", icon: "👹", hpMult: 12.0, atkMult: 6.0, rewardMult: 10.0 }
    },
    {
        waves: [
            { name: "吸髓毒蜂", icon: "🐝", hpMult: 1.0, atkMult: 1.0, rewardMult: 1.0 },
            { name: "赤焰狂蝎", icon: "🦂", hpMult: 2.2, atkMult: 1.8, rewardMult: 2.0 },
            { name: "寒潭阴煞鳄", icon: "🐊", hpMult: 4.5, atkMult: 3.0, rewardMult: 3.5 }
        ],
        boss: { name: "【关卡 BOSS·九天毒蛟】", icon: "🐉", hpMult: 12.0, atkMult: 6.0, rewardMult: 10.0 }
    },
    {
        waves: [
            { name: "噬骨冥蛛", icon: "🕷️", hpMult: 1.0, atkMult: 1.0, rewardMult: 1.0 },
            { name: "嗜血暗夜蝠", icon: "🦇", hpMult: 2.2, atkMult: 1.8, rewardMult: 2.0 },
            { name: "千足剧毒蜈蚣", icon: "🐛", hpMult: 4.5, atkMult: 3.0, rewardMult: 3.5 }
        ],
        boss: { name: "【关卡 BOSS·万蛛母皇】", icon: "🕷️", hpMult: 12.0, atkMult: 6.0, rewardMult: 10.0 }
    },
    {
        waves: [
            { name: "飞天夜叉傀", icon: "🗿", hpMult: 1.0, atkMult: 1.0, rewardMult: 1.0 },
            { name: "金铠犀牛怪", icon: "🦏", hpMult: 2.2, atkMult: 1.8, rewardMult: 2.0 },
            { name: "烈焰三头犬", icon: "🐕", hpMult: 4.5, atkMult: 3.0, rewardMult: 3.5 }
        ],
        boss: { name: "【关卡 BOSS·三头九幽金乌】", icon: "🦅", hpMult: 12.0, atkMult: 6.0, rewardMult: 10.0 }
    },
    {
        waves: [
            { name: "噬魂幽灵", icon: "👻", hpMult: 1.0, atkMult: 1.0, rewardMult: 1.0 },
            { name: "极天冰原狼", icon: "🐺", hpMult: 2.2, atkMult: 1.8, rewardMult: 2.0 },
            { name: "紫煞修罗将", icon: "🗡️", hpMult: 4.5, atkMult: 3.0, rewardMult: 3.5 }
        ],
        boss: { name: "【关卡 BOSS·九尾天狐尊】", icon: "🦊", hpMult: 12.0, atkMult: 6.0, rewardMult: 10.0 }
    },
    {
        waves: [
            { name: "幻海鲛人卫", icon: "🧜", hpMult: 1.0, atkMult: 1.0, rewardMult: 1.0 },
            { name: "踏空吞天兽", icon: "🦁", hpMult: 2.2, atkMult: 1.8, rewardMult: 2.0 },
            { name: "虚空炼狱魔", icon: "👹", hpMult: 4.5, atkMult: 3.0, rewardMult: 3.5 }
        ],
        boss: { name: "【关卡 BOSS·太古裂空龙尊】", icon: "🐲", hpMult: 12.0, atkMult: 6.0, rewardMult: 10.0 }
    },
    {
        waves: [
            { name: "狂暴玄金傀", icon: "🤖", hpMult: 1.0, atkMult: 1.0, rewardMult: 1.0 },
            { name: "九幽幽冥凤凰", icon: "🦅", hpMult: 2.2, atkMult: 1.8, rewardMult: 2.0 },
            { name: "万象混沌煞", icon: "🌫️", hpMult: 4.5, atkMult: 3.0, rewardMult: 3.5 }
        ],
        boss: { name: "【关卡 BOSS·合体大魔皇】", icon: "👑", hpMult: 12.0, atkMult: 6.0, rewardMult: 10.0 }
    },
    {
        waves: [
            { name: "灭世黑炎魔", icon: "🔥", hpMult: 1.0, atkMult: 1.0, rewardMult: 1.0 },
            { name: "诛仙傀儡将", icon: "⚔️", hpMult: 2.2, atkMult: 1.8, rewardMult: 2.0 },
            { name: "洪荒不灭凶兽", icon: "🦖", hpMult: 4.5, atkMult: 3.0, rewardMult: 3.5 }
        ],
        boss: { name: "【关卡 BOSS·诸天镇狱神魔】", icon: "👿", hpMult: 12.0, atkMult: 6.0, rewardMult: 10.0 }
    },
    {
        waves: [
            { name: "九天劫云傀", icon: "🌩️", hpMult: 1.0, atkMult: 1.0, rewardMult: 1.0 },
            { name: "灭世天道幻影", icon: "👁️", hpMult: 2.2, atkMult: 1.8, rewardMult: 2.0 },
            { name: "渡劫天雷神将", icon: "⚡", hpMult: 4.5, atkMult: 3.0, rewardMult: 3.5 }
        ],
        boss: { name: "【终极关卡·灭世九重天劫魔尊】", icon: "🌌", hpMult: 12.0, atkMult: 6.0, rewardMult: 10.0 }
    }
];

const SECRET_MANUALS = [
    { id: "m1", name: "太上感应篇", icon: "📖", rarity: "玄品", effectText: "修炼速度 +25%", speedBonus: 0.25, atkBonus: 0, stoneBonus: 0, desc: "太上曰：祸福无门，惟人自召。" },
    { id: "m2", name: "九天雷霆剑诀", icon: "⚔️", rarity: "地品", effectText: "攻击力 +30%", speedBonus: 0, atkBonus: 0.30, stoneBonus: 0, desc: "御雷入剑，剑威破九霄。" },
    { id: "m3", name: "紫霄造化经", icon: "✨", rarity: "天品", effectText: "修炼速度 +40%", speedBonus: 0.40, atkBonus: 0, stoneBonus: 0.20, desc: "天地紫气凝于一身。" },
    { id: "m4", name: "金刚不坏真禅", icon: "🛡️", rarity: "玄品", effectText: "攻击力 +20%", speedBonus: 0, atkBonus: 0.20, stoneBonus: 0, desc: "梵音炼体，金刚不坏。" },
    { id: "m5", name: "寻龙点穴宝典", icon: "🧭", rarity: "地品", effectText: "灵石收益 +50%", speedBonus: 0, atkBonus: 0, stoneBonus: 0.50, desc: "识地脉龙气采灵石。" },
    { id: "m6", name: "阴阳万象秘录", icon: "☯️", rarity: "天品", effectText: "修炼速度 +35%", speedBonus: 0.35, atkBonus: 0.15, stoneBonus: 0, desc: "参透阴阳演化万象。" },
    { id: "m7", name: "八荒六合独尊功", icon: "🔥", rarity: "仙品", effectText: "攻击力 +50%", speedBonus: 0, atkBonus: 0.50, stoneBonus: 0, desc: "八荒六合，唯吾独尊。" },
    { id: "m8", name: "混沌无极道典", icon: "🌌", rarity: "神品", effectText: "全属性 +25%", speedBonus: 0.25, atkBonus: 0.25, stoneBonus: 0.25, desc: "蕴含宇宙终极法则。" }
];

const WANDER_LOCATIONS = [
    { name: "蜀山仙遗", desc: "剑意纵横古遗址" },
    { name: "蓬莱仙岛", desc: "云雾缭绕之仙岛" },
    { name: "昆仑秘境", desc: "万山之祖脉汇聚" },
    { name: "盘龙古洞", desc: "上古真龙盘踞" }
];

const SHOP_ITEMS = [
    { id: "p1", name: "聚灵丹", price: 100, desc: "效率 +2点/秒", rateAdd: 2 },
    { id: "p2", name: "洗髓丹", price: 500, desc: "效率 +10点/秒", rateAdd: 10 },
    { id: "a1", name: "桃木剑", price: 300, desc: "灵石收益 +30%", stoneAdd: 0.3 },
    { id: "a2", name: "昊天塔", price: 2000, desc: "效率 +50点/秒", rateAdd: 50 }
];

let gameState = {
    xiuwei: 0,
    realmIndex: 0,
    spiritStones: 200,
    learnedManuals: [],
    shopPurchases: {},
    lastSaveTime: Date.now(),
    advWave: 1,
    advCount: 0,
    currentEnemyHp: null
};

let scene, camera, renderer;
let lotusMesh, playerAvatar, auraRing, particlesMesh, arrayMesh;
let flyingSwords = [];
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

function initThreeJS() {
    const canvas = document.getElementById('three-canvas');
    if (!canvas) return;

    try {
        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x0c0a09, 0.04);

        camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
        camera.position.set(0, 3, 6);
        camera.lookAt(0, 0.8, 0);

        renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const ambientLight = new THREE.AmbientLight(0xfffbeb, 0.6);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xf59e0b, 1.5, 10);
        pointLight.position.set(0, 3, 2);
        scene.add(pointLight);

        // Ground Array
        const arrayGeo = new THREE.RingGeometry(1.2, 1.8, 32);
        const arrayMat = new THREE.MeshBasicMaterial({ color: 0xd97706, side: THREE.DoubleSide, transparent: true, opacity: 0.4 });
        arrayMesh = new THREE.Mesh(arrayGeo, arrayMat);
        arrayMesh.rotation.x = Math.PI / 2;
        arrayMesh.position.y = 0.01;
        scene.add(arrayMesh);

        // Lotus Base
        const lotusGeo = new THREE.CylinderGeometry(1, 1.2, 0.2, 8);
        const lotusMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.3, metalness: 0.2 });
        lotusMesh = new THREE.Mesh(lotusGeo, lotusMat);
        lotusMesh.position.y = 0.1;
        scene.add(lotusMesh);

        // Player Figure
        const avatarGroup = new THREE.Group();
        const bodyGeo = new THREE.ConeGeometry(0.4, 1.0, 8);
        const bodyMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.5 });
        const body = new THREE.Mesh(bodyGeo, bodyMat);
        body.position.y = 0.7;
        avatarGroup.add(body);

        const headGeo = new THREE.SphereGeometry(0.2, 16, 16);
        const headMat = new THREE.MeshStandardMaterial({ color: 0xfef3c7 });
        const head = new THREE.Mesh(headGeo, headMat);
        head.position.y = 1.3;
        avatarGroup.add(head);

        playerAvatar = avatarGroup;
        scene.add(playerAvatar);

        // Aura Ring
        const ringGeo = new THREE.TorusGeometry(0.6, 0.02, 16, 50);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.6 });
        auraRing = new THREE.Mesh(ringGeo, ringMat);
        auraRing.rotation.x = Math.PI / 2;
        auraRing.position.y = 0.7;
        scene.add(auraRing);

        // Particles
        const particleCount = 80;
        const particleGeo = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 4;
            positions[i + 1] = Math.random() * 3;
            positions[i + 2] = (Math.random() - 0.5) * 4;
        }
        particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particleMat = new THREE.PointsMaterial({ color: 0xfef08a, size: 0.04, transparent: true, opacity: 0.8 });
        particlesMesh = new THREE.Points(particleGeo, particleMat);
        scene.add(particlesMesh);

        setupThreeInteraction(canvas);
        updateThreeJSSwords();
        animateThreeJS();

        window.addEventListener('resize', onWindowResize);
    } catch (e) {
        console.warn("Three.js init fallback", e);
        const fallback = document.getElementById('three-fallback');
        if (fallback) fallback.classList.remove('hidden');
    }
}

function setupThreeInteraction(canvas) {
    const onStart = (x, y) => {
        isDragging = true;
        previousMousePosition = { x, y };
    };
    const onMove = (x, y) => {
        if (!isDragging || !scene) return;
        const deltaX = x - previousMousePosition.x;
        scene.rotation.y += deltaX * 0.01;
        previousMousePosition = { x, y };
    };
    const onEnd = () => { isDragging = false; };

    canvas.addEventListener('mousedown', e => onStart(e.clientX, e.clientY));
    window.addEventListener('mousemove', e => onMove(e.clientX, e.clientY));
    window.addEventListener('mouseup', onEnd);

    canvas.addEventListener('touchstart', e => {
        if (e.touches.length === 1) onStart(e.touches[0].clientX, e.touches[0].clientY);
    });
    window.addEventListener('touchmove', e => {
        if (e.touches.length === 1) onMove(e.touches[0].clientX, e.touches[0].clientY);
    });
    window.addEventListener('touchend', onEnd);
}

function updateThreeJSSwords() {
    if (!scene) return;

    flyingSwords.forEach(s => scene.remove(s));
    flyingSwords = [];

    const count = Math.min(gameState.realmIndex + 1, 6);
    const swordCountBadge = document.getElementById('3d-sword-count');
    if (swordCountBadge) swordCountBadge.innerText = `御剑: ${count}`;

    for (let i = 0; i < count; i++) {
        const swordGroup = new THREE.Group();
        const bladeGeo = new THREE.BoxGeometry(0.04, 0.8, 0.01);
        const bladeMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2, metalness: 0.8, emissive: 0x0284c7 });
        const blade = new THREE.Mesh(bladeGeo, bladeMat);
        swordGroup.add(blade);

        swordGroup.userData = { angle: (i / count) * Math.PI * 2, radius: 1.2 + (i % 2) * 0.2, speed: 0.02 + i * 0.005 };
        flyingSwords.push(swordGroup);
        scene.add(swordGroup);
    }
}

function animateThreeJS() {
    requestAnimationFrame(animateThreeJS);
    if (!renderer || !scene || !camera) return;

    const time = Date.now() * 0.001;

    if (playerAvatar) playerAvatar.position.y = Math.sin(time * 2) * 0.05;
    if (auraRing) auraRing.rotation.z = time * 0.5;
    if (arrayMesh) arrayMesh.rotation.z = -time * 0.2;

    if (particlesMesh) {
        const positions = particlesMesh.geometry.attributes.position.array;
        for (let i = 1; i < positions.length; i += 3) {
            positions[i] += 0.005;
            if (positions[i] > 3) positions[i] = 0;
        }
        particlesMesh.geometry.attributes.position.needsUpdate = true;
    }

    flyingSwords.forEach((sword) => {
        sword.userData.angle += sword.userData.speed;
        const x = Math.cos(sword.userData.angle) * sword.userData.radius;
        const z = Math.sin(sword.userData.angle) * sword.userData.radius;
        sword.position.set(x, 0.8 + Math.sin(time * 3 + sword.userData.angle) * 0.1, z);
        sword.rotation.y = -sword.userData.angle;
        sword.rotation.z = Math.PI / 4;
    });

    renderer.render(scene, camera);
}

function onWindowResize() {
    const canvas = document.getElementById('three-canvas');
    if (!canvas || !renderer || !camera) return;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
}

function logMessage(msg, type = "normal") {
    const logContainer = document.getElementById('game-logs');
    if (!logContainer) return;

    const div = document.createElement('div');
    const timeStr = new Date().toLocaleTimeString('zh-CN', { hour12: false });

    let colorClass = "text-stone-300";
    if (type === "gain") colorClass = "text-emerald-400";
    if (type === "warn") colorClass = "text-amber-400 font-bold";
    if (type === "error") colorClass = "text-red-400 font-bold";
    if (type === "rare") colorClass = "text-purple-400 font-bold";

    div.className = `${colorClass} leading-tight`;
    div.innerHTML = `<span class="text-stone-600">[${timeStr}]</span> ${msg}`;

    logContainer.appendChild(div);
    logContainer.scrollTop = logContainer.scrollHeight;

    while (logContainer.children.length > 50) {
        logContainer.removeChild(logContainer.firstChild);
    }
}

function clearLogs() {
    const logContainer = document.getElementById('game-logs');
    if (logContainer) logContainer.innerHTML = '';
}

function calculateBuffs() {
    let speedBonus = 0;
    let atkBonus = 0;
    let stoneBonus = 0;

    gameState.learnedManuals.forEach(id => {
        const m = SECRET_MANUALS.find(x => x.id === id);
        if (m) {
            speedBonus += m.speedBonus || 0;
            atkBonus += m.atkBonus || 0;
            stoneBonus += m.stoneBonus || 0;
        }
    });

    return { speedBonus, atkBonus, stoneBonus };
}

function getGlobalRate() {
    const realm = REALMS[gameState.realmIndex] || REALMS[0];
    let rate = realm.baseRate;

    if (gameState.shopPurchases["p1"]) rate += SHOP_ITEMS.find(i => i.id === "p1").rateAdd * gameState.shopPurchases["p1"];
    if (gameState.shopPurchases["p2"]) rate += SHOP_ITEMS.find(i => i.id === "p2").rateAdd * gameState.shopPurchases["p2"];
    if (gameState.shopPurchases["a2"]) rate += SHOP_ITEMS.find(i => i.id === "a2").rateAdd * gameState.shopPurchases["a2"];

    const buffs = calculateBuffs();
    rate = Math.floor(rate * (1 + buffs.speedBonus));

    return Math.max(1, rate);
}

function getPlayerAtk() {
    let baseAtk = (gameState.realmIndex + 1) * 10;
    const buffs = calculateBuffs();
    return Math.floor(baseAtk * (1 + buffs.atkBonus));
}

function updateUI() {
    const currentRealm = REALMS[gameState.realmIndex];

    document.getElementById('realm-badge').innerText = currentRealm.badge;
    document.getElementById('realm-title').innerText = currentRealm.name;
    document.getElementById('spirit-stones').innerText = gameState.spiritStones;

    const currentRate = getGlobalRate();
    document.getElementById('global-rate').innerText = `${currentRate}/s`;
    document.getElementById('rate-display').innerText = currentRate;

    document.getElementById('xiuwei-val').innerText = Math.floor(gameState.xiuwei);
    document.getElementById('xiuwei-max').innerText = currentRealm.maxXiuwei;

    const percent = Math.min(100, (gameState.xiuwei / currentRealm.maxXiuwei) * 100);
    document.getElementById('xiuwei-bar').style.width = `${percent}%`;

    const btnBreakthrough = document.getElementById('btn-breakthrough');
    if (gameState.xiuwei >= currentRealm.maxXiuwei) {
        btnBreakthrough.disabled = false;
        btnBreakthrough.classList.add('animate-pulse');
    } else {
        btnBreakthrough.disabled = true;
        btnBreakthrough.classList.remove('animate-pulse');
    }

    // Wander Lock Check
    const wanderLocked = gameState.realmIndex < 2; // Realm 2 is 筑基期
    const lockedCard = document.getElementById('wander-locked-card');
    const unlockedCard = document.getElementById('wander-unlocked-card');
    const wanderLockTag = document.getElementById('wander-lock-tag');

    if (wanderLocked) {
        if (lockedCard) lockedCard.classList.remove('hidden');
        if (unlockedCard) unlockedCard.classList.add('hidden');
        if (wanderLockTag) wanderLockTag.classList.remove('hidden');
    } else {
        if (lockedCard) lockedCard.classList.add('hidden');
        if (unlockedCard) unlockedCard.classList.remove('hidden');
        if (wanderLockTag) wanderLockTag.classList.add('hidden');
    }

    renderRealmsList();
    renderManualsView();
    renderShopView();
    renderAdventureView();
}

function renderRealmsList() {
    const container = document.getElementById('realms-list');
    if (!container) return;

    container.innerHTML = REALMS.map((r, i) => {
        const isCurrent = i === gameState.realmIndex;
        const isPassed = i < gameState.realmIndex;

        let statusClass = "bg-stone-950/60 border-stone-800 text-stone-500";
        if (isCurrent) statusClass = "bg-amber-950/80 border-amber-500 text-amber-200 font-bold shadow";
        if (isPassed) statusClass = "bg-stone-900/80 border-amber-900/40 text-amber-400/60";

        return `
            <div class="p-1.5 rounded border text-center ${statusClass}">
                <div class="text-[11px]">${r.name}</div>
                <div class="text-[9px] opacity-70">${r.baseRate}/s</div>
            </div>
        `;
    }).join('');
}

function renderManualsView() {
    const learnedCountEl = document.getElementById('manual-learned-count');
    const totalCountEl = document.getElementById('manual-total-count');
    const badgeEl = document.getElementById('manual-count-badge');

    if (learnedCountEl) learnedCountEl.innerText = gameState.learnedManuals.length;
    if (totalCountEl) totalCountEl.innerText = SECRET_MANUALS.length;
    if (badgeEl) badgeEl.innerText = `${gameState.learnedManuals.length}/${SECRET_MANUALS.length}`;

    const buffs = calculateBuffs();
    document.getElementById('buff-speed-text').innerText = `+${Math.round(buffs.speedBonus * 100)}%`;
    document.getElementById('buff-atk-text').innerText = `+${Math.round(buffs.atkBonus * 100)}%`;
    document.getElementById('buff-stone-text').innerText = `+${Math.round(buffs.stoneBonus * 100)}%`;

    const grid = document.getElementById('manuals-grid');
    if (grid) {
        grid.innerHTML = SECRET_MANUALS.map(m => {
            const isLearned = gameState.learnedManuals.includes(m.id);
            return `
                <div class="p-2 rounded-lg border ${isLearned ? 'bg-amber-950/40 border-amber-600/50' : 'bg-stone-950/40 border-stone-800 opacity-60'} flex gap-2 items-center">
                    <div class="text-2xl">${m.icon}</div>
                    <div class="flex-1 min-w-0">
                        <div class="flex justify-between items-center">
                            <span class="text-xs font-bold text-amber-200 truncate">${m.name}</span>
                            <span class="text-[9px] px-1 rounded bg-amber-900/60 text-amber-300">${m.rarity}</span>
                        </div>
                        <div class="text-[10px] text-emerald-400">${m.effectText}</div>
                        <div class="text-[9px] text-stone-500 truncate">${isLearned ? m.desc : '未参悟'}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    const preview = document.getElementById('wander-manuals-preview');
    if (preview) {
        preview.innerHTML = SECRET_MANUALS.slice(0, 4).map(m => `
            <div class="p-1.5 rounded bg-stone-950/60 border border-amber-900/30 flex items-center gap-1.5">
                <span>${m.icon}</span>
                <div class="truncate">
                    <div class="text-[10px] font-bold text-amber-200 truncate">${m.name}</div>
                    <div class="text-[9px] text-emerald-400">${m.effectText}</div>
                </div>
            </div>
        `).join('');
    }
}

function renderShopView() {
    const container = document.getElementById('shop-items-container');
    if (!container) return;

    container.innerHTML = SHOP_ITEMS.map(item => {
        const boughtCount = gameState.shopPurchases[item.id] || 0;
        return `
            <div class="p-2.5 rounded-lg bg-stone-950/60 border border-amber-900/30 flex justify-between items-center gap-2">
                <div>
                    <div class="text-xs font-bold text-amber-200">${item.name} <span class="text-[9px] text-stone-400">(已购:${boughtCount})</span></div>
                    <div class="text-[10px] text-stone-400">${item.desc}</div>
                    <div class="text-[10px] text-amber-400 font-bold mt-0.5">💎 ${item.price} 灵石</div>
                </div>
                <button onclick="buyShopItem('${item.id}')" class="px-3 py-1 bg-amber-800 hover:bg-amber-700 text-amber-100 text-xs font-bold rounded shadow transition active:scale-95 shrink-0">
                    购买
                </button>
            </div>
        `;
    }).join('');
}

function getCurrentMonsterData() {
    const stageIdx = Math.min(gameState.realmIndex, STAGE_MONSTERS.length - 1);
    const stage = STAGE_MONSTERS[stageIdx];

    const isBossWave = gameState.advWave > 3;
    let baseHp = (gameState.realmIndex + 1) * 80;
    let baseAtk = (gameState.realmIndex + 1) * 8;
    let baseReward = (gameState.realmIndex + 1) * 30;

    if (!isBossWave) {
        const waveObj = stage.waves[(gameState.advWave - 1) % stage.waves.length];
        return {
            name: waveObj.name,
            icon: waveObj.icon,
            maxHp: Math.floor(baseHp * waveObj.hpMult),
            atk: Math.floor(baseAtk * waveObj.atkMult),
            reward: Math.floor(baseReward * waveObj.rewardMult),
            isBoss: false
        };
    } else {
        const bossObj = stage.boss;
        return {
            name: bossObj.name,
            icon: bossObj.icon,
            maxHp: Math.floor(baseHp * bossObj.hpMult),
            atk: Math.floor(baseAtk * bossObj.atkMult),
            reward: Math.floor(baseReward * bossObj.rewardMult),
            isBoss: true
        };
    }
}

function renderAdventureView() {
    document.getElementById('player-atk-display').innerText = getPlayerAtk();

    const monster = getCurrentMonsterData();
    if (gameState.currentEnemyHp === null || gameState.currentEnemyHp > monster.maxHp) {
        gameState.currentEnemyHp = monster.maxHp;
    }

    document.getElementById('monster-name').innerText = monster.name;
    document.getElementById('monster-icon').innerText = monster.icon;
    document.getElementById('monster-atk-val').innerText = monster.atk;

    const buffs = calculateBuffs();
    const finalReward = Math.floor(monster.reward * (1 + buffs.stoneBonus));
    document.getElementById('monster-reward-val').innerText = `${finalReward} 灵石`;

    document.getElementById('monster-hp-cur').innerText = gameState.currentEnemyHp;
    document.getElementById('monster-hp-max').innerText = monster.maxHp;

    const hpPercent = Math.max(0, (gameState.currentEnemyHp / monster.maxHp) * 100);
    document.getElementById('monster-hp-bar').style.width = `${hpPercent}%`;

    const waveTitle = monster.isBoss ? "阶段 最终章：关卡霸主" : `阶段 ${gameState.advWave}/3：普通小妖`;
    document.getElementById('enemy-wave-title').innerText = waveTitle;

    const countBadge = monster.isBoss ? "决战" : `进度: ${gameState.advCount}/10`;
    document.getElementById('enemy-count-badge').innerText = countBadge;

    const bossTag = document.getElementById('monster-boss-tag');
    if (monster.isBoss) {
        bossTag.classList.remove('hidden');
    } else {
        bossTag.classList.add('hidden');
    }
}

function attackMonster(event) {
    const monster = getCurrentMonsterData();
    const atk = getPlayerAtk();

    gameState.currentEnemyHp -= atk;

    createFloatingText(event ? event.clientX : window.innerWidth / 2, event ? event.clientY : window.innerHeight / 2, `-${atk}`);

    if (gameState.currentEnemyHp <= 0) {
        const buffs = calculateBuffs();
        const finalReward = Math.floor(monster.reward * (1 + buffs.stoneBonus));

        gameState.spiritStones += finalReward;
        logMessage(`讨伐成功！击败了【${monster.name}】，获得 💎${finalReward} 灵石！`, "gain");

        if (!monster.isBoss) {
            gameState.advCount++;
            if (gameState.advCount >= 10) {
                gameState.advCount = 0;
                gameState.advWave++;
                logMessage(`历练阶段提升！迎接更强对手！`, "warn");
            }
        } else {
            gameState.advWave = 1;
            gameState.advCount = 0;
            logMessage(`击败了关卡霸主！获胜斩妖大捷！`, "rare");
        }

        const newMonster = getCurrentMonsterData();
        gameState.currentEnemyHp = newMonster.maxHp;
    }

    updateUI();
}

function manualMeditate(event) {
    const addVal = 1;
    const currentRealm = REALMS[gameState.realmIndex];

    if (gameState.xiuwei < currentRealm.maxXiuwei) {
        gameState.xiuwei = Math.min(currentRealm.maxXiuwei, gameState.xiuwei + addVal);
        createFloatingText(event.clientX, event.clientY, `+${addVal} 修为`);
    }

    updateUI();
}

function attemptBreakthrough() {
    const currentRealm = REALMS[gameState.realmIndex];
    if (gameState.xiuwei < currentRealm.maxXiuwei) return;

    gameState.realmIndex++;
    gameState.xiuwei = 0;

    logMessage(`🎉 突破成功！晋升至【${REALMS[gameState.realmIndex].name}】！`, "rare");

    updateThreeJSSwords();
    updateUI();
}

function startWanderTrip() {
    if (gameState.spiritStones < 50) {
        logMessage("灵石不足 50，无法起程游走。", "error");
        return;
    }

    gameState.spiritStones -= 50;

    const loc = WANDER_LOCATIONS[Math.floor(Math.random() * WANDER_LOCATIONS.length)];
    document.getElementById('wander-encounter-title').innerText = `前往【${loc.name}】`;
    document.getElementById('wander-encounter-desc').innerText = loc.desc;
    document.getElementById('wander-encounter-tag').innerText = "游走中";

    logMessage(`花费 50 灵石，起程前往【${loc.name}】游走参道...`);

    if (Math.random() < 0.2) { // 20% Success Chance
        const unlearned = SECRET_MANUALS.filter(m => !gameState.learnedManuals.includes(m.id));
        if (unlearned.length > 0) {
            const m = unlearned[Math.floor(Math.random() * unlearned.length)];
            gameState.learnedManuals.push(m.id);
            logMessage(`🌟 灵光一闪！在【${loc.name}】领悟绝世宝典《${m.name}》！`, "rare");
        } else {
            gameState.spiritStones += 200;
            logMessage(`在【${loc.name}】偶遇古仙机缘，获得 200 灵石！`, "gain");
        }
    } else {
        logMessage(`在【${loc.name}】游走一日，观天地景致，心境略有升华。`);
    }

    updateUI();
}

function buyShopItem(id) {
    const item = SHOP_ITEMS.find(i => i.id === id);
    if (!item) return;

    if (gameState.spiritStones < item.price) {
        logMessage(`灵石不足，无法购买【${item.name}】`, "error");
        return;
    }

    gameState.spiritStones -= item.price;
    gameState.shopPurchases[id] = (gameState.shopPurchases[id] || 0) + 1;

    logMessage(`购买成功！获得了【${item.name}】。`, "gain");
    updateUI();
}

function createFloatingText(x, y, text) {
    const el = document.createElement('div');
    el.className = 'float-text';
    el.innerText = text;
    el.style.left = `${x - 20}px`;
    el.style.top = `${y - 20}px`;
    document.body.appendChild(el);

    setTimeout(() => {
        if (el.parentNode) el.parentNode.removeChild(el);
    }, 600);
}

function switchTab(tabKey) {
    document.querySelectorAll('.tab-view').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.tab-btn').forEach(el => {
        el.classList.remove('bg-amber-900/40', 'text-amber-200', 'border', 'border-amber-700/50');
        el.classList.add('text-stone-400');
    });

    const targetView = document.getElementById(`view-${tabKey}`);
    const targetBtn = document.getElementById(`tab-btn-${tabKey}`);

    if (targetView) targetView.classList.remove('hidden');
    if (targetBtn) {
        targetBtn.classList.add('bg-amber-900/40', 'text-amber-200', 'border', 'border-amber-700/50');
        targetBtn.classList.remove('text-stone-400');
    }

    if (tabKey === 'cultivate') {
        setTimeout(onWindowResize, 50);
    }
}

function gameLoop() {
    const rate = getGlobalRate();
    const currentRealm = REALMS[gameState.realmIndex];

    if (gameState.xiuwei < currentRealm.maxXiuwei) {
        gameState.xiuwei = Math.min(currentRealm.maxXiuwei, gameState.xiuwei + rate);
    }

    updateUI();
}

function saveGame() {
    gameState.lastSaveTime = Date.now();
    localStorage.setItem('Xiuxian3D_Save', JSON.stringify(gameState));
}

function loadGame() {
    const data = localStorage.getItem('Xiuxian3D_Save');
    if (data) {
        try {
            const parsed = JSON.parse(data);
            gameState = { ...gameState, ...parsed };

            // Offline Gain Calculation
            const now = Date.now();
            const diffSec = Math.floor((now - gameState.lastSaveTime) / 1000);
            if (diffSec > 5) {
                const rate = getGlobalRate();
                const offlineGain = Math.min(diffSec * rate, REALMS[gameState.realmIndex].maxXiuwei);
                gameState.xiuwei = Math.min(REALMS[gameState.realmIndex].maxXiuwei, gameState.xiuwei + offlineGain);
                logMessage(`离线闭关 ${diffSec} 秒，获得 ${offlineGain} 点修为！`, "gain");
            }
        } catch (e) {
            console.error("Save load error", e);
        }
    }
}

function downloadSaveFile() {
    saveGame();
    const blob = new Blob([JSON.stringify(gameState, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `xiuxian_save_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    logMessage("存档导出成功！", "gain");
}

function triggerImportSave() {
    document.getElementById('save-file-input').click();
}

function importSaveFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const parsed = JSON.parse(e.target.result);
            if (parsed && typeof parsed.xiuwei === 'number') {
                gameState = { ...gameState, ...parsed };
                saveGame();
                updateThreeJSSwords();
                updateUI();
                logMessage("存档读取成功！", "gain");
            } else {
                logMessage("无效的存档文件！", "error");
            }
        } catch (err) {
            logMessage("解析存档失败！", "error");
        }
    };
    reader.readAsText(file);
}

function resetGame() {
    if (confirm("确定要重置修仙历程吗？所有修为与宝典将归零！")) {
        localStorage.removeItem('Xiuxian3D_Save');
        location.reload();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    loadGame();
    initThreeJS();
    updateUI();

    setInterval(gameLoop, 1000);
    setInterval(saveGame, 10000);

    logMessage("踏入仙途，洞府静修。愿道友早日得道飞升！", "warn");
});
