# MarsRover
This is an implementation of the Mars Rover Kata. The aim of this challenge is to move the rover based on set of inputs.

Turning 
We handle turning using switch statement on the four compass cardinal points. There are two turning functions for left and right. These function take the direction you're facing and return the cardinal point which is either left or right. So if you're facing North and want to rotate L the cardinal point that should be returned is 'W'

Moving 
Moving is handled by obtaining the current direction and executing a method based on the direction the rover is facing. The moves are only done if the rover is within the Grid. The cardinal compass points have each been assigned a move function which will move the rover in the direction of that cardinal point.