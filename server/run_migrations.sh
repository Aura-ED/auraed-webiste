#!/bin/bash

echo WARNING: Please run migrations yourself instead of relying on this script

echo Creating Migrations 
aerich migrate 

echo Applying Migrations
aerich upgrade
