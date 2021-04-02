git config --global user.email "zxy635@126.com"
git config --global user.name "xyzhoujx"
:: input commit message
set /p commit_msg=Please input commit message:
:: show git status
git status
:: add all changing
git add ./
:: local commit
git commit -m "%commit_msg%"
:: push to remote repository
git push origin main
:: make a pause 
pause