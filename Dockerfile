

# pull base image
FROM node:20.3.0


# set our node environment, either development or production
ARG NODE_ENV=development
ENV NODE_ENV=$NODE_ENV

# default to port 8081 for node, and 8082 and 8083 (tests) for debug
ARG PORT=8081
ENV PORT=$PORT
EXPOSE $PORT 8082 8083

ENV PATH=/home/node/.local/share/pnpm:$PATH
ENV PNPM_HOME=/home/node/.local/share/pnpm


RUN npm install -g pnpm@latest

RUN pnpm add -g expo-cli@latest
RUN expo --version




RUN mkdir /opt/MSA-App
WORKDIR /opt/MSA-App
COPY pnpm-lock.yaml ./
COPY tsconfig.json ./
COPY package.json pnpm-lock.yaml ./

# copy app source code
COPY . .

RUN pnpm install  --frozen-lockfile 

#move into app directory

WORKDIR /opt/MSA-App/app

ENTRYPOINT ["pnpm", "run"]
CMD ["web"]