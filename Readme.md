### pre-configuration:
Make a clone of the .env.example
`cp .env.example .env`

#### To connect mongodb
Create an account on mongodb
Create a collection
mongodb will provide a key, add this key to the .env file

Additionally, make sure to set the DB's name in the .env file

#### generate a crypto key:

To enter node quicktool
`node`

To generate 32bit key
`crypto.randomBytes(32).toString('hex')`
copy the output into .env CRYPTOGRAPHY_KEY

To generate 16bit key
`crypto.randomBytes(16).toString('hex')`
copy the output into .env CRYPTOGRAPHY_IV

to exit out of node terminal
ctrl+c twice

#### Modify the Port if desired

### Running the api:

To Install dependencies
`yarn`

To run watcher and endpoint:
`yarn dev`

To only build:
`yarn build`

To only run:
`yarn start`