#!/bin/sh
num=0
rm dayone.widget/images/*
for d in "{INSERT YOUR LOCATION DO DAY ONE FOLDER}/Documents/Journal_dayone/photos/"*; do
  if ! [ -h "${d%/}" ]; then
  	if (( RANDOM % 100 > 95 )); then
  		num=$((num+1))
    	cp "$d" dayone.widget/images
	exiftool -DateTimeOriginal -S -s  "$d"
	echo "{next}"
    	if (( num > 3 )); then break 2;
    	fi
	fi
  fi
done
echo "{files}"
ls -1 dayone.widget/images/
