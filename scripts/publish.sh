#!/bin/bash
git config --global user.email "abonyi@seznam.cz"
git config --global user.name "AdamAbonyi"
git config --global push.default matching
 
git checkout -b "$1"
git merge master
sed -i -e 's/dist/#dist/g' .gitignore;
git add -A 
git commit -am "$CIRCLE_BRANCH build#$CIRCLE_BUILD_NUM"
git status
git push --force