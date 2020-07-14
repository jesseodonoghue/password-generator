# Random Password Generator
This app required me to ask a user to pick several criteria as well as a length to generate a random strong password. The password is then displayed in the text box. 

## App Breakdown
The app works by building an array of possible password character choices based on which checkboxes the user has selected. There are four possible arrays that will be added to the larger array based on user input. If the user has selected none of the checkboxes, they are informed that they must select at least one checkbox in order to build a password. Once the array of possible characters has been built, the length of the password that the user selected is checked. The length field is set to not go below 8 or above 128 using the input buttons, however if the user manually types a number that is outside of this range they are notified that the length must be within range. Once all of these criteria are met, a function runs to generate a random password based on the length and characters chosen by the user. 
![App Screenshot](https://user-images.githubusercontent.com/66024509/87459870-f5c31780-c5d9-11ea-8fbe-44f75c3eb91d.png)

## Live Link
A link to the live version of this app can be found below. 
[Random Password Generator](https://jesseodonoghue.github.io/password-generator/)

### References & Resources
[CSS Tricks](https://css-tricks.com/)
[W3Schools](https://w3schools.com)
[Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)

Also a big thank you to all of my instructors and classmates whose advice and assistance made this project what it is!
