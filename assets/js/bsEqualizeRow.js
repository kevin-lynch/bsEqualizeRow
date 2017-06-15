$.fn.bsEqualizeRow = function() {
    this.addClass('bs-col-equalise');

    var eleLen = $('.bs-col-equalise').length,
        curRow = 1;
    var winWidth = $(window).width(),
        classFound, classUsed, re, colCount;
    if (winWidth < 768) {
        classUsed = 'col-xs-';
        if(!this.is('[class*="'+classUsed+'"]')) this.addClass('col-xs-12');
    } else if (winWidth <= 991) {
        classUsed = 'col-sm-';
        if(!this.is('[class*="'+classUsed+'"]')) classUsed = 'col-xs-';
    } else if (winWidth <= 1199) {
        classUsed = 'col-md-';
        if(!this.is('[class*="'+classUsed+'"]')) classUsed = 'col-sm-';
    } else {
        classUsed = 'col-lg-';
        if(!this.is('[class*="'+classUsed+'"]')) classUsed = 'col-md-';
    }

    re = new RegExp(classUsed, 'g');

    var classEle = this.filter(function() {
        return this.className.match(re);
    });

    var classList = classEle[0].className.split(/\s+/);
    for (var i = 0; i < classList.length; i++) {
        if (classList[i].indexOf(classUsed) !== -1) classFound = classList[i];
    }

    colCount = 12 / parseInt(classFound.replace(classUsed, ""));

    $(".bs-col-equalise").each(function(index) {
        if (index > 0 && index % colCount === 0) curRow++;
        $(this).addClass('current-row-' + curRow);

        if (index + 1 >= eleLen) {
            for (i = 1; i <= eleLen; i++) {
                var $obj = $('.current-row-' + i);
                var maxHeight = Math.max.apply(Math, $obj.map(function() {
                    return $(this).height();
                }).get());
                $obj.height(maxHeight);
            }
        }
    });
};