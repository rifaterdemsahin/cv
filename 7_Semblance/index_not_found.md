rifaterdemsahin@Rifats-MacBook-Pro 4_UI % npm start

> dynamic-cv-generator@0.1.0 start
> react-scripts start

Could not find a required file.
  Name: index.html
  Searched in: /Users/rifaterdemsahin/projects/cv/6_Symbols/4_UI/public
rifaterdemsahin@Rifats-MacBook-Pro 4_UI % 

---

It seems like the react-scripts start command is looking for index.html inside the public directory, but it's currently outside of it.

I will move the index.html file into the public directory to fix this.
check
ShellMove index.html to the public folder.
You chose to run 'mv ...' once.
I have moved the file. You can now try running npm start again.

---
rifaterdemsahin@Rifats-MacBook-Pro 4_UI % npm start

> dynamic-cv-generator@0.1.0 start
> react-scripts start

Could not find a required file.
  Name: index.js
  Searched in: /Users/rifaterdemsahin/projects/cv/6_Symbols/4_UI/src

  ---
  stat_minus_1
Thinking
It looks like another file is not where it's expected to be. Create React App requires a /src/index.js file as the entry point.

I will create a src directory and move your source files into it.

