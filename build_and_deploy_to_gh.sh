ng build --configuration=staging --baseHref=https://sedkis.github.io

cd ../sedkis.github.io

git add .
git commit -m "new build"
git push

cd ../cloudixia