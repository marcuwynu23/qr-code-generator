FROM node:alpine

# Set working directory
WORKDIR  /usr/app

# copy build files to working directory
COPY ./build .


# run web server
CMD ["node", "index.js"]

# expose port 9000
EXPOSE 9000