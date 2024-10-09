#dibungkus ke app dengan node
FROM node:16-alpine

#path
WORKDIR /app

#copy package json dan lock.json  kita ke dalam dockerfile lalu,  " . " masuk ke /app disebut dengan workdir
#maksud " * " ini adalah apapun setelah  setelah kata-kata package didalam sebuah file .json ujung nya apapun akan masuk kedalam WORKDIK
COPY package*.json .

#run npm install di dalam docker
RUN npm i

#copy semua source masuk ke dalam container
COPY . .


# CMD [ "executable" ]
#executable ialah execute untuk sebuah project nah karena menggunakan react maka menggunakan npm run dev
CMD ["npm", "run", "dev"]