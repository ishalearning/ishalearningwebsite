var currentPageURL = document.location.toString();
var isAnchor = false;
if (location.hash) {
    isAnchor = true;
    window.scrollTo(0, 0);
}
var xtdMenuSelectedClass = "selected";

menus_jQuery(document).ready(function() {
    if (!menus_jQuery('script[onepage]') || !(menus_jQuery('script[onepage]').attr('onepage')!='false')) {
        return;
    }
    var duration = parseInt(menus_jQuery('script[onepage]').attr('duration'));
    var swing = menus_jQuery('script[onepage]').attr('swing');
    // Cache selectors
    var lastId, anchors, scrollItems;

    // check if anchor target won't change the page
    function targetIsSamePage(target) {
        return !target || target == "_self";
    }

    // get hash id from an url
    function getHash(url) {
        if (!url) {
            return false;
        }

        var indexOfHash = url.indexOf('#');

        if (indexOfHash > -1) {
            if (indexOfHash == 0) {
                return url.replace('#', '');
            }

            var hash = url.substring(indexOfHash + 1);
            var urlQuery = "";
            if (url.indexOf('?') > -1) {
                urlQuery = url.substring(url.indexOf('?') + 1);
            }

            var absLinkRegExp = /(https?|file):\/\//;

            var pageLocation = window.location.pathname;

            var urlLocation = url.replace('#' + hash, '').replace(urlQuery, '').replace(absLinkRegExp, '');

            if (url.match(absLinkRegExp)) {
                // if href is absolute, add the host in the page location (without http)
                pageLocation = window.location.host + pageLocation;
            } else {
                // if not, add the pathname to the url so we can check if we're inside same folder
                urlLocation = pageLocation.substring(0, pageLocation.lastIndexOf("/")) + "/" + urlLocation;
            }



            if (pageLocation == urlLocation || pageLocation == urlLocation + "/") {
                return hash;
            }

        }

        return false;
    }

    function change_url_hash(hash) {
        setTimeout(function() {

            if (hash) {
                hash = "#" + hash;
            } else {
                hash = "";
            }

            if (history && history.replaceState) {
                history.replaceState({}, "", hash);
                // provide a fallback
            } else {
               
            }

        }, 0);
    }

    // click handler for OnePage anchors 
    function linkClick(ev, elem) {
        try {

            var hash = elem.data('onepage-hash') ? elem.data('onepage-hash') : getHash(elem.attr('href'));
            var section = elem.data('onepage-section') ? elem.data('onepage-section') : false;

            if (section) {
                ev.preventDefault();
                var parent = elem.parent().parentsUntil('body').filter(function() {
                    if (menus_jQuery(this).css('position') == "fixed") return menus_jQuery(this)
                }).eq(0); //first fixed element
                var parentClass = parent.attr("class");
                var topDistance = window.innerHeight * 0;
                var flexiMenu = menus_jQuery('div[class*="_menu_wrapper"]');

                if (parent.length > 0) {
                    topDistance = parent.outerHeight() + parent.position().top

                }


                var scrollToValue = section.offset().top - topDistance;
                if (scrollToValue < 0) {
                    scrollToValue = 0;
                }

                menus_jQuery('html, body').animate({
                    scrollTop: scrollToValue
                }, duration, swing);

            }

        } catch (e) {
            alert('error in xtd one page site script ' + e);
        }
    }


    // sort array of HTML elements by their top positioning
    function bubbleSortByTop(arr) {
        var swapped;
        do {
            swapped = false;
            for (var i = 0; i < arr.length - 1; i++) {
                var elem = arr[i];
                var elem2 = arr[i + 1];
                if (elem.offset().top > elem2.offset().top) {
                    var temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
    }


    // get the list of OnePage anchors from the page
    function getAnchors() {
        //anchors = menus_jQuery();
        scrollItems = [];
        anchors = menus_jQuery('a').filter(function() {
            var elem = menus_jQuery(this);
            var href = elem.attr('href');
            var target = elem.attr('target');

            var hash = getHash(href);
            // check if we should catch the click event
            // and execute scroll animation
            if (hash && targetIsSamePage(target)) {
                var section = menus_jQuery("#" + hash);
                if (section.length > 0) {
                    elem.data('onepage-section', section);
                    if (elem.parent()[0].tagName == "LI") {
						if (section.data('onepage-anchor')) {
							section.data('onepage-anchor').push(elem[0]);
							console.log(section.data('onepage-anchor'));
						} else {
							section.data('onepage-anchor', elem);
						}
                    }
                    scrollItems.push(section);
                    return true;
                }
            }
            return false;
        })
            .unbind('click.onePage')
            .bind("click.onePage", function(e) {
                linkClick(e, menus_jQuery(this));
                e.preventDefault();
                e.stopPropagation();
            });


        anchors.each(function() {
            if (menus_jQuery(this).parent()[0].tagName == "LI") {
                var selfAnchor = this;

                menus_jQuery(this).unbind('click.onePage');

                menus_jQuery(this).parent().unbind('click')
                    .bind("click.onePage", function(e) {
                        linkClick(e, menus_jQuery(selfAnchor));
                    });
            }
        });

        try {
            // array of sections must be sorted for spy scroll to work correctly
            bubbleSortByTop(scrollItems);
        } catch (e) {

        }
    }

    var scrollTimeout;

    /** spy scroll start */
    var is_touch_device = 'ontouchstart' in document.documentElement;
    if (!is_touch_device) {
        menus_jQuery(window).scroll(function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(doneScrolling, 20);

        });
    }



    function doneScrolling() {

        // Get container scroll position
        var windowElem = menus_jQuery(window);
        var fromTop = windowElem.scrollTop() + window.innerHeight * .5;

        // Get id of current scroll item
        var cur = [];

        if (!scrollItems) {
            getAnchors();
        }

        for (var i = 0; i < scrollItems.length; i++) {
            if (scrollItems[i].offset().top < fromTop) {
                cur.push(scrollItems[i]);
            }
        }

        var lastItem = scrollItems[scrollItems.length - 1];
        // alert((windowElem.scrollTop() + windowElem.height()) + " .. " + menus_jQuery(document).height());
        if ((windowElem.scrollTop() + windowElem.height() + 50) >= menus_jQuery(document).height()) {
            // we've hit rock bottom
            cur.push(lastItem);
        }
        // Get the id of the current element
        cur = cur[cur.length - 1];

        var id = cur && cur.length ? cur[0].id : "";
        change_url_hash(id);
        if (id.length == 0) {
            anchors.closest('ul').find('.' + xtdMenuSelectedClass).removeClass(xtdMenuSelectedClass);
            loc = (window.location + "").split('#')[0].replace(/\/$/, "");
            anchors.closest('ul').find('[href^="' + loc + '"]').eq(0).parent().andSelf().addClass(xtdMenuSelectedClass);
        }


        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            try {
                anchors.filter('.' + xtdMenuSelectedClass).each(function() {
                    menus_jQuery(this).parent().andSelf().removeClass(xtdMenuSelectedClass);
                })
                anchors.closest('ul').find('.' + xtdMenuSelectedClass).removeClass(xtdMenuSelectedClass);
                cur.data('onepage-anchor').parent().andSelf().addClass(xtdMenuSelectedClass);

            } catch (e) {
                //console.error(e);
            }
        }
    }
    /** spy scroll end */


    /** page resize start */
    // FIXME : CSSMenus2 is regenerating it's list of items on browser resize. 
    // The dom elements shouldn't be regenerated. Check if that is necessary
    var id;
    menus_jQuery(window).bind("resize orientationchange", function() {
        /*var is_touch_device = 'ontouchstart' in document.documentElement;
        if(is_touch_device) { 
            menus_jQuery(window).unbind('resize orientationchange');
            return;
        }*/
        clearTimeout(id);
        id = setTimeout(doneResizing, 100);
    });


    function doneResizing() {
        // get anchors after page resize
        getAnchors();
    }
    /** page resize end */


    // get all anchors once the page finished loading
    getAnchors();
    var is_touch_device = 'ontouchstart' in document.documentElement;
    if (!is_touch_device) {
        // call this at start so we set as selected the item that matches first view
        doneScrolling();
    }
    if (isAnchor) {

        if (menus_jQuery(menus_jQuery.find('a[href="' + currentPageURL + '"]')).length > 0) {
            menus_jQuery(menus_jQuery.find('a[href="' + currentPageURL + '"]')).trigger('click');
        } else {
            menus_jQuery(menus_jQuery.find('a[href="#' + getHash(currentPageURL) + '"]')).trigger('click')
        }

    };


});