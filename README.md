# detect-size
This lets you put multiple height and width values and selects the appropriate one based on logic.  If you wish to use this in a product you wish to distribute to the general public, please contact me via email: arceus@teamdimensional.net or skype: dragonexpert8323.

## Installation
- If you do not already have the jQuery library, you will need this.
- Upload detectsize.js to your website.

## Usage
- Use script tags in your webpage to load the file after loading the jQuery library.
- Configure the config.minwidth and config.minheight variables in detectsize.js. Values should be a whole number representing the number of pixels.  Do not put px at the end.
- All elements you want this enabled on must use the classname "detectsize"
- The width and height attributes may use two values.  The first is the number of pixels.  The second is a percentage of the screen.  These numbers should be separated by a pipe or greater than sign if you wish the larger of the values to be used.  Use the less than sign to use the smaller of the two values.
- For links it verifies the width and height attributes are more than the configured values.  If they are less than the configured values, the configured value will be used.  This is helpful for making sure mobile device users can easily tap the target.
 

## Example Usage
<html>
<head>
<title>My Page</title>
<script src="jquery.min.js"></script>
<script src="detectsize.js"></script>
</head>
<body>
<div class="detectsize" width="1000>75">This div will be the greater of 1000 pixels or 75% of the viewport.</div>
<a class="detectsize" width="15<1">Link</a><!-- This link may have the config.minwidth value for the width depending on the device viewing this.  -->
</body>
</html>

## Dependencies
- jQuery
 

## Suggestions
- Please create an issue and I will respond when I have a chance.
