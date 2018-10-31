# shifter-artifact-helper-mock
This is the mock server of shifter-artifact-helper plugin
The mock server generate these resources.

```
/wp-json/shifter/v1/urls?page=0&limit=x
/wp-json/shifter/v1/urls?page=1&limit=x
/wp-json/shifter/v1/urls?page=2&limit=x
/wp-json/shifter/v1/urls/:name/?page=x&limit=x
/wp-json/shifter/v1/urls/archives/:year/?page=x&limit=x
/wp-json/shifter/v1/urls/archives/:year/:month/?page=x&limit=x
/wp-json/shifter/v1/urls/archives/:year/:month/:day/?page=x&limit=x
```

In any other resource, the server returns empty json object.

## usage

```
npm install
```

## usage

**To return all kind of urls from the server**
```
npm run start
```

**To return 404 Not Found from the server**
```
npm run start404
```

**To return 500 Internal Server Error from the server**
```
npm run start500
```

## endpoint

localhost:3000

## Run with Docker

build

```
$ docker build -t shifter-artifact-helper-mock:latest .
```

run

```
$ docker run -it --rm -p 3000:3000 shifter-artifact-helper-mock:latest
```

with args

```
$ docker run -it --rm -p 3000:3000 shifter-artifact-helper-mock:latest start404
```
