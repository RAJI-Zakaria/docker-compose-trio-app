FROM node:alpine3.19
#21.6.1-alpine3.19

# #the idea is to change the user to a non-root user ==> avoid running the app as root, which can be dangerous for security reasons.
# #a hacker can gete access to the image and then modify the app to do malicious things....
########## PLEASE NOTE THAT THIS IS NOT WORKING WITH THE LATEST VERSION ################ ==> YOU WILL BE FACING ROOT PERMISSION ISSUES...
# RUN addgroup app && adduser -S -G app app
# USER app

WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .

ENV PORT=3000
EXPOSE ${PORT}


CMD ["npm", "start"]
