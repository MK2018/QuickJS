/*
PLAN OF FRAMEWORK:
-------------------------------
NOTES:
-As this is a one-page app framework, "page" shall henceforth mean a division of the site such that only one "page" is displayed at a time

1. HTML has custom tags, or tags with certian attributes applied, which break up the document
	1.a. Include dynamic tags to separate out into "pages", possibly:
		1.a.i. qk-page
	1.b. Include static, permanent tags, possibly:
		1.b.i. qk-const
	1.c. (Possibly, we see where this ended up for Angular) Include conditional, Angular-style tags
2. Custom CSS stylesheet bindings per page
3. JS parsing of all of this info
4. Custom DOM abstractor
5. JS using info to carry out info as parsed
-------------------------------
*/