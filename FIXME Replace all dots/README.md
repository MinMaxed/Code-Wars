Link: https://www.codewars.com/kata/fixme-replace-all-dots/train/javascript 


Instructions:
The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.

My Overview:
Found via google that /g allows you too replace all incidences of whatever you're trying to replace. Originally tried with '.' but that only counts the first incident and didn't work with /'.'/g, but through more research remembered that the \. will allow it to read as punctuation, not as all characters.