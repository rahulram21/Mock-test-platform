fork
git clone url //personal url clone to local
git remote add upstream url //url of parent repo
 //
git checkout branch-name //to be in new branch. Use git log or git status to verify which branch you're in right now
git add .
git commit -m "message"
git push origin branch-name //this pushes the changes into the branch of your remote repo
//once this is pushed, we can pull request to the original branch
//BE AWARE : that only one pull request is available for our user branch. If we commit more changes to our 'origin', it will directly go to original repo
//Hence, create new branches in our own repo every time we make a change and create seperate PR for each of these branches
