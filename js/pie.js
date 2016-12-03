/*
Draw svg with a/b
o - offset, draw a-filed part starting from
    12 o'clock + offset
*/

function getPie(target, a, b, o) {

    var draw = SVG(target).size(200, 200);
    draw.circle(198).cx(100).cy(100).attr({
        'stroke': 'black',
        'stroke-width': 2,
        'fill-opacity': 0,
        'class': 'circle'
    });

    if (parseInt(a) < parseInt(b)) {
        drawPie();
    }
    else {
        drawFullCircle();
        a = a % b;
        drawPie();
    }
    drawTicks();

    function drawTicks() {
        for (var i = 0; i < b; i++) {
            var r = 98;
            var xa = 100 + r * Math.cos(rad(360 / b * i - 90));
            var ya = 100 + r * Math.sin(rad(360 / b * i - 90));
            draw.path('M 100 100 L ' + xa + ' ' + ya).attr({
                'stroke-width': 1,
                'stroke-opacity': 0.5,
                'class': 'tics'
            });
        }
    }

    function drawFullCircle() {
        draw.circle(198).cx(100).cy(100).attr({
            'fill-opacity': 0.2,
            'class': 'a full-one'
        });
    }

    function drawPie() {
        if (!a) {
            return;
        }

        var offset = o || 0;
        var a_ang = 360 / b * a;
        var o_ang = 360 / b * offset;
        o_ang -= 90;

        var r = 98;
        var xa = 100 + r * Math.cos(rad(o_ang));
        var ya = 100 + r * Math.sin(rad(o_ang));

        var xb = 100 + r * Math.cos(rad(a_ang + o_ang));
        var yb = 100 + r * Math.sin(rad(a_ang + o_ang));

        var flag = (a / b > 0.5) ? 1 : 0;

        draw.path('M 100 100 L ' + xa + ' ' + ya + ' A ' + r + ' ' + r + ' 0 ' + flag + ' 1 ' + xb + ' ' + yb + ' Z')
        .attr({
            'class': 'a',
            'fill-opacity': 0.2
        });
    }

    function rad(degrees) {
      return degrees * Math.PI / 180;
    };

    function deg(radians) {
      return radians * 180 / Math.PI;
    };

}
