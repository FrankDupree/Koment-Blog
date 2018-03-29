[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



### Installation



## Nodejs Based Installation
* Clone the repository by entering the command `git clone https://github.com/FrankDupree/koment-blog.git`
* Open another terminal and run the command `mongod`.
* Navigate to the project folder using `cd koment-blog` on your terminal (or command prompt)
* Install the application's dependencies with the command `npm install`.
* Run the application using the command `npm start`.
* Visit `http://localhost:3000/` on your favourite browser.


## Installing dummy data
* Create a folder called `data` in the root directory of the koment-blog folder.
* create two additional files named `comment-data.json` and `user.data.json` respectively.
* Head over to this [gist](https://gist.github.com/FrankDupree/a29117453923d32f5b65a7c83dd5cf5b) and copy the contents into their respective files.
* Navigate to the project folder using `cd koment-blog` and run `seed.sh`. This will populate your mongoose database with users and comments.
* To share your data with others, run `export.sh`.


### Author
**Frank Akogun**
