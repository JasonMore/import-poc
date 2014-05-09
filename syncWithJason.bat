##you have to add this first: git remote add upstream https://github.com/JasonMore/import-poc.git
git fetch upstream
git branch -va
git checkout master
git merge upstream/master