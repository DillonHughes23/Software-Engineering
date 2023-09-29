const canvas = document.querySelector('canvas')
//c stands for context
 const c= canvas.getContext('2d')
 let isPaused = false;


canvas.width = 1024
canvas.height= 576
const gravity = 0.5

//sound effects for gameplay
const jumpSfx = new Audio('static/mp3/jump_sfx.mp3');
//const jumperGunSound = new Audio('static/mp3/jumper_gun.mp3');
//jumperGunSound.volume = 0.2;



class img {
    constructor({ position, imageSrc }) {
        this.position = position;
        this.image = new Image();
        this.image.src = imageSrc;
        this.loaded = false;
        this.image.onload = () => {
            this.loaded = true;
            console.log('Image loaded successfully');
        };
    }

    draw() {
        if (!this.loaded) return;
        c.drawImage(this.image, this.position.x, this.position.y);
    }

    update() {
        this.draw();
    }
}


class Player {
  constructor(position, imageSrc) {
      this.position = position;
      this.velocity = {
          x: 0,
          y: 1,
      };
      this.width = 90;
      this.hitPoints =20;
      this.height = 90;
      this.image = new Image();
      this.image.src = imageSrc;
      this.loaded = false;
      this.image.onload = () => {
          this.loaded = true;
      };
      this.hitPoints = 20; // Added hit points
  }

    draw() {
        if (!this.loaded) return;
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw()
        // updates player velocity
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        // detects border collisons 
        if (this.position.x < 0) {
            this.position.x = 0;
        }
        if (this.position.x + this.width > canvas.width) {
            this.position.x = canvas.width - this.width;
        }
        if (this.position.y < 0) {
            this.position.y = 0;
            this.velocity.y = 0;
        }
        if (this.position.y + this.height > canvas.height) {
            this.position.y = canvas.height - this.height;
            this.velocity.y = 0;
        }
    
        // Gravity
        if (this.position.y + this.height + this.velocity.y < canvas.height) {
            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
        }
    }
    takeDamage(damage) {
      this.hitPoints -= damage;
  }
}
//weapon class that can be extended later 
class Weapon {
  constructor(cooldown, damage) {
    this.projectiles = [];
    this.cooldown = cooldown || 0;
    this.damage = damage || 1; // Default damage is 1
    this.lastShot = 0;
    this.audio = new Audio('/static/mp3/jumper_gun.mp3');
  }

  shoot(startX, startY, targetX, targetY) {
    const currentTime = Date.now();
    if (currentTime - this.lastShot < this.cooldown) {
      return; // Don't shoot if the cooldown hasn't expired
    }
    this.lastShot = currentTime;

    const dx = targetX - startX;
    const dy = targetY - startY;
    const angle = Math.atan2(dy, dx);

    const velocity = {
      x: Math.cos(angle) * 5,
      y: Math.sin(angle) * 5,
    };

    this.projectiles.push({ x: startX, y: startY, velocity });
    this.audio.currentTime = 0;
    this.audio.play();
  }

  update() {
    for (let i = 0; i < this.projectiles.length; i++) {
      const projectile = this.projectiles[i];
      projectile.x += projectile.velocity.x;
      projectile.y += projectile.velocity.y;

      c.fillStyle = 'red';
      c.beginPath();
      c.arc(projectile.x, projectile.y, 5, 0, Math.PI * 2);
      c.fill();
    }
  }
}


  class TripleShotWeapon extends Weapon {
    constructor(cooldown, damage) {
      super(cooldown, damage);
      this.shotgunSound = new Audio('/static/mp3/shotgun.mp3');
    }

    shoot(startX, startY, targetX, targetY) {
      const currentTime = Date.now();
      if (currentTime - this.lastShot < this.cooldown) {
        return; // Don't shoot if the cooldown hasn't expired
      }
      this.lastShot = currentTime;

      const dx = targetX - startX;
      const dy = targetY - startY;
      const angle = Math.atan2(dy, dx);

      const projectile1Velocity = {
        x: Math.cos(angle - Math.PI / 6) * 5,
        y: Math.sin(angle - Math.PI / 6) * 5,
      };
      const projectile2Velocity = {
        x: Math.cos(angle) * 5,
        y: Math.sin(angle) * 5,
      };
      const projectile3Velocity = {
        x: Math.cos(angle + Math.PI / 6) * 5,
        y: Math.sin(angle + Math.PI / 6) * 5,
      };

      this.projectiles.push({ x: startX, y: startY, velocity: projectile1Velocity });
      this.projectiles.push({ x: startX, y: startY, velocity: projectile2Velocity });
      this.projectiles.push({ x: startX, y: startY, velocity: projectile3Velocity });

      // Play shotgun sound effect
      this.shotgunSound.currentTime = 0;
      this.shotgunSound.play();
    }
}




  class MachineGun extends Weapon {
    constructor(cooldown, damage) {
      super(cooldown, damage);
      this.isShooting = false;
      this.sound = new Audio("/static/mp3/machineGun.mp3"); // Add sound file
    }
  
    startShooting(startX, startY, targetX, targetY) {
      this.isShooting = true;
      this.shootContinuously(startX, startY, targetX, targetY);
    }
  
    stopShooting() {
      this.isShooting = false;
    }
  
    shootContinuously(playerX, playerY, targetX, targetY) {
      if (!this.isShooting) {
        return;
      }
      const weaponStartX = playerX + weaponOffset.x;
      const weaponStartY = playerY + weaponOffset.y;
      this.shoot(weaponStartX, weaponStartY, targetX, targetY);
      setTimeout(() => this.shootContinuously(playerX, playerY, targetX, targetY), this.cooldown);
    }
    
    shoot(startX, startY, targetX, targetY) {
      const currentTime = Date.now();
      if (currentTime - this.lastShot < this.cooldown) {
        return;
      }
      this.lastShot = currentTime;
  
      const dx = targetX - startX;
      const dy = targetY - startY;
      const angle = Math.atan2(dy, dx);
      const velocity = {
        x: Math.cos(angle) * 5,
        y: Math.sin(angle) * 5,
      };
  
      this.projectiles.push({ x: startX, y: startY, velocity });
      this.playSound(); // Play sound file
    }
  
    playSound() {
      this.sound.currentTime = 0;
      this.sound.play();
    }
}

  
  class Sniper extends Weapon {
    constructor(cooldown, damage) {
      super(cooldown, damage);
      this.audio = new Audio('/static/mp3/sniper.mp3'); // create new audio element and assign sniper.mp3 to it
    }
  
    shoot(startX, startY, targetX, targetY) {
      const currentTime = Date.now();
      if (currentTime - this.lastShot < this.cooldown) {
        return; // Don't shoot if the cooldown hasn't expired
      }
      this.lastShot = currentTime;
  
      const dx = targetX - startX;
      const dy = targetY - startY;
      const angle = Math.atan2(dy, dx);
  
      const sniperProjectileSpeed = 20; // Faster projectiles for the sniper
      const velocity = {
        x: Math.cos(angle) * sniperProjectileSpeed,
        y: Math.sin(angle) * sniperProjectileSpeed,
      };
  
      this.projectiles.push({ x: startX, y: startY, velocity });
      this.audio.play(); // play the sniper sound effect
    }
  }
  

  document.addEventListener('keydown', function(event) {
    if (event.code === 'KeyP') {
      currentWeapon = inventory.switchWeapon(1);
    } else if (event.code === 'KeyO') {
      currentWeapon = inventory.switchWeapon(0);
    }
  });
  
  class Inventory {
    constructor() {
      this.slots = new Array(8).fill(null);
    }
  
    addWeapon(slot, weapon) {
      this.slots[slot] = weapon;
    }
  
    switchWeapon(slot) {
      return this.slots[slot];
    }
  }
  
  const inventory = new Inventory();
  const starterWeapon = new Weapon(500, 1);
  const tripleShotWeapon = new TripleShotWeapon(1000, 1); // 1000 ms cooldown between shots with 1 damage and 3 projectiles
  const machineGun = new MachineGun(0, 1)
  const sniper = new Sniper(1000, 4)
  inventory.addWeapon(0, starterWeapon);
  inventory.addWeapon(1, tripleShotWeapon);
  inventory.addWeapon(2, machineGun)
  inventory.addWeapon(3, sniper)
  
  let currentWeapon = starterWeapon;
  class EnemyWeapon extends Weapon {
    constructor(damage, fireRate) {
      super(damage, fireRate);
    }
  }
  
// Base Enemy class
class Enemy {
    constructor(position, imageSrc, width, height, hp) {
        this.position = position; // Enemy position
        this.velocity = { // Enemy velocity
            x: 0,
            y: 1,
        };
        this.hp= hp || 1; // default enemy health
        this.width = width || 50; // Enemy width, default 50
        this.height = height || 50; // Enemy height, default 50
        this.image = new Image(); // Enemy image
        this.image.src = imageSrc;
        this.loaded = false;
        this.image.onload = () => { // Load enemy image
            this.loaded = true;
        };
    }

    draw() {
        if (!this.loaded) return; // Do not draw if image not loaded
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw(); // Draw enemy
        // Update enemy position
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
    }
    //enemys can take damage 
    takeDamage(damage) {
        this.hp -= damage;
      }
      //checks if an enemy is dead
      isDead() {
        return this.hp <= 0;
      }
}

// FlyingEnemy class, inherits from Enemy
class FlyingEnemy extends Enemy {
  constructor(position, imageSrc) {
    super(position, imageSrc, 50, 50, 5);
    this.velocity.x = 5;
    this.velocity.y = 0;
    this.weapon = new EnemyWeapon(4000, 1);
  }

  update() {
      super.update(); // Call the update method of the base Enemy class
      // Reverse the horizontal direction when the enemy reaches the edge of the canvas
      if (this.position.x <= 0 || this.position.x + this.width >= canvas.width) {
          this.velocity.x = -this.velocity.x;
      }

      // Shoot bullets towards the player
      this.weapon.shoot(
          this.position.x + this.width / 2,
          this.position.y + this.height / 2,
          player.position.x + player.width / 2,
          player.position.y + player.height / 2
      );
      this.weapon.update(); // Update the weapon
  }
}
// GroundEnemy class, inherits from Enemy
class GroundEnemy extends Enemy {
    constructor(position, imageSrc, width, height) {
        super(position, imageSrc, width, height,/*hp*/ 1);
        this.velocity.x = 5;
        this.velocity.y = 0;
        this.gravity = 0.5;
    }

    checkCollisionsWithOtherGroundEnemies() {
      for (const otherEnemy of enemies) {
          if (otherEnemy instanceof GroundEnemy && otherEnemy !== this) {
              const isColliding =
                  this.position.x < otherEnemy.position.x + otherEnemy.width &&
                  this.position.x + this.width > otherEnemy.position.x &&
                  this.position.y < otherEnemy.position.y + otherEnemy.height &&
                  this.position.y + this.height > otherEnemy.position.y;

              if (isColliding) {
                  return true;
              }
          }
      }

      return false;
  }

    update() {
        const previousPosition = { x: this.position.x, y: this.position.y };

        super.update(); // Call the update method of the base Enemy class

        // Reverse the horizontal direction when the enemy reaches the edge of the canvas
        if (this.position.x <= 0 || this.position.x + this.width >= canvas.width) {
            this.velocity.x = -this.velocity.x;
        }

        // Calculate ground level
        const groundLevel = canvas.height - this.height;

        // Apply gravity
        if (this.position.y + this.height < groundLevel) {
            this.velocity.y += this.gravity;
        } else {
            this.velocity.y = 0;
            this.position.y = groundLevel;

            // Randomly jump if the enemy is on the ground DOES NOT WORK 
            if (Math.random() < 0.01) {
                this.velocity.y = -10;
            }
        }
        if (this.checkCollisionsWithOtherGroundEnemies()) {
          this.position = previousPosition;
          this.velocity.x = -this.velocity.x;
      }
    }
}

class Diver extends Enemy {
  constructor(position, imageSrc, width, height) {
    super(position, imageSrc, width, height, /*hp*/ 1);
  }

  followPlayer(player) {
    const dx = player.position.x - this.position.x;
    const dy = player.position.y - this.position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Normalize the direction vector
    const direction = {
      x: dx / distance,
      y: dy / distance,
    };

    // Set the velocity based on the direction and speed
    const speed = 2;
    this.velocity.x = direction.x * speed;
    this.velocity.y = direction.y * speed;
  }

  update(player) {
    this.followPlayer(player);
    super.update();
  }
}

class BossEnemy extends Enemy {
  constructor(position, imageSrc, width, height, hp) {
    super(position, imageSrc, width, height, hp);
    this.velocity.x = 2;
    this.velocity.y = 0;
    this.weapon = new EnemyWeapon(200, 1);
  }

  update() {
    super.update(); 
    if (this.position.x <= 0 || this.position.x + this.width >= canvas.width) {
      this.velocity.x = -this.velocity.x;
    }

    // Shoot bullets towards the player
    this.weapon.shoot(
      this.position.x + this.width / 2,
      this.position.y + this.height / 2,
      player.position.x + player.width / 2,
      player.position.y + player.height / 2
    );
    this.weapon.update(); // Update the weapon
  }
}

let bossSpawned = false;
const bossSpawnScore = 200;
//max cap on enemies = 8
const maxEnemies = 8;
// Function to spawn new enemies
function spawnEnemies() {
  if (enemies.length >= maxEnemies || bossSpawned) {
    return;
  }

  if (timer.score >= bossSpawnScore && !bossSpawned) {
    // Spawn the boss enemy
    bossSpawned = true;
    enemies.splice(0, enemies.length); // Despawn all other enemies
    enemies.push(new BossEnemy({ x: canvas.width / 2, y: 0 }, 'static/image/boss.png', 300, 300, 30));
    return;
  }
  const randomX = Math.floor(Math.random() * (canvas.width - 50));
  const enemyTypes = ['flying', 'ground', 'diver'];
  const randomType = enemyTypes[Math.floor(Math.random() * enemyTypes.length)];

    if (randomType === 'flying') {
        // Limit the random y position for flying enemies to the top 25% of the canvas
        const randomY = Math.floor(Math.random() * (canvas.height * 0.25));
        enemies.push(new FlyingEnemy({ x: randomX, y: randomY }, 'static/image/flying_enemy.png'));
    } else if (randomType == 'ground') {
        const randomY = Math.floor(Math.random() * (canvas.height - 50));
        enemies.push(new GroundEnemy({ x: randomX, y: randomY }, 'static/image/ground_enemy.png'));
    } else if (randomType === 'diver') {
      const randomY = Math.floor(Math.random() * (canvas.height * 0.25));
      enemies.push(new Diver({ x: randomX, y: randomY }, 'static/image/diver.png', 50, 50));
    }

}

 
// Spawn new enemies every seconds
setInterval(spawnEnemies, 1050);

// Initialize enemies array with instances of different enemy types
const enemies = [
  //https://www.pngegg.com/en/png-muhwz/download
    new FlyingEnemy({ x: 500, y: 100 }, 'static/image/flying_enemy.png'),
    new GroundEnemy({ x: 700, y: 300 }, 'static/image/ground_enemy.png'),
];


 function generateRandomPlatformWidth(){
    const maxWidth = canvas.width/2;
    const minWidth = 100;
    return Math.floor(Math.random() * (maxWidth - minWidth)) + minWidth;
}
function assignRandomPlatformHeight(){
    const maxHeight = canvas.height-100
    const minHeight = canvas.height-450;
    return Math.floor(Math.random() * (maxHeight - minHeight)) + minHeight;
}
class Platform{
    constructor(position){
        this.position = position;
        this.width = generateRandomPlatformWidth();
        this.height = 20;
        this.velocity= {
            x:-5, 
            y:0
        };
        }
    draw(){
        c.fillStyle = 'yellow';
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
        }
    update(){
        this.draw();
        this.position.x += this.velocity.x;
        }
    }

const maxPlats = 2
function spawnNewPlatform(){
    if(platforms.length >= maxPlats){return}
    if(Math.floor(Math.random() * 2) >= 1 ){
    platforms.push(new Platform({x: canvas.width, y: assignRandomPlatformHeight()}));
    }    
}
function checkPlatforms(){
    for (h = 0; h < platforms.length; h++){
        if(platforms[h].position.x + platforms[h].width < 0){
            platforms.splice(h, 1);
            spawnNewPlatform();
        }
    }
}

setInterval(spawnNewPlatform, Math.floor(Math.random() * 2000)+1);

var platforms = [];
platforms.push(new Platform({x: canvas.width, y: assignRandomPlatformHeight()}));

class HealthDisplay {
  constructor(player) {
      this.player = player;
  }

  draw() {
      c.fillStyle = 'yellow';
      c.font = '25px Georgia';
      c.fillText('HP: ' + this.player.hitPoints, 10, 25);
  }

  update() {
      this.draw();
      
      // Check if hit points are 0 or less
      if (this.player.hitPoints === 0) {
          // Redirect to end screen HTML
          window.location = "/endscreen_death";
      }
  }
}

class BossHealthDisplay {
  constructor(boss) {
    this.boss = boss;
  }

  draw() {
    if (this.boss) {
      c.fillStyle = 'red';
      c.font = '25px Georgia';
      const text = 'Boss HP: ' + this.boss.hp;
      const textWidth = c.measureText(text).width;
      c.fillText(text, (canvas.width - textWidth) / 2, 25);
    }
  }

  update(boss) {
    this.boss = boss;
    this.draw();

    // Check if the boss's health points are 0 or less
    if (this.boss && this.boss.hp <= 5) {
      console.log("Boss defeated, attempting redirect");
      // Redirect to the end screen HTML
      window.location.href = '/endScreen';
    }
  }
}

const bossHealthDisplay = new BossHealthDisplay(null);

let finalScore = 0;
function addScore(amount) {
  finalScore += amount;
  scoreElement.innerText = finalScore;
}

const player = new Player(
    {
        x: 0,
        y: 0,
    },
    'static/image/player.png' 
);
  
  

class scoreTimer{    
    constructor(position){
    this.score = 0
    this.frame = 0
    this.enemiesKilled = 0
    this.enemiesKilledCounted = 0
}
draw(){
    c.fillStyle = 'yellow'
    c.font="25px Georgia";
    c.fillText('Score: '+ this.score, 880, 25);
}
update(){
    this.draw()
    this.frame += 1;
    if (this.frame % 10 == 0){
        this.score += 1
        }
    if(this.enemiesKilled > this.enemiesKilledCounted) {
        this.score += 20
        this.enemiesKilledCounted = this.enemiesKilled
        }
    }

}

const timer = new scoreTimer({
    x:100,
    y:100,
})
//var frameNo = 0 
class backgroundClass{
    constructor(imageUrl, speed){
    this.backgroundImage = new Image();
    this.backgroundImage.src = imageUrl;
    this.speed = speed;
    this.backgroundX = 0;
    }
    draw() {  
        c.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw the first instance of the image
        c.drawImage(
            this.backgroundImage,
            this.backgroundX,
            0,
            canvas.width,
            canvas.height
        );
        c.drawImage(
            this.backgroundImage,
            this.backgroundX + canvas.width,
            0,
            canvas.width,
            canvas.height
        );
    }    
    update(){
        this.draw();
        this.backgroundX -= this.speed
        // Wrap the background when it goes off the screen
        if (this.backgroundX <= -this.backgroundImage.width) {
            this.backgroundX = 0;
        }
    }
    
}

const background = new backgroundClass("static/image/background.jpg", 2);
const healthDisplay = new HealthDisplay(player);
FPS.frameNo=0;
//function updates frame by frame
function FPS(){
    if (!isPaused) {
        c.clearRect(0, 0, canvas.width, canvas.height);
        background.update();
        timer.update();
        healthDisplay.update(); 
        const boss = bossSpawned ? enemies[0] : null;
        bossHealthDisplay.update(boss);
        player.update();
        currentWeapon.update();
    
        // Iterate through enemies array and update each enemy
        enemies.forEach(enemy => enemy.update(player));

        // Check for collisions between projectiles and enemies
        detectProjectileCollisionsWithEnemies(currentWeapon.projectiles, enemies);
        detectPlayerCollisionsWithEnemies(player, enemies);
        checkPlatforms();  // deletes platforms after they reach end of screen

        // loop updates all platforms and hadles platform colliosions with player
        for(h = 0; h < platforms.length; ++h){          
            platforms[h].update();
            if (
            player.position.x + player.height >= platforms[h].position.x &&
            player.position.x <= platforms[h].position.x + platforms[h].width &&
            player.position.y + player.height >= platforms[h].position.y &&
            player.position.y + player.height <= platforms[h].position.y + platforms[h].height)
            {
                player.velocity.y = 0;
                player.position.y = platforms[h].position.y - player.height;
            }
        }
    }
        detectEnemyProjectileCollisionsWithPlayer(player, enemies);
        window.requestAnimationFrame(FPS);
      }

  window.requestAnimationFrame(FPS);



// player movement 
window.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'd':
            player.velocity.x = 10;
            break;
        case 'a':
            player.velocity.x = -15;
            break;
        case 'w':
            player.velocity.y = -15;
            jumpSfx.play();
            break;
    }
});

window.addEventListener('keyup', (event) => {
    switch(event.key) {
        case 'd':
        case 'a':
            player.velocity.x = 0;
            break;
    }
});
// shooting weapon 
canvas.addEventListener('mousedown', (event) => {

    //mousedown makes the jumper_gun.mp3 play
   // jumperGunSound.currentTime = 0; // Reset the audio playback to the start
    //jumperGunSound.play();

    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
  
    currentWeapon.shoot(player.position.x + player.width / 2, player.position.y + player.height / 2, mouseX, mouseY);
  });
  
  //changing inventory
  window.addEventListener('keydown', (event) => {
    if (event.key >= '1' && event.key <= '8') {
      const slot = parseInt(event.key) - 1;
      const newWeapon = inventory.switchWeapon(slot);
      if (newWeapon) {
        currentWeapon = newWeapon;
      }
    }
  });

  //fps functions 
  function detectProjectileCollisionsWithEnemies(projectiles, enemies) {
    console.log("detectProjectileCollisionsWithEnemies started");
    for (let i = projectiles.length - 1; i >= 0; i--) {
      const projectile = projectiles[i];
  
      for (let j = enemies.length - 1; j >= 0; j--) {
        const enemy = enemies[j];
        const isColliding =
          projectile.x >= enemy.position.x &&
          projectile.x <= enemy.position.x + enemy.width &&
          projectile.y >= enemy.position.y &&
          projectile.y <= enemy.position.y + enemy.height;
  
        if (isColliding) {
          enemy.takeDamage(currentWeapon.damage);
  
          if (enemy.isDead()) {
            enemies.splice(j, 1);
            timer.enemiesKilled += 1;
          }
  
          projectiles.splice(i, 1);
          break;
        }
      }
    }
    for (let i = 0; i < enemies.length; i++) {
      const enemy = enemies[i];
  
      if (enemy instanceof FlyingEnemy) {
        for (let j = enemy.weapon.projectiles.length - 1; j >= 0; j--) {
          const projectile = enemy.weapon.projectiles[j];
  
          if (
            projectile.x >= player.position.x &&
            projectile.x <= player.position.x + player.width &&
            projectile.y >= player.position.y &&
            projectile.y <= player.position.y + player.height
          ) {
            // Collision detected, apply damage to the player and remove the projectile
            player.takeDamage(enemy.weapon.damage);
            enemy.weapon.projectiles.splice(j, 1);
          }
        }
      }
    }
    if (bossSpawned) {
      const boss = enemies[0];
  
      for (let i = projectiles.length - 1; i >= 0; i--) {
        const projectile = projectiles[i];
        const isColliding =
          projectile.x >= boss.position.x &&
          projectile.x <= boss.position.x + boss.width &&
          projectile.y >= boss.position.y &&
          projectile.y <= boss.position.y + boss.height;
  
        if (isColliding) {
          boss.takeDamage(currentWeapon.damage);
  
          if (boss.isDead()) {
            bossSpawned = false;
            timer.score += 100; // Add bonus score for defeating the boss
          }
  
          projectiles.splice(i, 1);
          break;
        }
      }
    }
    console.log("detectProjectileCollisionsWithEnemies ended");
  }

  function detectPlayerCollisionsWithEnemies(player, enemies) {
    console.log("detectPlayerCollisionsWithEnemies started");
    for (let i = 0; i < enemies.length; i++) {
      const enemy = enemies[i];
      if (enemy instanceof BossEnemy) {
        continue;
      }
   
      if (
        player.position.x < enemy.position.x + enemy.width &&
        player.position.x + player.width > enemy.position.x &&
        player.position.y < enemy.position.y + enemy.height &&
        player.position.y + player.height > enemy.position.y
      ) {
        player.takeDamage(1); // Player takes 1 damage
        enemies.splice(i, 1);  // Remove the enemy from the array
        i--;                   // Decrement the index to account for the removed enemy
      }
    }
    console.log("detectPlayerCollisionsWithEnemies ended");
  }
 

  function handlePlayerPlatformCollision(player, platform) {
    if (
        player.position.x + player.height >= platform.position.x &&
        player.position.x <= platform.position.x + platform.width &&
        player.position.y + player.height >= platform.position.y &&
        player.position.y + player.height <= platform.position.y + platform.height
    ) {
        player.velocity.y = 0;
        player.position.y = platform.position.y - player.height;
    }
}
function detectEnemyProjectileCollisionsWithPlayer(player, enemies) {
  console.log("detectEnemyProjectileCollisionsWithPlayer started");
  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];

    if (enemy instanceof FlyingEnemy || enemy instanceof BossEnemy) {
      for (let j = enemy.weapon.projectiles.length - 1; j >= 0; j--) {
        const projectile = enemy.weapon.projectiles[j];

        if (
          projectile.x >= player.position.x &&
          projectile.x <= player.position.x + player.width &&
          projectile.y >= player.position.y &&
          projectile.y <= player.position.y + player.height
        ) {
          // Collision detected, apply damage to the player and remove the projectile
          player.takeDamage(enemy.weapon.damage);
          enemy.weapon.projectiles.splice(j, 1);
        }
      }
    }
  }
  console.log("detectEnemyProjectileCollisionsWithPlayer ended");
}

//toggle pause function 
function togglePause() {
    console.log('Toggle pause function called'); // Add this line
    isPaused = !isPaused;
    const pauseOverlay = document.getElementById('pause-overlay');
    pauseOverlay.style.display = isPaused ? 'flex' : 'none';
  }
  
  const pauseBtn = document.getElementById('pause-btn');
  pauseBtn.addEventListener('click', togglePause);
  
  const resumeBtn = document.getElementById('resume-btn');
  resumeBtn.addEventListener('click', togglePause);
  
  window.addEventListener('keydown', (event) => {
    if (event.key === 't'||event.key === 'T') {
      togglePause();
    }
  });


  // Get the jump sound effect 
const jumpSFX = document.getElementById("jump-sfx");

// Play the jump sound effect when the 'w' key is pressed
document.addEventListener("keydown", (event) => {
    if (event.key === "w") {
        // Reset the jump sound effect to the beginning and play it
        jumpSFX.currentTime = 0;
        jumpSFX.play();
    }
});
