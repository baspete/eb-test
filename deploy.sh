#!/usr/bin/env bash

# Stop on errors
set -e

# build the webpack client app
yarn build

# Zip up everythign git is keepging track of on the current branch
git archive -o eb-test.zip HEAD

# Send it to S3
aws s3 cp eb-test.zip s3://eb-deploy-source/eb-test.zip

# clean up
rm -f eb-test.zip
