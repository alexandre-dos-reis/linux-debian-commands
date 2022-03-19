# Commands GNU/Linux | Debian | Ubuntu

This is a collection of linux oriented debian commands written in French presented in a clean and simple web browser interface. Heavy use of markdown.

## Todos

- ~~Style the scrollbars~~
- ~~Put selected command in the url / Static pages with regenerate~~
- ~~Handle Markdown~~
- ~~Handle Markdown style correctly: strong, code, etc...~~
- Add link style in markdown, see composer example
- Make title command bigger and nicer
- Reduce image size
- Add clickable image when present.
- Animate onClick copy
- Add a searchBar commands in the navbar
- Add keyboard navigation for items in the navbar
- Add smooth animations (optional)

## Deploy

- Go into dir : `cd ~/linux-debian-commands`
- Get the last commit : `git pull`
- Kill the container called : `linux-debian-commands`
- Deploy with docker-compose : `sudo docker-compose -f docker-compose-prod.yml up -d --build --force-recreate`