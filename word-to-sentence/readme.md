Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"
formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
formatWords([]) // should return ""


overview: this was so freaking hard. I rabbit holed hard and got to a point where I had strings with the commas, but adding the and was tough. got help with using Regex which, that syntax makes not a lot of sense still, but knowing that $ changes the direction it looks at the array from the back of it instead of the front was integral. 