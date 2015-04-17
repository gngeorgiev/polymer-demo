Polymer({
    is: 'my-element',
    properties: {
        firstName: {
            type: String,
            value: ''
        },
        lastName: {
            type: String,
            value: ''
        },
        fullName: {
            type: String,
            reflectToAttribute: true,
            computed: 'computeFullName(firstName, lastName)'
        }
    },
    computeFullName: function (firstName, lastName) {
        return firstName + ' ' +lastName;
    },
    valueChanged: function (ev) {
        var target = ev.target;
        this[target.id] = target.value;
    }
});
