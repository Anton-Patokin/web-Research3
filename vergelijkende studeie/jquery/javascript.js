$(document).ready(function () {
    console.log("ready");
    var user = new User(0);
    user.set("name", "number");


    $("#button").click(function () {
        for (var i = 1; i < 5000; i++) {
            var user = new User(i);
            user.set("name", i);
            $("#element").append('<input id="input"  data-bind-'+i+'="name" /><div class="watchers" data-bind-' + i + '="name">' + i + '</div>');
        }
        $(".watchers").click(function () {
            change_watcher(this);
        });
    });

    var atribut="data-bind-0";
    function change_watcher(div) {

        document.getElementById("input").removeAttribute(atribut);
        var destination = $('#input').eq(0);
        var source = div;

        console.log(destination[0]);

        var inputs = $('#input');
        for (var j = 0; j < source.attributes.length; j++) {
            var a = source.attributes[j];
            destination.attr(a.name, a.value);
            atribut =a.name;
        }
    }
});
function DataBinder(object_id) {
    // Use a jQuery object as simple PubSub
    var pubSub = jQuery({});

    // We expect a `data` element specifying the binding
    // in the form: data-bind-<object_id>="<property_name>"
    var data_attr = "bind-" + object_id,
        message = object_id + ":change";

    // Listen to change events on elements with the data-binding attribute and proxy
    // them to the PubSub, so that the change is "broadcasted" to all connected objects
    jQuery(document).on("keyup", "[data-" + data_attr + "]", function (evt) {
        var $input = jQuery(this);

        pubSub.trigger(message, [$input.data(data_attr), $input.val()]);
    });

    // PubSub propagates changes to all bound elements, setting value of
    // input tags or HTML content of other tags
    pubSub.on(message, function (evt, prop_name, new_val) {
        jQuery("[data-" + data_attr + "=" + prop_name + "]").each(function () {
            var $bound = jQuery(this);

            if ($bound.is("input, textarea, select")) {
                $bound.val(new_val);
            } else {
                $bound.html(new_val);
            }
        });
    });

    return pubSub;
}

function User(uid) {
    var binder = new DataBinder(uid),

        user = {
            attributes: {},

            // The attribute setter publish changes using the DataBinder PubSub
            set: function (attr_name, val) {
                this.attributes[attr_name] = val;
                binder.trigger(uid + ":change", [attr_name, val, this]);
            },

            get: function (attr_name) {
                return this.attributes[attr_name];
            },

            _binder: binder
        };

    // Subscribe to the PubSub
    binder.on(uid + ":change", function (evt, attr_name, new_val, initiator) {
        if (initiator !== user) {
            user.set(attr_name, new_val);
        }
    });

    return user;
}