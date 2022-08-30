FROM node:16

WORKDIR /home/node/app

USER node

ENTRYPOINT ["tail", "-f", "/dev/null"]