# SongsProject

In this project I present a loop machine of several songs. <br/>
Each song has 2 buttons: on and off. <br/>
<br/>
![image](https://user-images.githubusercontent.com/57682267/132966938-28a84453-1f04-4cbc-afc6-340fe94ebea4.png)

When the user presses the "on" button this song will play the next time a loop is played. <br/>
I control the beginning and end of the loop by the following buttons: <br/> 
<br/> 
![image](https://user-images.githubusercontent.com/57682267/132966947-8761bf99-22d3-444e-a3d5-3e9f4d28aa37.png) <br/>

The selected songs are played in loops until the stop button is pressed.
 
Each loop is saved, <br/>
and the user can play his previous selections:  <br/>
<br/>
![image](https://user-images.githubusercontent.com/57682267/132966972-88123951-4bcc-4031-9fc3-a0b5be6110dd.png) <br/>

Recording can be done by clicking the following button:  <br/>
<br/>
![image](https://user-images.githubusercontent.com/57682267/132966961-d62c0747-48c0-4a01-97e7-4abd4e7a94aa.png) <br/>
<br/>
You can listen to the recording and save it.<br/>
<br/>
![image](https://user-images.githubusercontent.com/57682267/132967193-fc9d5abb-7f23-4622-b14c-f82f3102ce4c.png) <br/>



### functions:  <br/>
[Link to functions](https://github.com/shaharivka/SongsProject/blob/main/views/scripts/script.js) <br/>
"ChangeState" function maintains the status of the buttons (of the songs) by an array and so in each loop the marked songs are played. <br/>

"Pauseall" function stops any song that plays. <br/>

"Playall" function plays the selected songs (goes over the array, if the array in a certain place is equal to "1", <br/>
The song in the same location is playing.  <br/>
At the end of this function the "save_history" function is called. <br/>

There is an array of arrays in which each place in the array has a different action of the user. <br/>
"Save_history" function adds to the array a new array, in which it is marked the songs selected by the user. <br/>

"Play_History" function according to user selection, <br/>
Plays the songs from the array (in the selected location). <br/>

[Url](https://songsproject.herokuapp.com/#) <br/>
<br/>
