# How to contribute to SWT-Group na17b
##a comprehensive guide on code of conduct, workflow and style
&nbsp;  
### Table of contents

* [Git workflow](#GitWorkflow)  

    * [How to find out what you can do](#WhatToDo)  
    * [Before you start working](#Before)  
    * [Start working](#Working)  
    * [After you're done working](#After)  

* [Documentation](#Documentation)  

* [Styleguides](#Styleguides)  
    * [Names](#Names)  
    * [Descriptions](#Descriptions)  
    * [Labels](#Labels)    
    * [Commit Messages](#CommitMessages)  
    * [Issues](#Issues)  
    * [Merge Requests](#Merge Requests)  




##<a name="GitWorkflow"></a> Git workflow 

&nbsp;&nbsp; So you finaly decided to get some work done, but you don't know what to do or  
&nbsp;&nbsp; are overwhelmed by the amount of work that has gatherd in the time you where  
&nbsp;&nbsp; lazing around staring lethargically at the cealing?  
&nbsp;&nbsp; Don't fret for this guide is here to save your day and get you back to being a productive  
&nbsp;&nbsp; member of this group!  
&nbsp;  



###<a name="WhatToDo"></a> 1: How to find out what you can do 

1. Log in to Git-Lab, for it is the place where you can find all the important information:  
<https://git.informatik.uni-leipzig.de/swp17/na17b>  

2. Check  the open issues:  
You can for example check your ToDos right away in the top right,  
next to your profile picture.  
(<https://git.informatik.uni-leipzig.de/dashboard/todos>)  
&nbsp;  
Though, for getting a better overview it is advised to check all  
the issues by clicking on the "Issues" link inbetween "Repository"  
and "Merge Requests".  
It is also recomended to switch form "List"- to "Board"-view,  
for it provides a better understanding on the lifecycle of Issues.  
(<https://git.informatik.uni-leipzig.de/swp17/na17b/boards>)

3. Pick an open Issue:  
Now you can theoretically just go in and start working on any unassigned,   
open Issue, but you should probably check if there are any assigned specifically  
to you first.

###<a name="Before"></a> 2: Before you start working 

1. Pull from GitLab:  
The first thing you should always do before starting your work is to make a pull from GitLab.  
That way you can make sure you're up to date with all the changes made.  
&nbsp;  
To pull from GitLab change to your local repository via terminal/commandline  
and type the following:  
> git pull 

2. Create a new Branch:  
Now that you're up to date it is important to create a new Branch for the Issue you will be  
working on, so that others can review your work before it is merged with the rest of the project.  
&nbsp;  
To create a new branch you should first of all be in the top directory of your local repository.  
Then all you have to do is type the following (check out how to create [Names](#Names)):  
 > git branch [name of your Branch]  

3. Switch to your new Branch:  
Congratulations, now that you have created your first Branch, all you need to do is switch to  
it and you can start being productive.  
To do exactly that you need to type the following:  
> git checkout [name of your Branch]  

###<a name="Working"></a> 3: Start working 

&nbsp;&nbsp;&nbsp;&nbsp;Well done! Now you can finally get to work, though I figure you know best what to do now  
&nbsp;&nbsp;&nbsp;&nbsp;so have fun, be productive and see you in point 4!

###<a name="After"></a> 4: After you're done working 

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
Now you're all set and ready to push your changes to GitLab. Though since  
you used a new branch, that doesn't have a destination yet, you need to use the following  
command:  
> git push --set-upstream origin [name of your branch]

5. Create a new Merge Request:  
Now all you need to do is creating a new Merge Request. For that go to the  
"Merge Request"-tab in GitLab and click "New merge request".  
&nbsp;  
In the new window you need to select a "Source branch" (e.g. your branch) and  
a "Target branch" (e.g. master).  
Then just click "compare branches and continue".  
&nbsp;  
A formular pops up and you need to give your request a titel and description  
(check out how to create [Names](#Names) and how to write a [Description](#Descriptions)).  
Furthermore you should specify who is most qualified to review your work  
(if possible it should always be at least two people) as the assignees.  
Specify the current Milestone as the Milestone and some usefull labels (check out [Labels](#Labels)).  
All you need to do now is submit your request and you're done!


##<a name="Issues"></a> Issues 

##<a name="Documentation"></a> Documentation 

##<a name="Styleguides"></a> Styleguides

###<a name="Names"></a> Names  
&nbsp;&nbsp;&nbsp;&nbsp;Names should be simple, short and expressive and stay true to the following conventions:  

* Always start with an upper case letter (e.g. Blub.txt).  
* In english only.  
* Use present tense (e.g. "Add" not "Added").  
* Use imperative mode (e.g. "Add" not "Adds").  

&nbsp;&nbsp;&nbsp;&nbsp;Specific rules:  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Branches:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Is the same as the corresponding Issue.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Files/Directories:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If your name contains spaces substitude them with underscores. (e.g. Blub_blub.txt)  

###<a name="Descriptions"></a>Descriptions  
###<a name="Labels"></a> Labels  
###<a name="CommitMessages"></a> Commit Messages  
* Always start with an upper case letter (e.g. Blub.txt).  
* In english only.  
* Use present tense (e.g. "Add" not "Added").  
* Use indicative mood (e.g. "Adds" not "Add"). 

###<a name="Issues"></a> Issues  
* Title:  
    Use the same naming convention as stated under [Names](#Names).  

* Description:  
    Use the same description convention as stated under [Descriptions](#Descriptions).   

* Assignee:  
    Assign whoever is most fit for the Task, or leave open if it is just a suggestion, or you  
    don't know who should do the Task yet.

* Milestone:  
    Assign the milestone to wich the task needs to be completed. It is advised to not always  
    use the latest possible one, beacuse as a consequence work will pile up pretty quickly at  
    the end.  

* Labels:  

* Due Date:  
    Pick a due date, if you have one or one is needed.
    
###<a name="Merge Requests"></a> Merge Requests






