#!/bin/bash
echo "Configuring application.."
echo "Seeding comment table..."
mongoimport --db koment --collection comments --drop --file ./data/comment-data.json

echo "Seeding user table..."
mongoimport --db koment --collection users --drop --file ./data/user-data.json


echo "All done sparky! :)"
