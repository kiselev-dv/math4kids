var tasks = {
};

(function() {

    tasks.nameit = function(a, b, o, title) {
        var task = document.createElement("div");
        task.className = 'task';

        if (title) {
            var ttl = document.createElement("h3");
            ttl.innerHTML = title;
            task.appendChild(ttl);
        }

        var f1 = document.createElement("div");
        f1.className = 'fraction pie';
        var fractionString = a + "/" + b + ' ' + (o || '');
        f1.setAttribute('fraction', fractionString);
        task.appendChild(f1);

        var eq = document.createElement("div");
        eq.innerHTML = '=';
        eq.className = 'inline-text';
        task.appendChild(eq);

        var ni = document.createElement("div");
        ni.className = "inline-text nameit";
        task.appendChild(ni);

        var ia = document.createElement("input");
        ia.type = 'text';
        ni.appendChild(ia);

        var l = document.createElement("div");
        l.className = 'inp-line';
        ni.appendChild(l);

        var ib = document.createElement("input");
        ib.type = 'text';
        ni.appendChild(ib);

        return task;
    }
})();
