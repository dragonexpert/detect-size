$(document).ready(function () {
    // Configuration so tap targets won't be too small.  Adjust on an as needed basis. Do not add px at the end.
    var config = {};
    config.minwidth = 20;
    config.minheight = 20;
    $(".detectsize").each(function () {
        var elementwidth = $(this).attr("width");
        if (elementwidth != undefined) {
            elementwidth = elementwidth.toString();
            if (elementwidth.search("|") != -1) {
                widthsplitter = elementwidth.split("|");
                widthop = ">";
            }
            else if (elementwidth.search(">") != -1) {
                widthsplitter = elementwidth.split(">");
                widthop = ">";
            }
            else if (elementwidth.search("<") != -1) {
                widthsplitter = elementwidth.split("<");
                widthop = "<";
            }
            else {
                return;
            }
            pixelwidth = parseInt(widthsplitter[0]);
            percentwidth = parseInt($(window).width() * parseInt(widthsplitter[1]) / 100);
            // Make targets easily tappable.
            if ($(this).is("a")) {
                if (pixelwidth < config.minwidth) {
                    pixelwidth = config.minwidth;
                }
                if (percentwidth < config.minwidth) {
                    percentwidth = config.minwidth;
                }
            }
            if (widthop == ">") {
                if (pixelwidth > percentwidth) {
                    $(this).attr("width", parseInt(pixelwidth));
                    $(this).width(pixelwidth);
                }
                else {
                    $(this).attr("width", parseInt(percentwidth));
                    $(this).width(percentwidth);
                }
            }
            if (widthop == "<") {
                if (pixelwidth < percentwidth) {
                    $(this).attr("width", parseInt(pixelwidth));
                    $(this).width(pixelwidth);
                }
                else {
                    $(this).attr("width", parseInt(percentwidth));
                    $(this).width(percentwidth);
                }
            }
        }
        // Width is done, now do height
        var elementheight = $(this).attr("height");
        if (elementheight != undefined) {
            elementheight = elementheight.toString();
            if (elementheight.search("|") > 0) {
                heightsplitter = elementheight.split("|");
                heightop = ">";
            }
            else if (elementheight.search(">") > 0) {
                heightsplitter = elementheight.split(">");
                heightop = ">";
            }
            else if (elementheight.search("<") > 0) {
                heightsplitter = elementheight.split("<");
                heightop = "<";
            }
            else {
                return;
            }
            pixelheight = parseInt(heightsplitter[0]);
            percentheight = parseInt($(window).height() * parseInt(heightsplitter[1]) / 100);
            if ($(this).is("a")) {
                if (pixelheight < config.minheight) {
                    pixelheight = config.minheight;
                }
                if (percentheight < config.minheight) {
                    percentheight = config.minheight;
                }
            }
            if (heightop == ">") {
                if (pixelheight > percentheight) {
                    $(this).attr("height", parseInt(pixelheight));
                    $(this).height(pixelheight);
                }
                else {
                    $(this).attr("height", parseInt(percentheight));
                    $(this).height(percentheight);
                }
            }
            if (heightop == "<") {
                if (pixelheight < percentheight) {
                    $(this).attr("height", parseInt(pixelheight));
                    $(this).height(pixelheight);
                }
                else {
                    $(this).attr("height", parseInt(percentheight));
                    $(this).height(percentheight);
                }
            }
        }
    });
});
