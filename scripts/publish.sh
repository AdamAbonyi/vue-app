#!/bin/bash
git config --global user.email "$USER_EMAIL"
git config --global user.name "$USER_NAME"

git checkout -b "$1"
git merge master
sed -i -e 's/dist/tralala\//g' .gitignore;
cat .gitignore
git commit -am "$CIRCLE_BRANCH build#$CIRCLE_BUILD_NUM"
git push --force --set-upstream origin $1 