# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact

<<<<<<< HEAD
    Sprint 1:
=======

Sprint 1:
Contributions:

Oscar Laris- "I created the base game, which includes a movable player, a moving platform that the player can stand on, and a psuedo gravity that only affects players.

+ task - Implement touch and keyboard controls jum 12
   jira - https://cs3398s23gorns.atlassian.net/jira/software/projects/JUM/boards/2?selectedIssue=JUM-12

    bitbucket refernce: https://bitbucket.org/cs3398s23gorns/gamedevswe/commits/0e588ab1e40150f23597384ab2e1ecbd24503cce

+ task - Get game running on the flask page jum 35
 jira - https://cs3398s23gorns.atlassian.net/jira/software/projects/JUM/boards/2?selectedIssue=JUM-35

bitbucket refernce: https://bitbucket.org/cs3398s23gorns/gamedevswe/commits/b8e46bcbd7dd8300f1b9ff6b1cd9bc6fdc80372f

This was a fix for Jum 35- refernce 
    bitbucket refernce: https://bitbucket.org/cs3398s23gorns/gamedevswe/commits/b8e46bcbd7dd8300f1b9ff6b1cd9bc6fdc80372f

+ Task incorporate collisons JUM 33:
 jira- https://cs3398s23gorns.atlassian.net/jira/software/projects/JUM/boards/2?selectedIssue=JUM-33

 bitbucket refernce: https://bitbucket.org/cs3398s23gorns/gamedevswe/commits/20e6f7188a9c9b5646e6f892c52584863bf19fc1

+ Task implement user movement
jira - https://cs3398s23gorns.atlassian.net/jira/software/projects/JUM/boards/2?selectedIssue=JUM-32

bitbucket refrence: https://bitbucket.org/cs3398s23gorns/gamedevswe/commits/20e6f7188a9c9b5646e6f892c52584863bf19fc1



Waleed Naveed - 
- Jira Task - Added research for CSS, HTML , and Research.
	- refernce: https://bitbucket.org/cs3398s23gorns/gamedevswe/branch/JUM-18-research-react-css-and-html
	_ Wasnt able to do other tasks, due to the way the code was written for the base game. 
	
	
>>>>>>> Main
Jess Stevenson: "created the flask webpage and the orginization of our pages as well as creating a basic scoring system for the game once added."

    Jira Task: Create a flask webpage to host our game on
        reference: https://cs3398s23gorns.atlassian.net/jira/software/projects/JUM/boards/2?selectedIssue=JUM-19
    Jira Task: Create the menu gui for the game
        reference: https://cs3398s23gorns.atlassian.net/jira/software/projects/JUM/boards/2?selectedIssue=JUM-29
    Jira Task: Implement scoring system
        reference: https://cs3398s23gorns.atlassian.net/jira/software/projects/JUM/boards/2?selectedIssue=JUM-9
<<<<<<< HEAD


    Sprint 2:
Jess Stevenson: "SQLdatabase, maybe firebase, will decide after some research"
=======
        
    Rertospective:
        The first few days went very well, but i quickly fell off my amount of time working on the program each day.
        I plan to better spread out my time with teh project so that i can stay up to date with the rest of my team and get as much done as possible in the sprint.

+Dillon Hughes
+-Jira Task: HTML5 audio tag
+	-As i was going i made a file of some websites I got info from but I went to a lot of places to find how to embed and design the audio tags. 
+	I also found a simple mp3 player to play the music. I made audio tags for each movement that are ready to be put into the game. But I was 
+	able to complete most of my tasks.
+	-tried to add pause menu. I got an external pause link to work but its the same as the main menu and would not let you continue where paused
+	https://bitbucket.org/cs3398s23gorns/gamedevswe/commits/branch/AddingHTMLAudio
+	-all mp3 sounds
+	https://bitbucket.org/cs3398s23gorns/gamedevswe/commits/branch/mp3_Audio
+	-ui in game menu i also added the ui for the music player in the start menu with differnet music
+	https://bitbucket.org/cs3398s23gorns/gamedevswe/commits/branch/AddingHTMLAudio
+Jira Task URL
+https://cs3398s23gorns.atlassian.net/jira/software/projects/JUM/boards/2
+Retrospective Dillon Hughes:
+	-I could have gotten the audio tags and research done quicker and have been able to commit all the code for the game to get a better demo. 
+	I also think we all could have met up once a week and just sat down and put our ideas together so we can all start contributing equally but 
+	on different areas of the game. I think I did all of my work but I could have made the ui's better and put in a little extra time designing
+	the music uis and helping with other tasks.
+	


Next Steps:
Oscar Laris- 
+ add enemies and weapons
  + including collisons and diffrent weapons
  + potitionally multiple enemies 
+ update code for better readabilty and extension


Waleed - Finish adding backgrounds and character, compartmentalize game.

Jess Stevenson: change the score from the frame count to points, which will be a mix if collectibles, enemies killed, and distance traveled.

Dillon Hughes-+	
-My next steps for the project is completing all of the audio tags. I need to talk to my team to try and find every possible 
+	movement or action in the game and assosiate it with a well thought of audio tag.
+	-I want to impliment a custom ui for the music volume and for all player movement to have a game volume slider.
+	-I also was going to start helping get the movements down along with the projectiles and enemys.
+	-To just get better at communicating so this project can start picking up so we can get a good product by the end of the last sprint.
>>>>>>> Main


Sprint 2 Retrospective And Review:



Oscar Lair- In this sprint I made a starter weapon that reduces the enemy's Hit points and when the hit points reach 0 the enemy "dies" and is remove from the game. I also evaluated the code from sprint 1 to see if changing the code to go with phaser would have been a good choice. We decided to keep our existig code. 

Jum 53 - Evalute code from sprint one 
Jira- https://cs3398s23gorns.atlassian.net/browse/JUM-53?focusedCommentId=10001
bitbucket- https://bitbucket.org/cs3398s23gorns/gamedevswe/branch/rebase_code

Jum 55 - Implement flying enemy 
Jira- https://cs3398s23gorns.atlassian.net/browse/JUM-55
bitbucket- https://bitbucket.org/%7B%7D/%7B28737a2b-5f16-4a9f-997a-4cc889a0f6e0%7D/branch/JUM-55-implement-flying-enemy

Jum 56 - Implement collision with enemies
Jira- https://cs3398s23gorns.atlassian.net/browse/JUM-56
bitbucket- https://bitbucket.org/%7B%7D/%7B28737a2b-5f16-4a9f-997a-4cc889a0f6e0%7D/branch/JUM-56-implement-collision-with-enemies

Jum 59 - create starter weapon
Jira- https://cs3398s23gorns.atlassian.net/browse/JUM-59
bitbucket- https://bitbucket.org/%7B%7D/%7B28737a2b-5f16-4a9f-997a-4cc889a0f6e0%7D/branch/feature/JUM-59-create-starter-weapon

sprint 3 goals for me are- 
add the big bad boss that ends the game when its is defeated
make a new flying enemy that dives the player 
make basic flying enemies shoot in the direction of the player 



Waleed - 
Use Photoshop to design Enemy Characters and Collectibles
+ https://cs3398s23gorns.atlassian.net/browse/JUM-15
+ https://bitbucket.org/cs3398s23gorns/gamedevswe/commits/3d805061cd361c39bf4b69a6a3b3bca569e54507
add a triple shot weapon and fix movement
+ https://cs3398s23gorns.atlassian.net/browse/JUM-17
+ https://bitbucket.org/cs3398s23gorns/gamedevswe/commits/7fea450a901f23ae1b9acb80490ab792bec31e29
Design and implement the game world and character
+ https://cs3398s23gorns.atlassian.net/browse/JUM-8
+ https://bitbucket.org/cs3398s23gorns/gamedevswe/commits/41c1a90ffff89293caa92553b2927b78c65fd5d0
Sprint 3 Goals:
1. Fix the Front Pages Formatting. 
2. Add a Health Bar and Death Screen.
3. Implement Flying Enemies Collision System.


Dillon-
JUM-51: cap the number of enemies that are able to spawn, create a html5 audio tag for shooting action, gun sound added, and fix the volume slider 
https://cs3398s23gorns.atlassian.net/jira/software/projects/JUM/issues/JUM-51
https://bitbucket.org/cs3398s23gorns/gamedevswe/commits/ed7771b2e38c02c92dd3dac572c5ac1d4807ea93

JUM-49: create a pause overlay. Takes away the buttons on the gamePage and puts them all there for a clean game look
https://cs3398s23gorns.atlassian.net/jira/software/projects/JUM/issues/JUM-49
https://bitbucket.org/cs3398s23gorns/gamedevswe/commits/70dbd163fd19f0c6ac110c1bfbe3c071852a2194

JUM-48: create a restart button that allows you to restart the game
https://cs3398s23gorns.atlassian.net/jira/software/projects/JUM/issues/JUM-48
https://bitbucket.org/cs3398s23gorns/gamedevswe/commits/cb6630fd865752159428264f5038f6b5cf5988c1

JUM-47: create a exit button on the game page to exit the game and shut down the server
https://cs3398s23gorns.atlassian.net/jira/software/projects/JUM/issues/JUM-47
https://bitbucket.org/cs3398s23gorns/gamedevswe/commits/733374574e0e6ded36c5636960203b71c15f3452

Sprint 3 Goals:
1) Add a machine gun to the wepaons list
2) Add HTML audio tags to every different weapon, final boss, switching weapons and enemy deaths
3) Add collisions with ground enemies to where the ground enemies cannot pass through eachother
4) Fix bugs with the pause menu overlay
5) Help with final boss attacks and movement


Jess = 
JUM-41: create a SQL database that can store the username and score of the player.
    https://cs3398s23gorns.atlassian.net/browse/JUM-41
    https://bitbucket.org/cs3398s23gorns/gamedevswe/commits/22e2d245d073f32669b03dab0a652a269ddbc688
JUM-42: Connect the database with the game
    https://cs3398s23gorns.atlassian.net/browse/JUM-42
    https://bitbucket.org/cs3398s23gorns/gamedevswe/commits/e12953b201c54f167e3a3a34215fca99806094e5
JUM-43: sort the highscores from the database and connect them to be displayed on the Highscores page
    https://cs3398s23gorns.atlassian.net/browse/JUM-43
JUM-44: change the scoring method from frame count to collectables and defeated enemies
    https://cs3398s23gorns.atlassian.net/browse/JUM-44
    https://bitbucket.org/cs3398s23gorns/gamedevswe/commits/c2dc25e284f601add2e1a253ebbbff244bdb36b4
JUM-45: Change the layout and design of the webpages to better fit our games theme
    https://cs3398s23gorns.atlassian.net/browse/JUM-45
    https://bitbucket.org/cs3398s23gorns/gamedevswe/commits/fe751cba38eeebec983966146838f0f976e0dcbf
Sprint 3 goals:
    1) Get the game hosted on a website, like heroku.
    2) Add a scrolling background to the game.
    3) Create a random platform generator for the game.






Sprint 3 Retrospective And Review

Oscar laris- In this sprint I created new enemies, that included boss and the diver, each of which feature own abilites. I also added ways for the prevously implemted flying enemies shoot in the direction of the player. I also added the health sytem and collisons with the mentioned enemies. 

Jum 71 - create the big bad
Jira- https://cs3398s23gorns.atlassian.net/jira/software/projects/JUM/boards/2?selectedIssue=JUM-71

bitbucket- https://bitbucket.org/cs3398s23gorns/%7B28737a2b-5f16-4a9f-997a-4cc889a0f6e0%7D/pull-requests/24

Jum 69 - create a dive bomber
Jira- https://cs3398s23gorns.atlassian.net/jira/software/projects/JUM/boards/2?selectedIssue=JUM-69

bitbucket- https://cs3398s23gorns.atlassian.net/jira/software/projects/JUM/boards/2

Jum 68 - making flying enemies shoot
Jira- https://cs3398s23gorns.atlassian.net/jira/software/projects/JUM/boards/2?selectedIssue=JUM-68

bitbucket- https://bitbucket.org/cs3398s23gorns/%7B28737a2b-5f16-4a9f-997a-4cc889a0f6e0%7D/pull-requests/18

My next steps would be 
helping my team deploy this so that users cna actually play from thier browsers, add new enemies and levels or multiple levels with diffrent bosses. Perephaps even new weapons. ANother big issue I have with this project is how big the index.js has gotten. spliting the code would into diffrent files could be extremly helpful. 


Dillon Hughes - In this sprint I was able to add two new weapons a sniper and a machine gun. I also added shooting sounds for every weapon and a shooting sounds from the enemies and boss. I was able to do the ground enemy collision detection so the enemies could not stack on top of eachother. Our team ran into a block to where the frames stopped as the boss was killed it took Oscar and I about 8 total hours to figure out how to keep impliment a display message at the end of our game and that was just for the Congradulations banner at the end of the game after the user defeats the boss.

JUM 72 - create a end game page. When the final boss is defeated make a congratulations banner with restart and exit   buttons    
Jira - https://cs3398s23gorns.atlassian.net/jira/software/projects/JUM/boards/2?selectedIssue=JUM-72
Bitbucket - https://bitbucket.org/cs3398s23gorns/gamedevswe/pull-requests/28

JUM 70 - Collisions with ground players
Jira - https://cs3398s23gorns.atlassian.net/jira/software/projects/JUM/boards/2?selectedIssue=JUM-70
Bitbucket - https://bitbucket.org/cs3398s23gorns/gamedevswe/pull-requests/20

JUM 62 - add html5 tags for the shotgun, machine gun, and when the player and boss dies. 
Jira - https://cs3398s23gorns.atlassian.net/jira/software/projects/JUM/boards/2?selectedIssue=JUM-62
Bitbucket - https://bitbucket.org/cs3398s23gorns/gamedevswe/pull-requests/29

JUM 61 - add a machine gun and a sniper class for weapons 
Jira- https://cs3398s23gorns.atlassian.net/jira/software/projects/JUM/boards/2?selectedIssue=JUM-61
Bitbucket- https://bitbucket.org/cs3398s23gorns/gamedevswe/pull-requests/23

My Next Steps:
I would add pngs for the platforms to where they looked better and had textures to them. I would create boss screens where there is an animated scene to the game. I would have liked to be able to deploy the app so the whole class could have played our game. I would have added pngs for the bullets so they did not look like red spitballs. I would have also liked to create multiple levels to the game so that the game looked more like mario and as you jump up or down in levels you could keep going and the enemies could follow. There is so much we could add to the game to make it better. We could have added tests to the game as well and the code was not ver ywell organized and I would have liked to split the js file into multiple files so there was some modularity to the code. A main thing we said we would do is add collectables and easter eggs to the game as well just for fun but we could not complete all of those in the time we had.