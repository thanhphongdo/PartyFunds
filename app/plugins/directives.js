import Vue from 'vue';
const validation = require('../config/validatation');

Vue.directive('focus', {
    inserted: (el) => {
        // el.focus();
        console.log('11111111111111');
    }
});

Vue.directive('validate', {
    inserted: (el, data) => {
        $(el).form({
            on: 'blur',
            inline: true,
            fields: validation,
            onSuccess: (event, fields) => {
                event.preventDefault();
                if (data.value.onSuccess) {
                    data.value.onSuccess(event, fields);
                }
            }
        });
    }
});