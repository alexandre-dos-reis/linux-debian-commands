FROM node:16 as builder
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm && \
    mkdir -p /app
COPY . /app
RUN cd /app && \
    pnpm install && \
    pnpm build

FROM node:16-alpine as runner
RUN mkdir -p /app
COPY --from=builder /app /app
EXPOSE 3000
WORKDIR /app
ENTRYPOINT [ "npm", "run", "start" ]