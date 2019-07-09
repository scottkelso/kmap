# kmap

Install these
```
npm install express
npm install mysql
```


```
cd kainos-map/
npm install --save-dev @angular-devkit/build-angular
npm start
```

Run `sqlScript.sql` adding in a user with permissions
```
create user username@localhost identified with mysql_native_password by '********'
​grant all on kmap.* to username@localhost;
```
