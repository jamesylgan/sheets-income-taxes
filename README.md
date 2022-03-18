# sheets-income-taxes
Custom functions for calculating 2022 income tax in Google Sheets. I will try to extend this a bit but **I welcome any and all contributions as PRs**

![example](https://user-images.githubusercontent.com/8934469/159044802-b54fde75-4f00-4256-9a8b-c6c2f20c627f.png)

# Usage
In a Google Sheet, **Extentions -> Apps Script** and replace the code with this. Save the code. You can now call the methods defined in the code using `=INCOMETAX` and `=WATAX` with the parameters defined in the documentation.

# Issue list
* [[GOOGLE ISSUE]](https://issuetracker.google.com/issues/222342097?pli=1) Custom functions are currently slow
  * You can sort of solve this temporarily with a cut and paste of the cell containing the custom function
* Support MFS/MFJ for Federal Income Tax
* Define method name by year, support more years
* Abstract methods to take in tax brackets for the year
* Support state taxes

## Please note that this does not support MFJ/MFS yet, and do not rely on this for your taxes as this is not 100% accurate.
