#!/bin/sh

for i in ./* ;
do
	for j in $(find $i -name .git);
	do
		rm -rf $j
	done
done

