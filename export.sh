#!/bin/bash
echo "Exporting database.."
echo "Exporting comment table..."
mongoexport --db koment --collection comments --out ./data/comment-data.json


echo "Exporting user table..."
mongoexport --db koment --collection users --out ./data/user-data.json


echo "Completed."

