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


# # Gunakan image Node sebagai base untuk proses build
# FROM node:18 as build

# # Set working directory
# WORKDIR /app

# # Copy semua file ke container
# COPY . .

# # Install dependencies dan build aplikasi
# RUN npm install && npm run build

# # Gunakan Nginx untuk serve aplikasi
# FROM nginx:stable-alpine

# # Copy file build ke folder Nginx
# COPY --from=build /app/build /usr/share/nginx/html

# # Expose port 80
# EXPOSE 8080

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]
