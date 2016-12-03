function applyPies() {
    var elements = document.querySelectorAll('.pie[fraction]');
    elements.forEach(function(el){
        var fraction = el.getAttribute('fraction');
        if (fraction) {
            var params = fraction.split(/[\s,\/]/).filter(function(el) {return el.length != 0});
            if (params.length >= 2) {
                var args = [el].concat(params);
                getPie.apply(window, args);
            }
        }
    });
}

function applyTasks() {
    var elements = document.querySelectorAll('.task-def');
    elements.forEach(function(el){
        var task = el.textContent.trim();
        if (task) {
            var params = task.split(/[\s,\/]/).filter(function(el) {return el.length != 0});
            if(tasks[params[0]]) {
                var taskdiv = tasks[params[0]].apply(window, params.slice(1));
                if (el.hasAttribute('replace')) {
                    el.parentNode.replaceChild(taskdiv, el);
                }
                else {
                    el.appendChild(taskdiv);
                }
            }
        }
    });
}
