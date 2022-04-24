# Commands GNU/Linux | Debian | Ubuntu

[![Build Status](https://drone.reges.fr/api/badges/alexandre-dos-reis/linux-debian-commands/status.svg?ref=refs/heads/main)](https://drone.reges.fr/alexandre-dos-reis/linux-debian-commands)

This is a collection of linux oriented debian commands written in French presented in a clean and simple web browser interface. Heavy use of markdown.

## Todos

- ~~Style the scrollbars~~
- ~~Put selected command in the url / Static pages with regenerate~~
- ~~Handle Markdown~~
- ~~Handle Markdown style correctly: strong, code, etc...~~
- ~~Add link style in markdown, see composer example~~
- ~~Make title command bigger and nicer~~
- ~~Reduce image size~~
~~- Try to load the image inside the img tag with base64 / Server Side~~ Much better !
~~- Add a searchBar commands in the navbar~~
~~- Add drone CI config to deploy automagically.~~
- Decompose the deploy process to avoid downtime, docker build...
- Add keyboard navigation for items in the navbar, tabIndex=0 added.
- Change copy icon to something more intuitive.
- Animate onClick copy
- Add smooth animations (optional)
- Make the app responsive

## Deploy

- Go into dir : `cd ~/linux-debian-commands`
- Get the last commit : `git pull`
- Kill the container : `sudo docker container kill linux-debian-commands`
- Deploy with docker-compose : `sudo docker-compose -f docker-compose-prod.yml up -d --build --force-recreate`
