# How to contribute to SWT-Group na17b
## a comprehensive guide on code of conduct, work flow and style
&nbsp;  
### Table of contents

* [Git work flow](#GitWorkflow)  
    * [How to find out what you can do](#WhatToDo)  
    * [Before you start working](#Before)  
    * [Start working](#Working)  
    * [After you're done working](#After)  

* [Labels](#Labels)    
    * [List of Labels](#LabelList)  
    * [How to use Labels](#UseLabels)  

* [Issues](#Issues)  
* [Merge Requests](#Merge Requests)  
* [Commit Messages](#Commit Messages)  
* [Documentation](#Documentation)  
* [Style guides](#Styleguides)  
    * [Names/Titles](#Names)  
    * [Descriptions](#Descriptions)  





## <a name="GitWorkflow"></a> Git work flow 

&nbsp;&nbsp; So you finally decided to get some work done, but you don't know what to do or  
&nbsp;&nbsp; are overwhelmed by the amount of work that has gathered in the time you where  
&nbsp;&nbsp; lazing around staring lethargically at the ceiling?  
&nbsp;&nbsp; Don't fret for this guide is here to save your day and get you back to being a productive  
&nbsp;&nbsp; member of this group!  
&nbsp;  



### <a name="WhatToDo"></a> 1: How to find out what you can do 

1. Log in to Git-Lab:  
For it is the place where you can find all the important information:  
<https://git.informatik.uni-leipzig.de/swp17/na17b>  

2. Check  the open issues:  
You can for example check your ToDos right away in the top right,  
next to your profile picture.  
(<https://git.informatik.uni-leipzig.de/dashboard/todos>)  
&nbsp;  
Though, for getting a better overview it is advised to check all  
the issues by clicking on the "Issues" link in between "Repository"  
and "Merge Requests".  
It is also recommended to switch form "List"- to "Board"-view,  
for it provides a better understanding on the lifecycle of Issues.  
(<https://git.informatik.uni-leipzig.de/swp17/na17b/boards>)

3. Pick an open Issue:  
Now you can theoretically just go in and start working on any unassigned,   
open Issue, but you should probably check if there are any assigned specifically  
to you first.

### <a name="Before"></a> 2: Before you start working 

1. Create a new Branch:  
Now that you're up to date on what needs to be done it is important to create  
a new Branch for the Issue you will be working on, so that others can review your  
work before it is merged with the rest of the project.  
&nbsp;  
To create a new branch, go to GitLab and switch to the board-view of the Issue directory.  
(<https://git.informatik.uni-leipzig.de/swp17/na17b/boards>)  
Then click on the Issue you want to work on and click on the little arrow next to  
"Create new Merge Request" and following that on "Create Branch". Now the Button, that  
was "Create new Merge Request", should have changed to "Create Branch". All you need to do  
now is click on it and you did it!  

2. Pull from GitLab:  
Now the time has come to pull all the data from GitLab. That way you can make sure you're  
up to date with all the changes made.  
&nbsp;  
To pull from GitLab change to your local repository via terminal/command-line  
and type the following:  
> git pull origin [name of your Branch]  

3. Switch to your Branch:  
The last thing there is to do is switching to your new Branch.
For that just type:
> git checkout [name of your Branch]



### <a name="Working"></a> 3: Start working 

&nbsp;&nbsp;&nbsp;&nbsp;Well done! Now you can finally get to work, though I figure you know best what to do now  
&nbsp;&nbsp;&nbsp;&nbsp;so have fun, be productive and see you in point 4!

### <a name="After"></a> 4: After you're done working 

1. Check if you really did everything correctly and without mistakes:  
Kinda self explanatory, though still very important, so everyone can focus on getting their stuff  
done and not fixing your stupid mistakes!

2. Getting ready to commit:  
Now I know some may have issues in that regard, but don't fret it is  
not an actual commitment like a relationship or marriage, so you should be fine...probably.  
Though first things first. Check if you have any untracked files and track them with:  
> git status  
> git add [untracked file]

3. Commit:  
Just one thing to do (yes it is that easy, no need to panic).  
Type (check out how to write [Commit Messages](#commit-messages)):  
> git commit -m "[your message]"

4. Push to GitLab:  
Now you're all set and ready to push your changes to GitLab. Just type the following:  
> git push --set-upstream origin [name of your branch]

5. Create a new Merge Request:  
Now all you need to do is creating a new Merge Request. For that go to the  
"Merge Request"-tab in GitLab and click "New merge request".  
&nbsp;  
In the new window you need to select a "Source branch" (e.g. your branch) and  
a "Target branch" (e.g. master).  
Then just click "compare branches and continue".  
&nbsp;  
A form pops up and you need to give your request a title and description  
(check out how to create [Names](#Names) and how to write a [Description](#Descriptions)).  
Furthermore you should specify who is most qualified to review your work  
(if possible it should always be at least two people) as the assignee(s).  
Specify the current Milestone as the Milestone and some useful labels (check out [Labels](#Labels)).  
All you need to do now is submit your request and you're done!

## <a name="Labels"></a> Labels  

&nbsp;&nbsp;&nbsp;&nbsp;We use Labels everyday, though usually one never stops and appreciates them  
&nbsp;&nbsp;&nbsp;&nbsp;even for a moment. So here is your chance...Done? Congratulations, now society  
&nbsp;&nbsp;&nbsp;&nbsp;will see you as the judgmental brick, that you really are! How dare you use  
&nbsp;&nbsp;&nbsp;&nbsp;Labels without talking to the people first?! (You should feel judged right now)  
&nbsp;&nbsp;&nbsp;&nbsp;  
&nbsp;&nbsp;&nbsp;&nbsp;So, yeah. Let's talk about Labels, why they're important and why you should use them.  
&nbsp;&nbsp;&nbsp;&nbsp;First of all Labels really do help categorize stuff and you can quickly see, if  
&nbsp;&nbsp;&nbsp;&nbsp;something is of importance for you or not. Well, that's basically it, but none the  
&nbsp;&nbsp;&nbsp;&nbsp;less these are some crucial aspects, that help everyone get work done more efficiently.  

### <a name="LabelList"></a> List of Labels  

&nbsp;&nbsp;&nbsp;&nbsp;Before we find out how to use them, let's have a look at what Labels there are.  
&nbsp;&nbsp;&nbsp;&nbsp;We have three different categories:  

* Thematic:  
Basically a rough categorization of the Issue/ Merge Request. If you want to add  
a Label please talk to Lucas Schons or Johannes Pfau first to determine if it is  
really useful and to make sure the color code doesn't get fucked up.

    * Frontend :            everything concerning the front end
    * Backend :             everything concerning the back end
    * Website :             everything concerning the website
    * Organization :        for all your organizational needs
    * Other :               all the other stuff you might want to do
    
* Content:  
A more detailed description of the Issue/Merge Request, so you don't necessarily  
have to read the whole description. Feel free to add missing Labels, but make sure  
to use the one true color!

    * Blank :               filler, if you don't want to describe the Issue/Merge Request further
    * Meta :                for everything but stuff concerning the project
    * Documentation :       for things concerning the documentation  
    * Fix :                 if something needs fixing 
    * Cleanup :             if something needs cleaning 
    
* Action:  
The actions that need to be taken on the Issue. Other than "Needs Discussion" they  
don't necessarily need to be assigned, because moving them on the board-view will do just that.

    * Needs Discussion :    if your Issue needs further discussion, usually only for the backlog
    * ToDo :                things that need to be done in the near future
    * Doing :               things that are worked on right now 
    * Ready for Review :    stuff that needs review from someone else

&nbsp;&nbsp;&nbsp;&nbsp;  



### <a name="UseLabels"></a> How to use Labels  

&nbsp;&nbsp;&nbsp;&nbsp;They are pretty straight forward and easy to use.  

1. Thematic categorization:  
Pick one Label from the "Thematic" category to roughly describe what your Issue/Merge Request  
is about. Make sure to only pick one though.  

2. Content categorization:  
Now that you roughly described what your Issue is about, you can start going into more  
detail and describe the content of your Issue.  
So pick at least one (if you don't need a further description just pick the "Blank"-Label)  
and up to five (more would defeat the purpose) Label(s) from the Content-category.  

3. Pick an action:  
This step only applies to Issues, because for a Merge Request there only is one action that  
needs to be taken.  
So if you're creating an Issue pick either no, if you're creating an Issue for the Backlog,  
or one Label from the Action-category.  

&nbsp;&nbsp;&nbsp;&nbsp;Now you're all set and your Issue/Merge Request should be easy to categorize! Good job.



## <a name="Issues"></a> Issues 

## <a name="Merge Requests"></a> Merge Requests 

## <a name="Commit Messages"></a> Commit Messages 
&nbsp;&nbsp;&nbsp;&nbsp;Commit Messages are basically short descriptions of what you did /and worked on in  
&nbsp;&nbsp;&nbsp;&nbsp;between your pull and push actions. They provide a clear history of changes that are  
&nbsp;&nbsp;&nbsp;&nbsp;made by the developers and can help resolve problems or to get a quick idea of what  
&nbsp;&nbsp;&nbsp;&nbsp;has been done.  
&nbsp;&nbsp;&nbsp;&nbsp;To achieve that it is necessary, that they are very short and follow a clear structure.  
&nbsp;&nbsp;&nbsp;&nbsp;  
&nbsp;&nbsp;&nbsp;&nbsp;So here are some guidelines for Commit Messages:  

1. Always start with an upper case letter (e.g. "Adds text to Blub.txt").  

2. Use the indicative (e.g. "Adds" (as in "This commit adds...") not "Add"). 

3. Use the present tense (e.g. "Adds" not "Added").

4. List everything you did and if it is more then one thing keep true to the following  
structure:
> "Adds text to Blub.txt | Changes line 8-10 of Blub.txt | ... | Fixes typos in Blub.txt"

## <a name="Documentation"></a> Documentation 

## <a name="Styleguides"></a> Style guides

### <a name="Names"></a> Names/Titles
&nbsp;&nbsp;&nbsp;&nbsp;Names should be simple, short and expressive and stay true to the following conventions:  

* Always start with an upper case letter (e.g. Blub.txt).  
* In English only.  
* Use present tense (e.g. "Add" not "Added").  
* Use imperative mode (e.g. "Add" not "Adds").  

&nbsp;&nbsp;&nbsp;&nbsp;Specific rules:  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Branches:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Is the same as the corresponding Issue.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Files/Directories:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If your name contains spaces substitute them with underscores. (e.g. Blub_blub.txt)  

### <a name="Descriptions"></a> Descriptions  
&nbsp;&nbsp;&nbsp;&nbsp;Descriptions are used to explain a Merge Request or Issue further. It is good practice  
&nbsp;&nbsp;&nbsp;&nbsp;to always write one, even if you think the name is expressive enough. Because for  
&nbsp;&nbsp;&nbsp;&nbsp;someone else it might not be that clear. So it is nice to put the Name/Title into context.  

&nbsp;&nbsp;&nbsp;&nbsp;So without further ado, here are some guidelines for writing good descriptions:  

1. Keep it shot and simple:  
Only write what is really necessary to get a greater understanding on what is meant.  
Refrain from stating the (really) obvious or going into too much detail.

2. Important stuff first! Other things second...:  
There might be times where a bit more explanation is needed and you need to stretch  
the boundaries of 1. a bit.  
If that is the case try to structure your Description, so that the most important  
information comes first and the more detailed stuff later.  

3. Structure is your friend:  
Especially if your Description is on the long side, you should keep it structured clearly.  
Meaning you should group related information in paragraphs, so the reader doesn't necessarily  
have to read everything, but can rather pick what information he/she needs.










