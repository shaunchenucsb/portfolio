# portfolio
to deploy:
npm run build in command prompt
git add dist
git commit -m 'adding dist subtree'
git subtree push --prefix dist origin gh-pages
