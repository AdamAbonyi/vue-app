#!/bin/bash
git config --global user.email "abonyi@seznam.cz"
git config --global user.name "AdamAbonyi"
 
git checkout -b "$1"
git merge master
sed -i -e 's/dist/tralala\//g' .gitignore;
git add -A 
git status
git commit -am "$CIRCLE_BRANCH build#$CIRCLE_BUILD_NUM"
git push --force 